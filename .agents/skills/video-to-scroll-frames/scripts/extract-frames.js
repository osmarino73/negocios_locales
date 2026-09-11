/**
 * Script turnkey para extraer secuencias WebP optimizadas para scroll
 * Uso: node extract-frames.js ./video.mp4 [total_frames]
 */
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoInput = process.argv[2] || 'input.mp4';
const targetFrames = parseInt(process.argv[3], 10) || 75;

if (!fs.existsSync(videoInput)) {
  console.error(`❌ Error: El video "${videoInput}" no existe.`);
  process.exit(1);
}

// 1. Resolver binario de FFmpeg
let ffmpegCmd = 'ffmpeg';
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch {
  console.log('⚠️ FFmpeg global no detectado en PATH. Intentando usar ffmpeg-static via npx...');
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
const desktopDir = path.join('public', 'frames', 'desktop');
const mobileDir = path.join('public', 'frames', 'mobile');
fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log(`🎬 Procesando "${videoInput}" con: ${ffmpegCmd} (Objetivo: ~${targetFrames} frames)`);

// 3. Extraer Desktop (16:9, calidad 78)
console.log('🖥️ Generando frames para Desktop (1280x720)...');
spawnSync(ffmpegCmd, [
  '-y', '-i', videoInput,
  '-vf', 'fps=18,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720',
  '-c:v', 'libwebp',
  '-quality', '78',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 4. Extraer Mobile (9:16, calidad 76, centrado en el sujeto de la segunda mitad x=1140)
console.log('📱 Generando frames para Mobile (720x1280)...');
spawnSync(ffmpegCmd, [
  '-y', '-i', videoInput,
  '-vf', 'fps=18.5,crop=ih*9/16:ih:1140:0,scale=720:1280',
  '-c:v', 'libwebp',
  '-quality', '76',
  '-compression_level', '6',
  path.join(mobileDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 5. Generar Posters
const firstDesk = path.join(desktopDir, 'frame-0001.webp');
if (fs.existsSync(firstDesk)) {
  fs.copyFileSync(firstDesk, path.join(desktopDir, 'poster.webp'));
  console.log('✅ Poster Desktop generado: public/frames/desktop/poster.webp');
}
const firstMob = path.join(mobileDir, 'frame-0001.webp');
if (fs.existsSync(firstMob)) {
  fs.copyFileSync(firstMob, path.join(mobileDir, 'poster.webp'));
  console.log('✅ Poster Mobile generado: public/frames/mobile/poster.webp');
}

console.log('🎉 ¡Extracción completada con éxito!');
