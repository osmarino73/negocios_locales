# Ficha de Diseño Visual — Es Pa'Rizos Salón de belleza y Barbería en Montería

Manual de marca y guía de componentes visuales para **Es Pa'Rizos Salón de belleza y Barbería en Montería**.

---

## 🎨 Paleta de Colores Forense

- **Fondo Base Obsidian (`--bg-dark`)**: `#0e0c0a` (Ébano aterciopelado nocturno)
- **Fondo Tarjetas (`--bg-card`)**: `#161310`
- **Color de Acento Principal (`--color-accent`)**: `#cbb39c` (Camel Rose / Cobre cálido de autor)
- **Hover de Acento (`--color-accent-hover`)**: `#dfc7b0`
- **Texto Principal (`--text-light`)**: `#f6f3ef`
- **Texto Secundario (`--text-muted`)**: `#c9c0b8`
- **Borde Suave (`--border-soft`)**: `rgba(203, 179, 156, 0.16)`
- **Sombra Ambiental (`--shadow-ambient`)**: `0 15px 35px rgba(0, 0, 0, 0.65)`

---

## ✒️ Tríada Tipográfica

1. **Firma Script de Autor**: `'Alex Brush'`, `'Great Vibes'`, cursive.
   - Utilizado en firmas caligráficas `.hero-script-tag` y `.section-script-eyebrow`.
2. **Titulares Display Serif**: `'Cormorant Garamond'`, `'DM Serif Display'`, serif.
   - Utilizado en titulares `.hero-title`, `.section-title`, `.experience-title`.
3. **Cuerpo & Interfaz Sans-Serif**: `'Plus Jakarta Sans'`, `'Inter'`, sans-serif.
   - Utilizado en botones, eyebrows, párrafos descriptivos y tarjetas de interfaz.

---

## 🏛️ Componentes UI & Secciones Oficiales

1. **`#inicio` (Canvas Video Scrubbing Hero 300vh)**:
   - Canvas fijado a `100vh` con `overflow-x: clip;` en `html, body`.
   - Narrativa en 2 pasos editoriales (50% / 50%).
   - Al menos el 60% superior despejado para la modelo/video.
2. **Barra de Pilares / Garantías**:
   - Franja de 5 sellos con micro-animaciones hover.
   - En móvil (< 768px): Carrusel Scroll Snap horizontal fluido en una sola fila.
3. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de 3 columnas en escritorio (`repeat(3, 1fr)`) y 2 columnas en móvil (`repeat(2, 1fr)`).
   - Tarjetas 3:4 con degradado aterciopelado inferior y 75% superior libre.
   - Footer de 2 filas independientes (`.service-card-price` sin sufijo COP + `.btn-card-book-minimal`).
4. **`#nosotros` (Sobre Nosotros & Profesionales)**:
   - Bloque Editorial con fotografía de ambiente capilar/barbería real y 4 métricas de autoridad.
   - Bloque Nuestros Profesionales con grid de 4 columnas en escritorio y carrusel Scroll Snap en móvil (tarjetas retrato 3:4.2).
5. **`#ubicacion` (Mapa & Contacto)**:
   - Google Maps interactivo embebido georreferenciado (`z=16`).
6. **Footer Principal & Botón Flotante WhatsApp**:
   - Botón conciso **«Agendar»** en módulo del footer.
   - Botón circular flotante de WhatsApp con despeje `safe-area-inset-bottom`.
