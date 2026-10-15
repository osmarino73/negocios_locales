const fs = require('fs');
const path = require('path');

const fogonDir = path.join(__dirname);
const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'plantilla_base_1', 'index.html');
const datosPath = path.join(fogonDir, 'DATOS_NEGOCIO.json');

const datos = JSON.parse(fs.readFileSync(datosPath, 'utf8'));
const tokens = datos.negocio.tokens;

let html = fs.readFileSync(templatePath, 'utf8');

// Replace all tokens {{KEY}}
for (const [key, value] of Object.entries(tokens)) {
  const tokenRegex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
  html = html.replace(tokenRegex, value);
}

// Check for any remaining tokens
const remaining = html.match(/\{\{([A-Za-z0-9_]+)\}\}/g);
if (remaining) {
  console.warn('Remaining tokens found:', [...new Set(remaining)]);
} else {
  console.log('All tokens successfully replaced!');
}

// Write to restaurante_el_fogon/index.html
const outIndexPath = path.join(fogonDir, 'index.html');
fs.writeFileSync(outIndexPath, html, 'utf8');
console.log('Written to:', outIndexPath);

// Generate standalone with base64 images
const imgDesktopPath = path.join(fogonDir, 'hero_fogon.webp');
const imgMobilePath = path.join(fogonDir, 'hero_fogon_mobile.webp');

if (fs.existsSync(imgDesktopPath) && fs.existsSync(imgMobilePath)) {
  const imgDesktop = fs.readFileSync(imgDesktopPath).toString('base64');
  const imgMobile = fs.readFileSync(imgMobilePath).toString('base64');
  
  let standaloneHtml = html.split('hero_fogon_mobile.webp').join(`data:image/webp;base64,${imgMobile}`);
  standaloneHtml = standaloneHtml.split('hero_fogon.webp').join(`data:image/webp;base64,${imgDesktop}`);
  
  const standalonePath = path.join(fogonDir, 'restaurante_el_fogon_standalone.html');
  fs.writeFileSync(standalonePath, standaloneHtml, 'utf8');
  console.log('Standalone generated at:', standalonePath);

  // Also root level standalone if needed
  const rootStandalonePath = path.join(rootDir, 'restaurante_el_fogon_paisa_standalone.html');
  fs.writeFileSync(rootStandalonePath, standaloneHtml, 'utf8');
  console.log('Root standalone updated at:', rootStandalonePath);
}
