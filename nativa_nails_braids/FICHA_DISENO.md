# Ficha de Diseño Forense: Nativa Nails & Braids (Clonación LUXÉ NAIL STUDIO)

Documentación técnica y tokens de diseño para **Nativa Nails & Braids** en Apartadó, basada en la referencia visual de lujo sobrio y estética editorial **LUXÉ NAIL STUDIO**.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Deep Espresso Onyx | `#0d0b0a` | Fondo principal en Hero, Sobre Nosotros, Footer |
| Superficie Oscura | Cocoa Noir Surface | `#161311` | Tarjetas de equipo, contenedores oscuros |
| Fondo Claro | Warm Nude Champagne Cream | `#ebe4dc` | Fondo contrastante de Servicios y Ubicación |
| Tarjeta Clara | Pure Cream Linen Card | `#fbf8f5` | Tarjetas de catálogo de servicios |
| Acento Primario | Nude Camel Sand | `#cbb39c` | Botones principales, acentos destacados |
| Acento Degradado | Camel Gold Shimmer | `linear-gradient(135deg, #e4d3c3 0%, #cbb39c 50%, #ad947d 100%)` | Botones CTA, insignias VIP |
| Texto Oscuro | Champagne Linen White | `#fcfaf7` | Títulos y textos principales sobre fondo oscuro |
| Texto Claro | Espresso Charcoal | `#1a1614` | Títulos sobre fondo claro en servicios |
| Bordes | Warm Sand Glass Border | `rgba(203, 179, 156, 0.22)` | Separadores y divisores |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` / `Cormorant Garamond` (Serif editorial esbelta y de alta costura).
2. **Subtítulos & Firma**: `Alex Brush` / `Pinyon Script` (Elegancia manuscrita sutil).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif limpia y legible para badges y botones).

---

## 📐 Estructura Oficial de Secciones
1. **Smart Header**: Logotipo + Menú + Botón «Agendar» (en móvil: solo Logo y Botón «Agendar»).
2. **`#inicio` (Hero Full-Width Bleed)**: `640px` escritorio, `720px !important;` móvil.
3. **Barra de Pilares / Garantías**: 5 sellos con auto-scroll (3s) y pausa táctil en móvil.
4. **`#servicios`**: Grid 6 Columnas en Escritorio (`repeat(6, 1fr)`), 2 Columnas en Móvil.
5. **`#nosotros`**: Sobre Nosotros con foto VIP y 4 métricas de autoridad + Bloque Especialistas (4 Columnas en Escritorio, 2 Columnas en Móvil con badges ocultos en móvil).
6. **`#ubicacion`**: Cra. 97 #97 - 21, Apartadó + Mapa `z=16`.
7. **Footer**: Módulo de reserva con botón «Agendar».
8. **WhatsApp Float**: GPU acelerado, `overflow: hidden`, `z-index: 999999`.
