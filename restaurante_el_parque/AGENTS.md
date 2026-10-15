# Guía de Agentes e Instrucciones del Proyecto: Restaurante El Parque - Cocina criolla

Este directorio contiene la landing page oficial de **Restaurante El Parque - Cocina criolla**, diseñada bajo el sistema visual **SLOU FOOD / BURGER HUB** y adaptada al nicho de **Cocina Criolla, Parrilla al Carbón & Pescados Tradicionales** en Apartadó, Antioquia.

---

## 🎯 Reglas Mandatorias de Continuidad IA

1. **Estructura Oficial de Secciones (Arquetipo Slou Food / Burger Hub)**:
   - `#inicio`: Hero Full-Width Bleed con doble imagen (`hero_parque.webp` y `hero_parque_mobile.webp`) y degradado horizontal al 40% en escritorio.
   - `Cinta de Categorías`: Tarjeta blanca flotante con 6 categorías criollas en SVG (*Platos Criollos, Parrilla & Asados, Pescados & Mariscos, Sopas & Sancochos, Bebidas Típicas, Postres Caseros*) y filtrado dinámico.
   - `#menu`: Bestsellers Grid con 8 platos criollos (4 cols en escritorio, 2 cols en móvil) y buscador en tiempo real.
   - `#nosotros`: Bloque editorial con ambiente gastronómico acogedor, badge 4.4★ y 4 métricas de autoridad.
   - `#ubicacion`: Panel con dirección física, horarios, botón de ruta y Google Maps interactivo (`z=16`).
   - `Footer`: Nocturno `#060708` con subtítulo estandarizado basado en `rubro` + `ciudad`.

2. **Identidad de Marca & Subtítulo Oficial**:
   - Logotipo tipográfico puro: `RESTAURANTE EL PARQUE`.
   - Subtítulo oficial: `RESTAURANTE · APARTADÓ` (proveniente de `negocio.rubro` y `negocio.ubicacion.ciudad`).

3. **Móvil Calibrado**:
   - Espaciado holgado de ~50px entre los botones del Hero y la tarjeta blanca de categorías para evitar solapamientos.
   - Botón flotante de WhatsApp protegido con `env(safe-area-inset-bottom)`.
