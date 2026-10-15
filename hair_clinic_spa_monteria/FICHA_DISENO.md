# Ficha de Diseño: HAIR CLINIC SPA MONTERIA (Video Scroll Engine 300vh)

Documentación técnica y tokens de diseño forense para **HAIR CLINIC SPA MONTERIA** en Montería, Córdoba, optimizada con motor interactivo de **Video Scroll Scrubbing en Canvas (300vh)** y adaptada a los estándares oficiales de [AGENTS.md](file:///c:/Users/Rio%20Belen/negocios_locales/AGENTS.md) y la habilidad `video-to-scroll-frames`.

---

## 🎨 Paleta de Colores Forense Exclusiva (Consumo Dinámico Obligatorio)

Todos los acentos de la marca consumen de forma estricta la variable CSS `--color-accent` para permitir transformaciones dinámicas impecables en todo el sitio web.

| Rol | Tono / Nombre | Valor HEX / CSS | Aplicación |
|---|---|---|---|
| Fondo Base Oscuro | Deep Ébano Luxury | `#0e0d0c` / `#141211` | Fondo principal del Hero Canvas, Sobre Nosotros y Footer |
| Superficie Tarjetas | Dark Obsidian Velvet | `#181614` / `#1f1c19` | Fondos de tarjetas de servicios y equipo |
| Acento Primario | Nude Camel Luxury | `#c59b7d` / `var(--color-accent)` | Precios, firmas script, líneas de acento, hover y CTAs |
| Degradado Acento | Warm Gold Camel Shimmer | `linear-gradient(135deg, #d6ab8d 0%, #c59b7d 50%, #ab7f62 100%)` | Botones de agendamiento y sellos VIP |
| Texto Principal | Marfil Linen White | `#f7f3ed` / `#ffffff` | Titulares y descripciones de alta legibilidad |
| Texto Secundario | Warm Sand Grey | `#bdae9e` | Subtítulos de tarjetas y metadatos |
| Bordes de Cristal | Golden Glass Border | `rgba(197, 155, 125, 0.22)` | Divisores sutiles y tarjetas |

---

## ✍️ Tríada Tipográfica Forense Idéntica

1. **Titulares Display**: `'DM Serif Display'`, Georgia, serif (Sensación editorial de salón de belleza de alta gama).
2. **Signature Script**: `'Alex Brush'`, cursive (Frases script manuscritas caligráficas *«Encuentra la Perfección»*).
3. **Cuerpo & UI**: `'Plus Jakarta Sans'`, sans-serif (Proporción geométrica ultra limpia para botones y lectura ergonómica).

---

## 🎬 Sistema Hero Video Scroll Scrubbing (300vh Canvas Engine)

- **Canvas Viewport Fijo**: 100vh con interpolación fluida mediante `requestAnimationFrame`.
- **Doble Banco de Cuadros Calibrados (74 Fotogramas Extraídos en WebP)**:
  - `public/frames/desktop/`: 74 fotogramas WebP (1920x1080 nativo, Q85) con `object-fit: cover` y `.canvas-gradient-overlay` (0% a 24% oscuro, 100% transparente en zona del modelo).
  - `public/frames/mobile/`: 74 fotogramas WebP (720x1280 9:16 nativo, Q76) con encuadre vertical centrado, eliminando por completo el degradado horizontal negro (`90deg`) y dejando el 45% superior 100% transparente para que el rostro y peinado de la modelo luzcan con total nitidez y brillo.
- **Anclaje Inferior Mandatorio & 60% Superior Despejado**:
  - Vista desktop: `.hero-container-align` anclado al fondo (`align-items: flex-end; padding-bottom: clamp(48px, 9vh, 85px);`) dejando la modelo visible con nitidez.
  - Vista móvil: `.canvas-sticky-wrapper` con `height: 100dvh` y textos en la mitad inferior.
- **Narrativa Editorial en 2 Pasos (50% / 50%)**:
  - *Paso 1 (0% a 50%)*: "Donde el Estilo Encuentra la Perfección" con botón de agendar, enlace minimalista `Ver Servicios ➔` y badge de Google Reviews.
  - *Paso 2 (50% a 100%)*: "Ciencia & Pasión por tu Cabello" enfocado en tratamientos de nutrición intensiva, alisados orgánicos y visagismo.
- **High-DPI Retina Support**: Escala interna con `window.devicePixelRatio || 1` y `ctx.imageSmoothingQuality = 'high'`.
- **Regla Mandatoria CSS**: `overflow-x: clip;` en `html, body` para evitar la destrucción de `position: sticky`.

---

## 🏛️ Estructura Oficial de Secciones (AGENTS.md)

1. **Smart Header / Navbar**:
   - Logotipo tipográfico puro sin íconos («HAIR CLINIC SPA — MONTERÍA»).
   - Visibilidad inteligente: Permanece siempre visible en el Hero Canvas, auto-hide sutil en scroll hacia abajo en secciones inferiores.
   - En móvil (<768px): Limpieza total sin botón CTA en header ni menús hamburguesa recargados. Cero bottom docks.
2. **`#inicio` (Hero Canvas 300vh)**:
   - Video Scroll Scrubbing interactivo de 74 fotogramas WebP con poster fallback instantáneo contra flashes negros.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Estilistas Expertos, Productos Prémium, Experiencia Spa, Satisfacción Total, Higiene & Bioseguridad*).
   - En móvil: Carrusel horizontal *Scroll Snap* en una sola fila compacta.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** / **2 columnas en móvil (`repeat(2, minmax(0, 1fr))`)**.
   - Tarjetas 3:4 con degradado inferior aterciopelado. Footer de 2 filas independientes: Fila 1 precio en `$120.000` (sin `COP`), Fila 2 enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales)**:
   - **Sobre Nosotros**: Grid a 2 columnas con foto de ambiente representativa de salón/spa capilar (`photo-1560066984-138dadb4c035`), badge VIP flotante, titular editorial, descripción cálida y 4 métricas de autoridad.
   - **Nuestros Profesionales**: Grid de 4 columnas en escritorio / Carrusel horizontal *Scroll Snap* en móvil (formato retrato editorial 3:4.2) con efecto «Peek» (asoman 70-100px del siguiente profesional).
6. **`#ubicacion` (Mapa & Contacto)**:
   - Panel de datos (Cra. 12 #57 - 12, Montería) + Google Maps interactivo georreferenciado (`z=16`).
7. **Footer Principal**:
   - Módulo de reserva con botón conciso **«Agendar»**.
8. **Botón Flotante de WhatsApp**:
   - Anti-corte móvil (`bottom: calc(28px + env(safe-area-inset-bottom, 0px))`), cero `overflow: hidden`.
