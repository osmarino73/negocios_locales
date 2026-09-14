# Guía de Agentes e Instrucciones de Mantenimiento: Dp Beauty Nails

Bienvenido a la carpeta de **Dp Beauty Nails** (Apartadó, Antioquia). Este documento contiene las instrucciones obligatorias y directrices técnicas para que cualquier IA o desarrollador continúe, mantenga o actualice este proyecto con total coherencia.

---

## 💅 Identidad del Negocio y Nicho

- **Nombre Comercial**: Dp Beauty Nails
- **Rubro**: Salón de manicura, pedicura, nail art y extensiones acrílicas
- **Ubicación Física**: Cra. 97 #98-20, Apartadó, Antioquia, Colombia
- **Teléfono / WhatsApp**: (+57) 300 507 8357
- **Fórmula de Google Maps Nominal**:
  `https://maps.google.com/maps?q=Dp+Beauty+Nails,+Cra.+97+%2398-20,+Apartad%C3%B3,+Antioquia,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed`

---

## 🎬 Arquitectura Técnica: Video-to-Scroll Canvas

Este proyecto implementa reproducción de video sincronizada con el scroll del usuario mediante Canvas HTML5:

1. **Videos de Entrada**:
   - Desktop: `uñas_morena.mp4` (16:9, 1920x1080, 4.0s).
   - Mobile: `uñas_morena-movil.mp4` (9:16 vertical nativo, 1080x1920, 4.0s).
2. **Ubicación de Fotogramas**:
   - Desktop (1920x1080 Q85): `public/frames/desktop/frame-%04d.webp` (74 frames) + `poster.webp`
   - Mobile (720x1280 Q76 vertical nativo): `public/frames/mobile/frame-%04d.webp` (74 frames) + `poster.webp`
3. **Script de Regeneración**:
   - Si se cambia el video base, ejecutar `node scripts/extract-frames.js [nuevo_video.mp4]`.
4. **Regla Crítica de CSS**:
   - `html, body` debe mantener siempre `overflow-x: clip;` y **NUNCA** `overflow-x: hidden;`, ya que este último anula la fijación `position: sticky` en navegadores móviles.
5. **Encuadre y Cobertura Edge-to-Edge**:
   - En el bucle de renderizado del Canvas, se aplica escala 100% full-cover (`Math.max(cw / iw, ch / ih)`) sin barras negras ni encogimientos artificiales.
   - Capa de degradado aterciopelado `.canvas-gradient-overlay` progresivo (horizontal en escritorio, vertical en móvil) que garantiza 100% contraste tipográfico manteniendo la modelo y sus uñas radiantes y nítidas.

---

## 📐 Estructura Oficial de Secciones Mandatoria

Toda actualización debe respetar sin excepciones las siguientes secciones:

1. **Smart Header / Navbar**:
   - Logotipo tipográfico puro (`brand-name` + `brand-subtitle`). Prohibido añadir íconos de tijeras, coronas o gemas junto al texto.
   - En móvil: Logotipo a la izquierda y botón conciso **«Agendar»** a la derecha. Cero botón de menú hamburguesa.
   - Comportamiento sticky inteligente: visible en el Hero; auto-hide al scrollear hacia abajo en secciones intermedias y reaparición al subir.
2. **`#inicio` (Hero Canvas Video Scrubbing)**:
   - Contenedor 300vh con Canvas 100dvh, anclaje inferior con 60% superior despejado y 2 pasos de storytelling editorial secuencial (50%/50%) con firma script, eyebrow técnico, titular display y acciones asimétricas.
3. **Barra de Pilares / Garantías**:
   - 4 sellos de confianza con iconografía estilizada.
   - En móvil (< 768px): carrusel horizontal con *scroll-snap* en 1 sola fila.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 columnas en escritorio** y **2 columnas en móvil**.
   - Tarjetas 3:4 con fotografía al 100%, degradado inferior aterciopelado, precio visible y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque de salón con fotografía de mesas de manicura y manicurista en atención (`about-nuva-nails-manicurista.jpg`), badge VIP y 4 métricas de autoridad.
   - Grid de **4 columnas de especialistas en escritorio** y **2 columnas en móvil** con formato Retrato Editorial (3:4.2) y enlace a WhatsApp.
6. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo y Google Maps georreferenciado nominal embebido (`z=16`).
7. **Footer**:
   - Módulo de reserva con botón conciso **«Agendar»**.
8. **Botón Flotante de WhatsApp**:
   - Botón circular perimetral con `safe-area-inset-bottom`.
   - **Prohibición Estricta**: Queda prohibido añadir barras de acciones inferiores fijas (`.mobile-bottom-nav` o `.mobile-action-dock`). La navegación móvil es minimalista.

---

## 🎨 Tríada de Diseño (Inspirada en Glowora)

- **Colores**: Porcelana crema (`#fdf8f7`), Blush Rose (`#d87d7d`), Deep Rose (`#c56868`), Deep Obsidian Noir (`#0d0b0d`).
- **Unicidad Estricta del Color Principal**: Todo acento editorial (`.hero-script-tag`, `.hero-title em`, `.brand-subtitle`, `.team-role`, `.service-card-price`, líneas de acento y botones) debe consumir estrictamente `var(--color-accent)`. Queda prohibido usar colores hexadecimales fijos (*hardcoded*) en estos elementos.
- **Fuentes**: `Playfair Display` (Display Editorial), `Alex Brush` (Firma caligráfica), `Plus Jakarta Sans` (UI y cuerpo).
- **Idioma**: 100% en español natural colombiano. Cero anglicismos procedentes de plantillas.
