# Guía del Negocio: Restaurante Sabor Casero Urabá

Bienvenido al directorio de producción de **Restaurante Sabor Casero Urabá**, restaurante de cocina casera y típica colombiana ubicado en Cra. 102 #92a-20, Apartadó, Antioquia.

---

## 📌 1. Triángulo de Contexto del Negocio

1. **`DATOS_NEGOCIO.json`**: Fuente única de verdad con teléfonos, enlace de WhatsApp directo, dirección física, horarios, coordenadas y catálogo de platos.
2. **`FICHA_DISENO.md`**: Especificación forense de la paleta *Warm Gourmet Dark Luxury*, tipografía display (`Cormorant Garamond`), manuscrita (`Great Vibes`), cuerpo (`Plus Jakarta Sans`) y tokens CSS.
3. **`index.html`**: Archivo HTML5 autónomo (*standalone*) con estilos CSS embebidos, Schema.org JSON-LD para SEO Local, metatags OpenGraph y scripts interactivos.

---

## 🎯 2. Reglas Críticas para Mantenimiento y Evolución

- **Cero Archivos Rotos / 100% Autónomo**: Todo el código CSS debe residir en la etiqueta `<style>` y los scripts en `<script>` dentro de `index.html`.
- **Estructura Oficial Mandatoria de 6 Secciones**:
  1. `#inicio` (Hero Full-Width Bleed)
  2. Barra de Pilares / Garantías de Sabor
  3. `#servicios` (Catálogo de Menú, Buscador & Categorías)
  4. `#nosotros` (Sobre Nosotros & Especialidades de la Casa)
  5. `#ubicacion` (Mapa & Contacto)
  6. Footer Principal
- **Mobile First Calibrado (< 768px)**:
  - Header limpio mostrando exclusivamente el logotipo tipográfico puro (sin botón de agendar en móvil ni menú hamburguesa).
  - Categorías del menú en carrusel horizontal (*Scroll Snap*) en una sola fila (`flex-wrap: nowrap !important;`).
  - Servicios renderizados en **2 columnas balanceadas**.
  - Tarjetas de especialidades en carrusel horizontal (*Scroll Snap*).
  - Botón flotante de WhatsApp con protección anti-corte (`calc(28px + env(safe-area-inset-bottom))`).
- **Google Maps Georreferenciado Oficial**: Usar estrictamente la URL con zoom `z=16` y consulta nominal.
