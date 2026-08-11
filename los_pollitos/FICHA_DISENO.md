# 🎨 Ficha de Diseño & Guía de Marca — Hogar Infantil Los Pollitos De Apartadó

Ficha técnica y manual del sistema de diseño para mantener la coherencia visual en todas las futuras páginas del proyecto **Hogar Infantil Los Pollitos De Apartadó**.

---

## 1. Identidad de Marca

- **Nombre Oficial**: Hogar Infantil Los Pollitos De Apartadó
- **Ubicación**: Apartadó, Antioquia, Colombia
- **Nicho/Rubro**: Cuidado & Educación Inicial Infantil
- **Eslogan**: *"Somos Expertos en el Cuidado & Desarrollo de tus Pequeños 🐥"*
- **Propuesta de Valor**: Formación integral en un entorno cálido, seguro e innovador con personal docente capacitado para familias de la región de Urabá.
- **Tono de Comunicación**: Cerca, alegre, seguro, confiable y comunitario.

---

## 2. Paleta de Colores & Tokens CSS

| Uso / Elemento | Nombre Token | Código HEX | Código HSL / RGB | Propósito Visual |
| :--- | :--- | :--- | :--- | :--- |
| **Color Primario** | `--color-coral` | `#d9381e` | `hsl(9, 75%, 48%)` | Botones de acción principales, encabezados y destacados. |
| **Primario Oscuro** | `--color-coral-dark` | `#b91c1c` | `hsl(0, 74%, 42%)` | Estado hover de botones y acentos de navegación. |
| **Acento Dorado/Sol** | `--color-yellow` | `#f59e0b` | `hsl(38, 92%, 50%)` | Botones de inscripción, distintivos e iconografía. |
| **Fondo Dorado Suave** | `--color-yellow-bg` | `#fffbeb` | `hsl(48, 100%, 96%)` | Top bar de anuncios y fondo de tarjetas destacadas. |
| **Encabezados Navy** | `--color-navy` | `#1e1b4b` | `hsl(243, 47%, 20%)` | Títulos principales e identidad del pie de página. |
| **Acento Teal** | `--color-teal` | `#0d9488` | `hsl(175, 84%, 32%)` | Elementos decorativos y badges secundarios. |
| **Acento Rosa** | `--color-pink` | `#ec4899` | `hsl(330, 81%, 60%)` | Burbujas decorativas del Hero. |
| **Texto Principal** | `--color-slate-800` | `#1e293b` | `hsl(215, 28%, 17%)` | Párrafos y lectura general. |

---

## 3. Tipografía & Jerarquía Visual

- **Fuente para Encabezados**: `'Outfit'`, sans-serif (Google Fonts)
  - Pesos: `700` (Bold), `800` (ExtraBold), `900` (Black)
- **Fuente para Cuerpo de Texto**: `'Nunito'`, sans-serif (Google Fonts)
  - Pesos: `400` (Regular), `600` (SemiBold), `800` (ExtraBold)

### Escala de Tamaños
- **H1 (Hero Title)**: `3.5rem` (`56px`) | Line-height: `1.1` | Weight: `900`
- **H2 (Section Title)**: `2.5rem` (`40px`) | Line-height: `1.2` | Weight: `800`
- **H3 (Card Titles)**: `1.2rem` (`19px`) | Line-height: `1.3` | Weight: `700`
- **Badges**: `0.75rem` (`12px`) | Uppercase | Letter-spacing: `1.5px`

---

## 4. Componentes UI & Elementos Clave

1. **Burbujas Decorativas (Hero)**:
   - Círculos de colores superpuestos detrás de la imagen principal: `.bubble-pink`, `.bubble-yellow`, `.bubble-green`, `.bubble-teal`.
2. **Collage de Imágenes (Nosotros)**:
   - Composición de 3 círculos con borde dorado y blanco superpuestos (`.circle-main` y `.circle-sub`).
3. **Sección de Cifras e Impacto con Bocadillos de Opinión**:
   - Tarjetas de estadísticas con borde izquierdo rojo coral `#d9381e` + bocadillos flotantes con estrellas de reseña.
4. **Local SEO Integration**:
   - Enlace oficial Google Maps: `https://share.google/uTfsCczTSa7yn04oH`.
   - Schema JSON-LD `@type: "ChildCare"`.

---

## 5. Guía para Futuras Páginas Secundarias

Para extender este sitio (ej: `/servicios.html`, `/admisiones.html`, `/galeria.html`):
1. Conservar la paleta de colores `--color-coral` `#d9381e` y `--color-yellow` `#f59e0b`.
2. Mantener la estructura del menú superior y el botón flotante de WhatsApp.
3. Asegurar que las nuevas imágenes mantengan la estética de niños felices y activos en instalaciones de Apartadó.
