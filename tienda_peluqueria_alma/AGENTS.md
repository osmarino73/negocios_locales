# Guía de Agentes e Instrucciones: TIENDA Y PELUQUERIA ALMA SAS

Este repositorio/carpeta contiene la landing page oficial autónoma (*standalone*) de **TIENDA Y PELUQUERIA ALMA SAS**, centro de estética y peluquería en Montería, Córdoba.

---

## 🎯 Estructura del Proyecto

1. **`index.html`**: Sitio web autónomo con header interactivo Canvas Scroll Scrubbing, CSS embebido, SEO Local Schema.org JSON-LD, OpenGraph y mapa interactivo.
2. **`DATOS_NEGOCIO.json`**: Fuente de verdad en JSON con teléfonos, WhatsApp, ubicación, catálogo de servicios y especialistas.
3. **`FICHA_DISENO.md`**: Ficha técnica de marca, paleta de colores y reglas tipográficas.
4. **`public/frames/`**: Secuencias de fotogramas WebP extraídas para Desktop (16:9) y Mobile (9:16) para el Canvas de scroll.

---

## 🎯 Reglas de Mantenimiento

- **Unicidad Estricta del Color Principal**: Los elementos de acento consumen exclusivamente `var(--color-accent)`.
- **Hero Canvas Scrubbing**: El header utiliza `overflow-x: clip;` en `html, body` para permitir `position: sticky`.
- **Secciones Oficiales**: `#inicio`, Pilares/Garantías, `#servicios` (Grid 3 col desktop / 2 col mobile), `#nosotros` (Sobre Nosotros + 4 Profesionales 3:4.2 portrait), `#ubicacion` (Mapa Google Maps `z=16`), Footer con módulo de agendamiento.
