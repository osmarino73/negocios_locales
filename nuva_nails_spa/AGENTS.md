# Contexto de IA: NÜVA NAILS SPA (Apartadó, Antioquia)

Instrucciones y contexto específico para el mantenimiento y evolución de **NÜVA NAILS SPA**.

---

## 🏛️ Identidad y Clonación Forense
- **Referencia Visual**: *ATIFOVA NAILS* (Minimalismo oscuro contemporáneo, fondos deep obsidian `#0f0e0e`, acentos en warm caramel mocca `#9c6d53`, contrastes en sand linen `#ebe4dc`, tipografía geométrica refinada y detalles de spa de lujo).
- **Copywriting**: Directo, cálido y enfocado en el público local de Apartadó, destacando el spa de uñas, durabilidad del esmaltado y bioseguridad sin tecnicismos pomposos (*cero "de autor"*).

---

## 🎬 Sistema de Video Scroll Scrubbing (Canvas HTML5)
- **Desktop (16:9)**: 74 fotogramas WebP en `public/frames/desktop/` generados desde `nuva_web.mp4` (1920x1080) + `poster.webp`.
- **Mobile (9:16 Vertical Nativo)**: 74 fotogramas WebP en `public/frames/mobile/` generados desde `nuva_movil.mp4` (1080x1920) + `poster.webp`.
- **Renderizado**: Canvas HTML5 en wrapper sticky de 300vh, interpolación de alta calidad y poster fallback de carga instantánea.

---

## 📌 Estructura Oficial de Secciones (Mandatoria)
1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro (sin iconos ni emojis).
   - **Navbar 100% transparente en el Hero**: Permanece transparente y visible durante todo el recorrido del Canvas.
   - Activa fondo oscuro mocca `#0f0e0e` con blur al salir del Hero (`currentScrollY > heroBottom - 120`). Auto-hide suave al descender en secciones inferiores.
   - En móvil (< 768px): Logotipo a la izquierda y botón conciso **«Agendar»** a la derecha sin botón hamburguesa.
2. **`#inicio` (Canvas Video Scroll Scrubbing - 300vh)**:
   - Escritorio: Textos a la izquierda, video nítido a la derecha.
   - Móvil: Calibración inferior (`align-items: flex-end; min-height: 720px !important;`), textos en la mitad inferior con `hero-scroll-step` en `bottom: 0`, dejando las uñas y el rostro de la modelo 100% visibles.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza. En móvil: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila con auto-scroll suave (3s) y pausa al tacto.
4. **`#servicios` (Catálogo Full-Bleed Minimalista)**:
   - Grid de **3 Columnas en Escritorio (`repeat(3, 1fr)`)** y **2 Columnas Balanceadas en Móvil**. Fotografía 100% inmersiva (3:4), degradado inferior, precio destacado y enlace minimalista `AGENDAR ➔`.
5. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque Editorial: Fotografía de salón de manicura con mesas de manicura y lámparas UV + badge VIP flotante + 4 métricas de autoridad + botón de contacto.
   - Bloque Profesionales: 4 especialistas en formato Retrato Editorial Vertical (3:4.2) en **4 Columnas en Escritorio** y **Carrusel Horizontal Deslizable (*Scroll Snap*) en Móvil** con efecto «Peek».
6. **`#ubicacion` (Mapa & Contacto)**:
   - Cra. 104, Apartadó + Google Maps interactivo embebido (`z=16`).
7. **Footer Principal**:
   - Logotipo tipográfico, horarios, enlaces rápidos y tarjeta de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**:
   - Despeje `env(safe-area-inset-bottom)`, sin recorte y enlace directo con mensaje predeterminado.
