const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.resolve('c:/Users/Rio Belen/negocios_locales/.agents/document/nail-negra-blanca');

const deskOutDir = path.join(rootDir, 'public', 'frames', 'desktop');
const mobOutDir = path.join(rootDir, 'public', 'frames', 'mobile');

// Ensure output directories exist
fs.mkdirSync(deskOutDir, { recursive: true });
fs.mkdirSync(mobOutDir, { recursive: true });

// Source video files
const deskVideo = path.join(sourceDir, 'Woman_posing_for_beauty_campaign_20260913145627.mp4');
const mobFile = fs.readdirSync(sourceDir).find(f => f.startsWith('Create_promotional_nail_design'));
if (!mobFile) {
  console.error('Mobile video not found!');
  process.exit(1);
}
const mobVideo = path.join(sourceDir, mobFile);

console.log('Source Desktop:', deskVideo);
console.log('Source Mobile:', mobVideo);

// Clean existing frames
[deskOutDir, mobOutDir].forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.webp')) {
      fs.unlinkSync(path.join(dir, file));
    }
  });
});

console.log('1. Extracting Desktop frames (18 fps, 1920x1080, Q85)...');
// Desktop video is 1280x720, scale to 1920x1080
execSync(`ffmpeg -y -i "${deskVideo}" -r 18 -vf "scale=1920:1080:flags=lanczos" -c:v libwebp -quality 85 -lossless 0 -compression_level 4 "${path.join(deskOutDir, 'frame-%04d.webp')}"`, { stdio: 'inherit' });

console.log('2. Extracting Mobile frames (18 fps, 720x1280, Q76)...');
// Mobile video is 1080x1920 native vertical 9:16, scale to 720x1280
execSync(`ffmpeg -y -i "${mobVideo}" -r 18 -vf "scale=720:1280:flags=lanczos" -c:v libwebp -quality 76 -lossless 0 -compression_level 4 "${path.join(mobOutDir, 'frame-%04d.webp')}"`, { stdio: 'inherit' });

// Create posters from first frame
const deskFrames = fs.readdirSync(deskOutDir).filter(f => f.startsWith('frame-') && f.endsWith('.webp')).sort();
const mobFrames = fs.readdirSync(mobOutDir).filter(f => f.startsWith('frame-') && f.endsWith('.webp')).sort();

console.log(`Desktop frames count: ${deskFrames.length}`);
console.log(`Mobile frames count: ${mobFrames.length}`);

if (deskFrames.length > 0) {
  fs.copyFileSync(path.join(deskOutDir, deskFrames[0]), path.join(deskOutDir, 'poster.webp'));
  console.log('Desktop poster created.');
}

if (mobFrames.length > 0) {
  fs.copyFileSync(path.join(mobOutDir, mobFrames[0]), path.join(mobOutDir, 'poster.webp'));
  console.log('Mobile poster created.');
}

// Calculate total sizes
const getDirSize = (dir) => {
  return fs.readdirSync(dir).reduce((total, file) => {
    return total + fs.statSync(path.join(dir, file)).size;
  }, 0);
};

console.log(`Total Desktop frames size: ${(getDirSize(deskOutDir) / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total Mobile frames size: ${(getDirSize(mobOutDir) / 1024 / 1024).toFixed(2)} MB`);
console.log('Frame extraction completed successfully!');
