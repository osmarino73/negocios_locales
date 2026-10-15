# Guía de Agentes e Instrucciones del Repositorio: DALI Saloom - Alta peluqueria

Este directorio contiene la página web de producción 100% autónoma (*standalone*) para **DALI Saloom - Alta peluqueria** en Montería, Colombia, construida bajo el Estándar de Negocios Locales y animación Canvas HTML5 Video Scrubbing.

---

## 🎯 Regla Mandatoria: Estructura Oficial de Secciones del Sitio Web

Toda modificación o expansión debe mantener la secuencia oficial de secciones:

1. **`#inicio` (Hero Full-Width Bleed Canvas Video Scrubbing)**:
   - Portada inmersiva con Canvas HTML5 a 300vh, animación de scroll sincronizada con los fotogramas WebP en `public/frames/{desktop|mobile}/`, titular de impacto editorial, firma script `Alex Brush`, 60% superior despejado y anclaje inferior.
2. **Barra de Pilares / Garantías**:
   - Franja de 5 sellos de confianza. En móvil (< 768px): Carrusel horizontal deslizable (*Scroll Snap*).
3. **`#servicios` (Catálogo de Servicios)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil (`repeat(2, 1fr)`)**. Tarjetas Full-Bleed Minimalistas (relación 3:4), degradado aterciopelado inferior, precio en Fila 1 y enlace minimalista `AGENDAR ➔` en Fila 2.
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales)**:
   - Bloque Editorial con imagen de ambiente de peluquería (`photo-1560066984-138dadb4c035`), badge flotante VIP y 4 métricas de autoridad.
   - Bloque Nuestros Profesionales (`.team-grid`): **4 columnas en escritorio** y **Carrusel Horizontal Deslizable (*Scroll Snap*) en móvil** con tarjetas retrato editorial (3:4.2) y efecto «Peek».
5. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo y Google Maps interactivo embebido con fórmula georreferenciada (`z=16`).
6. **Footer Principal**:
   - Navegación, redes sociales, datos y módulo de reserva con botón conciso **«Agendar»**.

---

## 🎨 Unicidad Estricta del Color Principal & CSS Tokens

- **Variable CSS Oficial**: `var(--color-accent)` (`#cbb39c`).
- **Colores Hardcoded Prohibidos**: Queda terminantemente prohibido quemar valores HEX en firmas script, énfasis itálicos de titulares, subtítulos de marca, roles de especialistas, precios y botones.

---

## 📁 Estructura de Archivos del Proyecto

```text
dali_saloom/
├── public/
│   └── frames/
│       ├── desktop/              # ~74 frames WebP (1920x1080 Q85) + poster.webp
│       └── mobile/               # ~74 frames WebP (720x1280 Q76) + poster.webp
├── index.html                    # Landing page 100% autónoma HTML5/CSS3/JS
├── DATOS_NEGOCIO.json            # Fuente única de verdad comercial
├── FICHA_DISENO.md               # Manual de marca y ficha técnica
└── AGENTS.md                     # Guía de continuidad para IA
```
