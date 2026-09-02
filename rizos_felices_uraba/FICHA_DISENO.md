# Ficha de Diseño: Rizos Felices Urabá (Edición Lujo Dark Obsidian & Oro Miel)

Esta ficha documenta la clonación forense de estilo a partir de la nueva imagen de referencia visual de alta gama (*Tabbsum Shah Beauty*), adaptada al negocio local **Rizos Felices Urabá** en Apartadó, Antioquia.

---

## 🎨 Tríada Visual & Paleta de Colores Forense

| Variable CSS | Código HEX / HSL | Uso Principal |
| :--- | :--- | :--- |
| `--bg-base` | `#0d0f12` | Fondo principal oscuro profundo / ébano |
| `--bg-surface` | `#14171c` | Fondo de tarjetas, paneles y contenedores |
| `--bg-surface-elevated` | `#1a1e24` | Tarjetas hover y elementos destacados |
| `--color-gold` | `#dfb77c` | Oro miel cálido de acento principal |
| `--color-gold-light` | `#f5d59f` | Oro champagne para brillos y titulares |
| `--color-gold-dark` | `#b8863b` | Oro profundo para sombras y bordes activos |
| `--border-gold` | `rgba(223, 183, 124, 0.22)` | Bordes sutiles de lujo |
| `--border-gold-strong`| `rgba(223, 183, 124, 0.55)` | Bordes activos y hover |
| `--text-primary` | `#fbf9f5` | Texto principal blanco marfil |
| `--text-secondary` | `#c4c0b8` | Subtítulos y descripciones |
| `--text-muted` | `#8d8982` | Etiquetas y metadatos secundarios |
| `--gold-gradient` | `linear-gradient(135deg, #f5d59f 0%, #dfb77c 50%, #c18f4a 100%)` | Botones principales y badges VIP |
| `--gold-gradient-hover` | `linear-gradient(135deg, #ffffff 0%, #f5d59f 50%, #dfb77c 100%)` | Hover en botones principales |

---

## 🔤 Tipografía Forense

1. **Titulares Display & Secciones**:
   - Familia: `'Playfair Display', serif`
   - Pesos: `500`, `600`, `700`, `italic`
   - Estilo de firma / Script: `'Playfair Display', italic` para frases de autor y acentos *Glow Beyond Beauty* ✨.

2. **Cuerpo, UI & Botones**:
   - Familia: `'Plus Jakarta Sans', sans-serif`
   - Pesos: `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold).
   - Letter spacing: `0.5px - 2px` en mayúsculas y logotipos.

---

## 📐 Estructura de Secciones Oficiales

1. **Top Bar Promocional**: Franja superior degradada en oro cálido.
2. **Smart Header / Navbar Inteligente**: Logotipo en Playfair con tracking amplio y botón conciso **«Agendar»**.
3. **`#inicio` (Hero Full-Width Bleed)**:
   - Portada inmersiva en ébano oscuro con modelo a la derecha.
   - Titular: *Rizos Radiantes & Cuidados de Autor ✨*.
   - Botón primario dorado + botón secundario translúcido con borde dorado.
   - Altura: Desktop `min-height: 640px;` | Móvil `min-height: 720px !important;`.
4. **Barra de Pilares / Garantías**: Franja de 5 sellos con íconos estilizados en oro.
5. **`#servicios` (Catálogo de Servicios)**: Grid Crismar de 6 servicios con pastillas de datos (`.service-badge-pill`) y botón directo a WhatsApp (2 columnas en móvil).
6. **`#nosotros` (Nuestros Profesionales)**: Especialistas certificadas en método curly con avatares circulares 50%, marco de oro y botón a WhatsApp (2 columnas en móvil).
7. **`#ubicacion` (Mapa & Contacto)**: Panel de Apartadó con Google Maps embebido (`z=16`).
8. **Footer Principal de Lujo**: Módulo de reserva con botón conciso **«Agendar»**.
