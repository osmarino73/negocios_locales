const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const rootDir = path.resolve(__dirname, '..');
const templatePath = path.join(rootDir, 'plantilla_base_2', 'index.html');
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
html = html.split('hero_parque.webp').join('hero_la_ruana.webp');
html = html.split('hero_parque_mobile.webp').join('hero_la_ruana_mobile.webp');

// Update menu dishes specific to Restaurante La Ruana
const dishes = datos.negocio.platos_principales;
if (dishes && dishes.length >= 8) {
  // Dish 1
  html = html.replace(/data-product-title="Bandeja Criolla Especial"/g, `data-product-title="${dishes[0].nombre}"`);
  html = html.replace(/<h3 class="card-title">BANDEJA CRIOLLA ESPECIAL<\/h3>/g, `<h3 class="card-title">${dishes[0].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Carne asada al carbón, chicharrón crocante, huevo frito, arroz blanco, frijoles caseros, tajadas de plátano maduro, arepa y aguacate\./g, dishes[0].descripcion);
  html = html.replace(/\$32\.000/g, dishes[0].precio_formateado);

  // Dish 2
  html = html.replace(/data-product-title="Punta de Anca al Carbón"/g, `data-product-title="${dishes[1].nombre}"`);
  html = html.replace(/<h3 class="card-title">PUNTA DE ANCA AL CARBÓN \(350G\)<\/h3>/g, `<h3 class="card-title">${dishes[1].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Corte jugoso asado a las brasas en su punto, acompañado de papa criolla al vapor, ensalada fresca de la casa y chimichurri criollo\./g, dishes[1].descripcion);
  html = html.replace(/\$36\.000/g, dishes[1].precio_formateado);

  // Dish 3
  html = html.replace(/data-product-title="Pargo Rojo Frito con Patacón"/g, `data-product-title="${dishes[2].nombre}"`);
  html = html.replace(/<h3 class="card-title">PARGO ROJO FRITO CON PATACÓN<\/h3>/g, `<h3 class="card-title">${dishes[2].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Pargo entero dorado y crujiente servido con patacones pisados con hogao, arroz con coco y ensalada de aguacate\./g, dishes[2].descripcion);
  html = html.replace(/\$38\.000/g, dishes[2].precio_formateado);

  // Dish 4
  html = html.replace(/data-product-title="Sancocho de Gallina Criolla"/g, `data-product-title="${dishes[3].nombre}"`);
  html = html.replace(/<h3 class="card-title">SANCOCHO DE GALLINA CRIOLLA<\/h3>/g, `<h3 class="card-title">${dishes[3].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Caldo sustancioso cocido a fuego lento con yuca, plátano, mazorca y verduras de la huerta, acompañado de arroz y presa dorada\./g, dishes[3].descripcion);
  html = html.replace(/\$26\.000/g, dishes[3].precio_formateado);

  // Dish 5
  html = html.replace(/data-product-title="Costillas Ahumadas a la Brasa"/g, `data-product-title="${dishes[4].nombre}"`);
  html = html.replace(/<h3 class="card-title">COSTILLAS AHUMADAS A LA BRASA<\/h3>/g, `<h3 class="card-title">${dishes[4].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Costillar de cerdo tierno marinado en especias criollas, sellado al carbón con salsa BBQ artesanal de panela y papas rústicas\./g, dishes[4].descripcion);
  html = html.replace(/\$34\.000/g, dishes[4].precio_formateado);

  // Dish 6
  html = html.replace(/data-product-title="Cazuela de Mariscos Caribeña"/g, `data-product-title="${dishes[5].nombre}"`);
  html = html.replace(/<h3 class="card-title">CAZUELA DE MARISCOS CARIBEÑA<\/h3>/g, `<h3 class="card-title">${dishes[5].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Mixtura selecta de camarones, calamares y pescado en reducción cremosa de leche de coco, servida bien caliente con patacones\./g, dishes[5].descripcion);
  html = html.replace(/\$39\.000/g, dishes[5].precio_formateado);

  // Dish 7
  html = html.replace(/data-product-title="Jugo Natural de Maracuyá"/g, `data-product-title="${dishes[6].nombre}"`);
  html = html.replace(/<h3 class="card-title">JUGO NATURAL DE MARACUYÁ<\/h3>/g, `<h3 class="card-title">${dishes[6].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Preparado con fruta 100% natural, espeso, espumoso y bien helado para acompañar tus mejores platos\./g, dishes[6].descripcion);
  html = html.replace(/\$8\.000/g, dishes[6].precio_formateado);

  // Dish 8
  html = html.replace(/data-product-title="Postre Tres Leches Casero"/g, `data-product-title="${dishes[7].nombre}"`);
  html = html.replace(/<h3 class="card-title">POSTRE TRES LECHES CASERO<\/h3>/g, `<h3 class="card-title">${dishes[7].nombre.toUpperCase()}</h3>`);
  html = html.replace(/Bizcochuelo húmedo bañado en infusión de tres leches, coronado con merengue flameado y canela espolvoreada\./g, dishes[7].descripcion);
  html = html.replace(/\$10\.000/g, dishes[7].precio_formateado);
}

// Check for any remaining tokens
const remaining = html.match(/\{\{([A-Za-z0-9_]+)\}\}/g);
if (remaining) {
  console.warn('Remaining tokens found:', [...new Set(remaining)]);
} else {
  console.log('All tokens successfully replaced for Restaurante La Ruana!');
}

// Write to restaurante_la_ruana/index.html
const outIndexPath = path.join(projectDir, 'index.html');
fs.writeFileSync(outIndexPath, html, 'utf8');
console.log('Written to:', outIndexPath);

// Generate standalone with base64 images
const imgDesktopPath = path.join(projectDir, 'hero_la_ruana.webp');
const imgMobilePath = path.join(projectDir, 'hero_la_ruana_mobile.webp');

if (fs.existsSync(imgDesktopPath) && fs.existsSync(imgMobilePath)) {
  const imgDesktop = fs.readFileSync(imgDesktopPath).toString('base64');
  const imgMobile = fs.readFileSync(imgMobilePath).toString('base64');
  
  let standaloneHtml = html.split('hero_la_ruana_mobile.webp').join(`data:image/webp;base64,${imgMobile}`);
  standaloneHtml = standaloneHtml.split('hero_la_ruana.webp').join(`data:image/webp;base64,${imgDesktop}`);
  
  const standalonePath = path.join(projectDir, 'restaurante_la_ruana_standalone.html');
  fs.writeFileSync(standalonePath, standaloneHtml, 'utf8');
  console.log('Standalone generated at:', standalonePath);

  // Also root level standalone
  const rootStandalonePath = path.join(rootDir, 'restaurante_la_ruana_standalone.html');
  fs.writeFileSync(rootStandalonePath, standaloneHtml, 'utf8');
  console.log('Root standalone updated at:', rootStandalonePath);
}
