const fs = require('fs');
const path = require('path');

console.log('Building standalone HTML for Agente IA Demo (Makloz Tech & MioWeKids)...');

const indexPath = path.join(__dirname, 'index.html');
const cssPath = path.join(__dirname, 'styles.css');
const jsPath = path.join(__dirname, 'ai_agent.js');
const outputPath = path.join(__dirname, 'agente_ia_demo_standalone.html');

let html = fs.readFileSync(indexPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

// Replace external stylesheet link with embedded <style>
html = html.replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`);

// Replace external script link with embedded <script>
html = html.replace('<script src="ai_agent.js"></script>', `<script>\n${js}\n</script>`);

// Copy to root workspace directory as well
const rootOutputPath = path.join(__dirname, '..', 'agente_ia_demo_standalone.html');

fs.writeFileSync(outputPath, html, 'utf8');
fs.writeFileSync(rootOutputPath, html, 'utf8');

console.log('Successfully generated 100% standalone HTML for Agente IA Demo!');
