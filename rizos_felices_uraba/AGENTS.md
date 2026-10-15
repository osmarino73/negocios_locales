# Instrucciones para Agentes de IA: Rizos Felices Urabá

Este directorio contiene la landing page oficial de producción y archivos de contexto del Triángulo de Contexto IA para **Rizos Felices Urabá**, salón especializado en cabello rizado, ondulado y afro en Apartadó, Antioquia.

---

## 🎯 Secciones Oficiales Implementadas

1. **`#inicio` (Canvas Video Scroll Scrubbing)**:
   - Motor Canvas HTML5 interactivo sincronizado con el scroll del usuario (`.hero-scroll-section`, `300vh` en desktop, `260vh` en móvil).
   - Secuencia de **72 fotogramas WebP ultra ligeros** calibrados para **Desktop (16:9, 1920x1080 Q85)** y **Mobile (9:16, 720x1280 Q76)** en `public/frames/`.
   - Storytelling editorial en 2 pasos secuenciales (0–50% Bienvenida e Impacto, 50–100% Técnicas, Corte hebra por hebra y Filosofía limpia).
   - Doble degradado aterciopelado con protección inferior y el **60% superior de la pantalla 100% despejado**.
   - Poster fallback instantáneo (`poster.webp`) para eliminar cualquier parpadeo negro.
2. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Corte en Seco, Fórmulas Limpias, Diagnóstico de Hebra, Higiene & Confort, Amor por tus Rizos*).
   - En móvil (< 768px): Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila compacta.
3. **`#servicios` (Catálogo de Servicios — Grid 3 Columnas en Escritorio)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas balanceadas en móvil**.
   - Tarjetas **Full-Bleed Minimalistas** (3:4) con degradado inferior suave, fotografía protagonista, 70% superior limpio (descripción oculta en móvil) y footer de 2 filas: precio con 100% de ancho (sin sufijo `COP`) y enlace minimalista `AGENDAR ➔`.
4. **`#nosotros` (Sobre Nosotros & Especialistas)**:
   - Bloque de experiencia con foto de ambiente representativo del salón (`photo-1560066984-138dadb4c035`), badge flotante VIP, descripción editorial, 4 métricas de autoridad en 2 columnas en móvil.
   - Bloque de Especialistas: Grid de **4 columnas en escritorio (`repeat(4, 1fr)`)** y **carrusel horizontal deslizable (*Scroll Snap*) en móvil (<768px)** en una sola fila con tarjetas de `flex: 0 0 255px; aspect-ratio: 3/4.2;` y efecto «Peek» (asoman 70–100px del siguiente perfil).
5. **`#ubicacion` (Mapa & Contacto)**:
   - Panel de contacto y Google Maps embebido con fórmula georreferenciada oficial (`z=16`):
     `https://maps.google.com/maps?q=Rizos+Felices+Urab%C3%A1,+Cl.+100+%23108-37,+Apartad%C3%B3,+Antioquia,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed`
6. **Footer Principal**:
   - Marca, enlaces de navegación, contacto y tarjeta de reserva con botón conciso **«Agendar»**.

---

## 📱 Reglas Críticas del Repositorio

- **`overflow-x: clip;` Mandatorio**: `html, body` utilizan exclusivamente `overflow-x: clip;` para evitar romper `position: sticky` en el Canvas.
- **Smart Header Limpio**: En móvil no lleva botón de agendar (`.btn-header-cta { display: none !important; }`), dejando el 100% de amplitud al logotipo tipográfico.
- **Botón Flotante de WhatsApp**: Posicionado con `calc(28px + env(safe-area-inset-bottom, 0px))` sin `overflow: hidden`.
- **Reproducibilidad Turnkey**: Si se requiere reextraer fotogramas o actualizar la tasa de frames, ejecutar:
  `node scripts/extract-frames.js`
