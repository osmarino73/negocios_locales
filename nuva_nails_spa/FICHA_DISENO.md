# Ficha de Diseño: NÜVA NAILS SPA (Luxury Nails & Video Scroll Engine)

Documentación técnica y tokens de diseño para **NÜVA NAILS SPA** en Apartadó, optimizada con motor interactivo de **Video Scroll Scrubbing en Canvas (300vh)** y adaptada a los estándares oficiales de [AGENTS.md](file:///c:/Users/Rio%20Belen/negocios_locales/AGENTS.md).

---

## 🎨 Paleta de Colores Exclusiva & Unicidad Estricta del Color Principal

Todos los acentos, firmas script, subtítulos, precios y micro-interacciones consumen estrictamente los tokens oficiales CSS:

| Rol | Token CSS | Valor HEX / Función | Aplicación |
|---|---|---|---|
| Acento Primario Oficial | `--color-accent` | `#9c6d53` | Precios, líneas de acento, bordes sutiles y hover |
| Acento Claro / Destacado | `--color-accent-light` | `#b8866a` | Firma script, subtítulo logo, rol especialista, itálicas `em` |
| Acento Oscuro | `--color-accent-dark` | `#7d543e` | Sombras y extremo de degradados |
| Acento Hover | `--color-accent-hover` | `#c49277` | Efectos hover dinámicos |
| Fondo Base Oscuro | `--bg-dark-base` | `#0f0e0e` | Hero Canvas, base general y bordes |
| Superficie Oscura | `--bg-dark-surface` | `#171515` | Tarjetas de equipo, cajas de reserva, footer |
| Superficie Clara | `--bg-light-base` | `#ebe4dc` | Fondos de Catálogo de Servicios y Ubicación |
| Degradado Primario | `--mocca-gradient` | `linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent) 50%, var(--color-accent-dark) 100%)` | Botones principales «Agendar», insignia VIP |
| Texto Claro Principal | `--text-dark-primary` | `#fcfaf7` | Tipografía display sobre fondos oscuros |
| Texto Claro Secundario | `--text-dark-secondary` | `#c9c0b8` | Párrafos y descripciones editoriales |

---

## ✍️ Tríada Tipográfica Forense

1. **Titulares Display**: `'Playfair Display'`, Georgia, serif (Elegancia clásica editorial para procedimientos de spa y uñas).
2. **Signature Script**: `'Alex Brush'`, cursive (Detalle caligráfico de autor en titulares de impacto y firmas `.hero-script-tag`).
3. **Cuerpo y UI**: `'Plus Jakarta Sans'`, sans-serif (Legibilidad contemporánea de alta fidelidad para lectura ágil y botones).

---

## 🎬 Sistema Hero Video Scroll Scrubbing (300vh Canvas Engine)

- **Canvas Viewport Fijo**: 100vh con interpolación fluida mediante `requestAnimationFrame`.
- **Fuentes Originales (`.agents/document/nail-negra-blanca`)**:
  - Desktop: `Woman_posing_for_beauty_campaign_20260913145627.mp4` (1280x720 nativo, 24 fps, modelo situada en la mitad derecha).
  - Mobile: `Create_promotional_nail_design_v…_20260913150408.mp4` (1080x1920 vertical nativo 9:16, 24 fps, modelo centrada con primer plano de uñas).
- **Doble Banco de Cuadros Calibrados (18 fps, 74 frames exactos)**:
  - `desktop/`: 74 fotogramas WebP (1920x1080 escalado Lanczos, Q85) + `poster.webp`.
  - `mobile/`: 74 fotogramas WebP (720x1280 escalado Lanczos 9:16, Q76) + `poster.webp`.
  - Peso total optimizado: Desktop 4.75 MB / Mobile 2.39 MB.
- **Overlay Aterciopelado Oficial (`.canvas-gradient-overlay`)**:
  - Desktop: Doble degradado (vertical suave 180° transparente al 65% + horizontal 90° de 8 paradas que protege el tercio izquierdo para tipografía dejando el 78% derecho traslúcido).
  - Mobile: Degradado vertical 180° que mantiene el 36% superior completamente transparente y genera contraste sólido (96%) en la base.
- **Anclaje Inferior Mandatorio & 60% Superior Despejado**:
  - `.hero-container-align`: `display: flex; align-items: flex-end; justify-content: flex-start; padding-bottom: clamp(40px, 7.5vh, 75px);`.
  - Los textos se anclan en el tercio inferior (`bottom: 0; left: 0;`), garantizando que la mirada, rostro y peinado de la modelo permanezcan 100% nítidos y sin obstrucción.
- **Narrativa Editorial en 2 Pasos (50% / 50%)**:
  - *Paso 1 (0% a 50%)*: "Belleza & Detalle *en Cada Uña.*" con botón directo a WhatsApp y enlace minimalista `.btn-hero-minimal-link` ("Ver Servicios ➔").
  - *Paso 2 (50% a 100%)*: "Arte & Perfección *que Perdura.*" enfocado en esculpido acrílico, soft gel y bioseguridad clínica.

---

## 🏛️ Estructura Oficial de Secciones (AGENTS.md)

1. **Smart Header**: Logotipo tipográfico puro sin íconos decorativos («NÜVA NAILS SPA»), **Navbar 100% transparente en el Hero** con `text-shadow`, fondo oscuro (`rgba(15, 14, 14, 0.96)`) con `backdrop-filter: blur(14px)` al salir del Hero (`currentScrollY > heroBottom - 120`), auto-hide inteligente en secciones inferiores y botón conciso **«Agendar»**.
2. **`#inicio`**: Hero Canvas 300vh con scroll scrubbing interactivo y poster fallback instantáneo.
3. **Barra de Pilares**: 5 sellos de confianza (*Esmaltes Prémium, Esterilización Clínica, Manicuristas Máster, Nail Art Exclusivo, Satisfacción Total*); en móvil deslizable por carrusel horizontal *Scroll Snap*.
4. **`#servicios`**: Grid de 3 columnas en escritorio / 2 columnas en móvil. Tarjetas *Full-Bleed Minimalistas* (3:4) con fotografía protagonista, degradado aterciopelado inferior, precio en `$ COP` y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros`**:
   - **Ambiente Coherente**: Fotografía real de salón de uñas con mesas de manicura y lámparas UV (`about-nuva-nails-manicurista.jpg`).
   - **Retrato Editorial del Equipo**: Grid de 4 columnas en escritorio (3:4.2) / Carrusel horizontal *Scroll Snap* en una sola fila con efecto «Peek» en móvil.
6. **`#ubicacion`**: Tarjeta elegante en Cra. 104 con Google Maps interactivo georreferenciado (`z=16`).
7. **Footer**: Enlaces de navegación y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Float**: Despeje seguro móvil (`safe-area-inset-bottom`), cero `overflow: hidden` recortador.
