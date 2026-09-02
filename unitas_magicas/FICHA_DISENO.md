# Ficha de Diseño Forense: Uñitas Mágicas 💅 (Clonación NAILÉ ART STUDIO)

Documentación técnica y tokens de diseño para **Uñitas Mágicas 💅** en Apartadó, basada en la referencia visual chic y femenina **NAILÉ ART STUDIO / NAIL ART THAT SPEAKS YOU**.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Luminoso | Soft Blush Cream | `#fdf8f6` | Fondo principal general |
| Superficie Pura | Milk Porcelain Card | `#ffffff` | Tarjetas de catálogo de servicios y contenedores |
| Superficie Tintada | Soft Rose Quartz Tint | `#fbebee` | Fondos de secciones alternas |
| Acento Primario | Chic Rose Berry | `#d84b75` | Botones principales, acentos destacados |
| Acento Degradado | Rose Berry Shimmer | `linear-gradient(135deg, #f27297 0%, #d84b75 50%, #b3325a 100%)` | Botones CTA, insignias VIP |
| Texto Principal | Espresso Berry | `#2c1820` | Títulos y titulares de alta legibilidad |
| Texto Secundario | Rose Taupe Charcoal | `#5a3d46` | Párrafos y descripciones |
| Texto Muted | Soft Blush Muted | `#8f737c` | Subtítulos y detalles de soporte |
| Bordes | Soft Rose Quartz Border | `rgba(216, 75, 117, 0.18)` | Separadores y divisores finos |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` (Serifa de lujo editorial y acabado de moda).
2. **Firma Caligráfica**: `Alex Brush` (Frase manuscrita estilizada *«That Speaks You / Magia en Cada Detalle»*).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif geométrica para badges, botones y descripciones).

---

## 📐 Estructura Oficial de Secciones
1. **Smart Header**: Logotipo + Menú + Botón «Agendar» (en móvil: solo Logo y Botón «Agendar»).
2. **`#inicio` (Hero Full-Width Bleed)**: `640px` escritorio, `720px !important;` móvil.
3. **Barra de Pilares / Garantías**: 5 sellos con auto-scroll (3s) y pausa táctil en móvil.
4. **`#servicios`**: Grid 6 Columnas en Escritorio (`repeat(6, 1fr)`), 2 Columnas en Móvil.
5. **`#nosotros`**: Sobre Nosotros con foto VIP y 4 métricas de autoridad + Bloque Especialistas (4 Columnas en Escritorio, 2 Columnas en Móvil con badges ocultos en móvil).
6. **`#ubicacion`**: Barrio Obrero, Apartadó + Mapa `z=16`.
7. **Footer**: Módulo de reserva con botón «Agendar».
8. **WhatsApp Float**: GPU acelerado, `overflow: hidden`, `z-index: 999999`.
