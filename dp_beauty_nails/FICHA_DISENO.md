# Ficha de Diseño Forense: Dp Beauty Nails (Clonación LUXE NAIL STUDIO)

Documentación técnica y tokens de diseño para **Dp Beauty Nails** en Apartadó, basada en la referencia visual de alta gama **LUXE NAIL STUDIO**.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Deep Obsidian Espresso | `#121012` | Fondo principal en Hero, Sobre Nosotros, Footer |
| Superficie Oscura | Velvet Cocoa Surface | `#1a1618` | Tarjetas de equipo, contenedores oscuros |
| Fondo Claro | Soft Cashmere Cream | `#fbf6f4` | Fondo contrastante de Servicios y Ubicación |
| Tarjeta Clara | Pure Cream Card | `#ffffff` | Tarjetas de catálogo de servicios |
| Acento Primario | Dusty Rose Gold | `#d99b9b` | Botones principales, acentos destacados |
| Acento Degradado | Rose Gold Shimmer | `linear-gradient(135deg, #f2c7c7 0%, #d99b9b 50%, #b87b7b 100%)` | Botones CTA, insignias VIP |
| Texto Oscuro | Rose Quartz White | `#fcf8f8` | Títulos y textos principales sobre fondo oscuro |
| Texto Claro | Charcoal Espresso | `#1a1416` | Títulos sobre fondo claro en servicios |
| Bordes | Rose Glass Border | `rgba(217, 155, 155, 0.22)` | Separadores y divisores |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` / `Cormorant Garamond` (Serif de alta moda, pesos 600-700).
2. **Firma Caligráfica**: `Pinyon Script` / `Alex Brush` (Frase manuscrita de autor en el Hero y subtítulos).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif geométrica para badges, botones y descripciones).

---

## 📐 Estructura Oficial de Secciones
1. **Smart Header**: Logotipo + Menú + Botón «Agendar» (en móvil: solo Logo y Botón «Agendar»).
2. **`#inicio` (Hero Full-Width Bleed)**: `640px` escritorio, `720px !important;` móvil.
3. **Barra de Pilares / Garantías**: 5 sellos con auto-scroll (3s) y pausa táctil en móvil.
4. **`#servicios`**: Grid 6 Columnas en Escritorio (`repeat(6, 1fr)`), 2 Columnas en Móvil.
5. **`#nosotros`**: Sobre Nosotros con foto VIP y 4 métricas de autoridad + Bloque Especialistas (4 Columnas en Escritorio, 2 Columnas en Móvil con badges ocultos en móvil).
6. **`#ubicacion`**: Cra. 97 #98-20, Apartadó + Mapa `z=16`.
7. **Footer**: Módulo de reserva con botón «Agendar».
8. **WhatsApp Float**: GPU acelerado, `overflow: hidden`, `z-index: 999999`.
