# 🎨 Ficha de Diseño & Manual de Marca: Jardín Infantil Milagros del Cielo Apartadó

Este documento especifica la paleta de colores, familias tipográficas, sistema de componentes UI, responsividad móvil y normas de maquetación extraídas de la imagen de referencia **Kidza** y ajustadas para el **Jardín Infantil Milagros del Cielo Apartadó**.

---

## 🎨 1. Paleta de Colores Forense (Tokens CSS)

```css
:root {
  /* Identidad & Color Primario de Marca */
  --color-primary: #5D3EBC;          /* Violeta / Púrpura profundo */
  --color-primary-hover: #4C31A0;
  --color-primary-light: #EDE9FE;
  
  /* Color de Acento Dinámico */
  --color-accent: #FF6B35;           /* Naranja cálido de alta energía y conversión */
  --color-accent-hover: #E05523;
  --color-accent-light: #FFEDD5;

  /* Colores Secundarios & Tarjetas Pasteles Kidza */
  --color-yellow: #F59E0B;
  --color-yellow-light: #FEF9C3;
  --color-rose: #EC4899;
  --color-rose-light: #FCE7F3;
  --color-cyan: #06B6D4;
  --color-cyan-light: #E0F2FE;
  --color-green: #10B981;
  --color-green-light: #D1FAE5;

  /* Fondos y Neutros */
  --bg-page: #FFFDF8;
  --bg-surface: #FFFFFF;
  --bg-purple-banner: #6C5CE7;
  --text-dark: #1E293B;
  --text-muted: #64748B;
  
  /* Radios de Borde */
  --radius-sm: 12px;
  --radius-md: 22px;
  --radius-lg: 32px;
  --radius-pill: 9999px;
}
```

---

## 🖼️ 2. Imágenes Full-Bleed de Cabecera (Hero Backgrounds)

Para la cabecera del sector educativo se emplean dos imágenes en 2K dedicadas que ocupan el **100% del fondo del Hero**:

- **Escritorio (> 768px)**: `assets/hero_desktop.webp` (`Solicitar_imagen_de_niños_2K_20260916091042.webp`) — Fotografía horizontal 16:9 en alta resolución de niños en un aula alegre con su educadora.
- **Móvil (< 768px)**: `assets/hero_mobile.webp` (`Complete_image_bottom_part_2K_20260916091722.webp`) — Fotografía vertical 9:16 de una niña sonriente jugando con bloques en el preescolar.

### 📐 Calibración de Overlays & Legibilidad:
1. **Escritorio**: Gradiente horizontal traslúcido suave `90deg` que garantiza 100% de contraste para los textos en el lado izquierdo sin tapar a los niños en el aula.
2. **Móvil**: `min-height: 740px !important;` con gradiente vertical `180deg` de 0% a 36% 100% transparente para dejar la cara y sonrisa de la niña limpia y brillante en la parte superior, mientras los textos y botones se anclan en la mitad inferior.
