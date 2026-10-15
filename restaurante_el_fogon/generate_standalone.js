const fs = require('fs');
const path = require('path');

const dir = __dirname;
let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

const imgDesktop = fs.readFileSync(path.join(dir, 'hero_fogon.webp')).toString('base64');
const imgMobile = fs.readFileSync(path.join(dir, 'hero_fogon_mobile.webp')).toString('base64');

html = html.split('hero_fogon_mobile.webp').join(`data:image/webp;base64,${imgMobile}`);
html = html.split('hero_fogon.webp').join(`data:image/webp;base64,${imgDesktop}`);

fs.writeFileSync(path.join(dir, 'restaurante_el_fogon_standalone.html'), html, 'utf8');
console.log('Standalone El Fogón generated successfully!');
