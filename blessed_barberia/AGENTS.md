# Guía de Agentes e Instrucciones de Mantenimiento: Blessed Barbería

Bienvenido a la carpeta de **Blessed barbería** (Apartadó, Antioquia). Este documento contiene las instrucciones obligatorias y directrices técnicas para que cualquier IA o desarrollador continúe, mantenga o actualice este proyecto con total coherencia.

---

## 💈 Identidad del Negocio y Nicho

- **Nombre Comercial**: Blessed barbería
- **Rubro**: Barbería tradicional, cortes urbanos, fades de precisión, perfilado de barba y cuidado capilar masculino
- **Ubicación Física**: Cl. 104 #107-34, Apartadó, Antioquia, Colombia
- **Teléfono / WhatsApp**: (+57) 304 217 3338
- **Fórmula de Google Maps Nominal**:
  `https://maps.google.com/maps?q=Blessed+barber%C3%ADa,+Cl.+104+%23107-34,+Apartad%C3%B3,+Antioquia&t=&z=16&ie=UTF8&iwloc=&output=embed`

---

## 🎬 Arquitectura Técnica: Video-to-Scroll Canvas

Este proyecto implementa reproducción de video sincronizada con el scroll del usuario mediante Canvas HTML5:

1. **Ubicación de Fotogramas**:
   - Desktop (1920x1080 Q85): `public/frames/desktop/frame-%04d.webp` (72 frames) + `poster.webp`
   - Mobile (720x1280 Q76): `public/frames/mobile/frame-%04d.webp` (72 frames) + `poster.webp`
2. **Script de Regeneración**:
   - Si se cambia el video base, ejecutar `node scripts/extract-frames.js [nuevo_video.mp4]`.
3. **Regla Crítica de CSS**:
   - `html, body` debe mantener siempre `overflow-x: clip;` y **NUNCA** `overflow-x: hidden;`, ya que este último anula la fijación `position: sticky` en navegadores móviles.
4. **Encuadre y Nitidez Óptica**:
   - En el bucle de renderizado del Canvas, se aplica escala cover pura al 100% (`Math.max(cw / iw, ch / ih)`) para garantizar cobertura total de borde a borde sin bandas negras perimetrales.
   - Cero filtros pesados o veladuras opacas completas sobre el Canvas; el contraste del texto se obtiene mediante `text-shadow`.

---

## 📐 Estructura Oficial de Secciones Mandatoria

Toda actualización debe respetar sin excepciones las siguientes secciones:

1. **Smart Header / Navbar**:
   - Logotipo tipográfico puro (`brand-name` + `brand-subtitle`). Prohibido añadir íconos de tijeras, coronas o gemas junto al texto.
   - En móvil: Logotipo a la izquierda y botón conciso **«Agendar»** a la derecha. Cero botón de menú hamburguesa.
   - Comportamiento sticky inteligente: visible en el Hero; auto-hide al scrollear hacia abajo en secciones intermedias y reaparición al subir.
2. **`#inicio` (Hero Canvas Video Scrubbing)**:
   - Contenedor 300vh con Canvas 100dvh y 3 pasos de storytelling editorial sobre la precisión y estilo de Blessed barbería.
3. **Barra de Pilares / Garantías**:
   - 4 sellos de confianza con iconografía dorada: *Barberos Expertos*, *Productos Prémium*, *Higiene & Bioseguridad*, *Satisfacción Garantizada*.
   - En móvil (< 768px): carrusel horizontal con *scroll-snap* en 1 sola fila.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 columnas en escritorio** y **2 columnas en móvil**.
   - Tarjetas 3:4 con fotografía al 100%, degradado aterciopelado inferior, precio visible en COP y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque de barbería con fotografía de sillas clásicas y madera (`photo-1585747860715-2ba37e788b70`), badge VIP y 4 métricas de autoridad.
   - Grid de **4 columnas de barberos en escritorio** y **carrusel horizontal deslizable (*Scroll Snap*) en móvil** con formato Retrato Editorial (3:4.2) y enlace directo a WhatsApp.
6. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo y Google Maps georreferenciado nominal embebido (`z=16`).
7. **Footer**:
   - Módulo de reserva con botón conciso **«Agendar»**.
8. **Botón Flotante de WhatsApp**:
   - Botón circular perimetral con `safe-area-inset-bottom`.
   - **Prohibición Estricta**: Queda prohibido añadir barras de acciones inferiores fijas (`.mobile-bottom-nav` o `.mobile-action-dock`). La navegación móvil es limpia y minimalista.

---

## 🎨 Tríada de Diseño (Inspirada en Legend Barber Shop)

- **Colores**: Deep Obsidian Midnight (`#0c0d0f`), Dark Surface Noir (`#111215`), Vintage Amber Gold (`#d5a755`), Bright Gold (`#e5bb68`), Pure White (`#ffffff`), Muted Zinc (`#a1a1aa`).
- **Fuentes**: `Oswald` (Display Hero), `Cinzel` / `Playfair Display` (Display Secciones), `Plus Jakarta Sans` (UI y cuerpo).
- **Idioma**: 100% en español natural colombiano. Cero anglicismos procedentes de plantillas.
