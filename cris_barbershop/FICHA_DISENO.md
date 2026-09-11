# Ficha de Diseño - Cris Barbershop (Luxury Gentleman Grooming)

## 🎨 Paleta de Colores Exclusiva & Barbería Premium
- **Fondo Base Obsidian / Charcoal**: `#0e0d0b` / `#131210` (Negro carbón texturizado para atmósfera de barbería de lujo)
- **Superficie de Tarjetas & Paneles**: `#171512` / `#1c1a16` (Bordes finos con brillo dorado sutil `rgba(212, 163, 89, 0.16)`)
- **Acento Dorado Cobre / Vintage Gold**: `#d4a359` / `#e5b76b` (Detalles de marca, precios, líneas divisorias y flechas)
- **Texto Principal**: `#ffffff` (Alta legibilidad)
- **Texto Secundario / Atenuado**: `#a0988e` (Párrafos y descripciones balanceadas)
- **Gradientes de Contraste**: 
  - Desktop: `linear-gradient(90deg, #0e0d0b 0%, #0e0d0b 26%, rgba(14,13,11,0.85) 45%, rgba(14,13,11,0.3) 60%, transparent 72%)`
  - Mobile: `linear-gradient(180deg, transparent 0%, transparent 36%, rgba(14,13,11,0.65) 54%, rgba(14,13,11,0.96) 80%, #0e0d0b 100%)`

## 🔤 Tríada Tipográfica Forense
- **Display / Títulos**: `'DM Serif Display'`, serif (Elegancia editorial clásica para cortes y barbería)
- **UI / Lectura**: `'Outfit'`, sans-serif (Legibilidad contemporánea, moderna y pulida)
- **Script / Autor**: `'Alex Brush'`, cursive (Detalle caligráfico de firma en titulares)

## 🎬 Sistema Hero Video Scroll Scrubbing (300vh Canvas Engine)
- **Canvas Viewport Fijo**: 100vh con sincronización matemática precisa `Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))`.
- **Doble Banco de Cuadros Calibrados**:
  - `desktop/`: 74 fotogramas WebP (1920x1080, Q85) con `object-fit: cover` y centrado focal.
  - `mobile/`: 74 fotogramas WebP (720x1280, Q76) con encuadre dinámico que mantiene al modelo y el fade perfectamente centrados en la mitad superior.
- **Narrativa Editorial de 2 Pasos**:
  - *Paso 1 (0% - 40%)*: "Estilo & Precisión Clásica" con agendamiento directo.
  - *Paso 2 (55% - 95%)*: "Detalle y Maestría en Cada Corte" con llamada a ver servicios.
- **High-DPI Retina Support**: Multiplicador `window.devicePixelRatio || 1` y `ctx.imageSmoothingQuality = 'high'` para nitidez fotográfica absoluta.

## 🏛️ Estructura Oficial de Secciones (AGENTS.md)
1. **`#inicio`**: Hero Canvas 300vh con Scrubbing fluido y tipografía de alto impacto.
2. **Barra de Pilares**: 5 garantías de barbería (*Barberos Expertos, Perfilado a Navaja, Productos Prémium, Higiene & Esterilización, Satisfacción Total*); en móvil deslizable por carrusel horizontal Scroll Snap.
3. **`#servicios`**: Grid de 3 columnas en escritorio / 2 columnas en móvil. Tarjetas Full-Bleed 3:4 con degradado inferior, precio en `$ COP` y enlace minimalista `AGENDAR ➔`.
4. **`#nosotros`**: 
   - Fotografía de ambiente coherente de barbería clásica de cuero y madera (`photo-1585747860715-2ba37e788b70`).
   - Grid de 4 columnas en escritorio para el equipo de barberos en formato Retrato Editorial (3:4.2) / Carrusel deslizable con efecto Peek en móvil.
5. **`#ubicacion`**: Mapa interactivo georreferenciado con fórmula oficial de Google Maps (`z=16`).
6. **Footer**: Enlaces directos y botón de reserva conciso «Agendar».
