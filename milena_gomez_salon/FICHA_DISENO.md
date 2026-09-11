# Ficha de Diseño: Milena Gómez salon (Centro de Estética & Spa)

Manual forense de identidad visual, tipografía, paleta cromática y arquitectura UI para **Milena Gómez salon** en Apartadó, Antioquia.

---

## 🎨 1. Paleta de Colores Forense (Inspiración Rose Mauve, Warm Champagne & Dark Obsidian)

| Nombre del Color | Código HEX | Rol / Uso en la Interfaz |
| :--- | :--- | :--- |
| **Dark Obsidian Base** | `#131114` | Fondo del Hero inmersivo Canvas 300vh, footer y tarjetas oscuras. |
| **Dark Obsidian Card** | `#1c181e` | Superficie de tarjetas oscuras, overlays y contrastes de lujo. |
| **Rose Mauve Primary** | `#9b4b5c` | Color primario de marca, botones principales CTA, titulares acentuados. |
| **Deep Velvet Rose** | `#7c3444` / `#632230` | Hover de botones, degradados de acción y acentos profundos. |
| **Warm Champagne Gold** | `#c59b5f` | Detalles en oro cálido, líneas de acento, estrellas e iconografía de lujo. |
| **Soft Linen Background** | `#fcf8f8` | Fondo global de la página (`body background`), tono cálido y limpio. |
| **Pure White** | `#ffffff` | Superficie de tarjetas de servicios, panel informativo de mapas y modales. |
| **Deep Velvet Charcoal** | `#2b141c` | Titulares principales `<h1>`, `<h2>` y nombres de servicios. |
| **Muted Mauve Gray** | `#6c565e` | Párrafos descriptivos, subtítulos y metadatos secundarios. |

---

## 🔤 2. Tipografía y Jerarquía Visual

- **Fuente de Titulares Display**: `Playfair Display` (Google Fonts, pesos `500`, `600`, `700`, `800`). Proyecta alta cosmética, elegancia editorial y serenidad estética.
- **Fuente de Acento Cursivo (Signature Script)**: `Alex Brush` (`font-style: italic`, tamaño `1.18em - 1.25em`). Para realces como *"Cuidado experto & bienestar"* y *"Armonía, luminosidad y frescura"*.
- **Fuente de Lectura & UI**: `Plus Jakarta Sans` (Google Fonts, pesos `300`, `400`, `500`, `600`, `700`). Máxima nitidez y legibilidad moderna en cualquier resolución.

---

## 📐 3. Componentes y Layout Forense

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro sin emojis (`Milena Gómez salon • Estética & Bienestar • Apartadó`).
   - Sin Top Bar informativo (máxima limpieza visual).
   - Sticky con auto-hide tras pasar el Hero al descender y reaparición al subir.
   - Móvil: Menú hamburguesa eliminado, logo a la izquierda y botón conciso **«Agendar»** a la derecha.
2. **Hero Header Inmersivo con Canvas Video Scroll Scrubbing (300vh Track)**:
   - Motor Canvas 2D con 74 fotogramas WebP duales (Desktop 1080p / Móvil 720x1280 9:16 centrado).
   - Degradado de 8 paradas aterciopelado que mantiene visible a la modelo y garantiza 100% contraste de texto.
   - Dos pasos narrativos editoriales sincronizados con el scroll.
   - En móvil: `min-height: 720px !important;` con textos centrados en la mitad inferior.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Especialistas Certificadas, Cosmética Prémium, Higiene & Seguridad, Atención Personalizada, Satisfacción 5.0★*).
   - Móvil: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila.
4. **Catálogo de Servicios (Grid 3 Columnas Escritorio / 2 en Móvil)**:
   - 6 tarjetas en formato Full-Bleed Minimalista (relación 3:4, fotografía protagonista al 100%, degradado inferior aterciopelado).
   - Precios claros en COP y botón minimalista `AGENDAR ➔` con micro-interacción hover directo a WhatsApp.
   - Cero badges de duración en la parte superior.
5. **Sobre Nosotros & Profesionales (Estándar Editorial)**:
   - Bloque editorial con fotografía de cabina de relajación zen (`photo-1600334129128-685c5582fd35`), badge flotante VIP, titular cálido y 4 métricas de autoridad.
   - Bloque de profesionales en Grid de 4 columnas en escritorio con Retrato Editorial Full-Bleed (3:4.2) y Carrusel Horizontal con efecto Peek en móvil.
6. **Módulo de Ubicación Georreferenciado en Google Maps**:
   - Tarjeta informativa con dirección en Apartadó, horarios y Google Maps interactivo embebido con fórmula georreferenciada `z=16`.
7. **Footer Principal & WhatsApp Flotante**:
   - Enlaces de navegación, redes sociales, caja de reserva con botón conciso **«Agendar»**.
   - Botón flotante de WhatsApp con protección anti-corte móvil (`env(safe-area-inset-bottom)`).
