# Ficha de Diseño: Ébano & Marfil - Beauty Center (Clonación Forense "LUXEHAIR Hair Salon")

Manual de diseño visual, sistema de componentes y tokens extraídos con **precisión forense de la referencia visual "LUXEHAIR Hair Salon"** (Paleta Deep Obsidian Black, Warm Rose Nude / Camel Gold & Soft Marfil Cream), aplicando la tríada tipográfica (**Alex Brush / Signature Script** + **DM Serif Display / Cormorant Garamond** + **Tenor Sans / Plus Jakarta Sans**) y la arquitectura de **Hero Header Inmersivo Full-Width con Modelo Morena Voluminosa**, **Barra Flotante de 5 Pilares de Excelencia**, **Catálogo de 6 Servicios con Íconos y Fotos 1:1**, **Banner Promocional 20% OFF con Interior del Salón**, **Galería de 6 Trabajos de Autor**, **Módulo de Paquetes & Precios (Packages & Pricing)**, **Testimonios con Calificación 5.0 ★** y **Footer de Lujo 5 Columnas**, adaptado al 100% para **Ébano & Marfil - Beauty Center** en **Turbo, Antioquia, Colombia**.

---

## 🎨 Paleta de Colores Forense (Deep Obsidian, Warm Camel Rose & Soft Cream)

| Rol del Color | HEX | HSL / RGBA | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Warm Camel Rose (Color Primario de Acento)** | `#d1a88b` / `#c59b7b` | `hsl(25, 45%, 68%)` | Botones principales `BOOK APPOINTMENT`, frase cursiva script (*"Meets Confidence"*, *"Good Mood"*), divisores y badges |
| **Warm Rose Hover** | `#e0ba9e` | `hsl(25, 52%, 75%)` | Efectos hover interactivos en botones y enlaces |
| **Deep Obsidian Black (Superficies Dark)** | `#0c0b0e` / `#080709` | `hsl(270, 12%, 5%)` | Fondo del Hero full-width, header sticky, topbar, banner promo y footer |
| **Dark Charcoal Surface (Tarjetas Dark & Pilares)** | `#141317` / `#1c1a20` | `hsl(260, 10%, 10%)` | Barra de 5 pilares, tarjeta "Good Hair Good Mood" y acentos oscuros |
| **Soft Marfil Cream (Superficies Claras)** | `#fcf9f5` / `#f6f1ea` | `hsl(36, 40%, 97%)` | Fondo general de la página, tarjetas de servicios y paquetes de precios |
| **Pure White** | `#ffffff` | `hsl(0, 0%, 100%)` | Tarjetas claras de paquetes, testimonios y panel de mapa |
| **Deep Velvet Title Text** | `#121014` | `hsl(270, 9%, 7%)` | Titulares principales H1, H2, H3 y nombres de servicios en zonas claras |
| **Warm Sand Gray (Textos Secundarios)** | `#78716c` / `#a8a29e` | `hsl(30, 8%, 45%)` | Descripciones, subtítulos, duraciones y metadatos |
| **Borde Cálido Translúcido** | `rgba(209, 168, 139, 0.25)` | `rgba(209, 168, 139, 0.25)` | Delimitadores de tarjetas, píldoras y divisores ornamentales |
| **Star Rating Gold** | `#f59e0b` / `#d1a88b` | `hsl(38, 92%, 50%)` | Estrellas de calificación 5.0 ★ |

---

## 🔤 Tríada Tipográfica Forense Extraída de la Referencia ("LUXEHAIR")

* **1. Tipografía Cursiva / Signature Script de Acento**: `'Alex Brush', 'Great Vibes', cursive;` (Google Fonts, Peso `400`).
  * Caligrafía manuscrita de autor con lazos fluidos idéntica a la referencia:
  * *"Meets Confidence."*, *"Good Mood"*, *"Tu Confianza"*.
* **2. Tipografía Display & Titulares Principales (H1, H2, H3)**: `'DM Serif Display', 'Cormorant Garamond', Georgia, serif;` (Google Fonts, Pesos `400`, `500`, `600`).
  * Serif de gran refinamiento editorial con trazos esbeltos:
  * **"Where Style"**, **"Our Services"**, **"Packages & Pricing"**, **"What Our Clients Say"**.
* **3. Tipografía de Marca / Logotipo**: `'Tenor Sans', 'Montserrat', sans-serif;` con `letter-spacing: 4px; text-transform: uppercase; font-weight: 700;`.
* **4. Tipografía de Lectura & UI (Body, Menús, Botones, Eyebrows)**: `'Plus Jakarta Sans', 'Montserrat', sans-serif;` (Google Fonts, Pesos `400`, `500`, `600`, `700`).

---

## 🧩 Componentes Clave Replicados con Precisión Forense

1. **Top Bar Dark Obsidian**:
   * Franja superior `#080709` con dirección de Turbo, teléfono, horario 9am - 8pm y redes sociales.
2. **Smart Header con Logotipo LUXEHAIR / ÉBANO & MARFIL**:
   * Logo con serifa refinada, espaciado premium y botón cálido camel rose **«Agendar»** (`.btn-header-cta`).
3. **Hero Header Inmersivo Full-Width Bleed**:
   * Fondo Ébano Oscuro `#0c0b0e` con fotografía de modelo morena de cabello ondulado a la derecha.
   * Desktop (>768px): Overlay degradado al 50% de ancho con foto 100% nítida a la derecha.
   * Móvil (<768px): Altura 720px (+20%), texto centrado en la mitad inferior, botones apilados (ancho máx. 280px).
   * Titular display: *"Donde el Estilo"* + cursiva en oro rosa *`Encuentra la Confianza.`*
   * Botón primario `#d1a88b` (`📅 Agendar Cita`) + Botón secundario con borde traslúcido (`Explorar Servicios →`).
4. **Barra de 5 Pilares de Excelencia (Dark Badges Card)**:
   * Contenedor carbón `#141317` con 5 items de línea delgada: *Estilistas Expertos*, *Productos Prémium*, *Experiencia de Lujo*, *Satisfacción del Cliente*, *Higiene & Seguridad*.
5. **Catálogo de 6 Servicios («Nuestros Servicios»)**:
   * Tarjetas crema `#fcf9f5` con foto superior (1:1), ícono circular de servicio, titular en mayúsculas, descripción y botón compacto `Agendar →`. En móvil (<768px): **2 columnas balanceadas (`repeat(2, 1fr)`)**.
6. **Galería de 6 Trabajos de Autor («Nuestros Trabajos» / Propuesta de Valor)**:
   * Grid de 6 fotos de transformaciones capilares en alta resolución con hover zoom sutil.
7. **Mapa Interactivo de Google Maps Georreferenciado en Turbo (`z=16`)**:
   * Iframe de Google Maps exacto para `Cra. 14 #99-26, Turbo, Antioquia`.
8. **Footer de Lujo 4 Columnas**:
   * Footer oscuro con enlaces de navegación, datos de contacto, mini-galería de Instagram y módulo de reserva rápida con botón conciso **«Agendar»**.
