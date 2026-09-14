# Contexto de IA: Luciana Nails (Apartadó, Antioquia)

Instrucciones y contexto específico para el mantenimiento y evolución de **Luciana Nails**.

---

## 🏛️ Identidad y Clonación Forense
- **Referencia Visual**: *ATÚRA STUDIO / ART MANICURE* combinada con motor de video en scroll canvas en alta resolución.
- **Paleta de Colores**: Deep Espresso Mocha (`#120e0d`), Velvet Obsidian (`#181413`), Metallic Gold Foil (`#c5a059`), Alabaster Cream (`#faf8f6`).
- **Unicidad Estricta del Color Principal**: Todo acento editorial (`.hero-script-tag`, `.hero-title em`, `.brand-tagline`, `.team-role`, `.service-card-price`, líneas de acento y botones) debe consumir estrictamente `var(--color-gold)`. Queda prohibido quemar colores fijos (*hardcoded*).
- **Tipografía**: *Cinzel* / *Playfair Display* (display), *Alex Brush* (firma caligráfica), *Plus Jakarta Sans* (cuerpo y UI).
- **Copywriting**: Directo, cálido y enfocado en el público local de Apartadó, destacando el arte en manicura, uñas esculpidas y pedicura sin tecnicismos pomposos (*«de autor»*).

---

## 🎬 Motor de Scroll Video Canvas (`nail-canela-rojo`)
- **Videos Fuente**:
  - Desktop: `.agents/document/nail-canela-rojo/Beauty_advertisement_video_creation_1080p_20260913132328.mp4` (1920x1080 nativo, 4.0s).
  - Mobile: `.agents/document/nail-canela-rojo/Crear_video_promocional_diseño_uñas_20260913133154.mp4` (1080x1920 nativo 9:16, 4.0s).
- **Frames**: 72 cuadros WebP por vista en `public/frames/desktop/` y `public/frames/mobile/`.
- **Anclaje Inferior Mandatorio**: En desktop, contenedor alineado al fondo con al menos el 60% superior despejado para la modelo, sus manos y joyas.
- **Doble Degradado Aterciopelado**: `.canvas-gradient-overlay` para máximo contraste y legibilidad tipográfica.

---

## 📌 Estructura Oficial de Secciones (Mandatoria)
1. **Smart Header**: Sin barra superior promocional. Móvil: Logo tipográfico puro (izq) y botón conciso **«Agendar»** (der) sin botón hamburguesa.
2. **`#inicio` (Hero Canvas Video Scroll Scrubbing — 300vh)**: Desktop anclaje inferior con 60% superior despejado; móvil estrictamente `min-height: 720px !important;`.
3. **Barra de Pilares / Garantías**: 5 sellos de confianza. En móvil: Carrusel horizontal en 1 fila con auto-scroll suave (3s) y pausa al tacto.
4. **`#servicios` (Catálogo de Manicura & Pedicura)**: Grid de **3 Columnas en Escritorio (`repeat(3, 1fr)`)**, estrictamente **2 Columnas en Móvil**. Tarjetas Full-Bleed 3:4 con degradado inferior aterciopelado.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque Editorial: Foto de salón VIP (`photo-1604654894610-df63bc536371`), badge flotante, 4 métricas de autoridad (en 2 columnas en móvil) y botón directo.
   - Bloque Profesionales: 4 especialistas en Retrato Editorial Vertical (3:4.2). En desktop: **4 Columnas (`repeat(4, 1fr)`)**; en móvil: Carrusel horizontal deslizable (*Scroll Snap*) con efecto Peek.
6. **`#ubicacion` (Mapa & Contacto)**: Av. Alfonso López, Apartadó + Google Maps interactivo georreferenciado (`z=16`).
7. **Footer Principal**: Tarjeta de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**: `env(safe-area-inset-bottom)`, sin `overflow: hidden`, z-index prioritario.
