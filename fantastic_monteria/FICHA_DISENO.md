# Ficha de Diseño Visual: Fantastic Montería Salón de Belleza

## 1. Identidad Cromática Forense (Tokens CSS)
- **Fondo Oscuro Primario (`--bg-dark`)**: `#0c0c0c` (Obsidiana Profundo)
- **Superficie de Tarjetas (`--bg-dark-card`)**: `rgba(20, 17, 15, 0.85)` (Aterciopelado Translucido)
- **Superficie Elevada (`--bg-dark-elevated`)**: `#161311` (Ébano Elegante)
- **Acento Primario (`--color-accent`)**: `#cbb39c` (Oro Rosa Cálido / Camel Rose)
- **Hover de Acento (`--color-accent-hover`)**: `#dfc8b1`
- **Brillo de Acento (`--color-accent-glow`)**: `rgba(203, 179, 156, 0.22)`
- **Texto Principal (`--text-primary`)**: `#f5f0eb` (Marfil Suave)
- **Texto Secundario (`--text-secondary`)**: `#c9c0b8`
- **Texto Muted (`--text-muted`)**: `#8e857e`
- **Borde Sutil (`--border-soft`)**: `rgba(255, 255, 255, 0.08)`
- **Borde de Acento (`--border-accent`)**: `rgba(203, 179, 156, 0.35)`

## 2. Tríada Tipográfica Oficial
- **Firma Caligráfica & Subtítulos Script (`--font-script`)**: `'Alex Brush', cursive`
- **Titulares Display Editorial (`--font-display`)**: `'DM Serif Display', serif`
- **Cuerpo, Navegación & UI (`--font-sans`)**: `'Plus Jakarta Sans', sans-serif`

## 3. Estructura Oficial de Secciones
1. **`#inicio` (Hero Full-Width Bleed)**:
   - Escritorio: `min-height: 640px;`, anclaje inferior (`align-items: flex-end`), 60% superior libre.
   - Móvil: Estrictamente `min-height: 720px !important;`, 38% superior transparente sin veladuras.
   - Doble degradado orgánico aterciopelado (`.hero-bg-overlay`). Cero `mask-image`.
2. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza. Carrusel horizontal deslizable en móvil con auto-scroll (3s) y pausa táctil.
3. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid 3 columnas en escritorio (`repeat(3, 1fr)`), 2 columnas en móvil (`repeat(2, 1fr)`).
   - Tarjetas al 100% de imagen (3:4 ratio), degradado inferior aterciopelado.
   - Footer de tarjeta en 2 filas verticales (Fila 1: Precio 100% ancho sin `COP`, Fila 2: Enlace minimalista `AGENDAR ➔`).
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales)**:
   - Bloque Editorial 2 columnas con foto de ambiente de salón (`.salon-image-showcase`), badge flotante VIP, 4 métricas de autoridad.
   - Bloque Equipo: 4 columnas en escritorio. En móvil: Carrusel horizontal deslizable (`flex: 0 0 255px; aspect-ratio: 3/4.2;`) con efecto «Peek».
5. **`#ubicacion` (Mapa Interactivo & Contacto)**:
   - Mapa georreferenciado de Google Maps con zoom urbano `z=16` y tarjeta informativa.
6. **Footer Principal**:
   - Módulo de reserva con botón conciso **«Agendar»**.

## 4. Reglas de Componentes UI
- **Logotipo Tipográfico Puro**: Sin emojis ni íconos decorativos en `.brand-logo`.
- **Smart Header**: Sin barra promocional superior (`.promo-topbar`). Ocultar `.btn-header-cta` en móviles.
- **Botón Flotante WhatsApp**: Posición fija con `env(safe-area-inset-bottom)`, tooltip responsivo.
- **Unicidad Estricta de Variables CSS**: Todos los acentos consumen `var(--color-accent)`.
