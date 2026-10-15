# Guía del Proyecto: Karelis Soto Spa Uñas & Peluquería

Este proyecto es una landing page de producción 100% autónoma (*standalone*) optimizada para SEO Local y conversión directa por WhatsApp para **Karelis Soto Spa Uñas & Peluquería**, ubicado en el Centro de Montería, Córdoba, Colombia.

---

## 📁 Archivos Principales
- `index.html`: Landing page autocontenida con motor Canvas HTML5 de scroll scrubbing, CSS embebido, metadatos SEO Local y Schema.org JSON-LD.
- `DATOS_NEGOCIO.json`: Fuente única de verdad estructurada con la información comercial del negocio.
- `FICHA_DISENO.md`: Especificaciones del sistema de diseño, colores, fuentes y componentes UI.
- `public/frames/desktop/`: Secuencia de 74 fotogramas WebP en alta resolución (1920x1080 Q85) para la vista de escritorio.
- `public/frames/mobile/`: Secuencia de 74 fotogramas WebP calibrados para móvil (720x1280 Q76).

---

## 🎯 Reglas de Arquitectura & Código
1. **Regla CSS Clip Mandatoria**: `html, body { overflow-x: clip; }` para proteger el anclaje del Canvas en `position: sticky`.
2. **Unicidad del Color Principal**: Todo acento cromático debe consumir `var(--color-accent)`.
3. **Hero Canvas Scrubbing**: Motor de scroll sincronizado en 2 pasos editoriales (50% / 50%) con anclaje al tercio inferior y 60% superior despejado.
4. **Respeto a las Secciones Oficiales**:
   - `#inicio`: Hero Canvas Video Scrubbing.
   - Barra de Pilares: Sellos de garantía (Scroll Snap en móvil).
   - `#servicios`: Grid 3 columnas desktop / 2 columnas móvil con tarjetas Full-Bleed 3:4.
   - `#nosotros`: Experiencia de marca + Equipo de 4 especialistas en Retrato Editorial 3:4.2 (Carrusel Scroll Snap en móvil).
   - `#ubicacion`: Mapa interactivo georreferenciado con `z=16`.
   - Footer: Módulo de reserva con botón conciso **«Agendar»**.
