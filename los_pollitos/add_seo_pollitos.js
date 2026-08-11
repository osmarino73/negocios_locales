const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const seoTags = `
  <meta name="keywords" content="guarderia en apartado, hogar infantil apartado, educacion inicial apartado, cuidado de niños apartado, preescolar apartado, maternal apartado">
  <meta name="robots" content="index, follow">

  <!-- Open Graph / Facebook / WhatsApp Preview -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Hogar Infantil Los Pollitos De Apartadó">
  <meta property="og:description" content="Ambiente seguro, amoroso e innovador para el cuidado y educación inicial de tus hijos en Apartadó. ¡Matrículas Abiertas!">
  <meta property="og:url" content="https://share.google/uTfsCczTSa7yn04oH">

  <!-- Local SEO Structured Data (Schema.org JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "Hogar Infantil Los Pollitos De Apartadó",
    "description": "Hogar infantil y centro de educación inicial enfocado en el desarrollo integral y seguro de niños en Apartadó.",
    "url": "https://share.google/uTfsCczTSa7yn04oH",
    "telephone": "+573120000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Apartadó",
      "addressRegion": "Antioquia",
      "addressCountry": "CO"
    },
    "hasMap": "https://share.google/uTfsCczTSa7yn04oH",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:00"
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
  fs.writeFileSync(path.join(__dirname, '..', 'los_pollitos_standalone.html'), html, 'utf8');
  console.log('SEO metadata successfully added to Los Pollitos!');
}
