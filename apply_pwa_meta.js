const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projects = [
  {
    folder: 'caritas_magicas',
    title: 'Caritas Mágicas',
    themeColor: '#0d9488'
  },
  {
    folder: 'los_pollitos',
    title: 'Los Pollitos',
    themeColor: '#d9381e'
  },
  {
    folder: 'luxus_beauty_spa',
    title: 'Luxus Spa',
    themeColor: '#0f172a'
  },
  {
    folder: 'happy_kids',
    title: 'Happy Kids Urabá',
    themeColor: '#6366f1'
  }
];

projects.forEach(proj => {
  const htmlPath = path.join(__dirname, proj.folder, 'index.html');
  if (!fs.existsSync(htmlPath)) return;

  let html = fs.readFileSync(htmlPath, 'utf8');

  const pwaMeta = `
  <!-- Mobile WebApp PWA Meta Tags -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="${proj.title}">
  <meta name="theme-color" content="${proj.themeColor}">`;

  if (!html.includes('apple-mobile-web-app-capable')) {
    html = html.replace('<meta name="viewport"', `${pwaMeta}\n  <meta name="viewport"`);
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log(`PWA Meta tags injected into ${proj.folder}/index.html`);
  } else {
    console.log(`PWA Meta tags already present in ${proj.folder}/index.html`);
  }

  // Re-run build_standalone.js if present in folder
  const buildScript = path.join(__dirname, proj.folder, 'build_standalone.js');
  if (fs.existsSync(buildScript)) {
    console.log(`Rebuilding standalone for ${proj.folder}...`);
    try {
      execSync(`node build_standalone.js`, { cwd: path.join(__dirname, proj.folder), stdio: 'inherit' });
    } catch (e) {
      console.error(`Error building standalone for ${proj.folder}:`, e.message);
    }
  } else if (proj.folder === 'caritas_magicas') {
    // Sync to caritas_magicas_standalone.html
    const standalonePath = path.join(__dirname, proj.folder, 'caritas_magicas_standalone.html');
    fs.writeFileSync(standalonePath, html, 'utf8');
    console.log(`Synced PWA meta to caritas_magicas_standalone.html`);
  }
});

console.log('All business projects successfully updated with WebApp PWA capabilities!');
