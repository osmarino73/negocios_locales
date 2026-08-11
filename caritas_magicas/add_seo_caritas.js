const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const seoTags = `
  <meta name="keywords" content="guarderia, centro infantil, preescolar, jardin infantil, matriculas guarderia, cuidado de niños">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Facebook / WhatsApp Preview -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Centro Infantil Caritas Mágicas">
  <meta property="og:description" content="Un entorno seguro, cariñoso y divertido donde los niños aprenden, juegan y se desarrollan plenamente cada día.">
  <meta property="og:url" content="https://maps.app.goo.gl/83Hj1j1jhyfMi3VV8">

  <!-- Local SEO Structured Data (Schema.org JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "Centro Infantil Caritas Mágicas",
    "description": "Centro infantil y guardería con programas pedagógicos de excelencia y cuidado seguro para niños.",
    "url": "https://maps.app.goo.gl/83Hj1j1jhyfMi3VV8",
    "telephone": "+573001234567",
    "hasMap": "https://maps.app.goo.gl/83Hj1j1jhyfMi3VV8",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:30",
        "closes": "18:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "200"
    }
  }
  </script>`;

if (!html.includes('schema.org')) {
  html = html.replace('</head>', `${seoTags}\n</head>`);
  fs.writeFileSync(filePath, html, 'utf8');
  fs.writeFileSync(path.join(__dirname, 'caritas_magicas_standalone.html'), html, 'utf8');
  console.log('SEO metadata successfully added to Caritas Mágicas!');
}
