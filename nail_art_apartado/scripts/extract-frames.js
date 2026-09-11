const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.resolve(__dirname, '../../.agents/document/Model_showing_fingernails_1080p_202609101237.mp4');
const outDesktop = path.resolve(__dirname, '../public/frames/desktop');
const outMobile = path.resolve(__dirname, '../public/frames/mobile');

fs.mkdirSync(outDesktop, { recursive: true });
fs.mkdirSync(outMobile, { recursive: true });

console.log('--- Iniciando extracción de fotogramas para Nail Art Sede Apartadó ---');
console.log('Video fuente:', videoPath);

// 1. Extracción Desktop (1920x1080, 18.5 fps -> 74 frames, Q85)
console.log('\n[1/4] Extrayendo 74 frames Desktop (1920x1080, Q85)...');
const cmdDesktop = `ffmpeg -y -i "${videoPath}" -vf "fps=18.5,scale=1920:1080" -vframes 74 -c:v libwebp -quality 85 -compression_level 4 "${path.join(outDesktop, 'frame-%04d.webp')}"`;
execSync(cmdDesktop, { stdio: 'inherit' });

// 2. Poster Desktop
console.log('\n[2/4] Creando poster Desktop...');
const cmdPosterDesk = `ffmpeg -y -i "${videoPath}" -ss 0.1 -vframes 1 -vf "scale=1920:1080" -c:v libwebp -quality 85 "${path.join(outDesktop, 'poster.webp')}"`;
execSync(cmdPosterDesk, { stdio: 'inherit' });

// 3. Extracción Mobile (720x1280, 18.5 fps -> 74 frames, Q76)
// Encuadre centrado perfecto: crop=608:1080:656:0,scale=720:1280
console.log('\n[3/4] Extrayendo 74 frames Mobile (720x1280, Q76)...');
const cmdMobile = `ffmpeg -y -i "${videoPath}" -vf "fps=18.5,crop=608:1080:656:0,scale=720:1280" -vframes 74 -c:v libwebp -quality 76 -compression_level 4 "${path.join(outMobile, 'frame-%04d.webp')}"`;
execSync(cmdMobile, { stdio: 'inherit' });

// 4. Poster Mobile
console.log('\n[4/4] Creando poster Mobile...');
const cmdPosterMob = `ffmpeg -y -i "${videoPath}" -ss 0.1 -vframes 1 -vf "crop=608:1080:656:0,scale=720:1280" -c:v libwebp -quality 76 "${path.join(outMobile, 'poster.webp')}"`;
execSync(cmdPosterMob, { stdio: 'inherit' });

const deskFiles = fs.readdirSync(outDesktop).filter(f => f.endsWith('.webp'));
const mobFiles = fs.readdirSync(outMobile).filter(f => f.endsWith('.webp'));

console.log(`\n Extracción completada con éxito:`);
console.log(`- Desktop: ${deskFiles.length} archivos en ${outDesktop}`);
console.log(`- Mobile: ${mobFiles.length} archivos en ${outMobile}`);
