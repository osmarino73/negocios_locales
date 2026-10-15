# Guía de Agentes — Atemporal Estudio de Belleza.

Este proyecto contiene la landing page oficial de **Atemporal Estudio de Belleza.** en Montería, Colombia.

---

## 🎯 Reglas Mandatorias de Estructura y Estilo

1. **Secciones Oficiales**:
   - `#inicio`: Hero Full-Width Canvas Scroll Scrubbing con 2 pasos (50% / 50%).
   - Pilares de Confianza (Scroll Snap en móvil).
   - `#servicios`: Grid 3 columnas desktop / 2 columnas móvil (Tarjetas 3:4 Full-Bleed Minimalistas).
   - `#nosotros`: Experiencia de Estética + 4 Profesionales en Retrato Editorial 3:4.2 (Carrusel Scroll Snap en móvil).
   - `#ubicacion`: Mapa Google Maps con `z=16` y datos de contacto.
   - Footer con módulo de agendamiento y botón conciso **«Agendar»**.

2. **Unicidad del Color Principal**:
   - Usar `var(--color-accent)` o `var(--color-camel)` para todos los acentos, firmas script y botones.

3. **Móvil First**:
   - `overflow-x: clip;` en `html, body`.
   - Botón WhatsApp con `env(safe-area-inset-bottom)`.
   - Logotipo puro sin íconos.
