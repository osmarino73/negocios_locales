# Ficha de Diseño: Ébano & Marfil - Beauty Center (Canvas Video Scroll Scrubbing & Estándar Editorial)

Manual de diseño visual, sistema de componentes y tokens de producción para **Ébano & Marfil - Beauty Center** en **Turbo, Antioquia, Colombia**, con motor interactivo de **Video Scroll Scrubbing en Canvas HTML5** a partir de video nativo 1080p con modelo morena en rotación de moda capilar (encuadre centro-derecha 0.62 en móvil), tríada tipográfica editorial (**Alex Brush / Signature Script** + **DM Serif Display / Cormorant Garamond** + **Tenor Sans / Plus Jakarta Sans**) y arquitectura 100% autónoma conforme a las directrices de `AGENTS.md`.

---

## 🎨 Paleta de Colores Forense (Deep Obsidian, Warm Camel Rose & Soft Ivory Marfil)

| Rol del Color | HEX | HSL / RGBA | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Warm Camel Rose (Color Primario de Acento)** | `#d1a88b` / `#c59b7b` | `hsl(25, 45%, 68%)` | Botones principales `Agendar Cita`, frase cursiva script (*"Refleja tu mejor versión"*, *"Belleza Auténtica"*), divisores y badges |
| **Warm Rose Hover** | `#e0ba9e` | `hsl(25, 52%, 75%)` | Efectos hover interactivos en botones y enlaces |
| **Deep Obsidian Black (Superficies Dark)** | `#080709` / `#0c0b0e` | `hsl(270, 12%, 5%)` | Fondo del Hero full-width, header sticky, footer y superficies de máximo contraste |
| **Dark Charcoal Surface (Tarjetas Dark & Pilares)** | `#141317` / `#1c1a20` | `hsl(260, 10%, 10%)` | Barra de 5 pilares de excelencia y tarjetas de contraste |
| **Soft Marfil Cream (Superficies Claras)** | `#ede5da` / `#fbf8f4` | `hsl(36, 40%, 97%)` | Fondo de degradado desktop del Hero, tarjetas de servicios y paneles luminosos |
| **Pure White** | `#ffffff` | `hsl(0, 0%, 100%)` | Tarjetas claras, textos sobre fondos oscuros y panel de mapa |
| **Deep Velvet Title Text** | `#121014` | `hsl(270, 9%, 7%)` | Titulares principales H1, H2, H3 y nombres de servicios en zonas claras |
| **Warm Sand Gray (Textos Secundarios)** | `#78716c` / `#a8a29e` | `hsl(30, 8%, 45%)` | Descripciones, subtítulos, duraciones y metadatos |
| **Borde Cálido Translúcido** | `rgba(209, 168, 139, 0.22)` | `rgba(209, 168, 139, 0.22)` | Delimitadores de tarjetas, píldoras y divisores ornamentales |
| **Star Rating Gold** | `#f59e0b` / `#d1a88b` | `hsl(38, 92%, 50%)` | Estrellas de calificación 5.0 ★ |

---

## 🔤 Tríada Tipográfica Forense Extraída

* **1. Tipografía Cursiva / Signature Script de Acento**: `'Alex Brush', 'Great Vibes', cursive;` (Google Fonts, Peso `400`).
  * Caligrafía manuscrita fluida de alta costura:
  * *"Refleja tu mejor versión"*, *"Donde el Estilo Encuentra tu Confianza"*.
* **2. Tipografía Display & Titulares Principales (H1, H2, H3)**: `'DM Serif Display', 'Cormorant Garamond', Georgia, serif;` (Google Fonts, Pesos `400`, `500`, `600`).
  * Serif de refinamiento editorial esbelto:
  * **"Donde el Estilo"**, **"Nuestros Servicios"**, **"Nuestro Equipo"**, **"Visítanos en Turbo"**.
* **3. Tipografía de Marca / Logotipo**: `'Tenor Sans', 'Montserrat', sans-serif;` con `letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700;`. Logotipo tipográfico puro sin íconos ornamentales (cero emojis).
* **4. Tipografía de Lectura & UI (Body, Menús, Botones, Eyebrows)**: `'Plus Jakarta Sans', 'Montserrat', sans-serif;` (Google Fonts, Pesos `400`, `500`, `600`, `700`).

---

## 🎬 Motor de Animación Canvas Video Scroll Scrubbing

1. **Extracción Dual Calibrada (Desktop & Mobile)**:
   - **Video Fuente Oficial**: `.agents/document/morena_salonbelleza.mp4` (4.0s, 24 fps nativo).
   - **Regla Mandatoria de Encuadre**: La modelo se sitúa en el centro de la segunda mitad del video (mitad derecha $x \approx 1440$ en 1920x1080), dejando el 50% izquierdo disponible para el texto en escritorio.
   - **Desktop (16:9)**: 74 fotogramas WebP (`1920x1080`, calidad 85, nivel de compresión 6) a `fps=18.5`.
   - **Mobile (9:16 Calibrado)**: 74 fotogramas WebP (`720x1280`, calidad 76) con recorte centrado en el sujeto de la segunda mitad (`crop=ih*9/16:ih:1140:0,scale=720:1280`), manteniendo a la modelo morena, su rostro y sus rizos perfectamente encuadrados tanto de frente como al girar 360°.
