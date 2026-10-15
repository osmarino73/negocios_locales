# Ficha de Diseño: Karelis Soto Spa Uñas & Peluquería

## 🎨 Tríada Visual & Concepto Gráfico
Basado en la clonación forense del diseño de referencia de belleza & spa en tono oscuro editorial (`belleza-uñas-blanca`).

### 1. Paleta de Colores Forense (Tokens CSS)
- **Fondo Base Obsidian (`--bg-dark`)**: `#0b0b0d`
- **Tarjetas & Contenedores (`--bg-card`)**: `#131217`
- **Color de Acento de Marca (`--color-accent`)**: `#d4b296` (Camel / Oro Rosa Cálido)
- **Hover de Acento (`--color-accent-hover`)**: `#e6c5a8`
- **Texto Principal (`--text-light`)**: `#f7f3ee` (Marfil Editorial)
- **Texto Secundario (`--text-muted`)**: `#aaa39c` (Gris Sostenido)
- **Borde Sutil (`--border-soft`)**: `rgba(212, 178, 150, 0.18)`

*Regla Mandatoria: Todos los elementos de acento (firmas script, precios, roles, estados hover y botones) consumen estrictamente `var(--color-accent)` sin valores harcoded.*

### 2. Tipografía Editorial
- **Firma Caligráfica / Signature Script**: `'Alex Brush', cursive` (`.hero-script-tag`, `.section-script-eyebrow`)
- **Titulares Display**: `'Cormorant Garamond', 'Playfair Display', serif` (`.hero-title`, `.section-title`)
- **Cuerpo de Texto & UI**: `'Plus Jakarta Sans', sans-serif`

### 3. Componentes y Layout
- **Hero Canvas Video Scrubbing**: Motor HTML5 Canvas a `300vh` con precarga asíncrona de 74 frames WebP para Desktop (16:9) y Mobile (9:16). Doble degradado aterciopelado en escritorio y degradado calibrado en móvil reservado estrictamente al 20% inferior (80% superior 100% transparente).
- **Smart Header / Navbar**: Encabezado 100% transparente sin degradado de fondo ni bordes, con sombra tipográfica nítida para máxima visibilidad del video. Auto-hide inteligente al deslizar.
- **Barra de Pilares / Garantías**: 5 sellos de confianza. En móvil: Carrusel horizontal deslizable (*Scroll Snap*).
- **Servicios Full-Bleed Minimalistas**: Grid de 3 columnas en desktop, 2 columnas en móvil. Tarjetas 3:4 con degradado vertical, precio amplio sin sufijo `COP` y enlace `AGENDAR ➔`.
- **Sobre Nosotros Editorial**: Grid a 2 columnas con fotografía temática de salón de uñas (`about-nuva-nails-manicurista.jpg` o `photo-1604654894610-df63bc536371`), badge flotante VIP y 4 métricas de autoridad.
- **Nuestros Profesionales / Equipo**: Grid de 4 columnas en desktop (Retrato Editorial Full-Bleed 3:4.2). En móvil: Carrusel horizontal deslizable con efecto «Peek».
- **Ubicación & Google Maps**: Panel georreferenciado con `z=16` embebido.
