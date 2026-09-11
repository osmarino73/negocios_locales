const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const videoPath = 'c:/Users/Rio Belen/negocios_locales/.agents/document/Model_showing_styled_nails_1080p_202609101157.mp4';
const projectRoot = path.join(__dirname, '..');
const desktopDir = path.join(projectRoot, 'public', 'frames', 'desktop');
const mobileDir = path.join(projectRoot, 'public', 'frames', 'mobile');

// Crear directorios si no existen
[desktopDir, mobileDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Limpiar frames previos si existieran
[desktopDir, mobileDir].forEach(dir => {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    if (f.endsWith('.webp')) {
      fs.unlinkSync(path.join(dir, f));
    }
  });
});

console.log('=== Extrayendo fotogramas Desktop (1920x1080 @ 18fps, Q85) ===');
const desktopPattern = path.join(desktopDir, 'frame-%04d.webp').replace(/\\/g, '/');
const desktopCmd = `ffmpeg -y -i "${videoPath}" -r 18 -vf "scale=1920:1080:flags=lanczos" -c:v libwebp -quality 85 -preset photo "${desktopPattern}"`;
execSync(desktopCmd, { stdio: 'inherit' });

console.log('=== Extrayendo fotogramas Mobile (720x1280 @ 18fps, Q76 con paneo dinámico) ===');
// Paneo dinámico: de x_factor = 0.60 en t=0s a 0.48 en t=4.0s
// Expresión: (1920-608)*(0.60 - 0.12*(t/4.0))
const mobilePattern = path.join(mobileDir, 'frame-%04d.webp').replace(/\\/g, '/');
const mobileFilter = "crop=608:1080:'(1920-608)*(0.60-0.12*(t/4.0))':0,scale=720:1280:flags=lanczos";
const mobileCmd = `ffmpeg -y -i "${videoPath}" -r 18 -vf "${mobileFilter}" -c:v libwebp -quality 76 -preset photo "${mobilePattern}"`;
execSync(mobileCmd, { stdio: 'inherit' });

// Generar posters estáticos para Desktop y Mobile (primer frame)
const deskFrame1 = path.join(desktopDir, 'frame-0001.webp');
const deskPoster = path.join(desktopDir, 'poster.webp');
const mobFrame1 = path.join(mobileDir, 'frame-0001.webp');
const mobPoster = path.join(mobileDir, 'poster.webp');

if (fs.existsSync(deskFrame1)) {
  fs.copyFileSync(deskFrame1, deskPoster);
}
if (fs.existsSync(mobFrame1)) {
  fs.copyFileSync(mobFrame1, mobPoster);
}

// Estadísticas
const countDesktop = fs.readdirSync(desktopDir).filter(f => f.startsWith('frame-')).length;
const countMobile = fs.readdirSync(mobileDir).filter(f => f.startsWith('frame-')).length;

const sizeDesktop = fs.readdirSync(desktopDir).reduce((acc, f) => acc + fs.statSync(path.join(desktopDir, f)).size, 0);
const sizeMobile = fs.readdirSync(mobileDir).reduce((acc, f) => acc + fs.statSync(path.join(mobileDir, f)).size, 0);

console.log('\n--- Resumen de Extracción ---');
console.log(`Desktop: ${countDesktop} frames + poster (${(sizeDesktop / (1024 * 1024)).toFixed(2)} MB, ~${(sizeDesktop / countDesktop / 1024).toFixed(1)} KB/frame)`);
console.log(`Mobile:  ${countMobile} frames + poster (${(sizeMobile / (1024 * 1024)).toFixed(2)} MB, ~${(sizeMobile / countMobile / 1024).toFixed(1)} KB/frame)`);
