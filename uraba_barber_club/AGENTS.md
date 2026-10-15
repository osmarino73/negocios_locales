# Guía de Agente e Instrucciones: Urabá Barber Club

Este proyecto contiene la landing page oficial para **Urabá Barber Club**, barbería y club masculino ubicado en **Apartadó, Antioquia**.

---

## 🎯 Identidad del Negocio

- **Nombre Comercial**: Urabá Barber Club
- **Rubro**: Barbería VIP & Club Masculino
- **Ubicación**: Cra. 100 #99-63, Apartadó, Antioquia, Colombia
- **Teléfono & WhatsApp**: (+57) 321 769 9315
- **Calificación**: 5.0 ★
- **Fuente de Verdad**: Consultar siempre `DATOS_NEGOCIO.json`.

---

## 📐 Estructura Mandatoria de Secciones

1. **`#inicio` (Hero Inmersivo Full-Width Bleed)**:
   - Imágenes dedicadas de alta fidelidad: `assets/hero_desktop.webp` (16:9) y `assets/hero_mobile.webp` (9:16).
   - Anclaje inferior en escritorio (`align-items: flex-end; padding-bottom: clamp(48px, 9vh, 85px);`) dejando el 60% superior despejado.
   - En móvil (< 768px): `min-height: 720px !important;` con textos centrados en la mitad inferior.
2. **Barra de Pilares / Garantías**:
   - 4 sellos con íconos de contorno dorado: Barberos Expertos, Productos Prémium, Higiene & Confort, Satisfacción Garantizada.
   - En móvil: Carrusel horizontal deslizable (Scroll Snap) en 1 fila.
3. **`#servicios` (Catálogo de Servicios)**:
   - 3 columnas en escritorio, 2 columnas en móvil.
   - Tarjetas Full-Bleed 3:4 con degradado inferior aterciopelado.
   - Footer en 2 filas: Fila 1 Precio 100% ancho (ej. `$25.000`), Fila 2 Enlace minimalista `AGENDAR ➔` a WhatsApp.
4. **`#nosotros` (Sobre Nosotros)**:
   - Layout 2 columnas: Foto de barbería clásica en cuero y madera (`photo-1585747860715-2ba37e788b70`) + Badge VIP.
   - Métricas: 5+ Años, 10K+ Cortes, 4 Barberos Máster, 5.0 Calificación Google.
5. **`#profesionales` (Nuestros Barberos)**:
   - 4 columnas en escritorio, carrusel horizontal con Scroll Snap y efecto «Peek» en móvil.
   - Retrato editorial 3:4.2 con nombre, rol, estrellas y agendamiento directo.
6. **`#ubicacion` (Mapa Interactivo & Contacto)**:
   - Panel de información + Google Maps con fórmula oficial georreferenciada (`z=16`).
7. **Footer**:
   - Logotipo tipográfico puro, datos de contacto, enlaces y botón conciso **«Agendar»**.
8. **Botón Flotante WhatsApp**:
   - `bottom: calc(28px + env(safe-area-inset-bottom, 0px)); right: max(20px, env(safe-area-inset-right, 20px));` y `z-index: 99999`.

---

## 🎨 Consumo Obligatorio de Tokens de Color

- Queda prohibido hardcodear colores en acentos, scripts, precios, subtítulos y botones.
- Todo acento debe usar `var(--color-accent)` (`#d5a755`).
- Fondo base: `var(--bg-dark)` (`#0c0d0f`).
- Tarjetas: `var(--bg-card)` (`#15161a`).

---

## 🚫 Restricciones Obligatorias

- **NO usar canvas video scroll scrubbing** en este proyecto (es estático fotográfico de alta fidelidad).
- **NO usar barra promocional superior** (`.promo-topbar`).
- **NO usar iconos ni emojis junto al logotipo** en header o footer.
- **NO usar barra de navegación inferior fija** (`.mobile-bottom-nav`, `.mobile-action-dock`).
- **NO usar `mask-image` en el contenedor hero**; usar el doble degradado aterciopelado vertical + horizontal.
- **NO usar sufijo COP** en los precios de las tarjetas.
