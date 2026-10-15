/**
 * Script turnkey para extraer secuencias WebP optimizadas para scroll
 * Proyecto: Natalia Morelo Magic Secret (Apartadó)
 * Ejecución: node scripts/extract-frames.js
 */
const { spawnSync, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const desktopDir = path.join(projectRoot, 'public', 'frames', 'desktop');
const mobileDir = path.join(projectRoot, 'public', 'frames', 'mobile');

fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

// Videos de entrada en tran-2
const videoDesk = path.resolve(projectRoot, '..', '.agents', 'document_salones', 'tran-2', 'Beauty_transformation_video_prompt_1080p_20260914144454.mp4');
const videoMob = path.resolve(projectRoot, '..', '.agents', 'document_salones', 'tran-2', 'Beauty_transformation_video_prompt_1080p_20260914144525.mp4');

console.log('🖥️ Extrayendo frames Desktop (1920x1080 Q85, 75 frames)...');
spawnSync('ffmpeg', [
  '-y', '-i', videoDesk,
  '-vf', 'fps=9.375,scale=1920:1080',
  '-vframes', '75',
  '-c:v', 'libwebp',
  '-quality', '85',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

console.log('📱 Extrayendo frames Mobile (720x1280 Q76, 75 frames)...');
spawnSync('ffmpeg', [
  '-y', '-i', videoMob,
  '-vf', 'fps=18.75,scale=720:1280',
  '-vframes', '75',
  '-c:v', 'libwebp',
  '-quality', '76',
  '-compression_level', '6',
  path.join(mobileDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// Posters
const deskPoster = path.join(desktopDir, 'frame-0001.webp');
if (fs.existsSync(deskPoster)) {
  fs.copyFileSync(deskPoster, path.join(desktopDir, 'poster.webp'));
}
const mobPoster = path.join(mobileDir, 'frame-0001.webp');
if (fs.existsSync(mobPoster)) {
  fs.copyFileSync(mobPoster, path.join(mobileDir, 'poster.webp'));
}

console.log('✅ ¡Secuencias de fotogramas generadas con éxito!');
