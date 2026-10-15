# Ficha de Diseño Forense: Natalia Morelo Magic Secret (Referencia LUXÉ SALON)

Documentación técnica y tokens de diseño para **Natalia Morelo Magic Secret** en Apartadó, clonado con precisión forense a partir del diseño de referencia **LUXÉ SALON**: paleta oscura espresso obsidian con acentos camel sand, tipografía editorial *Cinzel* / *Playfair Display*, caligrafía *Alex Brush* y cuerpo en *Plus Jakarta Sans*.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Noir Espresso | `#0d0b0a` | Fondo principal en Hero, Pilares, Servicios, Ubicación, Footer |
| Superficie Oscura | Velvet Surface | `#161311` | Fondo de tarjetas de servicios, panel de mapa, banners |
| Elevación / Cards | Mocha Card | `#201b18` | Estados hover, métricas en modo oscuro |
| Acento Primario | Camel Gold | `#cbb092` | Botones principales, acento itálico, líneas decorativas, estrellas |
| Acento Luminoso | Champagne Sand | `#e4d3c3` | Eyebrows técnicos, hover de enlaces minimalistas |
| Acento Profundo | Aged Bronze | `#9c8065` | Sombras tonales, bordes de acento |
| Superficie Clara | Alabaster Cream | `#f7f4ef` | Bloque editorial de "Sobre Nosotros" |
| Texto Claro Primario | Soft White Silk | `#fcfaf7` | Títulos display sobre fondo oscuro |
| Texto Claro Secundario | Sandstone Warm | `#c9c0b8` | Párrafos y descripciones sobre fondo oscuro |
| Texto Oscuro Primario | Dark Espresso | `#171412` | Títulos display sobre fondo claro |
| Texto Oscuro Secundario | Soft Charcoal | `#524941` | Párrafos sobre fondo claro |
| Bordes Oscuros | Glass Camel Border | `rgba(203, 176, 146, 0.22)` | Divisores y tarjetas en modo oscuro |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Cinzel` & `Playfair Display` (500, 600, 700) — Elegancia editorial clásica, alta moda y sofisticación.
2. **Firma Caligráfica**: `Alex Brush` (cursive) — Trazos orgánicos y fluidos para frases de marca de autor (*«Belleza & Estilo»*, *«Tu mejor corona»*).
3. **Cuerpo de Texto y UI**: `Plus Jakarta Sans` (300, 400, 500, 600, 700, 800) — Sans-serif moderna con legibilidad insuperable en pantallas móviles y desktop.

---

## 📐 Estructura Oficial de Secciones

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro: `NATALIA MORELO <span>MAGIC SECRET</span>` + subtítulo `Centro de Estética & Belleza Capilar • Apartadó`.
   - Navbar 100% transparente en el Hero; fondo obsidian blur al descender en secciones secundarias.
   - En escritorio: Enlaces de navegación + Botón «Agendar» (`.btn-header-cta`).
   - **En móvil (< 768px)**: Prohibido el botón «Agendar» (`.btn-header-cta { display: none !important; }`), reservando el 100% del ancho para el logotipo tipográfico sin cortes.
2. **`#inicio` (Hero Canvas Video Scroll Scrubbing Inmersivo)**:
   - Contenedor de scroll de `300vh` con Canvas HTML5 sincronizado mediante `requestAnimationFrame` y precarga asíncrona.
   - **Doble Calibración Nativa (75 fotogramas WebP por versión)**:
     - **Desktop (16:9 - 1920x1080 Q85)**: Extraído de video 1080p con modelo en la segunda mitad ($x \approx 1440$), dejando la mitad izquierda limpia para el bloque editorial.
     - **Mobile (9:16 - 720x1280 Q76)**: Extraído de video nativo vertical donde la modelo luce look natural con manos enmarcadas, gira mostrando el trenzado y culmina con look glamuroso completo.
   - `poster.webp` estático de carga instantánea que previene pantallas negras y desaparece suavemente al renderizar el primer frame.
   - Doble degradado aterciopelado orgánico (horizontal + vertical inferior) para contraste total sin oscurecer a la modelo arriba.
   - **Narrativa Editorial en 2 Pasos (50% / 50%)**:
     - *Paso 1 (0% a 50%)*: Gran titular de bienvenida de máximo impacto (*«Tu cabello,<br>tu mejor corona.»*), script *«Belleza & Estilo»*, botones CTA y badge 5.0★ Google Reviews.
     - *Paso 2 (50% a 100%)*: Mensaje de técnica y procedimientos (*«El secreto de un cabello<br>radiante y saludable.»*), script *«Magia & Transformación»*, descripción persuasiva y botones de agendamiento.
   - En móvil: Textos centrados en el tercio inferior, `overflow-x: clip;` para blindar `position: sticky`.
3. **Barra de Pilares / Garantías (5 Sellos de Confianza)**:
   - *Productos Prémium, Estilistas Expertos, Cuidado Natural, Atención Personalizada, Satisfacción Total*.
   - En móvil: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila compacta.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 Columnas en Escritorio (`repeat(3, 1fr)`)** y **2 Columnas Balanceadas en Móvil**.
   - Fotografía inmersiva al 100% (relación 3:4), degradado inferior aterciopelado, precio en ancho completo sin sufijo `COP` y enlace minimalista `AGENDAR ➔` directo a WhatsApp.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque Editorial con fotografía representativa de salón de belleza capilar (`photo-1560066984-138dadb4c035`), badge flotante VIP, titular de impacto y 4 métricas de autoridad (+8 años, +3.500 clientas, 100% bioseguridad, 5.0★ Google).
   - Bloque de Especialistas: **4 columnas en escritorio** con formato **Retrato Editorial Vertical (3:4.2)**; en móvil carrusel horizontal deslizable (*Scroll Snap*) con efecto «Peek».
6. **`#ubicacion` (Mapa Georreferenciado & Contacto)**:
   - Cl. 99A #108-103 a 108-35, Apartadó, Antioquia + Google Maps embebido georreferenciado (`z=16`).
7. **Footer Principal**:
   - Logotipo tipográfico puro, horarios, enlaces rápidos y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante Anti-Corte**:
   - Despeje con `env(safe-area-inset-bottom)`, z-index 999999 y mensaje directo precargado.
