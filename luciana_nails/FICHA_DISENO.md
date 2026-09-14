# Ficha de Diseño Forense: Luciana Nails (Clonación ATÚRA STUDIO & Video-to-Scroll)

Documentación técnica y tokens de diseño para **Luciana Nails** en Apartadó, basada en la referencia visual de lujo vanguardista **ATÚRA STUDIO / ART MANICURE** y el motor de animación de video en scroll canvas de alta fidelidad.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Deep Espresso Mocha | `#120e0d` | Fondo principal en Hero Canvas (fusión perfecta con video), Sobre Nosotros, Footer |
| Superficie Oscura | Velvet Obsidian Surface | `#181413` | Tarjetas de equipo, contenedores oscuros |
| Fondo Claro | Alabaster Pearl Cream | `#faf8f6` | Fondo contrastante de Servicios y Ubicación |
| Tarjeta Clara | Pure Linen Card | `#ffffff` | Tarjetas de catálogo de servicios |
| Acento Primario | Metallic Gold Foil | `#c5a059` | Botones principales, detalles dorados y líneas de acento |
| Acento Degradado | Gold Foil Shimmer | `linear-gradient(135deg, #e5c378 0%, #c5a059 50%, #9e7b35 100%)` | Botones CTA, insignias VIP |
| Texto Oscuro | Alabaster Silk White | `#faf8f6` | Títulos y textos principales sobre fondo oscuro |
| Texto Claro | Matte Charcoal | `#161414` | Títulos sobre fondo claro en servicios |
| Bordes | Gold Glass Border | `rgba(197, 160, 89, 0.22)` | Separadores y divisores finos |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Cinzel` / `Playfair Display` (Serifa mayúscula de impacto editorial de moda).
2. **Firma Caligráfica**: `Alex Brush` / `Pinyon Script` (Frase manuscrita estilizada *«Nail Fashion & Beauty»*).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif geométrica para badges, botones y descripciones).

---

## 🎬 Especificaciones del Motor de Scroll Video Canvas (`nail-canela-rojo`)

- **Fuentes de Entrada**:
  - Desktop: `Beauty_advertisement_video_creation_1080p_20260913132328.mp4` (1920x1080 nativo, 4.0s).
  - Mobile: `Crear_video_promocional_diseño_uñas_20260913133154.mp4` (1080x1920 vertical nativo 9:16, 4.0s).
- **Secuencia Extraída**: 72 cuadros WebP (`frame-0001.webp` ... `frame-0072.webp`) a 18 fps por vista.
- **Calibración Móvil**: Generación directa 9:16 nativa a 720x1280 Q76, con centrado óptico perfecto de la modelo y sus uñas rojo rubí con foil dorado.
- **Peso Promedio por Frame**: ~45 KB (Desktop 1080p) y ~35 KB (Mobile 720x1280).
- **Estructura de Scroll**: `height: 300vh;` con contenedor fijado `position: sticky; top: 0; height: 100dvh;`.
- **Regla Mandatoria CSS**: `overflow-x: clip;` en `html, body` para preservar el contexto de fijación sticky en navegadores móviles.
- **Degradado Aterciopelado**: `.canvas-gradient-overlay` progresivo para contraste óptimo del texto y máxima nitidez de la modelo.
- **Storytelling Editorial**: 2 pasos secuenciales sincronizados con el porcentaje de scroll (0-50%, 50-100%).

---

## 📐 Estructura Oficial de Secciones

1. **Smart Header**: Logotipo tipográfico puro a la izquierda + Menú desktop + Botón conciso «Agendar» a la derecha. En móvil (< 768px): eliminación de menú hamburguesa, soporte de safe-area top y proporciones móviles calibradas.
2. **`#inicio` (Hero Canvas Video Scroll Scrubbing — 300vh)**: Secuencia cinematográfica de 72 frames WebP sincronizada con scroll táctil/mouse, High-DPI Retina, poster fallback instantáneo y narrativa editorial en 2 pasos (50% / 50%). En móvil calibrado a `min-height: 720px !important;` con Safe Zone facial y anclaje inferior.
3. **Barra de Pilares / Garantías**: 5 sellos con carrusel horizontal deslizable (*Scroll Snap*), auto-scroll suave y pausa táctil en móvil.
4. **`#servicios` (Catálogo de Servicios)**: Grid 3 Columnas en Escritorio (`repeat(3, 1fr)`), 2 Columnas balanceadas en Móvil (`repeat(2, 1fr)`). Tarjetas Full-Bleed Minimalistas 3:4 con degradado aterciopelado (38% superior 100% transparente), sin píldoras superiores de duración, precio en COP y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas — Estándar Editorial)**:
   - Bloque Editorial con fotografía representativa de salón de manicura (`photo-1604654894610-df63bc536371`), badge flotante VIP, descripción cálida y fila de 4 métricas de autoridad (en 2 columnas en móvil).
   - Bloque Especialistas en Retrato Editorial Vertical (3:4.2): Grid de 4 Columnas en Escritorio y Carrusel Horizontal Deslizable (*Scroll Snap*) de una sola fila en Móvil con efecto Peek.
6. **`#ubicacion` (Mapa & Contacto)**: Panel de lujo oscuro obsidian y metallic gold foil con dirección en Av. Alfonso López, Apartadó, horarios y mapa embebido georreferenciado con fórmula oficial `z=16`.
7. **Footer**: Enlaces de navegación, redes sociales, marca tipográfica pura y módulo de reserva con botón conciso «Agendar».
8. **WhatsApp Float**: Botón circular flotante con despeje inferior seguro (`bottom: calc(28px + env(safe-area-inset-bottom, 0px))`), sin `overflow: hidden` y z-index prioritario.
