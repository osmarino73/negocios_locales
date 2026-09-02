# Ficha de Diseño Forense: Nail Art Sede Apartado (Clonación ATÚRA STUDIO)

Documentación técnica y tokens de diseño para **Nail Art Sede Apartado** en Apartadó, basada en la referencia visual de lujo vanguardista **ATÚRA STUDIO / ART MANICURE**.

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
2. **Firma Caligráfica**: `Alex Brush` / `Pinyon Script` (Frase manuscrita estilizada *«Nail Fashion & Beauty»*).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif geométrica para badges, botones y descripciones).

---

## 📐 Estructura Oficial de Secciones
1. **Smart Header**: Logotipo + Menú + Botón «Agendar» (en móvil: solo Logo y Botón «Agendar»).
2. **`#inicio` (Hero Full-Width Bleed)**: `640px` escritorio, `720px !important;` móvil.
3. **Barra de Pilares / Garantías**: 5 sellos con auto-scroll (3s) y pausa táctil en móvil.
4. **`#servicios`**: Grid 6 Columnas en Escritorio (`repeat(6, 1fr)`), 2 Columnas en Móvil.
5. **`#nosotros`**: Sobre Nosotros con foto VIP y 4 métricas de autoridad + Bloque Especialistas (4 Columnas en Escritorio, 2 Columnas en Móvil con badges ocultos en móvil).
6. **`#ubicacion`**: La Martina, Cra 95 #N° 96 - 60, Apartadó + Mapa `z=16`.
7. **Footer**: Módulo de reserva con botón «Agendar».
8. **WhatsApp Float**: GPU acelerado, `overflow: hidden`, `z-index: 999999`.
