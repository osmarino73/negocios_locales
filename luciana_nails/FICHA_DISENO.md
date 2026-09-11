# Ficha de Diseño Forense: Luciana Nails (Clonación ATÚRA STUDIO)

Documentación técnica y tokens de diseño para **Luciana Nails** en Apartadó, basada en la referencia visual de lujo vanguardista **ATÚRA STUDIO / ART MANICURE**.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Matte Noir Espresso | `#0e0d0d` | Fondo principal en Hero, Sobre Nosotros, Footer |
| Superficie Oscura | Velvet Obsidian Surface | `#161414` | Tarjetas de equipo, contenedores oscuros |
| Fondo Claro | Alabaster Pearl Cream | `#faf8f6` | Fondo contrastante de Servicios y Ubicación |
| Tarjeta Clara | Pure Linen Card | `#ffffff` | Tarjetas de catálogo de servicios |
| Acento Primario | Metallic Gold Foil | `#c5a059` | Botones principales, detalles dorados |
| Acento Degradado | Gold Foil Shimmer | `linear-gradient(135deg, #e5c378 0%, #c5a059 50%, #9e7b35 100%)` | Botones CTA, insignias VIP |
| Texto Oscuro | Alabaster Silk White | `#faf8f6` | Títulos y textos principales sobre fondo oscuro |
| Texto Claro | Matte Charcoal | `#161414` | Títulos sobre fondo claro en servicios |
| Bordes | Gold Glass Border | `rgba(197, 160, 89, 0.22)` | Separadores y divisores finos |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Cinzel` / `Playfair Display` (Serifa mayúscula de impacto editorial de moda).
2. **Firma Caligráfica**: `Alex Brush` / `Pinyon Script` (Frase manuscrita estilizada *«Nail Fashion»*).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif geométrica para badges, botones y descripciones).

---

## 📐 Estructura Oficial de Secciones

1. **Smart Header**: Logotipo tipográfico puro a la izquierda + Menú desktop + Botón conciso «Agendar» a la derecha. En móvil (< 768px): eliminación de menú hamburguesa, soporte de safe-area top y proporciones móviles calibradas.
2. **`#inicio` (Hero Canvas Video Scroll Scrubbing — 300vh)**: Secuencia cinematográfica de 72 frames WebP sincronizada con scroll táctil/mouse, High-DPI Retina, poster fallback instantáneo y narrativa editorial en 2 pasos (50% / 50%). En móvil calibrado a `min-height: 720px !important;` con Safe Zone facial elevada y paneo dinámico.
3. **Barra de Pilares / Garantías**: 5 sellos con carrusel horizontal deslizable (*Scroll Snap*), auto-scroll suave y pausa táctil en móvil.
4. **`#servicios` (Catálogo de Servicios)**: Grid 3 Columnas en Escritorio (`repeat(3, 1fr)`), 2 Columnas balanceadas en Móvil (`repeat(2, 1fr)`). Tarjetas Full-Bleed Minimalistas 3:4 con degradado aterciopelado (38% superior 100% transparente), sin píldoras superiores de duración, precio en COP y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas — Estándar Editorial)**:
   - Bloque Editorial con fotografía representativa de salón de manicura (`photo-1527799820374-dcf8d9d4a388`), badge flotante VIP, descripción cálida y fila de 4 métricas de autoridad (en 2 columnas en móvil).
   - Bloque Especialistas en Retrato Editorial Vertical (3:4.2): Grid de 4 Columnas en Escritorio y Carrusel Horizontal Deslizable (*Scroll Snap*) de una sola fila en Móvil con efecto Peek.
6. **`#ubicacion` (Mapa & Contacto)**: Panel de lujo oscuro obsidian y metallic gold foil con dirección en Av. Alfonso López, Apartadó, horarios y mapa embebido georreferenciado con fórmula oficial `z=16`.
7. **Footer**: Enlaces de navegación, redes sociales, marca tipográfica pura y módulo de reserva con botón conciso «Agendar».
8. **WhatsApp Float**: Botón circular flotante con despeje inferior seguro (`bottom: calc(28px + env(safe-area-inset-bottom, 0px))`), sin `overflow: hidden` y z-index prioritario.
