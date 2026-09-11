# Ficha de Diseño: NÜVA NAILS SPA (Luxury Nails & Video Scroll Engine)

Documentación técnica y tokens de diseño para **NÜVA NAILS SPA** en Apartadó, optimizada con motor interactivo de **Video Scroll Scrubbing en Canvas (300vh)** y adaptada a los estándares oficiales de [AGENTS.md](file:///c:/Users/Rio%20Belen/negocios_locales/AGENTS.md).

---

## 🎨 Paleta de Colores Exclusiva & Manicura Prémium

| Rol | Tono / Nombre | Valor HEX / CSS | Aplicación |
|---|---|---|---|
| Fondo Base Oscuro | Deep Obsidian Graphite | `#0f0e0e` / `#171515` | Hero Canvas, Sobre Nosotros, Footer y bordes |
| Superficie Clara | Warm Sand Linen | `#ebe4dc` / `#fbf8f5` | Fondos de Catálogo de Servicios y Ubicación |
| Acento Primario | Warm Caramel Mocca | `#9c6d53` / `#b8866a` | Precios, líneas de acento, bordes sutiles y hover |
| Degradado Primario | Mocca Caramel Shimmer | `linear-gradient(135deg, #b8866a 0%, #9c6d53 50%, #7d543e 100%)` | Botones principales «Agendar», insignia VIP |
| Texto Claro | Linen White | `#fcfaf7` / `#ffffff` | Tipografía display sobre fondos oscuros |
| Texto Oscuro | Espresso Charcoal | `#171515` / `#524a44` | Titulares y descripciones en sección clara |
| Bordes | Mocca Glass Border | `rgba(156, 109, 83, 0.22)` | Líneas divisorias y tarjetas |

---

## ✍️ Tríada Tipográfica Forense

1. **Titulares Display**: `'Playfair Display'`, Georgia, serif (Elegancia clásica editorial para procedimientos de spa y uñas).
2. **Signature Script**: `'Alex Brush'`, cursive (Detalle caligráfico de autor en titulares de impacto).
3. **Cuerpo y UI**: `'Plus Jakarta Sans'`, sans-serif (Legibilidad contemporánea de alta fidelidad para lectura ágil y botones).

---

## 🎬 Sistema Hero Video Scroll Scrubbing (300vh Canvas Engine)

- **Canvas Viewport Fijo**: 100vh con interpolación fluida mediante `requestAnimationFrame`.
- **Doble Banco de Cuadros Calibrados**:
  - `desktop/`: 74 fotogramas WebP (1920x1080 nativo, Q85) con `object-fit: cover` y degradado lateral suave (0% a 24% oscuro, 100% transparente desde el 72%).
  - `mobile/`: 74 fotogramas WebP (720x1280 9:16 centrado, Q76) con encuadre vertical que mantiene el rostro de la modelo y las uñas impecables en el tercio superior.
- **Narrativa Editorial en 2 Pasos (50% / 50%)**:
  - *Paso 1 (0% a 50%)*: "Belleza & Detalle en Cada Uña" con botón directo a WhatsApp.
  - *Paso 2 (50% a 100%)*: "Arte & Perfección que Perdura" enfocado en esculpido y bioseguridad.
- **High-DPI Retina Support**: Escala interna con `window.devicePixelRatio || 1` y `ctx.imageSmoothingQuality = 'high'`.

---

## 🏛️ Estructura Oficial de Secciones (AGENTS.md)

1. **Smart Header**: Logotipo tipográfico puro sin íconos decorativos («NÜVA NAILS SPA»), auto-hide inteligente que no se oculta dentro del Hero y botón conciso **«Agendar»**.
2. **`#inicio`**: Hero Canvas 300vh con scroll scrubbing interactivo y poster fallback instantáneo.
3. **Barra de Pilares**: 5 sellos de confianza (*Esmaltes Prémium, Esterilización Clínica, Manicuristas Máster, Nail Art Exclusivo, Satisfacción Total*); en móvil deslizable por carrusel horizontal *Scroll Snap*.
4. **`#servicios`**: Grid de 3 columnas en escritorio / 2 columnas en móvil. Tarjetas *Full-Bleed Minimalistas* (3:4) con fotografía protagonista, degradado aterciopelado inferior, precio en `$ COP` y botón minimalista `AGENDAR ➔`.
5. **`#nosotros`**:
   - **Ambiente Coherente**: Fotografía de salón de uñas con mesas de manicura y lámparas UV (`photo-1527799820374-dcf8d9d4a388`).
   - **Retrato Editorial del Equipo**: Grid de 4 columnas en escritorio (3:4.2) / Carrusel horizontal *Scroll Snap* en una sola fila con efecto «Peek» en móvil.
6. **`#ubicacion`**: Tarjeta elegante en Cra. 104 con Google Maps interactivo georreferenciado (`z=16`).
7. **Footer**: Enlaces de navegación y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Float**: Despeje seguro móvil (`safe-area-inset-bottom`), cero `overflow: hidden` recortador.
