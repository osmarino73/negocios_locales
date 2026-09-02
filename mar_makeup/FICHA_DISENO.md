# Ficha de Diseño: Mar_makeup💕 (Clonación Forense "NOVA MED SPA")

Manual de diseño visual, sistema de componentes y tokens extraídos con **precisión forense de la referencia visual "NOVA MED SPA"** (Paleta Warm Espresso Obsidian, Soft Cashmere Cream & Warm Nude Taupe), aplicando la tipografía editorial (**Cormorant Garamond** + **Plus Jakarta Sans**) y la estructura oficial de 6 secciones para negocios locales.

---

## 🎨 Paleta de Colores Forense (Warm Espresso Obsidian, Soft Cashmere Cream & Warm Taupe)

| Rol del Color | HEX | HSL / RGBA | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Warm Espresso Obsidian (Fondo Dark)** | `#1b1918` / `#161413` | `hsl(20, 8%, 10%)` | Fondo principal del Hero full-width, header sticky, módulo de especialistas y footer |
| **Dark Espresso Surface (Tarjetas Dark)** | `#24201e` / `#2b2725` | `hsl(20, 9%, 14%)` | Tarjetas de especialistas, barra de pilares y contenedores elevados |
| **Soft Cashmere Cream (Fondo Light)** | `#f6f3ee` / `#efeae1` | `hsl(40, 25%, 95%)` | Fondo de la sección `#servicios` y tarjetas claras |
| **Warm Nude Taupe (Color de Acento)** | `#c4a58b` / `#b59379` | `hsl(27, 33%, 66%)` | Botones de llamado a la acción `Agendar`, divisores, badges de técnica y acentos |
| **Warm Nude Hover** | `#d4b79f` | `hsl(27, 40%, 73%)` | Estados hover de botones y elementos interactivos |
| **Pure White** | `#ffffff` | `hsl(0, 0%, 100%)` | Tarjetas de servicios sobre fondo cashmere y elementos de alto contraste |
| **Text Primary (Dark Background)** | `#fdfaf7` | `hsl(30, 50%, 98%)` | Titulares H1, H2, H3 en zonas oscuras |
| **Text Secondary (Dark Background)** | `#c5beb6` / `#9e978f` | `hsl(30, 10%, 75%)` | Descripciones, subtítulos y datos en zonas oscuras |
| **Text Dark (Light Background)** | `#1b1918` | `hsl(20, 8%, 10%)` | Titulares y nombres de servicios en zonas claras |
| **Text Muted (Light Background)** | `#66615b` | `hsl(30, 6%, 38%)` | Párrafos y descripciones en zonas claras |

---

## 🔤 Tipografía Forense Extraída de la Referencia ("NOVA MED SPA")

* **1. Tipografía Display & Titulares Principales (H1, H2, H3)**: `'Cormorant Garamond', 'Playfair Display', Georgia, serif;` (Google Fonts, Pesos `500`, `600`, `700`).
  * Serif de corte editorial, refinada, esbelta y de alto impacto:
  * *"Realza Tu Belleza. Revela Tu Mejor Versión."*, *"Cuidado Especializado Para Ti"*, *"Nuestros Servicios"*, *"Nuestros Profesionales"*.
* **2. Tipografía de UI, Botones, Eyebrows & Lectura (Body)**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;` (Google Fonts, Pesos `400`, `500`, `600`, `700`).
  * Sans-serif moderna, geométrica y con excelente legibilidad en pantallas móviles y de escritorio.
* **3. Eyebrows & Etiquetas Superiores**: `font-family: var(--font-ui); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700;`.

---

## 🧩 Componentes Clave Replicados con Precisión Forense

1. **Smart Header / Navbar Inteligente**:
   * Contenedor con auto-hide al scrollear hacia abajo y reaparición instantánea al subir.
   * Logotipo editorial `MAR_MAKEUP💕 • CENTRO DE ESTÉTICA` con botón conciso **«Agendar»** (`.btn-header-cta`).
2. **Hero Header Inmersivo Full-Width Bleed (`#inicio`)**:
   * Fondo Warm Espresso `#1b1918` con fotografía de modelo con piel radiante a la derecha.
   * Máscara degradada horizontal al 50% en escritorio para máxima nitidez fotográfica a la derecha y legibilidad del texto a la izquierda.
   * En móvil (<768px): +20% de altura editorial (710px), centrado simétrico en la mitad inferior, botones apilados (ancho máx. 280px).
   * Contadores de experiencia y satisfacción: `10+ Años de Exp.`, `1500+ Clientas Felices`, `15+ Tratamientos`.
3. **Barra de 5 Pilares de Excelencia**:
   * 5 sellos de confianza: *Esteticistas Expertas, Productos Prémium, Diagnóstico Personalizado, Higiene & Bioseguridad, Satisfacción 100%*.
4. **Catálogo de Servicios (`#servicios`)**:
   * Fondo Cashmere Cream `#f6f3ee` con tarjetas blancas de bordes redondeados (`border-radius: 20px`), fotos 1:1, badges de técnica, precios numéricos claros y botón directo de agendamiento a WhatsApp (**en 2 columnas obligatorias en móvil `<768px>`**).
5. **Nuestros Profesionales (`#nosotros`)**:
   * Fondo Warm Espresso con tarjetas de especialistas en 1:1, badges de experiencia, roles claros y botón directo a WhatsApp (**en 2 columnas obligatorias en móvil `<768px>`**).
6. **Mapa Interactivo Georreferenciado (`#ubicacion`)**:
   * Panel de contacto con dirección física en Barrio Baltazar, Turbo, teléfono clickeable y Google Maps embebido con fórmula nominal (`z=16`).
7. **Footer Principal**:
   * Enlaces de navegación, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**:
   * Botón interactivo fijo con mensaje contextual (sin barra Action Dock inferior).
