# 🎨 Ficha de Diseño: La Mesa Paisa (Medellín)

## 🏛️ Identidad Visual & Propuesta de Valor
- **Negocio**: La Mesa Paisa
- **Categoría**: Restaurante de Comida Típica Colombiana & Parrilla
- **Ubicación**: Bolivar #70a-85 a 70a-27, Medellín, Antioquia
- **Propuesta**: Auténtica sazón campesina antioqueña, bandejas paisas abundantes, cazuelas de frijoles, sancochos en leña y carnes al carbón con pedidos ágiles a domicilio y atención familiar.

---

## 🎨 Paleta de Colores
- **Fondo Obsidian Principal**: `#111827` (Base oscura para máximo contraste gastronómico).
- **Fondo Footer Carbón**: `#0B0F19`.
- **Fondo Secciones Claras**: `#FFFFFF` y `#F9FAFB`.
- **Primario / Carmesí Brasa**: `#DC2626` (Botones de acción, enlaces activos, etiquetas de producto).
- **Acento / Naranja Fuego**: `#EA580C` (Gradientes y micro-acentos).
- **Dorado / Tono Cálido**: `#FDBA74` (Subtítulos, estrellas de calificación).
- **Verde WhatsApp / Éxito**: `#25D366` / `#10B981` (Badge de abierto y botón de WhatsApp).

---

## ✍️ Tipografía
- **Display / Titulares**: `Bebas Neue` (Mayúsculas editoriales de alto impacto).
- **Cuerpo / Textos**: `Plus Jakarta Sans` (Legibilidad óptima y moderna).

---

## 📱 Componentes & Arquitectura
- **Hero**: Panorámico inmersivo sin cortes (`<picture>` con `hero_la_mesa_paisa.webp` y `hero_la_mesa_paisa_mobile.webp`) y degradado horizontal ultraligero.
- **Navbar**: Obsidian glassmorphic sin íconos en el logotipo tipográfico.
- **Catálogo de Menú**: Tarjetas `.menu-card` con `data-product-title`, tags, precios sin ISO COP y botón de acción.
- **Footer**: 4 columnas aisladas con botón conciso `PEDIR`.
