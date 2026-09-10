# Ficha de Diseño Forense: Dp Beauty Nails (Inspiración Glowora & Video-to-Scroll)

Documentación técnica y tokens de diseño para **Dp Beauty Nails** en Apartadó, Antioquia. Basada en la referencia visual prémium **Glowora** (*Reveal Your Natural Glow*) combinada con un motor de reproducción de video en scroll canvas en alta resolución.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | HSL / CSS | Uso |
|---|---|---|---|---|
| Fondo Base Oscuro | Deep Obsidian Noir | `#0d0b0d` | `hsl(300, 8%, 5%)` | Fondo en Hero Canvas (fusión perfecta con video 1080p) y Footer |
| Superficie Oscura | Velvet Noir Surface | `#151214` | `hsl(300, 7%, 8%)` | Contenedores oscuros, footer y tarjetas nocturnas |
| Fondo Base Claro | Porcelain Warm Blush | `#fdf8f7` | `hsl(10, 40%, 98%)` | Fondo principal en Secciones (Pilares, Servicios, Nosotros, Ubicación) |
| Superficie Tarjeta | Pure Silk White | `#ffffff` | `hsl(0, 0%, 100%)` | Tarjetas de servicios, paneles y cajas informativas |
| Acento Primario | Blush Rose Glow | `#d87d7d` | `hsl(0, 54%, 67%)` | Botones principales, precios, detalles editoriales y enlaces |
| Acento Intenso | Deep Rose Terracotta | `#c56868` | `hsl(0, 45%, 59%)` | Hover de botones, badges y énfasis visual |
| Acento Degradado | Glowora Rose Shimmer | — | `linear-gradient(135deg, #e89c9c 0%, #d87d7d 50%, #b85b5b 100%)` | Botones de agendamiento, pills y acentos de marca |
| Texto Principal Oscuro | Matte Espresso Noir | `#1a1617` | `hsl(345, 9%, 10%)` | Títulos y textos destacados sobre fondos claros |
| Texto Secundario | Dusty Rose Gray | `#6e6264` | `hsl(347, 6%, 41%)` | Descripciones, subtítulos y metadatos |
| Texto Blanco Puro | Silk Cloud White | `#ffffff` | `hsl(0, 0%, 100%)` | Textos sobre Hero Canvas y pie de página |
| Bordes & Glass | Soft Blush Border | — | `rgba(216, 125, 125, 0.20)` / `#f2dfdf` | Separadores perimetrales, divisores y micro-líneas |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` (Google Fonts: pesos 600, 700). Serifa editorial sofisticada con ligaduras limpias inspirada en revistas de alta moda y cosmética de autor.
2. **Firma Caligráfica / Script**: `Alex Brush` (Google Fonts: regular). Trazos fluidos para detalles de autor y frases destacadas (*«Arte en tus manos»*).
3. **Cuerpo y Elementos UI**: `Plus Jakarta Sans` (Google Fonts: pesos 400, 500, 600, 700). Sans-serif moderna, geométrica y con excelente legibilidad en pantallas móviles Retina.

---

## 🎬 Especificaciones del Motor de Scroll Video Canvas

- **Fuente de Entrada**: `0909.mp4` (1920x1080 nativo, 6 segundos, modelo con uñas de autor y detalles en oro).
- **Secuencia Extraída**: 72 cuadros WebP (`frame-0001.webp` ... `frame-0072.webp`) a 12 fps.
- **Peso Promedio por Frame**: ~40 KB (Desktop 1080p) y ~16 KB (Mobile 720x1280). Total secuencia móvil: 1.19 MB.
- **Estructura de Scroll**: `height: 300vh;` con contenedor fijado `position: sticky; top: 0; height: 100dvh;`.
- **Regla Mandatoria CSS**: `overflow-x: clip;` en `html, body` para preservar el contexto de fijación sticky en navegadores móviles.
- **Encuadre Óptico Holgado**: En el bucle de Canvas, escala base con factor `0.90` para asegurar que las manos y la mirada de la modelo tengan holgura estética sin recortes en bordes.
- **Storytelling Editorial**: 3 pasos secuenciales sincronizados con el porcentaje de scroll (0-33%, 33-66%, 66-100%).

---

## 📐 Estructura Oficial de Secciones Mandatoria

1. **Smart Header / Navbar**:
   - Logotipo tipográfico puro: `DP BEAUTY NAILS` + subtítulo `SALÓN DE MANICURA · APARTADÓ`. Prohibición de íconos o emojis junto al nombre.
   - Enlaces de navegación desktop: Inicio, Pilares, Servicios, Nosotros, Ubicación.
   - Botón conciso **«Agendar»**.
   - En móvil (< 768px): Exclusivamente Logotipo a la izquierda y Botón «Agendar» a la derecha. Cero menú hamburguesa innecesario.
   - Comportamiento sticky inteligente: Visible en el Hero; auto-hide al bajar en secciones inferiores y reaparición al subir.
2. **`#inicio` (Hero Canvas Video Scrubbing)**:
   - Contenedor interactivo 300vh con Canvas 100dvh.
   - 3 capítulos editoriales con sombras tipográficas legibles (`text-shadow`) y CTA directo a WhatsApp.
   - Poster fallback instantáneo para carga sin parpadeos.
3. **Barra de Pilares / Garantías**:
   - 4 sellos de confianza con tratamiento visual tipo pill glass: *Manicura Rusa & Semipermanente, Extensiones Acrílicas Esculpidas, Spa Pedicura Relajante, Bioseguridad 100% Esterilizada*.
   - En móvil (< 768px): Carrusel horizontal con *scroll-snap* táctil fluido en 1 sola fila.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 columnas en escritorio** y **2 columnas en móvil**.
   - Tarjetas 3:4 con fotografía al 100%, degradado inferior aterciopelado, precio en COP visible y enlace minimalista `AGENDAR ➔` con micro-animación de flecha.
5. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales)**:
   - Bloque experiencia a 2 columnas con fotografía del salón con mesas de manicura y lámparas (`photo-1527799820374-dcf8d9d4a388`), badge VIP flotante y 4 métricas de autoridad (+8 años, +4.500 clientas, 100% higiene, 5.0★).
   - Bloque de 4 especialistas en formato Retrato Editorial (3:4.2) en grid de 4 columnas (2 en móvil) con WhatsApp directo.
6. **`#ubicacion` (Mapa Interactivo & Datos de Contacto)**:
   - Dirección física en Cra. 97 #98-20, Apartadó, horarios y teléfonos.
   - Google Maps interactivo embebido con fórmula georreferenciada nominal (`z=16`).
7. **Footer Principal**:
   - Información de contacto, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.
8. **Botón Flotante de WhatsApp**:
   - Botón circular perimetral con `bottom: calc(28px + env(safe-area-inset-bottom, 0px))` y `right: max(20px, env(safe-area-inset-right, 20px))`. Cero menús inferiores fijos que compitan con él.
