# Ficha de Diseño: Paola Diaz Beauty Artist (Chic Nail Studio & Video Scroll Engine)

Documentación técnica y tokens de diseño para **Paola Diaz Beauty Artist** en Vélez, Apartadó, optimizada con motor interactivo de **Video Scroll Scrubbing en Canvas (300vh)** y adaptada a los estándares oficiales de [AGENTS.md](file:///c:/Users/Rio%20Belen/negocios_locales/AGENTS.md).

---

## 🎨 Paleta de Colores Exclusiva & Manicura Chic

| Rol | Tono / Nombre | Valor HEX / CSS | Aplicación |
|---|---|---|---|
| Fondo Base Oscuro | Deep Obsidian Berry | `#0d0b0c` / `#171315` | Hero Canvas, Sobre Nosotros, Footer y bordes |
| Superficie Clara | Soft Rose Porcelain | `#f7f1ee` / `#fdfbf9` | Fondos de Catálogo de Servicios y Ubicación |
| Acento Primario | Rose Berry Glam | `#d84b75` / `#f27297` | Precios, líneas de acento, bordes sutiles y hover |
| Degradado Primario | Rose Berry Shimmer | `linear-gradient(135deg, #f27297 0%, #d84b75 50%, #b3325a 100%)` | Botones principales «Agendar», insignias VIP |
| Texto Claro | Linen White | `#fdfbf9` / `#ffffff` | Tipografía display sobre fondos oscuros |
| Texto Oscuro | Espresso Berry | `#2c1820` / `#5a3d46` | Titulares y descripciones en sección clara |
| Bordes | Rose Glass Border | `rgba(216, 75, 117, 0.22)` | Líneas divisorias y tarjetas |

---

## ✍️ Tríada Tipográfica Forense

1. **Titulares Display**: `'Playfair Display'`, Georgia, serif (Elegancia clásica editorial y acabado femenino).
2. **Signature Script**: `'Alex Brush'`, cursive (Detalle caligráfico de autor *«en Cada Detalle / que Habla por Ti»*).
3. **Cuerpo y UI**: `'Plus Jakarta Sans'`, sans-serif (Legibilidad contemporánea de alta fidelidad para lectura ágil y botones).

---

## 🎬 Sistema Hero Video Scroll Scrubbing (300vh Canvas Engine)

- **Canvas Viewport Fijo**: 100vh con interpolación fluida mediante `requestAnimationFrame`.
- **Doble Banco de Cuadros Calibrados (74 Fotogramas Extraídos de `nail_A-2morena`)**:
  - `desktop/`: 74 fotogramas WebP (1920x1080 nativo, Q85) con `object-fit: cover` y `.canvas-gradient-overlay` (0% a 24% oscuro, 100% transparente desde el 78%).
  - `mobile/`: 74 fotogramas WebP (720x1280 9:16 nativo, Q76) con encuadre vertical centrado, dejando el 36% superior 100% despejado y libre de veladuras.
- **Anclaje Inferior Mandatorio & 60% Superior Despejado**:
  - Vista desktop: `.hero-container-align` anclado al fondo (`align-items: flex-end; padding-bottom: clamp(40px, 7.5vh, 75px);`) dejando el rostro, trenzas y uñas de la modelo completamente visibles.
  - Vista móvil: `.hero-scroll-container` y `.hero-sticky-viewport` con `min-height: 720px !important;` y textos en la mitad inferior.
- **Narrativa Editorial en 2 Pasos (50% / 50%)**:
  - *Paso 1 (0% a 50%)*: "Nail Art & Estilo Chic — Magia & Detalle en Cada Uña" con botón principal y enlace minimalista `Ver Servicios ➔`.
  - *Paso 2 (50% a 100%)*: "Elegancia & Distinción — Arte & Perfección que Habla por Ti" enfocado en esculpido acrílico y pedicura spa.
- **High-DPI Retina Support**: Escala interna con `window.devicePixelRatio || 1` y `ctx.imageSmoothingQuality = 'high'`.

---

## 🏛️ Estructura Oficial de Secciones (AGENTS.md)

1. **Smart Header**: Logotipo tipográfico puro sin emojis decorativos («PAOLA DIAZ BEAUTY ARTIST»), auto-hide inteligente que no se oculta dentro del Hero y botón conciso **«Agendar»**.
2. **`#inicio`**: Hero Canvas 300vh con scroll scrubbing interactivo y poster fallback instantáneo.
3. **Barra de Pilares**: 5 sellos de confianza (*Esmaltes Prémium, Esterilización Total, Manicuristas Máster, Nail Art en Tendencia, Satisfacción Total*); en móvil deslizable por carrusel horizontal *Scroll Snap*.
4. **`#servicios`**: Grid de 3 columnas en escritorio / 2 columnas en móvil. Tarjetas *Full-Bleed Minimalistas* (3:4) con fotografía protagonista, degradado aterciopelado inferior, precio claro sin sufijo COP y botón minimalista `AGENDAR ➔`.
5. **`#nosotros`**:
   - **Ambiente Coherente**: Fotografía de salón de uñas con mesas de manicura y lámparas UV (`photo-1519014816548-bf5fe059798b`).
   - **Retrato Editorial del Equipo**: Grid de 4 columnas en escritorio (3:4.2) / Carrusel horizontal *Scroll Snap* en una sola fila con efecto «Peek» en móvil, liderado por Paola Diaz (Directora & Master Nail Artist).
6. **`#ubicacion`**: Tarjeta elegante en Cra. 107 #103a - 44, Vélez, Apartadó con Google Maps interactivo georreferenciado (`z=16`).
7. **Footer**: Enlaces de navegación y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Float**: Despeje seguro móvil (`safe-area-inset-bottom`), cero `overflow: hidden` recortador.
