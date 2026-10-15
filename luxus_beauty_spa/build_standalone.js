const fs = require('fs');
const path = require('path');

console.log('Building standalone HTML for Luxus Beauty Spa...');

let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');

// 1. Embed CSS directly inside <style>
const standaloneHtml = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);

// 2. Save standalone HTML files (DO NOT overwrite index.html)
fs.writeFileSync(path.join(__dirname, 'luxus_beauty_spa_standalone.html'), standaloneHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'luxus_beauty_spa_standalone.html'), standaloneHtml, 'utf8');

console.log('Successfully generated 100% standalone HTML for Luxus Beauty Spa!');
