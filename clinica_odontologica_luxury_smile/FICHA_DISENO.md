# Ficha de Diseño: Clínica Odontológica Luxury Smile — Montería

## 🎨 Paleta de Colores Forense (Basada en Imagen Bright Smiles / Medical Luxury)

- **Acento Primario Cian / Teal (`--color-accent`)**: `#009bbd` (Cian médico sofisticado)
- **Acento Secundario Deep Teal (`--color-teal`)**: `#007791` (Turquesa clínico profundo)
- **Glow / Soft Border (`--color-accent-glow`)**: `rgba(0, 155, 189, 0.25)`
- **Fondo Base Claro (`--bg-light`)**: `#f8fcff` (Blanco impoluto con leve matiz glaciar)
- **Fondo Secundario Card (`--bg-card`)**: `#ffffff` (Blanco puro para tarjetas)
- **Fondo Soft Teal (`--bg-soft-teal`)**: `#eef9fc` (Fondo suave para pilares y testimonios)
- **Fondo Azul Marino Footer (`--bg-navy`)**: `#0a223d` (Azul marino institucional suntuoso)
- **Texto Oscuro Principal (`--text-dark`)**: `#0c1e30` (Azul ébano para titulares)
- **Texto Muted (`--text-muted`)**: `#5a6e82` (Gris azulado sedoso)
- **Borde Soft (`--border-soft`)**: `rgba(0, 155, 189, 0.18)`

---

## ✒️ Tríada Tipográfica

1. **Titulares Display Serif**: `DM Serif Display` / `Cormorant Garamond` (Google Fonts)
   - Uso: Encabezados `#inicio`, `#servicios`, `#nosotros`, `#ubicacion`.
   - Cursivas `em`: Destacadas en tono cian/teal.

2. **Caligrafía & Signature Script**: `Alex Brush` (Google Fonts)
   - Uso: Eyebrows de autor (`.hero-script-tag`, `.section-script-eyebrow`).

3. **Cuerpo & UI Geométrico**: `Plus Jakarta Sans` (Google Fonts)
   - Uso: Botones, menú, párrafos, tarjetas de servicios y especialistas, datos de contacto.

---

## 📐 Reglas de Diseño UI / UX

- **Hero Header Inmersivo Full-Width Bleed**: Fotografía de alta definición a la derecha con anclaje inferior (`align-items: flex-end`) y 60% superior despejado en escritorio (min-height: 640px). En móvil (< 768px): min-height 720px con 38% superior 100% transparente.
- **Navbar Smart**: Logotipo puramente tipográfico sin emojis ni íconos decorativos. En móvil, el botón CTA se oculta (`.btn-header-cta { display: none !important; }`) para dar el 100% de ancho al nombre de marca.
- **Secciones Oficiales Obligatorias**:
  1. `#inicio` (Hero Full-Width Bleed)
  2. Franja de Pilares (Scroll Snap en móvil < 768px)
  3. `#servicios` (Grid 3 columnas desktop, 2 columnas móvil, Tarjetas Full-Bleed 3:4 con footer de 2 filas)
  4. `#nosotros` (Bloque Editorial con foto de clínica/consultorio + 4 Especialistas en Retrato Editorial 3:4.2)
  5. `#ubicacion` (Panel de información + Google Maps georreferenciado `z=16`)
  6. Footer (Redes, horarios, módulo de reserva con botón **«Agendar»**)
- **WhatsApp Float**: Posicionado con `env(safe-area-inset-bottom)`.
