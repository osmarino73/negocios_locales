# Ficha de Diseño: Katerine Canedo Estética Integral

## 🎨 Tríada Visual & Identidad de Marca

### 1. Paleta de Colores Forense (Tokens CSS)
- **Fondo Obsidiana Base (`--bg-dark`)**: `#0d0b0a` (Negro aterciopelado con matiz cálido)
- **Contenedores & Tarjetas (`--bg-card`)**: `#15131a` / `#1a1822` (Noche profunda)
- **Color de Acento Principal (`var(--color-accent)`)**: `#c88269` (Terracota Rose Nude)
- **Color Secundario / Camel (`var(--color-camel)`)**: `#d49b84` (Dorado Cálido / Champán)
- **Texto Principal (`--text-light`)**: `#f7f4f0` (Blanco Marfil)
- **Texto Secundario (`--text-muted`)**: `#c9c0b8` (Gris Cálido)
- **Bordes & Divisores (`--border-soft`)**: `rgba(200, 130, 105, 0.15)`

### 2. Tipografías Oficiales (Google Fonts)
- **Display Titulares**: `Cormorant Garamond`, serif (Weights 500, 600, 700)
- **Firma Script Tag**: `Alex Brush`, cursive (Signature Tagline)
- **UI & Cuerpo**: `Plus Jakarta Sans`, sans-serif (Weights 400, 500, 600, 700)

### 3. Componentes y Reglas Visuales
- **Hero Canvas Scrubbing**: Canvas HTML5 a 300vh, 2 pasos editoriales (0-50% y 50-100%), 60% superior libre de texto.
- **Header Inteligente**: Fixed transparente, auto-hide al bajar scroll, logotipo tipográfico puro sin íconos extras. Prohibido botón de agendar en navbar móvil.
- **Tarjetas de Servicio (Full-Bleed 3:4)**: 3 columnas en desktop, 2 columnas en móvil. Degradado inferior aterciopelado. Footer de 2 filas: Fila 1 Precio sin sufijo COP + Fila 2 Enlace `AGENDAR ➔`.
- **Especialistas (Retrato Editorial 3:4.2)**: 4 columnas en desktop, Carrusel Scroll Snap de 1 sola fila en móvil.
- **Mapa Interactivo**: Embbed Google Maps con zoom `z=16`.
- **Botón Flotante WhatsApp**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px))`, `right: max(20px, env(safe-area-inset-right, 20px))`.
