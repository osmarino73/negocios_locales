/**
 * Script turnkey para extraer secuencias WebP optimizadas para scroll en Luciana Nails
 * Ejecución: node scripts/extract-frames.js ./video.mp4
 */
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoInput = process.argv[2] || path.join(__dirname, '..', '..', '.agents', 'document', 'Model_showing_nails_covering_face_202609101133.mp4');
if (!fs.existsSync(videoInput)) {
  console.error(`❌ Error: El video "${videoInput}" no existe.`);
  process.exit(1);
}

// 1. Resolver binario de FFmpeg
let ffmpegCmd = 'ffmpeg';
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch {
  console.log('⚠️ FFmpeg global no detectado. Intentando usar ffmpeg-static via npx...');
  try {
    const staticBin = execSync('npx -y ffmpeg-static --path', { encoding: 'utf-8' }).trim();
    if (staticBin && fs.existsSync(staticBin)) {
      ffmpegCmd = staticBin;
    }
  } catch (err) {
    console.error('❌ No se pudo resolver FFmpeg. Instale FFmpeg o ejecute "npm i -D ffmpeg-static".');
    process.exit(1);
  }
}

// 2. Crear carpetas de salida
const desktopDir = path.join(__dirname, '..', 'public', 'frames', 'desktop');
const mobileDir = path.join(__dirname, '..', 'public', 'frames', 'mobile');
fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log(`🎬 Procesando "${videoInput}" con: ${ffmpegCmd}`);

// 3. Extraer Desktop (16:9, ~72 frames, calidad 85)
console.log('🖥️ Generando frames para Desktop (1920x1080)...');
spawnSync(ffmpegCmd, [
  '-y', '-i', videoInput,
  '-vf', 'fps=18,scale=1920:1080',
  '-c:v', 'libwebp',
  '-quality', '85',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 4. Extraer Mobile (9:16, ~72 frames, calidad 76, elevación vertical y=80 y paneo dinámico de 0.62 a 0.50)
console.log('📱 Generando frames para Mobile (720x1280) con paneo cinemático y elevación...');
spawnSync(ffmpegCmd, [
  '-y', '-i', videoInput,
  '-vf', 'fps=18,scale=-1:1440,crop=720:1280:(in_w-out_w)*(0.62-0.12*(t/4.0)):80',
  '-c:v', 'libwebp',
  '-quality', '76',
  '-compression_level', '6',
  path.join(mobileDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 5. Copiar posters
const firstDesk = path.join(desktopDir, 'frame-0001.webp');
if (fs.existsSync(firstDesk)) {
  fs.copyFileSync(firstDesk, path.join(desktopDir, 'poster.webp'));
  console.log('✅ Poster Desktop generado.');
}
const firstMob = path.join(mobileDir, 'frame-0001.webp');
if (fs.existsSync(firstMob)) {
  fs.copyFileSync(firstMob, path.join(mobileDir, 'poster.webp'));
  console.log('✅ Poster Mobile generado.');
}

console.log('🎉 ¡Secuencia de fotogramas generada exitosamente en /public/frames/!');
