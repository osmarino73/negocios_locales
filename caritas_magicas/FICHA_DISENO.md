# 🎨 Ficha de Diseño & Guía de Marca — Centro Infantil Caritas Mágicas

Ficha técnica y manual del sistema de diseño para mantener la coherencia visual en todas las futuras páginas del proyecto **Centro Infantil Caritas Mágicas**.

---

## 1. Identidad de Marca

- **Nombre Oficial**: Centro Infantil Caritas Mágicas
- **Nicho/Rubro**: Guardería & Educación Inicial Preescolar
- **Eslogan**: *"Donde las Pequeñas Mentes Crecen & Futuros Brillantes Comienzan 🌟"*
- **Propuesta de Valor**: Entorno seguro, cariñoso y estimulante enfocado en el desarrollo cognitivo, social y emocional de niños de 6 semanas a 5 años.
- **Tono de Comunicación**: Cálido, confiable, alegre, familiar y pedagógico.

---

## 2. Paleta de Colores & Tokens CSS

| Uso / Elemento | Nombre Token | Código HEX | Código HSL / RGB | Propósito Visual |
| :--- | :--- | :--- | :--- | :--- |
| **Color Primario** | `--color-teal` | `#0d9488` | `hsl(175, 84%, 32%)` | Encabezados principales, botones primarios y acentos de marca. |
| **Primario Oscuro** | `--color-teal-dark` | `#0f766e` | `hsl(175, 77%, 26%)` | Estado hover de botones y pie de página secundario. |
| **Fondo Suave Teal** | `--color-teal-bg` | `#ccfbf1` | `hsl(166, 87%, 87%)` | Insignias, badges de sección y fondos de íconos. |
| **Color Acento Cálido** | `--color-coral` | `#f97316` | `hsl(25, 95%, 53%)` | Botones de atención secundaria, destacados y estrellas de calificación. |
| **Acento Rosa** | `--color-rose` | `#f43f5e` | `hsl(350, 89%, 60%)` | Corazones, alertas y detalles afectivos. |
| **Acento Sol / Alerta** | `--color-yellow` | `#eab308` | `hsl(45, 93%, 47%)` | Iconografía infantil y elementos lúdicos. |
| **Texto Principal** | `--color-slate-800` | `#1e293b` | `hsl(215, 28%, 17%)` | Párrafos y textos de lectura continua. |
| **Encabezados** | `--color-slate-900` | `#0f172a` | `hsl(222, 47%, 11%)` | Titulares y nombres de secciones. |
| **Fondo General** | `--color-slate-50` | `#f8fafc` | `hsl(210, 40%, 98%)` | Fondo limpio off-white. |

### Sombras y Elevaciones
- `--shadow-sm`: `0 2px 4px rgba(15, 23, 42, 0.04)`
- `--shadow-md`: `0 8px 16px -2px rgba(13, 148, 136, 0.08)`
- `--shadow-lg`: `0 20px 25px -5px rgba(15, 23, 42, 0.08)`
- `--shadow-floating`: `0 15px 30px rgba(13, 148, 136, 0.15)`

---

## 3. Tipografía & Jerarquía Visual

- **Fuente para Encabezados**: `'Plus Jakarta Sans'`, sans-serif (Google Fonts)
  - Pesos: `700` (Bold), `800` (ExtraBold)
- **Fuente para Cuerpo de Texto**: `'Nunito'`, sans-serif (Google Fonts)
  - Pesos: `400` (Regular), `600` (SemiBold), `700` (Bold)

### Escala de Tamaños
- **H1 (Hero Title)**: `3.25rem` (`52px`) | Line-height: `1.15` | Weight: `800`
- **H2 (Section Title)**: `2.25rem` (`36px`) | Line-height: `1.25` | Weight: `800`
- **H3 (Card Titles)**: `1.25rem` (`20px`) | Line-height: `1.3` | Weight: `700`
- **P (Body Text)**: `1.125rem` (`18px`) / `1rem` (`16px`) | Line-height: `1.6`
- **Badges / Subtitles**: `0.8125rem` (`13px`) | Uppercase | Letter-spacing: `1.5px`

---

## 4. Componentes UI & Reglas de Interacción

1. **Botón Principal (CTA)**:
   - Estilo: Relleno Teal `#0d9488`, borde redondeado completo `border-radius: 9999px`, texto blanco en `Plus Jakarta Sans 700`.
   - Hover: Transición `translateY(-2px)` + sombra Teal intensa.
2. **Botón Flotante de WhatsApp**:
   - Color `#25d366` en esquina inferior derecha (`bottom: 28px; right: 28px;`), tooltip animado con opacidad `1` al hacer hover.
3. **Máscara Orgánica de Imagen (Hero)**:
   - `border-radius: 50% 50% 40% 40% / 50% 50% 50% 50%;` con borde blanco grueso `10px solid #ffffff`.
4. **Tarjetas de Servicios**:
   - Tarjeta blanca con borde gris suave `#f1f5f9`, insignia circular de ícono de color en esquina superior.

---

## 5. Especificación para Páginas Secundarias

Si en el futuro el cliente solicita crear páginas secundarias (ej: `/servicios.html`, `/instalaciones.html`, `/inscripciones.html`, `/contacto.html`):

1. **Mantener la cabecera sticky (`.main-header`)** y el pie de página (`.main-footer`) idénticos a `index.html`.
2. **Reutilizar la hoja de estilos compartida** o embeber el mismo bloque `<style>` con los tokens `:root`.
3. **Usar el mismo marcado de SEO Local JSON-LD**:
   ```json
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "ChildCare",
     "name": "Centro Infantil Caritas Mágicas",
     "telephone": "+573001234567",
     "hasMap": "https://maps.app.goo.gl/83Hj1j1jhyfMi3VV8"
   }
   </script>
   ```
