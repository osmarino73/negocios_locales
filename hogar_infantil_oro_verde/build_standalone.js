const fs = require('fs');
const path = require('path');

console.log('Building standalone HTML for Hogar Infantil Oro Verde...');

const indexPath = path.join(__dirname, 'index.html');
const cssPath = path.join(__dirname, 'styles.css');
const outputPath = path.join(__dirname, 'hogar_infantil_oro_verde_standalone.html');

let html = fs.readFileSync(indexPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

// Replace external stylesheet link with embedded <style>
html = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);

// Embed local images as Base64 data URLs
const imageRegex = /src=["'](assets\/images\/[^"']+)["']/g;
html = html.replace(imageRegex, (match, imageRelPath) => {
  const fullImagePath = path.join(__dirname, imageRelPath);
  if (fs.existsSync(fullImagePath)) {
    const ext = path.extname(fullImagePath).substring(1).toLowerCase();
    const mimeType = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/svg+xml';
    const imageBase64 = fs.readFileSync(fullImagePath).toString('base64');
    console.log(`Embedded image in Base64: ${path.basename(imageRelPath)}`);
    return `src="data:${mimeType};base64,${imageBase64}"`;
  }
  return match;
});

// Copy to root workspace directory as well
const rootOutputPath = path.join(__dirname, '..', 'hogar_infantil_oro_verde_standalone.html');

fs.writeFileSync(outputPath, html, 'utf8');
fs.writeFileSync(rootOutputPath, html, 'utf8');

console.log('Successfully generated 100% standalone HTML for Hogar Infantil Oro Verde!');
