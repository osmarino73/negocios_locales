# Ficha de Diseño: Sabor de Casa — Cocina Criolla & Gourmet

Este documento establece la identidad visual, tipografía forense, paleta de colores cromática y reglas de estilo extraídas directamente del arquetipo de referencia **Verde & Co. Modern Italian / Warm Gourmet Dark Luxury**, adaptado al proyecto de **Sabor de Casa** en Apartadó.

---

## 🎨 1. Tríada de Paleta Cromática (Warm Gourmet Dark Luxury)

- **Color de Acento Principal (`--color-accent`)**: Amber Gold Warm `#c89a4b` (Oro Ámbar Cálido de alta gastronomía).
- **Color de Acento Secundario (`--color-secondary`)**: Soft Champagne Gold `#f0d59e` (Cinta de brillo champagne).
- **Fondo Principal Oscuro (`--bg-dark`)**: Ébano Carbón Gourmand `#0d0e0d`.
- **Fondo de Tarjetas (`--bg-card`)**: Obsidiana Cálida `#151715`.
- **Texto Principal (`--text-light`)**: Blanco Puro `#ffffff` y Blanco Marfil `#f4f4f2`.
- **Texto Atenuado (`--text-muted`)**: Crema Suave `rgba(244, 244, 242, 0.72)`.
- **Bordes Elegantes (`--border-light` / `--border-soft`)**: `rgba(200, 154, 75, 0.18)`.

---

## ✒️ 2. Tríada Tipográfica Forense

1. **Titulares Display & Marcas (`--font-display`)**: `Cormorant Garamond` (Google Fonts, serif editorial de alto impacto para gastronomía fina).
2. **Firmas Script Manuscritas (`--font-script`)**: `Caveat` (Google Fonts, trazo orgánico artesanal).
3. **Cuerpo de Texto & UI (`--font-sans`)**: `Plus Jakarta Sans` (Google Fonts, geometría limpia y ultra-legible).

---

## 📐 3. Componentes Visuales Clave

1. **Hero Full-Width Bleed Inmersivo**:
   - Fotografía gastronómica de alta definición a pantalla completa.
   - Gradiente de protección aterciopelado (180deg + 90deg) para contraste del texto.
   - Titular display de 3 líneas con acentos dorados en itálica (`<em>`).
   - Botón principal de agendamiento/pedido por WhatsApp y enlace minimalista.

2. **Catálogo de Menú con Buscador & Categorías Interactivas**:
   - Buscador estilo *Pill* (`#menuSearchInput`) con ícono de lupa y botón dorado de filtros.
   - Barra de categorías (`.category-btn`) (*Todos, Platos Criollos, Cortes Especiales, Pescados & Mariscos, Entradas & Sopas, Postres & Bebidas*).
   - **Móvil (< 768px)**: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila (`flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory; flex: 0 0 auto; min-width: 88px;`).

3. **Métricas de Autoridad & Historia Editorial (`#nosotros`)**:
   - Grid 2 columnas con fotografía del salón/cocina, badge flotante 5.0★, 4 métricas numéricas (Años de Sazón, Platos Servidos, Tiempo Domicilio, 5.0★ Google) y botón de pedido.

4. **Sección de Platos Estrella / Especialidades del Chef**:
   - Grid 4 columnas en escritorio y carrusel horizontal en móvil.
