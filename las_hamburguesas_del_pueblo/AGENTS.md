# Guía del Negocio: Las Hamburguesas del Pueblo

Bienvenido al directorio de producción de **Las Hamburguesas del Pueblo**, hamburguesería artesanal de referencia en Apartadó, Antioquia.

---

## 📌 1. Triángulo de Contexto del Negocio

1. **`DATOS_NEGOCIO.json`**: Fuente única de verdad con teléfonos, enlace de WhatsApp directo (+57 320 691 2456), dirección física, horarios, coordenadas y catálogo de hamburguesas y combos.
2. **`FICHA_DISENO.md`**: Especificación forense del arquetipo *Burger Factory / Dark Sizzling Gourmet*, paleta cromática (`#E89C1F`, `#0E0F12`, `#F7F5F0`), tipografía display (`Bebas Neue`), caligráfica (`Caveat`) y cuerpo (`Plus Jakarta Sans`).
3. **`index.html`**: Archivo HTML5 autónomo (*standalone*) con estilos CSS embebidos, Schema.org JSON-LD para SEO Local, metatags OpenGraph y scripts interactivos de filtrado y pedidos.

---

## 🎯 2. Reglas Críticas para Mantenimiento y Evolución

- **Cero Archivos Rotos / 100% Autónomo**: Todo el código CSS debe residir en la etiqueta `<style>` y los scripts en `<script>` dentro de `index.html`.
- **Estructura Oficial Mandatoria de 6 Secciones**:
  1. `#inicio` (Hero Full-Width Bleed)
  2. Barra de Pilares / Garantías de Sabor
  3. `#servicios` (Catálogo de Menú, Buscador & Categorías)
  4. `#nosotros` (Bloque Split: Promo Combo + Sobre Nosotros & Especialidades)
  5. `#ubicacion` (Mapa Georreferenciado & Contacto)
  6. Footer Principal con botón conciso «Pedir»
- **Mobile First Calibrado (< 768px)**:
  - Header limpio mostrando exclusivamente el logotipo tipográfico puro.
  - Categorías del menú en carrusel horizontal (*Scroll Snap*) con regla anti-corte `justify-content: flex-start !important;`.
  - Catálogo de hamburguesas renderizado en **2 columnas balanceadas**.
  - Tarjetas de especialidades en carrusel horizontal (*Scroll Snap*).
  - Botón flotante de WhatsApp con protección anti-corte (`calc(28px + env(safe-area-inset-bottom))`).
- **Google Maps Georreferenciado Oficial**: Usar estrictamente la URL con zoom `z=16` y consulta nominal.
