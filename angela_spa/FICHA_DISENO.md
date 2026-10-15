# Ficha de Diseño Visual — ANGELA SPA & BELLEZA

## 🎨 Paleta de Colores Forense (Luxury Ebony & Nude Rose)
- **Primary Background (`--color-bg-main`)**: `#0c0c0d` (Ébano obsidiana profundo)
- **Secondary Background (`--color-bg-card`)**: `#161619` (Superficie oscura aterciopelada)
- **Card Hover / Surface Elev (`--color-bg-card-hover`)**: `#1f1f24`
- **Accent Primary (`--color-accent`)**: `#D98A6C` (Terracota nude cálido / Camel rose)
- **Accent Hover (`--color-accent-hover`)**: `#C57B5C` (Cobre bronce atardecer)
- **Accent Soft (`--color-accent-soft`)**: `rgba(217, 138, 108, 0.12)`
- **Text Main (`--color-text-main`)**: `#F7F5F3` (Blanco marfil seda)
- **Text Muted (`--color-text-muted`)**: `#9E9893` (Gris cálido mineral)
- **Border Glass (`--color-border`)**: `rgba(217, 138, 108, 0.18)`

---

## ✒️ Tipografía de Marca
1. **Titulares Display & Marcas (`--font-display`)**: `'Cinzel', serif` (Elegancia clásica editorial)
2. **Cuerpo de Texto & UI (`--font-body`)**: `'Plus Jakarta Sans', sans-serif` (Legibilidad geométrica ultra limpia)
3. **Firma Script de Autor (`--font-script`)**: `'Alex Brush', cursive` (Caligrafía fluida de alta gama)

---

## 📐 Jerarquía de Componentes
- **Hero Full-Width Bleed**: Anclaje a la base (`align-items: flex-end`), 60% superior despejado, doble degradado aterciopelado.
- **Barra de Pilares**: 5 sellos de garantía con iconos bespoke, scroll snap en móviles.
- **Grid de Servicios**: 3 columnas en escritorio (`repeat(3, 1fr)`), 2 columnas en móvil. Tarjetas full-bleed (3:4) con footer de dos filas independientes.
- **Sección Nosotros**: Fotografía de ambiente zen spa, badge VIP flotante, 4 métricas de autoridad en 2 columnas móviles.
- **Nuestros Profesionales**: Grid de 4 columnas en escritorio, formato retrato editorial (3:4.2). En móvil: carrusel horizontal scroll snap con efecto peek.
- **Smart Header**: Sin barra informativa superior. Navbar tipográfico puro sin iconos decorativos junto al logo.
- **Botón Flotante WhatsApp**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px))`, safe area margin.
