# Guía de Agente e Instrucciones del Repositorio: Sabor de Casa

Este repositorio contiene la landing page autónoma (*standalone*) de **Sabor de Casa — Cocina Criolla & Gourmet** en Apartadó, optimizada para SEO Local y conversión directa por WhatsApp.

---

## 🎯 Regla Mandatoria: Estructura Oficial de 6 Secciones

1. **`#inicio` (Hero Full-Width Bleed)**: Portada inmersiva con fotografía de alta fidelidad al 100% de ancho, titular display editorial de 3 líneas, descripción apetitosa y botón de pedido directo por WhatsApp.
2. **Barra de Pilares / Garantías de Sabor**: 5 sellos de confianza (*Sazón 100% Artesanal, Ingredientes Seleccionados, Entrega Térmica VIP, Higiene & Seguridad, Calificación 5.0★*). En móvil (<768px): Carrusel horizontal deslizable (*Scroll Snap*).
3. **`#servicios` (Catálogo de Menú, Buscador & Barra de Categorías)**: Buscador redondeado (`#menuSearchInput`), barra de categorías interactivas (`.category-btn`) con carrusel horizontal deslizable en móvil (< 768px) en 1 sola fila (`flex-wrap: nowrap; overflow-x: auto; scroll-snap-type: x mandatory;`), y grid 3 columnas en escritorio / 2 en móvil de tarjetas Full-Bleed Minimalistas.
4. **`#nosotros` (Sobre Nosotros & Especialidades del Chef)**: Layout a 2 columnas con foto de ambiente/cocina, badge flotante 5.0★, 4 métricas de autoridad y grid de 4 columnas en escritorio para platos recomendados.
5. **`#ubicacion` (Sede & Domicilios)**: Datos de ubicación, horarios de atención y Google Maps interactivo georreferenciado (`z=16`).
6. **Footer Principal**: Enlaces de navegación, redes sociales, horarios y módulo de pedido con botón conciso **«Pedir»**.
