# Ficha de Diseño Forense — Blessed Barbería (Inspiración Legend Barber Shop)

Esta ficha técnica documenta la clonación visual, tipográfica y cromática adaptada de la imagen de referencia **Legend Barber Shop** para la web de **Blessed barbería** en Apartadó, Colombia.

---

## 🎨 1. Paleta de Colores Forense (Dark Luxury & Vintage Gold)

| Muestra | Nombre del Color | HEX | Uso Principal |
| :--- | :--- | :--- | :--- |
| ![#0c0d0f](https://via.placeholder.com/15/0c0d0f/000000?text=+) | **Obsidian Midnight** | `#0c0d0f` | Fondo base general, Canvas Hero y Navbar |
| ![#111215](https://via.placeholder.com/15/111215/000000?text=+) | **Dark Surface Noir** | `#111215` | Fondos de tarjetas, sección de experiencia y footer |
| ![#17191d](https://via.placeholder.com/15/17191d/000000?text=+) | **Elevated Surface** | `#17191d` | Hover de tarjetas, paneles y bloques de métricas |
| ![#d5a755](https://via.placeholder.com/15/d5a755/000000?text=+) | **Vintage Amber Gold** | `#d5a755` | Acentos primarios, botones CTA, estrellas y bordes activos |
| ![#e5bb68](https://via.placeholder.com/15/e5bb68/000000?text=+) | **Bright Gold Hover** | `#e5bb68` | Estados hover de botones primarios y enlaces |
| ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) | **Pure White** | `#ffffff` | Títulos display, nombres de servicios y textos de alto contraste |
| ![#a1a1aa](https://via.placeholder.com/15/a1a1aa/000000?text=+) | **Muted Zinc** | `#a1a1aa` | Descripciones secundarias, datos de horario y subtítulos |
| ![#27272a](https://via.placeholder.com/15/27272a/000000?text=+) | **Dark Border Subtle** | `#27272a` | Divisores, líneas sutiles y marcos de inputs |

---

## 🔤 2. Sistema Tipográfico

- **Display Principal (Hero & Títulos de Impacto)**: `'Oswald'`, sans-serif — Peso 600/700, mayúsculas con espaciado ajustado para replicar el impacto de *"MORE THAN A CUT. IT'S A LIFESTYLE."*.
- **Display Editorial (Secciones & Encabezados Elegantes)**: `'Cinzel'` y `'Playfair Display'`, serif — Peso 600, usado en *"Services We Offer"* y *"Precisión. Estilo. Confianza."*.
- **Cuerpo y Textos UI**: `'Plus Jakarta Sans'`, sans-serif — Pesos 400, 500 y 600 para máxima legibilidad en descripciones, botones y datos de contacto.
- **Detalle Caligráfico / Script**: `'Alex Brush'`, cursive — Usado en mini-etiquetas de autor y detalles sutiles.

---

## 📐 3. Componentes UI & Arquitectura Visual

1. **Header Inteligente (Smart Navbar)**:
   - Contenedor con `position: sticky; top: 0; z-index: 1000;`.
   - Logotipo 100% tipográfico (`.brand-logo`): Nombre "BLESSED BARBERÍA" en blanco display y subtítulo "BARBERÍA · APARTADÓ" en dorado suave. Cero íconos o emojis decorativos en el logo.
   - Botón conciso **«Agendar»** (`.btn-header-cta`) con fondo dorado ámbar y hover reactivo.
   - En móvil: Solo logo a la izquierda y botón «Agendar» a la derecha. Cero hamburguesa.
2. **Hero Canvas Video Scrubbing (300vh)**:
   - Sincronizado con los 72 frames extraídos de `0909(2).mp4`.
   - **2 capítulos editoriales optimizados que rotan con el scroll (50% / 50%)**:
     - **Paso 1 (0% a 50%)**: Gran titular principal de bienvenida (*"MÁS QUE UN CORTE. UN ESTILO DE VIDA."*) sin párrafo de descripción, botones directos y badge de Google 5.0★.
     - **Paso 2 (50% a 100%)**: Mensaje de valor de técnica/servicios (*"ARTE CLÁSICO & TENDENCIA URBANA"*) con la descripción completa (*"Cortes de precisión, fades limpios y afeitado tradicional con toalla caliente..."*) y botones secundarios.
   - Cero veladuras opacas globales para preservar la nitidez óptica del video.
   - Cobertura 100% Full Cover edge-to-edge sin franjas negras perimetrales.
3. **Barra de Pilares / Garantías**:
   - 4 sellos con íconos vectoriales dorados en contenedores con relieve suave: *Barberos Expertos*, *Productos Prémium*, *Higiene & Bioseguridad*, *Satisfacción Garantizada*.
   - En móvil (< 768px): Carrusel horizontal con **Scroll Snap** en una sola fila compacta.
4. **Catálogo de Servicios Full-Bleed 3:4**:
   - Grid de 3 columnas en desktop, 2 columnas en móvil.
   - Fotografías en relación 3:4, degradado aterciopelado inferior (38% superior transparente).
   - Título en blanco display, precio destacado en dorado y botón minimalista **`AGENDAR ➔`** conectado a WhatsApp.
5. **Sobre Nosotros & Equipo Editorial**:
   - Bloque de experiencia con fotografía de salón/silla de barbería en cuero y madera (`https://images.unsplash.com/photo-1585747860715-2ba37e788b70`), badge flotante 5.0★ y 4 métricas de autoridad.
   - Grid de 4 barberos en Retrato Editorial 3:4.2 (2 columnas en móvil) con sus nombres, especialidad, 5 estrellas y botón de agendamiento.
6. **Ubicación & Contacto**:
   - Datos reales de Apartadó (Cl. 104 #107-34) e iframe embebido de Google Maps con fórmula oficial georreferenciada `z=16`.
7. **Footer & Botón WhatsApp**:
   - Módulo de reserva con botón conciso **«Agendar»**.
   - Botón flotante de WhatsApp con despeje ergonómico `env(safe-area-inset-bottom)` y `z-index: 99999`.
