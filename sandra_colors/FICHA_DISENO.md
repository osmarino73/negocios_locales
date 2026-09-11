# Ficha de Diseño: Sandra Color´s (Salón de Belleza & Color Studio)

Manual forense de identidad visual, tipografía, paleta cromática y arquitectura UI para **Sandra Color´s** en Apartadó, Antioquia.

---

## 🎨 1. Paleta de Colores Forense (Inspiración LUXEHAIR, Camel Rose & Dark Obsidian)

| Nombre del Color | Código HEX | Rol / Uso en la Interfaz |
| :--- | :--- | :--- |
| **Dark Obsidian Base** | `#0f0e0c` | Fondo del Hero inmersivo Canvas 300vh, footer y superficies oscuras. |
| **Dark Obsidian Surface** | `#181613` | Superficie de pilares de confianza y banners secundarios. |
| **Dark Obsidian Card** | `#201d19` | Fondo de tarjetas oscuras y contrastes de lujo. |
| **Camel Rose Primary** | `#c89376` | Color primario de marca, botones principales CTA, líneas de acento. |
| **Camel Rose Hover** | `#b57f63` | Hover de botones y transiciones cromáticas profundas. |
| **Champagne Rose Light** | `#e8c4ad` | Acentos caligráficos, estrellas de valoración, texto destacado. |
| **Soft Crema Marfil** | `#faf7f2` | Fondo global de la página (`body background`), tono cálido y limpio. |
| **Pure White** | `#ffffff` | Superficie de tarjetas de servicios, panel de mapas e información. |
| **Deep Charcoal Text** | `#22201e` | Titulares principales `<h1>`, `<h2>` y nombres de servicios. |
| **Muted Warm Gray** | `#66625d` | Párrafos descriptivos, subtítulos y metadatos secundarios. |

---

## 🔤 2. Tipografía y Jerarquía Visual

- **Fuente de Titulares Display**: `DM Serif Display` (Google Fonts, pesos `400`). Proyecta alta peluquería, distinción editorial y estilo clásico refinado.
- **Fuente de Acento Cursivo (Signature Script)**: `Alex Brush` (`font-style: italic`, tamaño `1.18em - 1.25em`). Para realces como *"Color, brillo & transformación"* y *"Movimiento, suavidad y sedosidad"*.
- **Fuente de Lectura & UI**: `Plus Jakarta Sans` (Google Fonts, pesos `300`, `400`, `500`, `600`, `700`). Máxima legibilidad, limpieza geométrica y nitidez moderna.

---

## 📐 3. Componentes y Layout Forense

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro sin emojis (`Sandra Color´s • Hair Salon & Color Studio • Apartadó`).
   - Sin Top Bar informativo (máxima limpieza visual).
   - Sticky transparente dentro del Hero; se activa `.scrolled-past-hero` con fondo obsidian y blur al bajar hacia las secciones inferiores.
   - Móvil: Menú hamburguesa eliminado, logo a la izquierda y botón conciso **«Agendar»** a la derecha.
2. **Hero Header Inmersivo con Canvas Video Scroll Scrubbing (300vh Track)**:
   - Motor Canvas 2D con 74 fotogramas WebP duales (Desktop 1920x1080 1080p / Móvil 608x1080 1080p nativo con encuadre centro-derecha `x = (iw-ow)*0.58`).
   - Degradado limpio calibrado que mantiene 100% visible a la modelo con su rotación de cabello y ondas sin veladuras oscuras.
   - Dos pasos narrativos editoriales sincronizados con el scroll.
   - En móvil: `min-height: 720px !important;` con textos centrados en la mitad inferior.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Estilistas Expertas, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Seguridad*).
   - Móvil: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila.
4. **Catálogo de Servicios (Grid 3 Columnas Escritorio / 2 en Móvil)**:
   - 6 tarjetas en formato Full-Bleed Minimalista (relación 3:4, fotografía protagonista al 100%, degradado inferior aterciopelado).
   - Precios claros en COP y botón minimalista `AGENDAR ➔` con micro-interacción hover directo a WhatsApp.
   - Cero badges de duración en la parte superior.
5. **Sobre Nosotros & Profesionales (Estándar Editorial)**:
   - Bloque editorial con fotografía de tocadores y estaciones de peinado (`photo-1560066984-138dadb4c035`), badge flotante VIP, titular cálido y 4 métricas de autoridad.
   - Bloque de profesionales en Grid de 4 columnas en escritorio con Retrato Editorial Full-Bleed (3:4.2) y Carrusel Horizontal con efecto Peek en móvil.
6. **Módulo de Ubicación Georreferenciado en Google Maps**:
   - Tarjeta informativa con dirección en Cra. 104 #103-61, Apartadó, horarios y Google Maps interactivo embebido con fórmula georreferenciada `z=16`.
7. **Footer Principal & WhatsApp Flotante**:
   - Enlaces de navegación, redes sociales, caja de reserva con botón conciso **«Agendar»**.
   - Botón flotante de WhatsApp con protección anti-corte móvil (`env(safe-area-inset-bottom)`).
