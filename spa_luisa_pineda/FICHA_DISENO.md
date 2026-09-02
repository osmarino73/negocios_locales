# Ficha de Diseño: Spa Luisa Pineda (Clonación Forense "Tabbsum Shah Beauty")

Manual de diseño visual, sistema de componentes y tokens extraídos con **precisión forense de la referencia visual "Tabbsum Shah Beauty"** (Paleta Deep Obsidian Black, Warm Champagne Gold & Rich Slate Glow), aplicando la tríada tipográfica (**Cormorant Garamond / Playfair Display** + **Alex Brush / Signature Script** + **Plus Jakarta Sans / Montserrat**) y la arquitectura oficial de 6 secciones optimizada para negocios locales.

---

## 🎨 Paleta de Colores Forense (Deep Obsidian, Warm Champagne Gold & Rich Slate Glow)

| Rol del Color | HEX | HSL / RGBA | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Warm Champagne Gold (Primario de Acento)** | `#d4af37` / `#e5be58` | `hsl(43, 74%, 62%)` | Botones principales `Agendar Cita`, detalles de marca, estrellas de valoración, precios y bordes |
| **Gold Shimmer Hover** | `#f3d178` | `hsl(43, 85%, 71%)` | Efecto hover en botones, enlaces activos y acentos iluminados |
| **Gold Dark Accent** | `#b8860b` | `hsl(43, 89%, 38%)` | Degradados metálicos, sombras de contraste y bordes de realce |
| **Deep Obsidian Black (Superficie Fondo)** | `#0d0f12` / `#090a0d` | `hsl(216, 16%, 6%)` | Fondo inmersivo global del sitio, hero edge-to-edge y footer |
| **Dark Charcoal Slate (Tarjetas y Paneles)** | `#15181f` / `#1c202a` | `hsl(220, 19%, 10%)` | Tarjetas de servicios, contenedor de pilares, testimonios y mapa |
| **Soft Champagne Cream (Texto Principal)** | `#fdfaf3` | `hsl(42, 60%, 97%)` | Titulares H1, H2, H3 y nombres de servicios en zonas oscuras |
| **Warm Sand Gray (Textos Secundarios)** | `#a6a29a` / `#c4bfb5` | `hsl(40, 7%, 68%)` | Párrafos descriptivos, etiquetas secundarias, duraciones |
| **Borde Dorado Translúcido** | `rgba(212, 175, 55, 0.25)` | `rgba(212, 175, 55, 0.25)` | Bordes sutiles de tarjetas de lujo, divisores y píldoras |
| **Star Rating Gold** | `#e5be58` | `hsl(43, 74%, 62%)` | Estrellas de calificación 5.0 ★ |

---

## 🔤 Tríada Tipográfica Forense Extraída de la Referencia ("Tabbsum Shah Beauty")

* **1. Tipografía Display & Titulares Principales (H1, H2, H3)**: `'Cormorant Garamond', 'Playfair Display', Georgia, serif;` (Google Fonts, Pesos `500`, `600`, `700`).
  * Serif romana editorial con gran elegancia y alto contraste:
  * *"Glow Beyond Beauty"*, *"Nuestros Bestsellers"*, *"Servicios de Salón de Lujo"*.
* **2. Tipografía Cursiva / Signature Script de Acento**: `'Alex Brush', 'Great Vibes', cursive;` y `'Cormorant Garamond', serif; font-style: italic;`.
  * Expresión caligráfica y de firma para realces editoriales:
  * *"Tratamientos Bestsellers"*, *"Resultados Reales, Confianza Total"*, *"por Luisa Pineda"*.
* **3. Tipografía de Marca / Logotipo**: `'Cormorant Garamond', serif; font-weight: 700; letter-spacing: 2px;`.
* **4. Tipografía de Lectura & UI (Body, Menús, Botones, Eyebrows)**: `'Plus Jakarta Sans', 'Montserrat', sans-serif;` (Google Fonts, Pesos `400`, `500`, `600`, `700`).

---

## 🧩 Componentes Clave Replicados con Precisión Forense

1. **Top Bar Promocional Dorada**:
   * Franja superior de acento dorado con mensaje exclusivo y llamada al agendamiento online.
2. **Smart Header / Navbar Inteligente**:
   * Ocultamiento suave al hacer scroll down y reaparición instantánea al hacer scroll up.
   * Logotipo con tipografía refinada y botón conciso **«Agendar»** (`.btn-header-cta`).
3. **Hero Header Inmersivo Full-Width Bleed (`#inicio`)**:
   * Fondo Deep Obsidian con fotografía en alta resolución a la derecha (`.hero-bg-cover`).
   * Desktop: Degradado horizontal al 50% para garantizar 100% de legibilidad y nitidez fotográfica.
   * Móvil (<768px): Altura 720px, centrado simétrico en la mitad inferior, botones apilados (ancho máx. 280px).
   * Badge flotante `5.0 ★ (Google Maps)`.
4. **Barra de 5 Pilares de Excelencia**:
   * Sellos de confianza en contenedor Charcoal Slate: *Estilistas Expertas, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Bioseguridad*.
5. **Catálogo de Servicios en 2 Columnas Móvil (`#servicios`)**:
   * Tarjetas dark obsidian con fotos 1:1, badges de técnica, precios numéricos claros y botón contextual de WhatsApp `.btn-card-book`.
6. **Propuesta de Valor & Resultados Reales (`#nosotros` / `#galeria`)**:
   * Módulo editorial de transformación (Antes y Después) + Testimonios de clientes con 5 estrellas doradas.
   * Galería estilo Instagram (`@spaluisapineda`) en 4 columnas con efecto hover.
7. **Mapa Interactivo Georreferenciado (`#ubicacion`)**:
   * Iframe de Google Maps exacto para `Cl. 100 #15-3, Turbo, Antioquia` con `z=16` y diseño responsive a 1 columna en móvil y 2 columnas en desktop.
8. **Footer Principal de Lujo**:
   * Información completa del negocio, horarios, accesos directos y módulo de reserva con botón conciso **«Agendar»**.
9. **Mobile Action Dock & WhatsApp Flotante**:
   * Barra inferior fija ergonómica para móviles con botones de Llamar, Ubicación, WhatsApp y Agendar.
