/**
 * Script de extracción de fotogramas WebP optimizados para scroll scrubbing
 * Ejecución: node scripts/extract-frames.js
 */
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const desktopDir = path.join(__dirname, '..', 'public', 'frames', 'desktop');
const mobileDir = path.join(__dirname, '..', 'public', 'frames', 'mobile');

fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log('✅ Estructura de carpetas verificada en public/frames/');
