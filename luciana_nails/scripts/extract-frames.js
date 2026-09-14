/**
 * Script turnkey para extraer secuencias WebP optimizadas para scroll en Luciana Nails
 * Ejecución: node scripts/extract-frames.js ./video.mp4
 */
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const deskVideoInput = process.argv[2] || path.join(__dirname, '..', '..', '.agents', 'document', 'nail-canela-rojo', 'Beauty_advertisement_video_creation_1080p_20260913132328.mp4');
const mobVideoInput = process.argv[3] || path.join(__dirname, '..', '..', '.agents', 'document', 'nail-canela-rojo', 'Crear_video_promocional_diseño_uñas_20260913133154.mp4');

if (!fs.existsSync(deskVideoInput)) {
  console.error(`❌ Error: El video Desktop "${deskVideoInput}" no existe.`);
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

console.log(`🎬 Procesando Desktop "${deskVideoInput}" con: ${ffmpegCmd}`);

// 3. Extraer Desktop (16:9, ~72 frames, calidad 85)
console.log('🖥️ Generando frames para Desktop (1920x1080)...');
spawnSync(ffmpegCmd, [
  '-y', '-i', deskVideoInput,
  '-vf', 'fps=18,scale=1920:1080',
  '-c:v', 'libwebp',
  '-quality', '85',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 4. Extraer Mobile (9:16 nativo 1080x1920 -> 720x1280, 72 frames, calidad 76)
const mobSrc = fs.existsSync(mobVideoInput) ? mobVideoInput : deskVideoInput;
console.log(`📱 Generando frames para Mobile (720x1280) desde "${mobSrc}"...`);
const mobFilter = mobSrc === mobVideoInput 
  ? 'fps=18,scale=720:1280'
  : 'fps=18,crop=ih*9/16:ih:1140:0,scale=720:1280';

spawnSync(ffmpegCmd, [
  '-y', '-i', mobSrc,
  '-vf', mobFilter,
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
