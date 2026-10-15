# Ficha de Diseño & Manual de Marca — Kbeyo's Peluqueria Unisex

## 1. Identidad de Marca & Concepto Visual
- **Nombre Comercial**: Kbeyo's Peluqueria Unisex
- **Rubro**: Peluquería, Salón de Belleza & Barbería Unisex
- **Estilo de Diseño**: Luxury Dark Editorial / Forense (Inspirado en *LUXE HAIR SALON*)
- **Atmósfera**: Sofisticada, inmersiva, elegante y con contrastes aterciopelados en tonos ébano/obsidiana y acentos oro cálido/cobre.

---

## 2. Paleta Forense de Colores (Tokens CSS)
```css
:root {
  /* Fondos Inmersivos Obsidian / Ébano */
  --bg-dark: #0b0b0c;
  --bg-dark-card: rgba(22, 21, 25, 0.85);
  --bg-dark-elevated: #161519;
  
  /* Color Primario Dinámico de Acento de Marca */
  --color-accent: #c5a087;
  --color-accent-hover: #d8b49c;
  --color-accent-glow: rgba(197, 160, 135, 0.22);
  
  /* Tipografía & Textos */
  --text-primary: #f5f2ec;
  --text-secondary: #c8c2b8;
  --text-muted: #8c867d;
  
  /* Bordes & Divisores */
  --border-soft: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(197, 160, 135, 0.35);
  
  /* Fuentes Tipográficas */
  --font-script: 'Alex Brush', cursive;
  --font-display: 'DM Serif Display', serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
}
```

---

## 3. Tipografía & Jerarquía Visual
1. **Firma Caligráfica Script (`--font-script`)**: `Alex Brush`, cursive.
   - Uso: Frase signature `.hero-script-tag` (*«Donde el Estilo Encuentra la Confianza»*), cejas de sección `.section-script-eyebrow`.
2. **Titulares Editorial Display (`--font-display`)**: `DM Serif Display`, serif.
   - Uso: Titular principal `#inicio`, títulos de sección `<h2>`, nombres en tarjetas de profesionales.
3. **Cuerpo de Texto & UI (`--font-sans`)**: `Plus Jakarta Sans`, sans-serif.
   - Uso: Navbar, descripciones, tarjetas de servicios, botones, datos de contacto.

---

## 4. Estructura de Secciones & Reglas Mandatorias
1. `#inicio` (Hero Full-Width Bleed):
   - Fotografía inmersiva en la capa base (`assets/heroes/salon_belleza/Woman_wearing_black_dress_2K_202609021631.webp`).
   - Anclaje inferior estricto (`align-items: flex-end`) con 60% superior despejado para lucir el cabello y rostro de la modelo.
   - Doble degradado orgánico aterciopelado (180deg + 90deg eased curve). Cero `mask-image` en el contenedor.
2. Franja de Pilares / Sellos de Confianza:
   - 5 sellos con micro-íconos de marca en contenedor circular iluminado.
   - Carrusel deslizable (*Scroll Snap*) en 1 sola fila fluida en móviles.
3. `#servicios` (Catálogo de Servicios):
   - 3 columnas en escritorio (`repeat(3, 1fr)`), 2 columnas en móvil (`repeat(2, 1fr)`).
   - Formato Full-Bleed 3:4 con degradado aterciopelado inferior (45% superior 100% transparente).
   - Footer de dos filas independientes: Fila 1 precio con 100% de ancho sin sufijo `COP`; Fila 2 enlace minimalista `AGENDAR ➔`.
4. `#nosotros` (Sobre Nosotros & Nuestros Profesionales):
   - Bloque editorial a 2 columnas con foto de ambiente de peluquería (`photo-1560066984-138dadb4c035`), badge VIP flotante y 4 métricas de autoridad.
   - Bloque Nuestros Profesionales en formato Retrato Editorial Full-Bleed (3:4.2) en 4 columnas (desktop) y carrusel Scroll Snap con peek 70-100px (móvil).
5. `#ubicacion` (Mapa & Contacto):
   - Dirección real en C.C. Isla Center, Calle 24 #13-82 Local 3, Centro, Montería.
   - Google Maps iframe interactivo con fórmula georreferenciada `z=16`.
6. Footer Principal:
   - Logotipo tipográfico puro sin íconos adjuntos, módulo de reserva con botón conciso **«Agendar»**.
7. WhatsApp Float Button:
   - Botón circular anti-corte móvil con `env(safe-area-inset-bottom)`.
