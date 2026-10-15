# Guía de Continuidad para Agentes de IA: Slou Food

Este archivo contiene el contexto mandatorio para mantener y evolucionar la landing page de **Slou Food** en Apartadó, Antioquia.

---

## 📌 Identidad del Negocio
- **Negocio:** Slou Food (Fast & Fresh Gourmet)
- **Categoría:** Restaurante / Comidas Rápidas & Hamburguesería Artesanal
- **Dirección:** Diagonal 100 Nro 105e-62, Apartadó, Antioquia
- **Contacto WhatsApp:** +57 324 490 7848
- **Estilo Base:** Clonación de la referencia visual **Burger Hub** (Dark Sizzling Gourmet, `#121316` pizarra oscura, `#F7A81B` cheddar gold, `Bebas Neue` + `Caveat` + `Plus Jakarta Sans`).

---

## 🛡️ Reglas Específicas de Implementación
1. **Hero Full-Width Bleed Oscuro**:
   - La fotografía `hero_slou.webp` se ubica en el fondo con anclaje a la derecha en escritorio y `object-position: center 8%` en móvil.
   - En escritorio, el degradado horizontal `#121316` se desvanece suavemente a transparente hacia el 50% para dejar la comida completamente limpia y apetitosa.
   - En móvil, el degradado vertical mantiene el 68% superior completamente transparente para no tapar la hamburguesa.
2. **Cinta Flotante de Categorías**:
   - Tarjeta blanca `#FFFFFF` con iconos lineales de las 6 categorías. En móvil se desliza horizontalmente mediante `scroll-snap-type: x mandatory`.
3. **Catálogo Bestsellers**:
   - Grid de tarjetas oscuras con bordes de luz tenue, precios en amarillo dorado y botones circulares de pedido rápido `+`.
4. **Navegación Móvil**:
   - Header móvil incluye el botón de menú hamburguesa (`.btn-mobile-menu`) para abrir el drawer lateral con navegación fluida y CTA a WhatsApp.
   - El botón flotante de WhatsApp utiliza `bottom: calc(28px + env(safe-area-inset-bottom, 0px))` para evitar cortes con barras del sistema móvil.
