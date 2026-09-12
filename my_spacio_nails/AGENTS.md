# Contexto de IA: My Spacio Nails (Apartadó, Antioquia)

Instrucciones y contexto específico para el mantenimiento y evolución de **My Spacio Nails**.

---

## 🏛️ Identidad y Clonación Forense
- **Referencia Visual**: *LUXÉ NAIL STUDIO* (Estética editorial de alta gama, fondos oscuros deep espresso `#0d0b0a`, acentos nude camel `#cbb39c`, fondos claros champagne cream `#ebe4dc`, tipografía serif refinada y detalles de lujo sobrio).
- **Logotipo Puro**: Sin íconos ni emojis decorativos junto al nombre (`.brand-logo`).
- **Copywriting**: Directo, cálido y enfocado en el público local de Apartadó, combinando el cuidado de uñas y la relajación de spa sin tecnicismos pomposos (*«de autor»*).

---

## 🎬 Arquitectura Técnica: Video-to-Scroll Canvas
1. **Videos de Entrada**:
   - Desktop: `morena-web copy.mp4` (16:9, 1920x1080, 4.0s).
   - Mobile: `morena -movil.mp4` (9:16 vertical nativo, 1080x1920, 4.0s).
2. **Ubicación de Fotogramas**:
   - Desktop (1920x1080 Q85): `public/frames/desktop/frame-%04d.webp` (74 frames) + `poster.webp`
   - Mobile (720x1280 Q76 vertical nativo): `public/frames/mobile/frame-%04d.webp` (74 frames) + `poster.webp`
3. **Navbar Transparente**: Permanece completamente transparente en el Hero (`background: transparent; border-bottom: 1px solid transparent; backdrop-filter: none;`). Transición a fondo oscuro frosted glass solo al salir del Hero.
4. **Calibración Móvil**: En celulares (< 768px), el Hero tiene `min-height: 720px !important;` y contenido anclado en la base (`top: auto; bottom: 0;`), manteniendo el 44% superior 100% transparente para que el rostro, labios borgoña y uñas de la modelo destaquen con total nitidez.

---

## 📌 Estructura Oficial de 6 Secciones (Mandatoria)
1. **Smart Header**: Sin barra superior promocional. Logotipo puramente tipográfico. Móvil: Logo (izq) y botón conciso **«Agendar»** (der) sin botón hamburguesa.
2. **`#inicio` (Hero Canvas Video Scrubbing)**: Desktop 300vh con Canvas 100dvh, Móvil `min-height: 720px !important;`.
3. **Barra de Pilares / Garantías**: 5 sellos. En móvil: Carrusel horizontal en 1 fila con auto-scroll suave (3s) y pausa al tacto.
4. **`#servicios` (Catálogo de Uñas & Spa)**: Grid de 3 Columnas en Escritorio (`repeat(3, 1fr)`), estrictamente 2 Columnas en Móvil.
5. **`#nosotros` (Sobre Nosotros & Especialistas — Estándar Editorial)**:
   - Bloque Editorial: Foto de salón VIP + badge flotante + 4 métricas de autoridad (en 2 columnas en móvil) + botón directo.
   - Bloque Profesionales: 4 especialistas en 4 Columnas en Escritorio (`repeat(4, 1fr)`), carrusel horizontal deslizable en móvil con efecto Peek.
6. **`#ubicacion` (Mapa & Contacto)**: Apartadó, Antioquia + Google Maps interactivo (`z=16`).
7. **Footer Principal**: Tarjeta de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**: `env(safe-area-inset-bottom)`, `z-index: 999999`, sin menús inferiores fijos que compitan con él.
