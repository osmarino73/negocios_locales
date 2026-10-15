# Ficha de Diseño & Manual de Marca: DALI Saloom - Alta peluqueria

## 🎨 Identidad Visual & Concepto
- **Nombre**: DALI Saloom - Alta peluqueria
- **Rubro**: Centro de Estética & Alta Peluquería
- **Estilo Visual**: `belleza-cabello-blanca` (Lujo Editorial Minimalista, Marfil Warm, Cobre / Camel Gold, Obsidian Dark Canvas)
- **Atribuciones de Diseño**: Inspirado en alta costura y editoriales de belleza de lujo.

---

## 💎 Paleta de Colores Oficial (HEX & HSL)

| Token CSS | Código HEX | Descripción & Aplicación |
| :--- | :--- | :--- |
| `--color-accent` | `#cbb39c` | Camel Cobre Cálido (Firma script, precios, hover, roles) |
| `--color-accent-dark` | `#ab9178` | Cobre Sombra (Hover activo y degradados de acento) |
| `--bg-dark` | `#0d0b0a` | Obsidian Noche Aterciopelado (Fondo Canvas Hero) |
| `--bg-dark-card` | `#171412` | Ébano Mate (Fondo de tarjetas de servicios y equipo) |
| `--bg-light` | `#fbf9f6` | Marfil Warm Caluroso (Fondo de secciones sobre nosotros) |
| `--text-dark-primary` | `#f4efe9` | Blanco Cálido (Titulares y nombres display) |
| `--text-dark-secondary` | `#c9c0b8` | Arena Suave (Descripciones y roles) |
| `--border-soft` | `rgba(203, 179, 156, 0.2)` | Borde de acento translúcido |

---

## ✒️ Tipografías Extraídas (Google Fonts)

1. **Titulares Display**: `DM Serif Display` (Serif de alto impacto visual y cortes editoriales elegantes).
2. **Firma Script de Marca**: `Alex Brush` (Firma caligráfica para `.hero-script-tag` y eyebrows caligráficos).
3. **Cuerpo & UI**: `Plus Jakarta Sans` (Sans-serif limpia de alta legibilidad para botones, datos y párrafos).

---

## 📱 Componentes UI & Layout Rules

1. **Hero Header Canvas Video Scrubbing (`#inicio`)**:
   - `height: 300vh;` en el contenedor padre `.hero-scroll-section`.
   - `position: sticky; top: 0;` en `.canvas-sticky-wrapper`.
   - **Regla CSS Crítica**: `html, body { overflow-x: clip; }` para evitar rotura de `position: sticky`.
   - **Anclaje Inferior**: Texto ubicado en el tercio inferior despejando el 60% superior de la pantalla.
   - **Storytelling 2 Pasos**: Paso 1 (0-50%) Bienvenida + CTA principal + rating 4.6★; Paso 2 (50-100%) Servicios prémium y técnica.

2. **Barra de Pilares de Confianza**:
   - 5 sellos (*Estilistas Expertos, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Seguridad*).
   - Móvil: Carrusel horizontal deslizable (*Scroll Snap*).

3. **Catálogo de Servicios (`#servicios`)**:
   - Desktop: Grid 3 columnas (`repeat(3, 1fr)`).
   - Móvil: Grid 2 columnas balanceadas (`repeat(2, 1fr)`).
   - Tarjetas Full-Bleed 3:4 con degradado inferior, precio en primera fila, enlace `AGENDAR ➔` en segunda fila.

4. **Sobre Nosotros & Profesionales (`#nosotros`)**:
   - Bloque Editorial con imagen de peluquería de alta gama (`photo-1560066984-138dadb4c035`), badge VIP flotante y 4 métricas.
   - Equipo: Grid 4 columnas en desktop / Carrusel Scroll Snap en móvil con tarjetas retrato 3:4.2 (255px de ancho).

5. **Ubicación & Contacto (`#ubicacion`)**:
   - Panel de información + Google Maps interactivo embebido (`z=16` nominal URL formula).
