# Ficha de Diseño: Rio Centro Odontologico — Montería

## 🎨 Paleta de Colores Forense (Basada en Imagen PureSmile / Warm Organic Luxury)

- **Fondo Oscuro Principal (`--bg-dark`)**: `#141816` (Verde oliva/ébano orgánico suntuoso)
- **Fondo Secundario Card Oscuro (`--bg-card`)**: `#1c221f` (Verde noche mate para tarjetas)
- **Acento Champagne Gold (`--color-accent`)**: `#c4b397` (Dorado champán suave de autor)
- **Acento Warm Cream (`--color-cream`)**: `#e6decb` (Crema cálido para subtítulos)
- **Fondo Sección Clara (`--bg-light-soft`)**: `#f7f4ef` (Crema marfil cálido relajante)
- **Texto Oscuro (sobre sección clara) (`--text-dark`)**: `#1c221f`
- **Texto Claro (`--text-light`)**: `#f5f2eb`
- **Texto Muted (`--text-muted`)**: `#a6a095`
- **Borde Soft (`--border-soft`)**: `rgba(196, 179, 151, 0.22)`

---

## ✒️ Tríada Tipográfica

1. **Titulares Display Serif**: `DM Serif Display` / `Cormorant Garamond` (Google Fonts)
   - Uso: Encabezados `#inicio`, `#servicios`, `#nosotros`, `#ubicacion`.

2. **Caligrafía & Signature Script**: `Alex Brush` (Google Fonts)
   - Uso: Eyebrows de autor (`.hero-script-tag`, `.section-script-eyebrow`), ej. *"Sonrisas que Perduran toda una Vida"*.

3. **Cuerpo & UI Geométrico**: `Plus Jakarta Sans` / `Tenor Sans` (Google Fonts)
   - Uso: Botones, menú, párrafos, tarjetas de tratamientos y especialistas, datos de contacto.

---

## 📐 Reglas de Diseño UI / UX

- **Hero Header Inmersivo Full-Width Bleed**: Fotografía de clínica/consultorio en tonos cálidos a la derecha con anclaje inferior (`align-items: flex-end`) y 60% superior despejado en escritorio (min-height: 640px). En móvil (< 768px): min-height 720px con 38% superior 100% transparente.
- **Navbar Smart**: Logotipo puramente tipográfico sin emojis ni íconos decorativos. En móvil, el botón CTA se oculta (`.btn-header-cta { display: none !important; }`) para dar el 100% de ancho al nombre de marca.
- **Secciones Oficiales Obligatorias**:
  1. `#inicio` (Hero Full-Width Bleed)
  2. Franja de Pilares (Scroll Snap en móvil < 768px)
  3. `#servicios` (Grid 3 columnas desktop, 2 columnas móvil, Tarjetas Full-Bleed 3:4 con footer de 2 filas)
  4. `#nosotros` (Bloque Editorial con foto de consultorio cálido + 4 Especialistas en Retrato Editorial 3:4.2)
  5. `#ubicacion` (Panel de información + Google Maps georreferenciado `z=16`)
  6. Footer (Redes, horarios, módulo de reserva con botón **«Agendar»**)
- **WhatsApp Float**: Posicionado con `env(safe-area-inset-bottom)`.
