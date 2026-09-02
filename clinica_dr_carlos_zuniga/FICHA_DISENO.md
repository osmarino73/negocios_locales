# Ficha de Diseño: Clínica Dr. Carlos Zúñiga (Inspiración "ONE LIFE - Aesthetic & Plastic Surgery")

Manual de diseño visual y sistema de componentes extraído de la referencia de alta gama **"ONE LIFE / Aesthetic Surgery"** (Paleta Champagne Cálido `#fbf6ee`, Sky Blue `#6ec1e4`, Terracota `#cf7e5e` y Blanco Minimalista `#ffffff`), aplicando el estándar de **Hero Header Inmersivo a Ancho Completo (`Full-Width Bleed`)**, tipografía limpia (**Plus Jakarta Sans** + **Outfit**) y adaptado al 100% para la **Clínica Dr. Carlos Zúñiga** en **Apartadó, Antioquia**.

---

## 🎨 Paleta de Colores Curada (OneLife Champagne, Terracotta & Sky Blue)

| Rol del Color | HEX | HSL | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Aesthetic Sky Blue (Color Primario)** | `#6ec1e4` | `hsl(198, 69%, 66%)` | Botones principales (`.btn-onelife-blue`), tabs activas y líneas sutiles |
| **Warm Terracotta Rose (Acento de Titular)** | `#cf7e5e` | `hsl(17, 53%, 59%)` | Acento en titular ("Garantizamos / Tu Mejor Versión") y badges |
| **Champagne Peach Soft (Fondo Hero)** | `#fcf5ec` | `hsl(35, 68%, 96%)` | Fondo general del Hero a ancho completo para fusión con la modelo |
| **Pure White (Superficies de Tarjetas)** | `#ffffff` | `hsl(0, 0%, 100%)` | Tarjetas de áreas corporales, panel de ubicación y vitrina |
| **Deep Charcoal Gray (Tipografía Principal)** | `#2c3539` | `hsl(200, 13%, 20%)` | Titulares principales H1/H2, logotipo y nombres |
| **Muted Ash Stone (Textos Secundarios)** | `#707b82` | `hsl(203, 8%, 48%)` | Párrafos, descripciones y horarios |
| **Borde Champagne Sutil** | `#ece2d4` | — | Delimitadores de tarjetas circulares y tarjetas informativas |

---

## 🔤 Tipografía Extraída Fielmente de la Referencia ("ONE LIFE")

* **1. Gran Titular del Hero & Encabezados Display (H1, H2, H3)**: `'Plus Jakarta Sans', sans-serif` (Google Fonts, Pesos `500`, `600`, `700`, `800`).
  * Estilo minimalista, limpio, premium y contemporáneo:
  * *"Garantizamos Tu Mejor Versión / **Y Máxima Seguridad**"*.
* **2. Tipografía de Lectura & UI (Body, Menús, Botones)**: `'Outfit', sans-serif` (Google Fonts, Pesos `400`, `500`, `600`, `700`).
* **3. Eyebrows & Badges**: Mayúsculas espaciadas (`letter-spacing: 3px; font-size: 0.78rem; font-weight: 800; color: #6ec1e4`).

---

## 🧩 Arquitectura Visual & Componentes Exclusivos (OneLife Style)

1. **Header Minimalista Blanco con Monograma OneLife**:
   * Logotipo con icono geométrico estilizado y tipografía limpia.
   * Menú con las 4 secciones estrictas (`#inicio`, `#servicios`, `#nosotros`, `#ubicacion`) y botón Sky Blue `AGENDAR CITA`.
2. **Hero Header Inmersivo a Ancho Completo (`Full-Width Bleed`)**:
   * Fondo continuo `#fcf5ec` que abarca el 100% de la pantalla (`min-height: 640px`).
   * Capa `.hero-bg-cover` con modelo de perfil en alta resolución **`./hero_onelife.jpg`** a la derecha.
   * Máscara `.hero-bg-overlay` con degradado suave de champagne cálido `#fcf5ec` a transparente.
   * Botón Sky Blue `AGENDAR VALORACIÓN` + Botón `VER PROCEDIMIENTOS`.
   * Badge de Galardón Médico / Certificación: *"Cirujano Miembro SCCP - Excelencia Quirúrgica"*.
3. **Catálogo de 4 Grandes Áreas Quirúrgicas con Fotos Circulares (#servicios)**:
   * 4 tarjetas minimalistas con **fotos circulares de alta definición** (Busto / Senos, Contorno Corporal / Lipo, Rostro / Rinoplastia, Piel & Rejuvenecimiento) con bordes dobles y descripciones.
4. **Sección Nosotros / Nueva Era Médica & Lista de Procedimientos (#nosotros)**:
   * Layout a 2 columnas:
     - Izquierda: Tarjeta en beige champagne con cita de autor y foto del Dr. Carlos Zúñiga.
     - Derecha: Panel oscuro Deep Charcoal con lista completa de procedimientos y tecnologías disponibles.
5. **Ubicación & Google Maps Georreferenciado (#ubicacion)**:
   * Panel limpio a dos columnas con dirección en `Cra. 105 #95A - 12, Barrio Nuevo, Apartadó` y mapa interactivo 100% responsive para móviles.
6. **Footer Editorial OneLife (`#1d2427`)**:
   * Logotipo clínico, enlaces de navegación, contacto y derechos reservados.
