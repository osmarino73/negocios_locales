# Crismar Barbershop - Guía de Continuidad para Agentes de IA

Bienvenido al proyecto web de **Crismar Barbershop** en Apartadó, Antioquia. Este archivo proporciona el contexto técnico y operativo para que cualquier Inteligencia Artificial pueda continuar, extender o mantener el proyecto de manera autónoma y precisa.

---

## 📌 1. Estructura del Proyecto
* `index.html`: Página web 100% autónoma (standalone) con motor Canvas Scroll Scrubbing Hero sincronizado a 74 fotogramas WebP ultra ligeros, estilos CSS embebidos, Schema.org JSON-LD de Google, OpenGraph y mapa interactivo.
* `public/frames/desktop/`: 74 fotogramas WebP (1920x1080) + `poster.webp` extraídos de `Barber1.mp4` para vista de escritorio.
* `public/frames/mobile/`: 74 fotogramas WebP calibrados en 9:16 (720x1280, crop offset $x=1070$) + `poster.webp` centrados en el modelo para celulares.
* `DATOS_NEGOCIO.json`: Fuente única de la verdad con teléfonos, WhatsApp, horarios, dirección y catálogo de servicios y barberos.
* `FICHA_DISENO.md`: Sistema de diseño, paleta de colores Legend Amber Gold & Dark Obsidian, tipografía `Cinzel` + `Oswald` + `Plus Jakarta Sans` y especificaciones de componentes.
* `AGENTS.md`: Este archivo de instrucciones y lineamientos.

---

## 🏛️ 2. Arquitectura de 4 Secciones Estrictas
1. **`#inicio`**: Hero Track interactivo (300vh) con Canvas Video Scroll Scrubbing sincronizado, modelo centrado en la segunda mitad ($x \approx 1380$), narrativa en 2 pasos editoriales ("MÁS QUE UN CORTE. UN ESTILO DE VIDA" y "ARTE CLÁSICO & FADES DE PRECISIÓN"), degradado velvet y botón de agendamiento.
2. **Barra de Pilares / Garantías**: Franja de 4 sellos de confianza (*Barberos Expertos, Productos Premium, Higiene & Confort, 100% Satisfacción*).
3. **`#servicios`**: Catálogo de procedimientos clave (Fades, Barba con toalla caliente, Diseños, etc.) con badges de técnica/duración y botón compacto de agendamiento directo por WhatsApp. En móvil (< 768px): Cuadrícula doble columna.
4. **`#nosotros`**: Vitrina editorial con experiencia del salón, métricas de autoridad (8+ años, 20K+ cortes, 4 barberos máster, 4.9 estrellas) y grid de barberos máster con agendamiento directo a WhatsApp.
5. **`#ubicacion`**: Tarjeta a 2 columnas con mapa interactivo georreferenciado en Apartadó (`Cl. 104 #113-53`).
6. **Footer Principal**: Enlaces de navegación, contacto y módulo de reserva con botón conciso **«Agendar»**.

---

## 🛡️ 3. Reglas Obligatorias para cualquier IA
* **Idioma 100% en Español**: Cero textos en inglés residuales procedentes de plantillas o referencias visuales.
* **Canvas Video Scroll Scrubbing Hero (300vh)**:
  - 74 fotogramas WebP sincronizados con el scroll.
  - En desktop: modelo en el centro de la segunda mitad ($x \approx 1380$), dejando la mitad izquierda limpia para tipografía editorial con degradado horizontal.
  - En móvil (< 768px): min-height: 720px !important, crop 9:16 simétrico ($x=1070$), alineación inferior y gradiente vertical con 44% superior transparente para que el modelo luzca nítido.
  - `html, body { overflow-x: clip; }` obligatorio para que `position: sticky` en `.hero-sticky-frame` funcione sin fallos.
* **Smart Header Minimalista & Logotipo Tipográfico Puro**:
  - Queda prohibida la top-bar o announcement bar.
  - Logotipo 100% tipográfico sin iconos de tijeras o emojis (`Crismar Barbershop`).
  - Permanece visible durante el recorrido del Hero y se auto-oculta únicamente al scrollear hacia abajo en secciones inferiores.
* **Prohibición de Barras Fijas Inferiores (Mobile Action Dock)**: La navegación móvil debe ser ultra limpia. Solo header arriba y botón flotante de WhatsApp circular abajo a la derecha (`.whatsapp-float`) con safe-area insets.
* **Mapa de Google Embebido Exacto**:
  `https://maps.google.com/maps?q=Crismar+Barbershop,+Cl.+104+%23113-53,+Apartad%C3%B3,+Antioquia&t=&z=16&ie=UTF8&iwloc=&output=embed`
* **Botones WhatsApp**: Todos deben dirigir al enlace de WhatsApp oficial del negocio (`+573000000000`) con mensaje prellenado amigable.
