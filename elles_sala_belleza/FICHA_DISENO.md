# Ficha de Diseño: Elles Sala de Belleza & Tienda Cosmética (Video Scroll Engine)

Documentación técnica y tokens de diseño para **Elles Sala de Belleza & Tienda Cosmética** en Apartadó, optimizada con motor interactivo de **Video Scroll Scrubbing en Canvas (300vh)** y adaptada a los estándares oficiales de [AGENTS.md](file:///c:/Users/Rio%20Belen/negocios_locales/AGENTS.md).

---

## 🎨 Paleta de Colores Exclusiva & Estética Prémium

| Rol | Tono / Nombre | Valor HEX / CSS | Aplicación |
|---|---|---|---|
| Fondo Base Oscuro | Deep Obsidian Ébano | `#0f0e0c` / `#181613` | Hero Canvas, Sobre Nosotros, Footer y bordes |
| Superficie Clara | Soft Warm Cream | `#faf7f2` / `#ffffff` | Fondos de Catálogo de Servicios y Ubicación |
| Acento Primario | Oro Rosa Camel Glow | `#d49b78` / `#e8c4ad` | Precios, líneas de acento, bordes sutiles y hover |
| Degradado Primario | Glow Gold Shimmer | `linear-gradient(135deg, #e8c4ad 0%, #d49b78 50%, #b87d58 100%)` | Botones principales «Agendar», insignias VIP |
| Texto Claro | Linen White | `#f7f4ee` / `#ffffff` | Tipografía display sobre fondos oscuros |
| Texto Oscuro | Espresso Charcoal | `#22201e` / `#57524c` | Titulares y descripciones en sección clara |
| Bordes | Gold Glass Border | `rgba(212, 155, 120, 0.22)` | Líneas divisorias y tarjetas |

---

## ✍️ Tríada Tipográfica Forense

1. **Titulares Display**: `'DM Serif Display'`, Georgia, serif (Elegancia clásica editorial y acabado de salón).
2. **Signature Script**: `'Alex Brush'`, cursive (Detalle caligráfico de autor *«que Transforman / para Cada Detalle»*).
3. **Cuerpo y UI**: `'Plus Jakarta Sans'`, sans-serif (Legibilidad contemporánea de alta fidelidad para lectura ágil y botones).

---

## 🎬 Sistema Hero Video Scroll Scrubbing (300vh Canvas Engine)

- **Canvas Viewport Fijo**: 100vh con interpolación fluida mediante `requestAnimationFrame`.
- **Doble Banco de Cuadros Calibrados (74 Fotogramas Extraídos de `nail_A-1`)**:
  - `desktop/`: 74 fotogramas WebP (1920x1080 nativo, Q85) con `object-fit: cover` y `.canvas-gradient-overlay` (0% a 24% oscuro, 100% transparente desde el 78%).
  - `mobile/`: 74 fotogramas WebP (720x1280 9:16 nativo, Q76) con encuadre vertical centrado, dejando el 36% superior 100% despejado y libre de veladuras.
- **Anclaje Inferior Mandatorio & 60% Superior Despejado**:
  - Vista desktop: `.hero-container-align` anclado al fondo (`align-items: flex-end; padding-bottom: clamp(40px, 7.5vh, 75px);`) dejando el rostro y joyas de la modelo completamente visibles.
  - Vista móvil: `.hero-scroll-container` y `.hero-sticky-viewport` con `min-height: 720px !important;` y textos en la mitad inferior.
- **Narrativa Editorial en 2 Pasos (50% / 50%)**:
  - *Paso 1 (0% a 50%)*: "Belleza & Estilo de Autor — Estilo & Elegancia que Transforman" con botón de agendar y enlace minimalista `Ver Servicios ➔`.
  - *Paso 2 (50% a 100%)*: "Elegancia & Distinción — Brillo & Cuidado para Cada Detalle" enfocado en balayage, alisados y cosmética capilar.
- **High-DPI Retina Support**: Escala interna con `window.devicePixelRatio || 1` y `ctx.imageSmoothingQuality = 'high'`.

---

## 🏛️ Estructura Oficial de Secciones (AGENTS.md)

1. **Smart Header**: Logotipo tipográfico puro sin íconos decorativos («Elles Belleza & Cosmética»), auto-hide inteligente que no se oculta dentro del Hero y botón conciso **«Agendar»**.
2. **`#inicio`**: Hero Canvas 300vh con scroll scrubbing interactivo y poster fallback instantáneo.
3. **Barra de Pilares**: 5 sellos de confianza (*Cosmética Prémium, Colorimetría Máster, Estilistas Expertas, Bioseguridad Total, Satisfacción Total*); en móvil deslizable por carrusel horizontal *Scroll Snap*.
4. **`#servicios`**: Grid de 3 columnas en escritorio / 2 columnas en móvil. Tarjetas *Full-Bleed Minimalistas* (3:4) con fotografía protagonista, degradado aterciopelado inferior, precio en `$ COP` y botón minimalista `AGENDAR ➔`.
5. **`#nosotros`**:
   - **Ambiente Coherente**: Fotografía oficial de tocadores y estaciones de peinado (`photo-1560066984-138dadb4c035`) con badge VIP flotante.
   - **Retrato Editorial del Equipo**: Grid de 4 columnas en escritorio (3:4.2) / Carrusel horizontal *Scroll Snap* en una sola fila con efecto «Peek» en móvil.
6. **`#ubicacion`**: Tarjeta elegante en Barrio El Salvador con Google Maps interactivo georreferenciado (`z=16`).
7. **Footer**: Enlaces de navegación y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Float**: Despeje seguro móvil (`safe-area-inset-bottom`), cero `overflow: hidden` recortador.
