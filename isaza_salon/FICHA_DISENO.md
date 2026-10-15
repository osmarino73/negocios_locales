# Ficha de Diseño: Isaza Salón — Centro de Estética (Montería)

Ficha técnica y manual de identidad visual para **Isaza Salón**, extraída y adaptada de la referencia visual LuxeHair.

---

## 🎨 Paleta de Colores Oficial

```css
:root {
  /* Ébano Obsidian / Fondo Base */
  --bg-dark: #0d0b0a;
  --bg-dark-card: rgba(22, 19, 17, 0.75);
  --bg-dark-elevated: #161311;

  /* Acento Primario — Cobre / Oro Camel Cálido */
  --color-accent: #cbb39c;
  --color-accent-hover: #dfc8b1;
  --color-accent-glow: rgba(203, 179, 156, 0.25);

  /* Tipografía Editorial & UI */
  --text-primary: #f5f0eb;
  --text-secondary: #c9c0b8;
  --text-muted: #8e857e;

  /* Bordes & Glassmorphism */
  --border-soft: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(203, 179, 156, 0.35);

  /* Sombras Ambientales */
  --shadow-ambient: 0 12px 35px rgba(0, 0, 0, 0.45);
  --shadow-glow: 0 0 25px rgba(203, 179, 156, 0.2);
}
```

---

## ✍️ Tipografías

1. **Signature Script**: `Alex Brush`, `Great Vibes` (Google Fonts)
   - Uso: Firmas manuscritas de marca (`.hero-script-tag`, `.section-script-eyebrow`).
2. **Titulares Display**: `DM Serif Display` (Google Fonts)
   - Uso: Encabezados editoriales principales, énfasis en itálica (`em`).
3. **Cuerpo & UI**: `Plus Jakarta Sans` (Google Fonts)
   - Uso: Párrafos, botones, navegación, etiquetas y precios.

---

## 📐 Componentes UI & Reglas Visuales

1. **Unicidad del Color Principal**:
   - Todo elemento cromático de acento consume obligatoriamente `var(--color-accent)`.
2. **Servicios Full-Bleed (3:4)**:
   - 3 columnas en Escritorio, 2 columnas en Móvil.
   - Precios destacados en fila 1 independiente; enlace `AGENDAR ➔` en fila 2.
3. **Profesionales en Retrato Editorial (3:4.2)**:
   - 4 columnas en Escritorio, Carrusel Scroll Snap en Móvil.
4. **Hero Canvas Video Scrubbing**:
   - Transición de 2 pasos anclados a la base con despeje del 60% superior.
