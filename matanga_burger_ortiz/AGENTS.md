# Guía del Negocio: Matanga Burger Ortiz

Bienvenido al directorio de producción de **Matanga Burger Ortiz**, restaurante de hamburguesas y comidas rápidas ubicado en Cl. 100F #108-133, Barrio Ortiz, Apartadó, Antioquia.

---

## 📌 1. Triángulo de Contexto del Negocio

1. **`DATOS_NEGOCIO.json`**: Fuente única de verdad con teléfonos `(604) 829 8050`, WhatsApp de domicilios, dirección física, horarios, coordenadas y catálogo de platos y combos.
2. **`FICHA_DISENO.md`**: Especificación forense del arquetipo *QuickBite Fast Food / Clean Fresh Fast Food*, paleta cromática (`#C9182B`, `#F5A623`, `#FFFFFF`, `#111215`), tipografía display (`Bebas Neue`), caligráfica (`Caveat`) y cuerpo (`Plus Jakarta Sans`).
3. **`index.html`**: Archivo HTML5 autónomo (*standalone*) con estilos CSS embebidos, Schema.org JSON-LD para SEO Local, metatags OpenGraph y scripts interactivos de filtrado y pedidos.

---

## 🎯 2. Reglas Críticas para Mantenimiento y Evolución

- **Cero Archivos Rotos / 100% Autónomo**: Todo el código CSS debe residir en la etiqueta `<style>` y los scripts en `<script>` dentro de `index.html`.
- **Estructura Oficial Mandatoria de Secciones**:
  1. `#inicio` (Hero Full-Width Bleed - Combo Fast Food en mesa de madera)
  2. Barra de Pilares / Garantías de Sabor
  3. `#servicios` (Catálogo "Los Más Pedidos", Buscador & Categorías)
  4. `#nosotros` (Bloque Split: Mega Deal Rojo + ¿Por Qué Elegirnos?)
  5. Banner Amarillo de Urgencia ("¿Con Hambre? ¡Te lo Llevamos Ya!")
  6. `#ubicacion` (Mapa Georreferenciado & Contacto)
  7. Footer Principal con botón conciso «Pedir»
- **Mobile First Calibrado (< 768px)**:
  - Header limpio mostrando exclusivamente el logotipo tipográfico puro.
  - Categorías del menú en carrusel horizontal (*Scroll Snap*) con regla anti-corte `justify-content: flex-start !important;`.
  - Catálogo de productos renderizado en **2 columnas balanceadas**.
  - Botón flotante de WhatsApp con protección anti-corte (`calc(28px + env(safe-area-inset-bottom))`).
- **Google Maps Georreferenciado Oficial**: Usar estrictamente la URL con zoom `z=16` y consulta nominal.
