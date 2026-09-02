const fs = require('fs');
const path = require('path');

console.log('Building 100% standalone HTML for BeautyFlow AI Landing Page...');

const indexPath = path.join(__dirname, 'index.html');
const cssPath = path.join(__dirname, 'styles.css');
const outputPath = path.join(__dirname, 'salones_belleza_saas_standalone.html');

let html = fs.readFileSync(indexPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

// Replace external stylesheet link with embedded <style>
html = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);

// Copy to root workspace directory as well
const rootOutputPath = path.join(__dirname, '..', 'salones_belleza_saas_standalone.html');

fs.writeFileSync(outputPath, html, 'utf8');
fs.writeFileSync(rootOutputPath, html, 'utf8');

console.log('Successfully generated 100% standalone HTML for BeautyFlow AI!');
