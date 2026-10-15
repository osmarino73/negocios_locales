/**
 * Script turnkey para reproducir o actualizar la extracción de fotogramas WebP para Rizos Felices Urabá.
 * Ejecución: node scripts/extract-frames.js <video_desktop.mp4> <video_mobile.mp4>
 */
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoDesktop = process.argv[2] || path.join('..', '.agents', 'document_salones', 'belleza-cabello1', 'Modelo_mostrando_belleza_en_video_20260915092233.mp4');
const videoMobile = process.argv[3] || path.join('..', '.agents', 'document_salones', 'belleza-cabello1', 'Model_showcasing_hair_beauty_1080p_20260915093233.mp4');

const desktopDir = path.join('public', 'frames', 'desktop');
const mobileDir = path.join('public', 'frames', 'mobile');
fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log('🖥️ Extrayendo frames Desktop (1920x1080, Q85, 18 fps)...');
spawnSync('ffmpeg', [
  '-y', '-i', videoDesktop,
  '-vf', 'fps=18,scale=1920:1080',
  '-c:v', 'libwebp',
  '-quality', '85',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

const firstDesk = path.join(desktopDir, 'frame-0001.webp');
if (fs.existsSync(firstDesk)) {
  fs.copyFileSync(firstDesk, path.join(desktopDir, 'poster.webp'));
}

console.log('📱 Extrayendo frames Mobile (720x1280, Q76, 18 fps)...');
spawnSync('ffmpeg', [
  '-y', '-i', videoMobile,
  '-vf', 'fps=18,scale=720:1280',
  '-c:v', 'libwebp',
  '-quality', '76',
  '-compression_level', '6',
  path.join(mobileDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

const firstMob = path.join(mobileDir, 'frame-0001.webp');
if (fs.existsSync(firstMob)) {
  fs.copyFileSync(firstMob, path.join(mobileDir, 'poster.webp'));
}

console.log('✅ ¡Extracción completada con éxito!');
