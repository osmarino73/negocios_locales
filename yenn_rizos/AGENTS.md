# Contexto IA y Reglas Específicas: YENN RIZOS

Este archivo mantiene la memoria y las reglas de diseño para la landing page de **YENN RIZOS**.

## 📌 Identidad del Negocio
- **Nombre**: YENN RIZOS (Estudio Capilar Especializado en Rizos, Ondas & Afro)
- **Rubro**: Peluquería & Estética Capilar Especializada en Rizos
- **Ubicación**: Cra. 108 & Cl. 107A #057840, Apartadó, Antioquia
- **WhatsApp**: +57 301 613 9876
- **Inspiración Visual Forense**: Aesthetic GMAAEUP Beauty Salon (Deep Ebony / Dark Charcoal + Terracotta Rose Gold Accent + Soft White)

## 📐 Reglas Estructurales Obligatorias
1. **Hero Header Inmersivo con Canvas Video Scroll Scrubbing (300vh Track)**:
   - **Fotogramas Extraídos**: 74 fotogramas WebP para Desktop (16:9 — 1920x1080) y 74 fotogramas WebP para Mobile (9:16 — 720x1280) desde el paquete de video `.agents/document_salones/belleza-cabello-rizos`.
   - **Estructura CSS**: `html, body { overflow-x: clip; }` para proteger `position: sticky; top: 0;` en el contenedor de 300vh.
   - **Render Loop**: Escala Full Cover 100% en Canvas (`Math.max(cw/iw, ch/ih)`), precarga asíncrona mediante `Promise.all` y `poster.webp` estático como fallback.
   - **Pasos Editoriales**:
     - **Paso 1 (0% a 50%)**: Firma `Yenn Rizos Studio`, titular principal de impacto, CTA agendar y badge reputación 5.0 ★.
     - **Paso 2 (50% a 100%)**: Subtítulo de técnica, titular de definición y párrafo de valor de servicios botánicos.
2. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Estilistas Expertas, Cosmética Botánica, Diagnóstico hebra a hebra, Técnica Curly Auténtica, Satisfacción 100%*).
   - En móvil: Carrusel horizontal deslizable (*Scroll Snap*) en 1 sola fila compacta.
3. **Catálogo de Servicios (Grid 3 Columnas Escritorio / 2 en Móvil)**:
   - 6 tarjetas en formato Full-Bleed Minimalista (relación 3:4, fotografía protagonista al 100%, degradado inferior aterciopelado).
   - Precios claros en cifras (sin sufijo COP) y enlace minimalista `AGENDAR ➔` en filas verticales independientes.
4. **Sobre Nosotros & Profesionales (Estándar Editorial)**:
   - Bloque editorial con fotografía de salón capilar (`photo-1560066984-138dadb4c035`), badge flotante VIP (5.0 ★ Excelente Calificación), titular cálido y 4 métricas de autoridad.
   - Bloque de profesionales en Grid de 4 columnas en escritorio con Retrato Editorial Full-Bleed (3:4.2) y Carrusel Horizontal deslizable con efecto Peek en móvil.
5. **Ubicación & Contacto**: Tarjeta con datos y Google Maps embebido con fórmula nominal georreferenciada (`z=16`).
6. **Smart Header**: Sin barra superior promocional, logotipo puramente tipográfico con soporte `padding-top: env(safe-area-inset-top, 0px)`, en móvil sin botón CTA ni menú hamburguesa para dar 100% de espacio al logotipo.
7. **Botón Flotante WhatsApp**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px))`, sin `overflow: hidden`.
8. **Unicidad del Color Primario**: Todos los acentos de la página consumen `var(--color-accent)`. Queda prohibido quemar valores HEX/RGB hardcoded en elementos de acento.
