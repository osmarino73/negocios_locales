# Ficha de Diseño: Sandra Color´s (Inspiración "LUXE SALON & ACADEMY - Radiant Rose Pink")

Manual de diseño visual y sistema de componentes extraído de la referencia de alta gama **"LUXE SALON & ACADEMY"** (Paleta Rosa Pastel, Frambuesa Vibrante & Flor de Loto), aplicando el estándar de **Hero Header Inmersivo a Ancho Completo (`Full-Width Bleed`)**, tipografía editorial de lujo (**Playfair Display** + **Plus Jakarta Sans**) y adaptado al 100% para **Sandra Color´s** en **Apartadó, Antioquia** con la fotografía **`modelo1.webp`**.

---

## 🎨 Paleta de Colores Curada (Radiant Rose Luxe & Soft Pastel Pink)

| Rol del Color | HEX | HSL | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Vibrant Raspberry Rose (Color Primario)** | `#d6336c` | `hsl(339, 67%, 52%)` | Botones principales (`.btn-luxe-rose`), acento en títulos ("Lujo & Experiencia"), badges circulares y flor de loto |
| **Deep Rose Magenta (Hover Primario)** | `#b82356` | `hsl(339, 68%, 43%)` | Hover en botones y estados activos |
| **Soft Blush Pink (Fondo Hero & Superficies)** | `#fdf2f4` | `hsl(348, 70%, 97%)` | Fondo general del Hero a ancho completo para fusión con `modelo1.webp` |
| **Rose Petal Tint (Franjas y Badges)** | `#fce7eb` | `hsl(348, 72%, 95%)` | Fondos de sellos, franja de estadísticas y badges de iconos |
| **Pure White (Superficies de Tarjetas)** | `#ffffff` | `hsl(0, 0%, 100%)` | Tarjetas de servicios, equipo de especialistas y panel de ubicación |
| **Deep Velvet Plum (Tipografía H1/H2)** | `#2c131a` | `hsl(343, 39%, 12%)` | Encabezados principales, logotipo y nombres |
| **Soft Mauve Gray (Textos Secundarios)** | `#705a62` | `hsl(335, 11%, 40%)` | Subtítulos, párrafos, duraciones y horarios |
| **Borde Rosa Perlado** | `rgba(214, 51, 108, 0.2)` | — | Delimitadores de tarjetas, pills y divisores con hojas botánicas |

---

## 🔤 Tipografía Extraída Fielmente de la Referencia ("LUXE SALON")

* **1. Tipografía Display & Titulares (H1, H2, H3, Logotipo)**: `'Playfair Display', Georgia, serif` (Google Fonts, Pesos `500`, `600`, `700`, `ital`).
  * Estilo editorial de alta gama con serifas refinadas y acento en Raspberry Rose (`#d6336c`):
  * *"Donde la Belleza / **Se Encuentra con el Lujo**"*.
* **2. Tipografía de Acento Script / Cursiva**: `'Cormorant Garamond', serif; font-style: italic;` para frases de bienvenida (*"creado especialmente para ti"*).
* **3. Tipografía de Lectura & UI (Body, Menús, Botones, Párrafos)**: `'Plus Jakarta Sans', sans-serif` (Google Fonts, Pesos `400`, `500`, `600`, `700`, `800`).
* **4. Eyebrows & Badges**: Mayúsculas espaciadas en Rosa Frambuesa (`color: #d6336c; letter-spacing: 2.5px; font-size: 0.78rem; font-weight: 800`).

---

## 🧩 Arquitectura Visual & Componentes Exclusivos (LUXE Rose Style)

1. **Header Minimalista con Flor de Loto Rosa**:
   * Logotipo con flor de loto geométrica rosa y tipografía `Playfair Display`.
   * Menú con las 4 secciones estrictas (`#inicio`, `#servicios`, `#nosotros`, `#ubicacion`) y botón rosa vibrante `AGENDAR CITA`.
2. **Hero Header Inmersivo a Ancho Completo (`Full-Width Bleed`)**:
   * Fondo continuo `#fdf2f4` que abarca el 100% de la pantalla (`min-height: 640px` en desktop y calibrado a `min-height: 720px` en móvil (+20% de altura) para dar mayor respiro y protagonismo a la fotografía superior).
   * Capa `.hero-bg-cover` con la fotografía de alta gama **`./modelo1.webp`** posicionada a la derecha en desktop y centrada arriba con opacidad `0.94` en móvil.
   * Máscara `.hero-bg-overlay` con degradado suave de rubor rosa `#fdf2f4` a transparente.
   * Botón rosa frambuesa con icono de calendario + Botón contorno `EXPLORAR SERVICIOS`.
   * Badge circular flotante de experiencia **"5+ Años de Excelencia ⭐⭐⭐⭐⭐"**.
3. **Franja Rosa de 4 Sellos de Garantía**:
   * 💎 *Calidad Premium* | 👩‍🎨 *Estilistas Expertas* | 🛡️ *Higiene & Seguridad* | ❤️ *Satisfacción Garantizada*.
4. **Catálogo de 6 Servicios con Fotografías de Alta Gama (#servicios)**:
   * Tarjetas blancas refinadas con fotos cuadradas (1:1) nítidas (Corte, Faciales Glow, Maquillaje Novias, Nail Art, Spa Corporal y Balayage), precios claros (ej. `$45.000`) y botón compacto `.btn-card-book` con texto «Agendar» a WhatsApp. En pantallas móviles (< 768px y ≤ 480px), se renderiza en **cuadrícula doble columna (2 columnas `repeat(2, 1fr)`)** con limpieza de badges desalineados.
5. **Sección Nosotros / Experiencia & Especialistas (#nosotros)**:
   * Vitrina con salón rosa pastel, franja de estadísticas destacadas (1000+ Clientas, 10+ Especialistas, 5+ Años, 98% Satisfacción) y el grid de especialistas master con fotos 1:1 y formato doble columna (2 columnas) en móvil con botón conciso «Agendar».
6. **Ubicación & Google Maps Georreferenciado (#ubicacion)**:
   * Panel limpio a dos columnas con mapa interactivo exacto en Apartadó.
7. **Banner Pre-Footer Rosa Radiant**:
   * "Obtén 20% OFF en tu primera visita" con botones de reserva directa por WhatsApp.
8. **Footer Editorial LUXE Rose**:
   * Logotipo con flor de loto, enlaces de navegación, contacto y derechos reservados.
