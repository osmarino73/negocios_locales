# Ficha de Diseño Forense: NÜVA NAILS SPA (Clonación ATIFOVA NAILS)

Documentación técnica y tokens de diseño para **NÜVA NAILS SPA** en Apartadó, basada en la referencia visual contemporánea **ATIFOVA NAILS (Desktop & Mobile)**.

---

## 🎨 Paleta de Colores Forense

| Rol | Nombre | HEX | Uso |
|---|---|---|---|
| Fondo Base Oscuro | Deep Obsidian Graphite | `#0f0e0e` | Fondo principal en Hero, Sobre Nosotros, Footer |
| Superficie Oscura | Cocoa Graphite Surface | `#171515` | Tarjetas de equipo, contenedores oscuros |
| Fondo Claro | Warm Sand Linen | `#ebe4dc` | Fondo contrastante de Servicios y Ubicación |
| Tarjeta Clara | Pure Linen Card | `#fbf8f5` | Tarjetas de catálogo de servicios |
| Acento Primario | Warm Caramel Mocca | `#9c6d53` | Botones principales, pastillas y acentos |
| Acento Degradado | Mocca Caramel Shimmer | `linear-gradient(135deg, #b8866a 0%, #9c6d53 50%, #7d543e 100%)` | Botones CTA, insignias VIP |
| Texto Oscuro | Linen White | `#fcfaf7` | Títulos y textos principales sobre fondo oscuro |
| Texto Claro | Espresso Charcoal | `#171515` | Títulos sobre fondo claro en servicios |
| Bordes | Mocca Glass Border | `rgba(156, 109, 83, 0.22)` | Separadores y divisores finos |

---

## ✍️ Tríada Tipográfica

1. **Titulares Display**: `Playfair Display` / `Plus Jakarta Sans` (Geométrica moderna en mayúsculas con espaciado editorial).
2. **Firma Caligráfica**: `Alex Brush` (Frase manuscrita sutil en el Hero).
3. **Cuerpo y UI**: `Plus Jakarta Sans` (Sans-serif limpia y legible para badges y botones).

---

## 📐 Estructura Oficial de Secciones
1. **Smart Header**: Logotipo + Menú + Botón «Agendar» (en móvil: solo Logo y Botón «Agendar»).
2. **`#inicio` (Hero Full-Width Bleed)**: `640px` escritorio, `720px !important;` móvil.
3. **Barra de Pilares / Garantías**: 5 sellos con auto-scroll (3s) y pausa táctil en móvil.
4. **`#servicios`**: Grid 6 Columnas en Escritorio (`repeat(6, 1fr)`), 2 Columnas en Móvil.
5. **`#nosotros`**: Sobre Nosotros con foto VIP y 4 métricas de autoridad + Bloque Especialistas (4 Columnas en Escritorio, 2 Columnas en Móvil con badges ocultos en móvil).
6. **`#ubicacion`**: Cra. 104, Apartadó + Mapa `z=16`.
7. **Footer**: Módulo de reserva con botón «Agendar».
8. **WhatsApp Float**: GPU acelerado, `overflow: hidden`, `z-index: 999999`.
