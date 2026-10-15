# Ficha de Diseño Visual Forense: Rizos Felices Urabá
*Clonación Forense de Identidad Visual Haute Beauty & Canvas Video Scroll Scrubbing*

## 🎨 Tríada de Identidad Visual Forense
* **Paleta de Colores Extraída**:
  * **Fondo Base Primario**: `#0a0807` (Negro Ébano Cálido Profundo)
  * **Fondo Superficies / Tarjetas**: `#14100d` con degradado radial sutil hacia `#1c1612`
  * **Fondo Tarjetas Claras (Modo Contraste)**: `#faf6f0` (Crema Marfil Suave)
  * **Acento Oro Champaña Satinado**: `#dfb78c` (Primario) / `#ba8a58` (Hover / Sombra)
  * **Bordes Finos de Lujo**: `rgba(223, 183, 140, 0.22)`
  * **Botón Primario Forense**: `linear-gradient(135deg, #dfb78c 0%, #ba8a58 100%)` con **texto oscuro contrastante `#1a130e`** y esquinas `8px` a `14px`
  * **Botón Secundario**: Enlace minimalista con micro-desplazamiento `AGENDAR ➔`
  * **Texto Claro Principal**: `#fcfaf7`
  * **Texto Muted / Secundario**: `#a69b91`

* **Tipografía Forense**:
  * **Titulares Display**: `'DM Serif Display', Georgia, serif` con **palabras acentuadas en serifa itálica dorada** (`font-style: italic; color: #dfb78c;`)
  * **Caligrafía & Firma de Autor**: `'Alex Brush', cursive` (`.hero-script-tag`, `.section-script-eyebrow`)
  * **Eyebrows con Línea de Marca**: Estilo editorial en mayúsculas limpias (`letter-spacing: 0.22em; text-transform: uppercase; color: #dfb78c;`)
  * **Cuerpo & UI**: `'Plus Jakarta Sans', sans-serif`

* **Componentes Visuales Forenses**:
  * **Hero Interactivo con Canvas Video Scroll Scrubbing**: Secuencia de 72 fotogramas WebP calibrados para Desktop (16:9, 1920x1080) y Mobile (9:16, 720x1280) con storytelling editorial en 2 pasos (0–50% Bienvenida y Autoridad, 50–100% Técnicas & Servicios).
  * **Barra de Garantías**: Franja de 5 sellos de confianza (*Corte en Seco, Fórmulas Limpias, Diagnóstico de Hebra, Higiene & Confort, Amor por tus Rizos*), con carrusel táctil *Scroll Snap* en móvil.
  * **Tarjetas de Servicios Full-Bleed Minimalistas**: Grid de 3 columnas en escritorio y 2 columnas en móvil, fotografía protagonista al 100% (3:4), degradado inferior y footer de dos filas independientes (Precio 100% de ancho sin `COP` y enlace `AGENDAR ➔`).
  * **Tarjetas de Especialistas (Retrato Editorial)**: Grid de 4 columnas en escritorio y carrusel horizontal deslizable (*Scroll Snap*) en una sola fila compacta en móvil con efecto *Peek*.
  * **Tarjetas de Métricas de Autoridad**: 4 tarjetas rectangulares oscuras con número en serifa dorada grande (`1.5K+`, `7+`, `100%`, `5.0★`).
  * **Módulo de Experiencia**: Imagen de salón con badge de vidrio translúcido (*glassmorphism*) con texto editorial y botón de contacto.

## 📸 Fotografías & Assets de Video
* **Video Hero Scrubbing**:
  * **Desktop**: `public/frames/desktop/frame-0001.webp` ... `frame-0072.webp` + `poster.webp` (1920x1080, Q85)
  * **Mobile**: `public/frames/mobile/frame-0001.webp` ... `frame-0072.webp` + `poster.webp` (720x1280, Q76)
  * **Script de Regeneración**: `scripts/extract-frames.js`
* **Ambiente Sobre Nosotros**: `https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80` (Salón de peinado y estaciones de tocador)
* **Servicios (3:4)**: Grid de 6 servicios con fotografías en alta definición en formato Full-Bleed Minimalista.

## 📱 Especificaciones Móviles (< 768px)
* `overflow-x: clip;` en `html, body` para garantizar total soporte de `position: sticky`.
* Hero Canvas con `height: 100dvh` y degradado con el 38% superior 100% transparente para mostrar a la modelo con sus rizos luminosos.
* Texto y botones centrados en la mitad inferior.
* Servicios en **2 columnas balanceadas**.
* Especialistas en **carrusel horizontal Scroll Snap** en una sola fila.
* Barra de garantías con **carrusel horizontal táctil (Scroll Snap)**.
* Header móvil sin menú hamburguesa ni botón «Agendar» para máxima amplitud de la marca.
* Botón flotante de WhatsApp con despeje inferior `calc(28px + env(safe-area-inset-bottom, 0px))`.
