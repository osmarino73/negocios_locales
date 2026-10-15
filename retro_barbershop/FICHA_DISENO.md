# Ficha de Diseño: Retro Barbershop — Montería

## 🎨 Paleta de Colores Forense (Basada en Imagen URBAN CUT / Retro Luxury)

- **Fondo Base Obsidian (`--bg-dark`)**: `#0d0b0a` (Negro ébano profundo con matriz cálida)
- **Fondo Secundario Card (`--bg-card`)**: `#161311` (Negro suntuoso mate para contenedores)
- **Fondo Elevado Hover (`--bg-card-hover`)**: `#1e1a17`
- **Acento Dorado / Amber (`--color-accent`)**: `#d4af37` (Oro clásico de alta alcurnia)
- **Acento Camel Rose (`--color-camel`)**: `#cbb39c` (Tono cálido para firmas script y micro-acentos)
- **Texto Principal (`--text-light`)**: `#f5f0eb` (Blanco marfil aterciopelado)
- **Texto Secundario (`--text-muted`)**: `#a89f91` (Gris cálido sedoso)
- **Borde Soft (`--border-soft`)**: `rgba(212, 175, 55, 0.18)` (Línea dorada sutil con opacidad)

---

## ✒️ Tríada Tipográfica

1. **Titulares Display Serif**: `DM Serif Display` / `Cormorant Garamond` (Google Fonts)
   - Uso: Encabezados `#inicio`, `#servicios`, `#nosotros`, `#ubicacion`.
   - Cursivas `em`: Destacadas en tono dorado/camel.

2. **Caligrafía & Signature Script**: `Alex Brush` (Google Fonts)
   - Uso: Eyebrows de autor (`.hero-script-tag`, `.section-script-eyebrow`), firma de experiencia.

3. **Cuerpo & UI Geométrico**: `Plus Jakarta Sans` (Google Fonts)
   - Uso: Botones, menú, párrafos, tarjetas de servicios y profesionales, datos de contacto.

---

## 📐 Reglas de Diseño UI / UX

- **Hero Canvas Scrubbing**: Canvas HTML5 a `300vh` con 74 fotogramas WebP duales (Desktop 1920x1080 / Mobile 720x1280).
- **Navbar Smart**: Logotipo puramente tipográfico sin emojis ni íconos decorativos. En móvil, el botón CTA se oculta (`.btn-header-cta { display: none !important; }`) para dar el 100% de ancho al nombre de marca.
- **Secciones Oficiales Obligatorias**:
  1. `#inicio` (Hero Canvas Scroll Scrubbing 2 Pasos 50/50)
  2. Franja de Pilares (Scroll Snap en móvil < 768px)
  3. `#servicios` (Grid 3 columnas desktop, 2 columnas móvil, Tarjetas Full-Bleed 3:4 con footer de 2 filas)
  4. `#nosotros` (Bloque Editorial con foto de barbería + 4 Especialistas en Retrato Editorial 3:4.2)
  5. `#ubicacion` (Panel de información + Google Maps georreferenciado `z=16`)
  6. Footer (Redes, horarios, módulo de reserva con botón **«Agendar»**)
- **WhatsApp Float**: Posicionado con `env(safe-area-inset-bottom)`.
