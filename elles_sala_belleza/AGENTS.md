# Instrucciones para Agentes de IA: Elles Sala de Belleza & Tienda Cosmética

Este directorio contiene la landing page oficial y el Triángulo de Contexto IA para **Elles Sala de Belleza & Tienda Cosmética**, ubicada en Apartadó, Antioquia.

---

## 🎯 Secciones Oficiales Implementadas

1. **`#inicio` (Hero Canvas Video Scroll Scrubbing — 300vh)**:
   - Motor interactivo de scroll scrubbing en Canvas HTML5 con 74 fotogramas WebP ultra ligeros (extraídos de `.agents/document/nail_A-1`).
   - Doble banco calibrado: `public/frames/desktop/` (1920x1080 Q85) y `public/frames/mobile/` (720x1280 Q76 9:16 nativo).
   - `.canvas-gradient-overlay` aterciopelado con curva eased horizontal (0% a 24% oscuro, 100% transparente desde el 78%).
   - **Anclaje Inferior Mandatorio & 60% Superior Despejado**: Contenedor anclado al fondo (`align-items: flex-end; padding-bottom: clamp(40px, 7.5vh, 75px);`), dejando libre y nítido el rostro y joyas de la modelo.
   - Enlace minimalista `.btn-hero-minimal-link` (`Ver Servicios ➔`) y badge social con calificación 4.9★.
2. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Cosmética Prémium, Colorimetría Máster, Estilistas Expertas, Bioseguridad Total, Satisfacción Total*).
   - En móvil (< 768px): Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila compacta con desplazamiento táctil fluido.
3. **`#servicios` (Catálogo de Servicios — Grid 3 Columnas)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil**.
   - Tarjetas **Full-Bleed Minimalistas** (3:4) con fotografía protagonista al 100%, degradado aterciopelado inferior, precio destacado en COP y botón minimalista `AGENDAR ➔`.
4. **`#nosotros` (Sobre Nosotros & Retrato Editorial)**:
   - Bloque editorial con fotografía de tocadores y estaciones de peinado (`photo-1560066984-138dadb4c035`), badge VIP flotante, 4 métricas de autoridad.
   - Equipo en formato **Retrato Editorial** (3:4.2): 4 columnas en escritorio / Carrusel horizontal *Scroll Snap* con efecto «Peek» en móvil.
5. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo en Barrio El Salvador con Google Maps interactivo georreferenciado (`z=16`).
6. **Footer Principal**:
   - Enlaces de navegación, contacto y módulo de reserva con botón conciso **«Agendar»**.

---

## 📱 Reglas Críticas

- **Hero Móvil**: `min-height: 720px !important;`, degradado con el 36% superior 100% transparente y textos en la mitad inferior.
- **Unicidad Estricta del Color Principal**: Consumo obligatorio de `var(--color-accent)` (`#d49b78` Oro Rosa Camel Glow). Prohibidos los colores hardcoded.
- **Header Inteligente**: Logotipo tipográfico puro («Elles Belleza & Cosmética»), auto-hide inteligente fuera del hero y botón conciso **«Agendar»**.
- **WhatsApp Float**: Despeje seguro inferior (`bottom: calc(28px + env(safe-area-inset-bottom, 0px));`), sin `overflow: hidden` recortador.
