# Ficha de Diseño: Restaurante Sabor Casero Urabá — Cocina Criolla & Típica

Este documento establece la identidad visual, tipografía forense, paleta de colores y componentes según el estándar oficial mandatorio **[NICHO_RESTAURANTES_COMIDAS_RAPIDAS.md](file:///c:/Users/Rio%20Belen/negocios_locales/.agents/skills/negocio-local-html/NICHO_RESTAURANTES_COMIDAS_RAPIDAS.md)** (*Warm Gourmet Dark Luxury*), adaptado para **Restaurante Sabor Casero Urabá** en Apartadó, Antioquia.

---

## 🎨 1. Tríada de Paleta Cromática (Warm Gourmet Dark Luxury)

- **Color de Acento Principal (`--color-accent`)**: Amber Gold Warm `#c89b53` (Oro Ámbar Cálido de alta gastronomía para botones, subtítulo del logotipo, líneas de acento y precios destacados).
- **Color de Acento Secundario (`--color-secondary`)**: Soft Champagne Gold `#f0d59e` (Cinta de brillo champagne para estados itálicos y micro-interacciones hover).
- **Fondo Principal Oscuro (`--bg-dark`)**: Ébano Carbón Gourmand `#0d0e0d`.
- **Fondo de Tarjetas (`--bg-card`)**: Obsidiana Cálida `#151715`.
- **Texto Principal (`--text-light`)**: Blanco Puro `#ffffff` y Blanco Marfil `#f6f5f1`.
- **Texto Atenuado (`--text-muted`)**: Crema Suave `rgba(246, 245, 241, 0.74)`.
- **Bordes Elegantes (`--border-light`)**: `rgba(200, 155, 83, 0.20)`.
- **Bordes Suaves (`--border-soft`)**: `rgba(255, 255, 255, 0.10)`.

> **Regla de Unicidad**: Todo elemento de acento consume obligatoriamente `var(--color-accent)`.

---

## ✒️ 2. Tríada Tipográfica Forense

1. **Titulares Display & Marca (`--font-display`)**: `Cormorant Garamond` (Google Fonts, serif editorial de alta gama para gastronomía y titulares de impacto).
2. **Firmas Script Manuscritas (`--font-script`)**: `Caveat` (Google Fonts, trazo orgánico artesanal de hogar).
3. **Cuerpo de Texto & UI (`--font-sans`)**: `Plus Jakarta Sans` (Google Fonts, geometría limpia y ultra-legible para cartas, precios y navegación).

---

## 📐 3. Arquitectura Oficial de las 6 Secciones Mandatorias

1. **`#inicio` (Hero Full-Width Bleed al 100% de Ancho)**:
   - Fotografía del plato estrella en la capa posterior `.hero-bg-cover` ocupando **estrictamente el 100% del ancho del Hero (`width: 100%; left: 0;`)**.
   - Doble degradado aterciopelado (180deg + 90deg) para contraste y legibilidad absoluta sin veladuras pesadas sobre la comida.
   - Titular de impacto en 3 líneas con itálica dorada, eyebrow en mayúsculas espaciadas y firma manuscrita.
   - Acciones: Botón principal de pedido directo por WhatsApp (`[ WhatsApp ] PEDIR A DOMICILIO`) y enlace minimalista `VER MENÚ ➔`.
   - En móvil (< 768px): Altura mandatoria `min-height: 720px !important;` con textos centrados en la mitad inferior.

2. **Barra de Pilares / Garantías de Sabor**:
   - Franja de 5 sellos con íconos vectoriales (*Ingredientes Frescos, Domicilio en <30 Min, Receta Tradicional, Empaque Térmico VIP, Calificación 4.8★*).
   - En móvil (< 768px): Carrusel horizontal deslizable (*Scroll Snap*) en 1 sola fila compacta.

3. **`#servicios` (Catálogo de Menú, Buscador & Barra de Categorías)**:
   - **Buscador en tiempo real (`#menuSearchInput`)**: Campo de búsqueda redondeado estilo pill con ícono de lupa y botón de filtros.
   - **Barra de Categorías Interactivas (`.menu-categories-scroll`)**: Botones con íconos (*Todos, Bandejas Criollas, Pescados & Mariscos, Carnes & Asados, Sopas & Cazuelas, Bebidas de Urabá*).
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** para mostrar **estrictamente los 6 servicios/platos en 2 filas completas y equilibradas** (y 3 filas en **2 columnas en móvil** con tarjetas Full-Bleed Minimalistas 3:4), precio sin sufijo `COP` y enlace minimalista `PEDIR AHORA ➔`.

4. **`#nosotros` (Sobre Nosotros & Especialidades del Chef — Estándar Editorial)**:
   - **Bloque Editorial Sobre Nosotros (`.experience-layout`)**: Grid a 2 columnas con fotografía del restaurante/cocina (`.salon-image-showcase`) con badge flotante 12+ Años de Sazón, titular editorial, descripción apetitosa, 4 métricas numéricas (`.metrics-row`: 12+ Años Sazón, 80K+ Platos Servidos, <30m Tiempo Entrega, 4.8★ Google Maps) y botón de contacto directo.
   - **Bloque Especialidades del Chef / Platos Estrella (`.team-grid`)**: Grid de **4 columnas en escritorio** y carrusel horizontal en móvil (*Scroll Snap*) con 4 especialidades de la casa, precio y enlace directo a WhatsApp.

5. **`#ubicacion` (Sede & Domicilios)**:
   - Panel informativo con dirección física en Apartadó (*Cra. 102 #92a-20*), teléfonos, horarios de atención y Google Maps interactivo georreferenciado con fórmula nominal (`z=16`).

6. **Footer Principal**:
   - Logotipo tipográfico puro, redes sociales, horarios de atención y módulo de pedido rápido con botón conciso **«Pedir»**.
