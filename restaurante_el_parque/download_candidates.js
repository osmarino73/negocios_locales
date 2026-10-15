const https = require('https');
const fs = require('fs');
const path = require('path');

const candidates = [
  { id: '1544025162-d76694265947', name: 'candidate_ribs.jpg' },
  { id: '1558030006-450675393462', name: 'candidate_steak.jpg' },
  { id: '1615937657715-bc7b4b7962c1', name: 'candidate_parrilla.jpg' },
  { id: '1504674900247-0877df9cc836', name: 'candidate_feast.jpg' },
  { id: '1555939594-58d7cb561ad1', name: 'candidate_bbq.jpg' },
  { id: '1529692236671-f1f6cf9683ba', name: 'candidate_meat_spices.jpg' },
  { id: '1546069901-ba9599a7e63c', name: 'candidate_bowl.jpg' }
];

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        });
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const c of candidates) {
    const url = `https://images.unsplash.com/photo-${c.id}?auto=format&fit=crop&w=1920&q=85`;
    const dest = path.join(__dirname, c.name);
    try {
      console.log(`Downloading ${c.name}...`);
      await download(url, dest);
      console.log(`Downloaded ${c.name}`);
    } catch (e) {
      console.error(`Error downloading ${c.name}:`, e.message);
    }
  }
}

main();
