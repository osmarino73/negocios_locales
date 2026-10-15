# Ficha de Diseño Visual — Atemporal Estudio de Belleza.

Manual de marca y especificaciones tipográficas y cromáticas clonadas a partir de la referencia visual editorial.

---

## 🎨 Paleta de Colores Forense

- **Fondo Ébano Obsidiana (`--bg-dark`)**: `#0d0b0a`
- **Fondo de Tarjetas (`--bg-card`)**: `#161311`
- **Acento Primario Rosa Terracota / Camel (`--color-accent`)**: `#d49b84`
- **Tono Cálido Camel (`--color-camel`)**: `#cbb39c`
- **Texto Principal Marfil (`--text-light`)**: `#f4ede6`
- **Texto Secundario Aterciopelado (`--text-muted`)**: `#b8aea5`
- **Borde Translúcido Glassmorphism (`--border-soft`)**: `rgba(212, 155, 132, 0.18)`

---

## ✒️ Tríada Tipográfica

1. **Firma Caligráfica de Autor**: `Great Vibes`, `Alex Brush` (Google Fonts)
2. **Titulares Editorial Display**: `DM Serif Display`, `Cormorant Garamond`
3. **Cuerpo de Texto & UI**: `Plus Jakarta Sans`, sans-serif (pesos 400, 500, 600, 700)

---

## 🧩 Componentes Visuales & Acabados

- **Hero Header Canvas Scrubbing**: Secuencia WebP animada por scroll con 300vh de contenedor y `position: sticky; top: 0;`.
- **Navbar Inteligente Auto-Hide**: Sin barra promocional top, 100% transparente en el Hero, auto-ocultable en scroll inferior.
- **Secciones Oficiales**:
  1. `#inicio`: Hero Full-Bleed con Canvas Scrubbing en 2 pasos (50% / 50%).
  2. Franja de Pilares de Confianza (Scroll Snap en móvil).
  3. `#servicios`: Grid 3 columnas en desktop (2 en móvil) con tarjetas 3:4 Full-Bleed Minimalistas.
  4. `#nosotros`: Experiencia de marca + 4 Profesionales en Retrato Editorial 3:4.2 (Carrusel Scroll Snap en móvil).
  5. `#ubicacion`: Datos de contacto y Google Maps embebido `z=16`.
  6. Footer con módulo de reserva y botón conciso **«Agendar»**.
