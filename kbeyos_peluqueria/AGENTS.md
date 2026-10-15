# Guía para Agentes de IA — Kbeyo's Peluqueria Unisex

¡Bienvenido al repositorio oficial de **Kbeyo's Peluqueria Unisex**! Este proyecto es un sitio web turnkey 100% autónomo y optimizado para SEO Local en Montería, Colombia.

---

## 📌 Datos Clave del Negocio
- **Nombre Comercial**: Kbeyo's Peluqueria Unisex
- **Rubro**: Peluquería, Salón de Belleza & Barbería Unisex
- **Ubicación**: Calle 24 #13-82 Local 3 C.C. Isla Center, Centro, Monteria, Córdoba, Colombia
- **Teléfono / WhatsApp**: (+57) 313 594 4747 (`+573135944747`)
- **Horario**: Lunes a Sábado: 8:00 AM - 7:00 PM
- **Google Maps**: `https://www.google.com/maps/place/Kbeyo's+Peluqueria+Unisex/@8.7514768,-75.9028491,15z...`

---

## 🎯 Instrucciones de Mantenimiento para IA

1. **Triángulo de Contexto IA**:
   - `DATOS_NEGOCIO.json`: Fuente principal de datos. Si se agrega un nuevo servicio o estilista, actualizar primero este archivo.
   - `FICHA_DISENO.md`: Definición estricta de tokens CSS, fuentes tipográficas y reglas de diseño.
   - `index.html` y `kbeyos_peluqueria_standalone.html`: Código HTML autónomo con todo el CSS embebido.

2. **Reglas Visuales Obligatorias**:
   - **Color Primario Único**: Utilizar `var(--color-accent)` para todas las firmas script, énfasis en itálica, roles de estilistas, precios y enlaces minimalistas `AGENDAR ➔`.
   - **Logotipo Tipográfico Puro**: Prohibido insertar íconos decorativos junto al nombre de la marca en el navbar o footer.
   - **Hero Full-Width**: Anclado en la base (`align-items: flex-end`) con el 60% superior despejado en escritorio y 38% superior transparente en móvil (`min-height: 720px !important`).
   - **Sección Nosotros**: Utilizar fotografía de ambiente de peluquería (`photo-1560066984-138dadb4c035`). Prohibido colocar imágenes de uñas o spas zen.

3. **Comprobación de Cambios**:
   - Al editar el código, mantener la sincronización entre `index.html` (dentro de la carpeta `kbeyos_peluqueria/`) y `kbeyos_peluqueria_standalone.html` en la raíz del repositorio.
