# Instructions for AI Agents — ANGELA SPA & BELLEZA

Este repositorio contiene el sitio web de producción 100% autónomo (*standalone*) para **ANGELA SPA & BELLEZA** (Centro de estética en Montería, Córdoba).

---

## 🎯 Regla Mandatoria: Estructura Oficial de Secciones

1. `#inicio` (Hero Full-Width Bleed): Portada inmersiva con fotografía WebP de alta gama, 60% superior despejado, anclaje inferior, doble gradiente aterciopelado, firma caligráfica script, titular display y botones.
2. **Barra de Pilares / Garantías**: 5 sellos de confianza (Estilistas Expertos, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Seguridad). En móvil: carrusel horizontal scroll snap.
3. `#servicios` (Catálogo de Servicios): Grid 3 columnas en escritorio, 2 columnas en móvil. Formato Full-Bleed Minimalista (3:4), footer de dos filas independientes (Fila 1: Precio 100% ancho sin COP; Fila 2: `AGENDAR ➔`).
4. `#nosotros` (Sobre Nosotros & Nuestros Profesionales):
   - Bloque Editorial Sobre Nosotros (`.experience-layout`): Grid 2 cols, fotografía de ambiente zen spa (`.salon-image-showcase`), badge VIP flotante, 4 métricas de autoridad (2 cols en móvil) y botón de contacto.
   - Bloque Nuestros Profesionales (`.team-grid`): Grid 4 cols en escritorio, retratos editoriales (3:4.2), rol cálido, 5★ y enlace `AGENDAR ➔`. En móvil: carrusel horizontal deslizable (*Scroll Snap*) con tarjetas de 255px de ancho y efecto peek.
5. `#ubicacion` (Mapa & Contacto): Panel informativo + Google Maps embebido con fórmula georreferenciada (`z=16`).
6. **Footer Principal**: Enlaces, datos de contacto, redes, horarios y módulo de reserva con botón conciso **«Agendar»**.

---

## 💅 Reglas de Estilo & Identidad Visual
- **Tríada Cromática**: Fondo Ébano Obsidiana (`#0c0c0d`), Tarjetas Oscuras (`#161619`), Acento Terracota Nude / Camel Rose (`#D98A6C`).
- **Unicidad Estricta del Color Principal**: Todos los acentos (firmas script `.hero-script-tag`, énfasis display `.hero-title em`, subtítulo de marca `.brand-subtitle`, precios, roles y botones) **deben consumir estrictamente la variable CSS `var(--color-accent)`**. Prohibido quemar valores HEX/RGB en estos elementos.
- **Logotipo Tipográfico Puro**: Prohibido añadir iconos o emojis decorativos junto al nombre del negocio en el header o footer.
- **Sin Navbar Inferior en Móvil**: Prohibido añadir menús o docks fijos inferiores. Navegación móvil únicamente con Smart Header y botón flotante de WhatsApp.
