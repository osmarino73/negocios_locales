const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'plantilla_base_1', 'index.html');
const datosPath = path.join(projectDir, 'DATOS_NEGOCIO.json');

const datos = JSON.parse(fs.readFileSync(datosPath, 'utf8'));
const tokens = datos.negocio.tokens;

let html = fs.readFileSync(templatePath, 'utf8');

// Replace standard tokens {{KEY}}
for (const [key, value] of Object.entries(tokens)) {
  const tokenRegex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
  html = html.replace(tokenRegex, value);
}

// Update hero image filenames in html
html = html.split('hero_fogon.webp').join('hero_la_mesa_paisa.webp');
html = html.split('hero_fogon_mobile.webp').join('hero_la_mesa_paisa_mobile.webp');

// Update menu dishes specific to La Mesa Paisa
const dishes = datos.negocio.platos_principales;
if (dishes && dishes.length >= 6) {
  // Replace dish 1
  html = html.replace(/data-product-title="Tomahawk & Churrasco al Fogón"/g, `data-product-title="${dishes[0].nombre}"`);
  html = html.replace(/<h3 class="menu-title">TOMAHAWK & CHURRASCO<\/h3>/g, `<h3 class="menu-title">${dishes[0].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Corte jugoso madurado a la brasa con papas rústicas crocantes, romero fresco y chimichurri criollo\./g, dishes[0].descripcion);
  html = html.replace(/\$38\.000/g, dishes[0].precio_formateado);

  // Replace dish 2
  html = html.replace(/data-product-title="Punta de Anca al Carbón"/g, `data-product-title="${dishes[1].nombre}"`);
  html = html.replace(/<h3 class="menu-title">PUNTA DE ANCA<\/h3>/g, `<h3 class="menu-title">${dishes[1].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Jugosa punta de anca asada a fuego lento en fogón de leña, acompañada de patacón y arepa con queso\./g, dishes[1].descripcion);

  // Replace dish 3
  html = html.replace(/data-product-title="Bandeja Criolla El Fogón"/g, `data-product-title="${dishes[2].nombre}"`);
  html = html.replace(/<h3 class="menu-title">BANDEJA CRIOLLA EL FOGÓN<\/h3>/g, `<h3 class="menu-title">${dishes[2].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Chicharrón carnudo crujiente, carne asada, huevo frito, frijoles caseros, arroz, aguacate y plátano maduro\./g, dishes[2].descripcion);

  // Replace dish 4
  html = html.replace(/data-product-title="Costillas BBQ Ahumadas"/g, `data-product-title="${dishes[3].nombre}"`);
  html = html.replace(/<h3 class="menu-title">COSTILLAS BBQ AHUMADAS<\/h3>/g, `<h3 class="menu-title">${dishes[3].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Costillas de cerdo tiernas bañadas en salsa criolla ahumada, con yuca frita y ensalada de la casa\./g, dishes[3].descripcion);

  // Replace dish 5
  html = html.replace(/data-product-title="Sancocho de Gallina Criolla"/g, `data-product-title="${dishes[4].nombre}"`);
  html = html.replace(/<h3 class="menu-title">SANCOCHO DE GALLINA<\/h3>/g, `<h3 class="menu-title">${dishes[4].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Sancocho tradicional cocinado en leña con mazorca, plátano, yuca, papa, porción de gallina y arroz\./g, dishes[4].descripcion);

  // Replace dish 6
  html = html.replace(/data-product-title="Limonada de Coco & Jugos"/g, `data-product-title="${dishes[5].nombre}"`);
  html = html.replace(/<h3 class="menu-title">LIMONADA DE COCO & JUGOS<\/h3>/g, `<h3 class="menu-title">${dishes[5].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Refrescantes jugos naturales en agua o leche \(maracuyá, mango, lulo\) y nuestra cremosa limonada de coco\./g, dishes[5].descripcion);
}

// Check for any remaining tokens
const remaining = html.match(/\{\{([A-Za-z0-9_]+)\}\}/g);
if (remaining) {
  console.warn('Remaining tokens found:', [...new Set(remaining)]);
} else {
  console.log('All tokens successfully replaced for La Mesa Paisa!');
}

// Write to la_mesa_paisa/index.html
const outIndexPath = path.join(projectDir, 'index.html');
fs.writeFileSync(outIndexPath, html, 'utf8');
console.log('Written to:', outIndexPath);

// Generate standalone with base64 images
const imgDesktopPath = path.join(projectDir, 'hero_la_mesa_paisa.webp');
const imgMobilePath = path.join(projectDir, 'hero_la_mesa_paisa_mobile.webp');

if (fs.existsSync(imgDesktopPath) && fs.existsSync(imgMobilePath)) {
  const imgDesktop = fs.readFileSync(imgDesktopPath).toString('base64');
  const imgMobile = fs.readFileSync(imgMobilePath).toString('base64');
  
  let standaloneHtml = html.split('hero_la_mesa_paisa_mobile.webp').join(`data:image/webp;base64,${imgMobile}`);
  standaloneHtml = standaloneHtml.split('hero_la_mesa_paisa.webp').join(`data:image/webp;base64,${imgDesktop}`);
  
  const standalonePath = path.join(projectDir, 'la_mesa_paisa_standalone.html');
  fs.writeFileSync(standalonePath, standaloneHtml, 'utf8');
  console.log('Standalone generated at:', standalonePath);

  // Also root level standalone
  const rootStandalonePath = path.join(rootDir, 'la_mesa_paisa_standalone.html');
  fs.writeFileSync(rootStandalonePath, standaloneHtml, 'utf8');
  console.log('Root standalone updated at:', rootStandalonePath);
}