2. **Arquitectura del Canvas (300vh)**:
   - Contenedor `#inicio.hero-scroll-track` con `height: 300vh; position: relative;`.
   - `.hero-sticky-stage`: `position: sticky; top: 0; height: 100vh; height: 100dvh; overflow: hidden;`.
   - `canvas#hero-canvas`: Renderizado con soporte Retina DPR (`window.devicePixelRatio`), sin distorsiones por `object-fit: cover` CSS.
   - Poster de respaldo inicial y loader progresivo con precarga paralela de los 74 fotogramas.
3. **Narrativa Editorial en 2 Fases Sincronizadas**:
   - **Fase 1 (0% - 48% Scroll)**: Apertura de marca con titular editorial *"Donde el Estilo"* + script *"Refleja tu mejor versión"*, descripción y botón principal **«Agendar Cita»**.
   - **Fase 2 (52% - 100% Scroll)**: Revelación de excelencia *"Experiencia & Cuidado Exclusivo"* con píldora de autoridad, descripción de atención personalizada y llamada a la acción hacia los servicios.
4. **Gradiente de Integración**:
   - En Desktop: Gradiente horizontal marfil cálido (`#ede5da`) a la izquierda para garantizar legibilidad del texto editorial oscuro sin ocultar a la modelo radiante a la derecha.
   - En Mobile: Gradiente vertical con zona superior 38% translúcida y transición inferior aterciopelada sobre el vestido ébano de la modelo para contraste óptimo de textos y botones.

---

## 🧩 Componentes y Secciones Oficiales (Estándar AGENTS.md)

1. **Smart Header / Navbar Inteligente**:
   - Sin barra de avisos superior (`.topbar` eliminada por regla mandatoria).
   - Logotipo puramente tipográfico: `Ébano & Marfil salon` + `Beauty Center • Turbo`.
   - Botón conciso **«Agendar»** (`.btn-header-cta`).
   - Visibilidad inteligente: permanece visible durante el hero y se auto-oculta/reaparece suavemente en las secciones inferiores.
   - Soporte de `env(safe-area-inset-top)`. En móvil se oculta el menú hamburguesa innecesario.
2. **Barra de 5 Pilares de Excelencia (`#pilares`)**:
   - Sección independiente fuera del Hero con 5 sellos de confianza (*Estilistas Expertas*, *Productos Prémium*, *Técnica Personalizada*, *Satisfacción Total*, *Higiene & Seguridad*).
   - En móvil (<768px): carrusel horizontal fluido con *Scroll Snap* en una sola fila compacta.
3. **Catálogo de Servicios (`#servicios` — Full-Bleed Minimalista)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil (`repeat(2, minmax(0, 1fr))`)**.
   - Fotografía protagonista al 100% en relación 3:4 con degradado inferior aterciopelado.
   - Cero píldoras superiores de duración.
   - Título display blanco, precio visible en pesos colombianos (`$ COP`) y enlace minimalista **`AGENDAR ➔`** directo a WhatsApp.
4. **Sobre Nosotros & Nuestro Equipo (`#nosotros`)**:
   - **Bloque Editorial**: Grid a 2 columnas con fotografía del salón capilar (`photo-1560066984-138dadb4c035`), badge flotante VIP, descripción cálida y 4 métricas de autoridad (10+ Años de Experiencia, 4.500+ Clientas Felices, 100% Cuidado Capilar, 5.0★ Calificación).
   - **Bloque Nuestro Equipo**: Grid de **4 columnas en escritorio** con formato **Retrato Editorial Full-Bleed (3:4.2)** con degradado aterciopelado, rol cálido, 5★ y enlace minimalista `AGENDAR ➔`. En móvil (<768px): **Carrusel Horizontal Deslizable con Scroll Snap** y efecto «Peek» (asoman 70-100px de la siguiente profesional).
5. **Ubicación & Contacto (`#ubicacion`)**:
   - Panel de datos físicos (Cra. 14 #99-26, Turbo, Antioquia), horarios de atención, teléfonos y mapa embebido de Google Maps con fórmula georreferenciada oficial (`z=16`).
6. **Footer de Lujo**:
   - Logotipo tipográfico puro, datos de contacto, enlaces de navegación, redes sociales y módulo de reserva con botón conciso **«Agendar»**.
7. **Botón Flotante de WhatsApp (`.whatsapp-float`)**:
   - Botón circular con badge de estado activo, soporte de `bottom: calc(28px + env(safe-area-inset-bottom, 0px))` y sin `overflow: hidden`.
