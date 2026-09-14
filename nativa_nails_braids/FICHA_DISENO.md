# Ficha de Diseño Forense: Nativa Nails & Braids (Video Scroll Scrubbing & Luxé Studio)

Documentación técnica y tokens de diseño para **Nativa Nails & Braids** en Apartadó, optimizado con motor de **Canvas Video Scroll Scrubbing (300vh)**, catálogo de servicios **Full-Bleed Minimalista (3 columnas escritorio / 2 columnas móvil)** y especialistas en formato **Retrato Editorial Vertical (4 columnas escritorio / Carrusel Scroll Snap con Peek en móvil)**.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Deep Espresso Onyx | `#0d0b0a` | Fondo principal continuo en Hero, Pilares, Servicios, Nosotros, Ubicación, Footer |
| Superficie Oscura | Cocoa Noir Surface | `#161311` | Tarjetas de servicios, equipo, panel de ubicación |
| Elevación / Cards | Roasted Coffee Card | `#1f1a17` | Hover states, contenedores de métricas |
| Acento Primario | Nude Camel Sand | `#cbb39c` | Líneas de acento, precios, estrellas y bordes activos |
| Acento Luminoso | Warm Camel Light | `#e4d3c3` | Eyebrows, subtítulos de autor y detalles secundarios |
| Acento Degradado | Camel Gold Shimmer | `linear-gradient(135deg, #e4d3c3 0%, #cbb39c 50%, #ad947d 100%)` | Botones CTA principales, badges |
| Texto Principal | Champagne Linen White | `#fcfaf7` | Títulos display, nombres de equipo y textos primarios |
| Texto Secundario | Muted Sandstone | `#c9c0b8` | Descripciones de servicios y párrafos editoriales |
| Bordes | Warm Sand Glass Border | `rgba(203, 179, 156, 0.20)` | Separadores y divisores sutiles |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` (500, 600, 700 — Serif editorial elegante y estilizada).
2. **Subtítulos de Autor & Signature Script**: `Alex Brush` (Caligrafía manuscrita fluida para frases de marca).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (300, 400, 500, 600, 700, 800 — Máxima legibilidad en alta densidad).

---

## 🎬 Sistema de Video Scroll Scrubbing en Canvas HTML5 (`#inicio`)

- **Fuentes Originales Específicas**: 
  - Desktop: `nativa_web.mp4` (1920x1080, 24 fps, 4.0s).
  - Mobile: `nativa_movil.mp4` (1080x1920 vertical nativo 9:16, 24 fps, 4.0s).
- **Extracción de Secuencia**:
  - **Desktop (16:9)**: 74 fotogramas WebP en `public/frames/desktop/` (1920x1080 px, Q85) + `poster.webp`.
  - **Mobile (9:16 Vertical Nativo)**: 74 fotogramas WebP en `public/frames/mobile/` (720x1280 px, Q76) + `poster.webp` nativo sin recortes artificiales.
- **Arquitectura de Render**:
  - Sección contenedora de `300vh` con wrapper `position: sticky; top: 0; height: 100vh; overflow: hidden;`.
  - Soporte de alta resolución **High-DPI Retina** (`window.devicePixelRatio` hasta 2x).
  - Preloader asíncrono con fallback inmediato `poster.webp` para 0% flashes negros.
  - Alternancia editorial de 2 pasos (`step-1` 0% a 50%, `step-2` 50% a 100%) con copy directo, cálido y enfocado en el salón local.

---

## 📐 Estructura Oficial de Secciones

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro (sin emojis ni íconos decorativos).
   - **Navbar 100% transparente en el Hero**: `background: transparent; border-bottom: 1px solid transparent; backdrop-filter: none;` con `text-shadow` de alto contraste en branding y enlaces.
   - Activa fondo oscuro espresso con `backdrop-filter: blur(14px)` únicamente al descender más allá del Hero (`currentScrollY > heroBottom - 120`).
   - Permanente y visible durante todo el recorrido del Hero Canvas; auto-hide suave al descender en secciones inferiores.
   - En móvil (< 768px): Logotipo a la izquierda y botón conciso **«Agendar»** a la derecha. Menú hamburguesa deshabilitado.
   - Soporte de `padding-top: env(safe-area-inset-top, 0px)`.
2. **`#inicio` (Canvas Video Scrubbing)**:
   - 300vh de scroll interactivo sincronizado con el cursor o el dedo.
   - En móvil: Disposición inferior (`align-items: flex-end`), `min-height: 720px !important;`, texto compacto para mantener el video despejado.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Esmaltes Prémium, Esterilización Clínica, Manicuristas Máster, Braids & Nail Art, Satisfacción Total*).
   - En móvil: Carrusel horizontal deslizable (*Scroll Snap*) con auto-scroll inteligente (3s) y pausa táctil.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas balanceadas en móvil**.
   - Fotografía inmersiva al 100% (`aspect-ratio: 3/4`), degradado inferior aterciopelado (38% superior transparente), precio claro y botón minimalista `AGENDAR ➔`.
   - Incluye **Trenzas & Braids Studio** ($90.000 COP) destacando la especialidad afro/braids del salón.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque Editorial con foto de salón de manicura real (`photo-1519014816548-bf5fe059798b`), badge flotante VIP, titular de impacto y 4 métricas de autoridad (años de exp, clientas felices, técnica y calificación 5.0★).
   - Bloque de Especialistas: **4 columnas en escritorio (`repeat(4, 1fr)`)** con formato **Retrato Editorial Vertical (3:4.2)**; en **móvil (< 768px)** carrusel horizontal deslizable (*Scroll Snap*) con tarjetas de 255px y efecto «Peek» (asoman 70-100px del siguiente perfil).
6. **`#ubicacion` (Mapa Georreferenciado & Contacto)**:
   - Tarjeta de lujo continuo con dirección (Cra. 97 #97 - 21, Apartadó), horarios, teléfono y Google Maps embebido oficial (`z=16`).
7. **Footer Principal**:
   - Navegación rápida, datos de contacto y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante Anti-Corte**:
   - `bottom: calc(28px + env(safe-area-inset-bottom, 0px)); right: max(20px, env(safe-area-inset-right, 20px));`
   - Cero `overflow: hidden` para sombras perfectas, aceleración por hardware (`translate3d`), z-index 999999.
