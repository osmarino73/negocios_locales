# Contexto de IA: NÜVA NAILS SPA (Apartadó, Antioquia)

Instrucciones y contexto específico para el mantenimiento y evolución de **NÜVA NAILS SPA**.

---

## 🏛️ Identidad y Clonación Forense
- **Referencia Visual**: Minimalismo oscuro contemporáneo, fondos deep obsidian `#0f0e0e`, acentos en warm caramel mocca (`--color-accent: #9c6d53;` y `--color-accent-light: #b8866a;`), contrastes en sand linen `#ebe4dc`, tipografía display clásica (`Playfair Display`), firma de autor (`Alex Brush`) y legibilidad moderna (`Plus Jakarta Sans`).
- **Unicidad Estricta del Color Principal**: Todos los textos destacados, firmas script, itálicas `em`, subtítulo del logotipo, precios y líneas de acento consumen exclusivamente `var(--color-accent)` o `var(--color-accent-light)`.
- **Copywriting**: Directo, cálido y enfocado en el público local de Apartadó, destacando el spa de uñas, durabilidad del esmaltado y bioseguridad.

---

## 🎬 Sistema de Video Scroll Scrubbing (Canvas HTML5)
- **Archivos Fuente (`.agents/document/nail-negra-blanca`)**:
  - `Woman_posing_for_beauty_campaign_20260913145627.mp4` (Desktop 16:9, modelo situada a la derecha).
  - `Create_promotional_nail_design_v…_20260913150408.mp4` (Mobile 9:16 vertical nativo, modelo centrada en primer plano).
- **Desktop (16:9)**: 74 fotogramas WebP en `public/frames/desktop/` (1920x1080 Q85) + `poster.webp`.
- **Mobile (9:16 Vertical Nativo)**: 74 fotogramas WebP en `public/frames/mobile/` (720x1280 Q76) + `poster.webp`.
- **Renderizado**: Canvas HTML5 en wrapper sticky de 300vh, interpolación fluida mediante `requestAnimationFrame` y poster fallback de carga instantánea sin pantallas negras.
- **Anclaje Inferior Mandatorio & 60% Superior Despejado**:
  - `.hero-container-align` anclado a la base (`display: flex; align-items: flex-end; justify-content: flex-start; padding-bottom: clamp(40px, 7.5vh, 75px);`).
  - Capas de texto `.hero-scroll-step` en `bottom: 0; left: 0;`, garantizando que el 60% superior de la pantalla permanezca completamente limpio para el rostro, manos y peinado de la modelo.
- **Doble Degradado Aterciopelado (`.canvas-gradient-overlay`)**:
  - Combinación de degradado vertical (180deg) transparente al 65% con curva horizontal (90deg) de 8 paradas para máximo contraste tipográfico sin veladuras sobre el video.

---

## 📌 Estructura Oficial de Secciones (Mandatoria)
1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro (sin iconos ni emojis).
   - **Navbar 100% transparente en el Hero**: Permanece transparente y visible durante todo el recorrido del Canvas.
   - Activa fondo oscuro `#0f0e0e` con blur al salir del Hero (`currentScrollY > heroBottom - 120`). Auto-hide suave al descender en secciones inferiores.
   - En móvil (< 768px): Logotipo a la izquierda y botón conciso **«Agendar»** a la derecha sin botón hamburguesa.
2. **`#inicio` (Canvas Video Scroll Scrubbing - 300vh)**:
   - Escritorio: Textos anclados en el tercio inferior izquierdo con enlace minimalista `.btn-hero-minimal-link` («Ver Servicios ➔»), video nítido a la derecha.
   - Móvil: Calibración inferior (`align-items: flex-end; min-height: 720px !important;`), textos en la mitad inferior con `hero-scroll-step` en `bottom: 0`, dejando las uñas y el rostro de la modelo 100% visibles.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza. En móvil: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila con auto-scroll suave (3s) y pausa al tacto.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 Columnas en Escritorio (`repeat(3, 1fr)`)** y **2 Columnas Balanceadas en Móvil**. Fotografía 100% inmersiva (3:4), degradado inferior, precio destacado y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque Editorial: Fotografía real de salón de manicura con mesas de manicura y lámparas UV (`about-nuva-nails-manicurista.jpg`) + badge VIP flotante + 4 métricas de autoridad + botón de contacto.
   - Bloque Profesionales: 4 especialistas en formato Retrato Editorial Vertical (3:4.2) en **4 Columnas en Escritorio** y **Carrusel Horizontal Deslizable (*Scroll Snap*) en Móvil** con efecto «Peek».
6. **`#ubicacion` (Mapa & Contacto)**:
   - Cra. 104, Apartadó + Google Maps interactivo embebido georreferenciado (`z=16`).
7. **Footer Principal**:
   - Logotipo tipográfico, horarios, enlaces rápidos y tarjeta de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**:
   - Despeje `env(safe-area-inset-bottom)`, sin recorte y enlace directo con mensaje predeterminado.
