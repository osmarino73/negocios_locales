/**
 * Script de extracción de fotogramas WebP para Sanus Spa
 * Ejecutable con: node scripts/extract-frames.js
 */
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoInput = path.resolve(__dirname, '../../.agents/skills/negocio-local-html/document/Modelo_gira_cabeza_y_abre_202609090852.mp4');
const desktopDir = path.resolve(__dirname, '../public/frames/desktop');
const mobileDir = path.resolve(__dirname, '../public/frames/mobile');

fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log('🎬 Extrayendo frames para Sanus Spa...');

// Desktop (16:9 - 1920x1080 nativo, 12 fps, 72 frames, Q85)
spawnSync('ffmpeg', [
  '-y', '-i', videoInput,
  '-vf', 'fps=12,scale=1920:1080',
  '-c:v', 'libwebp',
  '-quality', '85',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// Mobile (9:16 - 720x1280, 12 fps, 72 frames)
spawnSync('ffmpeg', [
  '-y', '-i', videoInput,
  '-vf', 'fps=12,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280',
  '-c:v', 'libwebp',
  '-quality', '76',
  '-compression_level', '6',
  path.join(mobileDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// Copiar posters
fs.copyFileSync(path.join(desktopDir, 'frame-0001.webp'), path.join(desktopDir, 'poster.webp'));
fs.copyFileSync(path.join(mobileDir, 'frame-0001.webp'), path.join(mobileDir, 'poster.webp'));

console.log('✅ Fotogramas y posters generados con éxito.');
