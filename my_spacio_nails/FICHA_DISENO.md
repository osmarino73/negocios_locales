# Ficha de Diseño Forense: My Spacio Nails (Clonación LUXÉ NAIL STUDIO)

Documentación técnica y tokens de diseño para **My Spacio Nails** en Apartadó, basada en la referencia visual de lujo sobrio y estética editorial **LUXÉ NAIL STUDIO** combinada con Video Scroll Scrubbing de alta fidelidad.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Deep Espresso Onyx | `#0d0b0a` | Fondo principal en Hero, Servicios, Sobre Nosotros, Ubicación, Footer |
| Superficie Oscura | Cocoa Noir Surface | `#161311` | Tarjetas de catálogo, especialistas y contenedores |
| Superficie Elevada | Velvet Coffee Charcoal | `#1f1a17` | Paneles de mapa, iconos y badges |
| Acento Primario | Nude Camel Sand | `#cbb39c` | Acentos tipográficos, líneas de corte y detalles |
| Acento Luminoso | Warm Champagne Gold | `#e4d3c3` | Subtítulos script, reflejos y estados hover |
| Acento Degradado | Camel Gold Shimmer | `linear-gradient(135deg, #e4d3c3 0%, #cbb39c 50%, #ad947d 100%)` | Botones CTA principales e insignias VIP |
| Texto Claro Principal | Champagne Linen White | `#fcfaf7` | Títulos display y textos de alto contraste |
| Texto Secundario | Muted Sandstone | `#c9c0b8` | Párrafos y descripciones editoriales |
| Bordes | Warm Sand Glass Border | `rgba(203, 179, 156, 0.2)` | Separadores y divisores finos |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` (Serif editorial esbelta, elegante y de alta costura).
2. **Subtítulos & Firma**: `Alex Brush` (Firma caligráfica fluida para frases script *«Nail Spa & Esthetic»*).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif limpia y geométrica para badges, botones y descripciones).

---

## 📐 Estructura Oficial de Secciones

1. **Smart Header**: Logotipo tipográfico puro a la izquierda (`.brand-logo`) + Menú desktop + Botón conciso «Agendar» a la derecha. Navbar 100% transparente en el Hero sin fondos opacos ni bordes. En móvil (< 768px): eliminación de menú hamburguesa, soporte de safe-area top (`padding-top: env(safe-area-inset-top, 0px)`) y proporciones calibradas para evitar recortes. Auto-hide inteligente activo únicamente fuera del Hero.
2. **`#inicio` (Hero Canvas Video Scroll Scrubbing — 300vh)**:
   - Fuentes de entrada: Desktop `morena-web copy.mp4` (1920x1080) y Móvil `morena -movil.mp4` (1080x1920 nativo).
   - Secuencia cinematográfica de 74 frames WebP por vista sincronizada con scroll táctil/mouse (`requestAnimationFrame`).
   - Soporte High-DPI Retina con `devicePixelRatio`.
   - Poster fallback instantáneo anti-flashes negros (`poster.webp`).
   - Cobertura 100% full-cover edge-to-edge sin encogimiento artificial.
   - Capa de degradado aterciopelado `.canvas-gradient-overlay` (horizontal en desktop, vertical en móvil).
   - Narrativa editorial en 2 capítulos secuenciales (50% / 50%). En móvil calibrado a `min-height: 720px !important;` con textos anclados en la base (`top: auto; bottom: 0;`), dejando el 44% superior completamente despejado.
3. **Barra de Pilares / Garantías**: 5 sellos de confianza con carrusel horizontal deslizable (*Scroll Snap*), auto-scroll fluido cada 3s y pausa táctil en móvil.
4. **`#servicios` (Catálogo de Servicios)**: Grid 3 Columnas en Escritorio (`repeat(3, 1fr)`), 2 Columnas balanceadas en Móvil (`repeat(2, 1fr)`). Tarjetas Full-Bleed Minimalistas 3:4 con degradado aterciopelado (38% superior 100% transparente), sin píldoras superiores de duración, precio en COP destacado y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas — Estándar Editorial)**:
   - Bloque Editorial con fotografía representativa de salón de manicura (`photo-1527799820374-dcf8d9d4a388`), badge flotante VIP, descripción cálida y fila de 4 métricas de autoridad (en 2 columnas en móvil).
   - Bloque Especialistas en Retrato Editorial Vertical (3:4.2): Grid de 4 Columnas en Escritorio y Carrusel Horizontal Deslizable (*Scroll Snap*) de una sola fila en Móvil con efecto Peek.
6. **`#ubicacion` (Mapa & Contacto)**: Panel de lujo oscuro obsidian y camel sand con dirección en Apartadó, horarios y mapa embebido georreferenciado con fórmula oficial `z=16`.
7. **Footer**: Enlaces de navegación, redes sociales, marca tipográfica pura y módulo de reserva con botón conciso «Agendar».
8. **WhatsApp Float**: Botón circular flotante con despeje inferior seguro (`bottom: calc(28px + env(safe-area-inset-bottom, 0px))`), sin `overflow: hidden` y z-index prioritario (999999).
