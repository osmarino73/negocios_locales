# Contexto de IA: Natalia Morelo Magic Secret (Apartadó, Antioquia)

Instrucciones y contexto específico para el mantenimiento y evolución de **Natalia Morelo Magic Secret**.

---

## 🏛️ Identidad y Clonación Forense
- **Referencia Visual**: *LUXÉ SALON* (Elegancia editorial, fondos en negro espresso `#0d0b0a`, acentos en camel gold `#cbb092`, bloques en crema alabastro `#f7f4ef`, tipografía *Cinzel* / *Playfair Display* y caligrafía *Alex Brush*).
- **Nicho Comercial**: Centro de estética avanzada, colorimetría, alisados y spa capilar en Apartadó.
- **Copywriting**: Directo, cálido y enfocado en el público local de Apartadó, destacando la belleza natural, la salud capilar y la atención personalizada sin tecnicismos pomposos (*cero "de autor"* ni "protocolos visagistas").

---

## 📌 Estructura Oficial de Secciones (Mandatoria)

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro (sin iconos ni emojis).
   - **Navbar 100% transparente en el Hero**: Permanece transparente y visible sobre la cabecera.
   - Activa fondo oscuro `#0d0b0a` con blur al salir del Hero (`currentScrollY > heroBottom - 120`). Auto-hide suave al descender en secciones inferiores.
   - **En móvil (< 768px)**: Logotipo con el 100% del ancho disponible (prohibido botón «Agendar» en navbar móvil para evitar recortes y colisiones; sin botón hamburguesa).
2. **`#inicio` (Hero Canvas Video Scroll Scrubbing Inmersivo)**:
   - Recorrido de scroll de `300vh` con Canvas HTML5 High-DPI y precarga asíncrona dual (`public/frames/desktop/` y `public/frames/mobile/`, 75 fotogramas WebP cada uno).
   - Escritorio: Video 16:9 con modelo en la segunda mitad ($x \approx 1440$), textos anclados en el tercio inferior izquierdo con el 60% superior despejado.
   - Móvil: Video vertical 9:16 nativo con encuadre calibrado, textos en el tercio inferior, degradado de protección y `min-height: 720px`.
   - Narrativa en 2 Pasos (50% / 50%): Paso 1 (Bienvenida editorial + CTAs + 5.0★ Google) y Paso 2 (Técnica & restauración + descripción + CTAs).
   - `poster.webp` fallback instantáneo contra pantallas negras. Prohibido `overflow-x: hidden;` (uso estricto de `overflow-x: clip;`).
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza. En móvil: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila con auto-scroll suave y pausa al tacto.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 Columnas en Escritorio (`repeat(3, 1fr)`)** y **2 Columnas Balanceadas en Móvil**. Fotografía 100% inmersiva (3:4), degradado inferior aterciopelado, precio destacado y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque Editorial: Fotografía de estaciones de peinado de alta gama (`photo-1560066984-138dadb4c035`) + badge VIP flotante + 4 métricas de autoridad + botón de contacto.
   - Bloque Profesionales: 4 especialistas en formato Retrato Editorial Vertical (3:4.2) en **4 Columnas en Escritorio** y **Carrusel Horizontal Deslizable (*Scroll Snap*) en Móvil** con efecto «Peek».
6. **`#ubicacion` (Mapa & Contacto)**:
   - Cl. 99A #108-103 a 108-35, Apartadó + Google Maps interactivo embebido (`z=16`).
7. **Footer Principal**:
   - Logotipo tipográfico, horarios, enlaces rápidos y tarjeta de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**:
   - Despeje `env(safe-area-inset-bottom)`, sin recorte y enlace directo con mensaje predeterminado.
