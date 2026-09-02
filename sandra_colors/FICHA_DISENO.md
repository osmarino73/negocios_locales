# Ficha de Diseño: Sandra Color´s (Inspiración Forense LUXEHAIR)

## 🎨 Tríada Visual Forense

### 1. Paleta de Colores
- **Fondo Primario Oscuro (Obsidian / Espresso)**: `#0f0e0c` / `#161412`
- **Fondo Secundario Claro (Crema Marfil)**: `#faf7f2`
- **Fondo Tarjetas / Elementos Claros**: `#ffffff`
- **Acento Primario (Camel Rose / Nude Warm)**: `#c89376` (Hover: `#b57f63`)
- **Acento Claro / Champagne Rose**: `#e8c4ad`
- **Texto Principal Claro**: `#22201e`
- **Texto Secundario Claro**: `#66625d`
- **Texto Principal Oscuro**: `#f7f4ee`
- **Texto Secundario Oscuro**: `#d5cfc7`
- **Bordes Finos**: `rgba(200, 147, 118, 0.25)`

### 2. Tipografía Forense
- **Titulares Display**: `'DM Serif Display', Georgia, serif`
- **Caligrafía & Firma Script**: `'Alex Brush', cursive`
- **UI, Textos & Botones**: `'Plus Jakarta Sans', sans-serif` (con tracking `0.08em - 0.15em` en mayúsculas pequeñas)

### 3. Estructura Oficial
1. **Hero Full-Width Bleed**: Titular editorial con frase caligráfica manuscrita, botón principal de agendamiento y botón secundario outline. En móvil: `min-height: 720px !important`, simétrico centrado.
2. **Barra de Pilares / Garantías**: 5 sellos con íconos de trazo fino. En móvil: carrusel horizontal con scroll snap.
3. **Catálogo de Servicios (Grid 6 Columnas)**: 6 servicios con fotos 1:1, badges de duración y precio, botón ancho 100% a WhatsApp (2 columnas en móvil).
4. **Sobre Nosotros & Profesionales**:
   - Bloque Editorial con foto de salón (`photo-1560066984-138dadb4c035`), badge flotante VIP, 4 métricas de autoridad.
   - Bloque de 4 Profesionales (`repeat(4, 1fr)` en desktop, 2 columnas en móvil) con avatares circulares 50% y botón a WhatsApp.
5. **Ubicación & Mapa**: Panel informativo georreferenciado en Apartadó con Google Maps (`z=16`).
6. **Footer Principal**: Navegación, contacto, horarios y botón «Agendar».
