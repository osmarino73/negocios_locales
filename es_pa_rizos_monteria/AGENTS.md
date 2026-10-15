# Guía de Agentes e Instrucciones del Repositorio: Es Pa'Rizos Salón de belleza y Barbería en Montería

Este proyecto contiene la landing page y sitio web de producción 100% autónomo (*standalone*) para **Es Pa'Rizos Salón de belleza y Barbería en Montería**, optimizado para SEO Local y conversión directa por WhatsApp.

---

## 🎯 Regla Mandatoria: Estructura Oficial de Secciones del Sitio Web

Toda modificación o expansión debe respetar la siguiente arquitectura oficial de secciones:

1. **`#inicio` (Canvas Video Scrubbing Hero Full-Bleed)**:
   - Portada interactiva 300vh con Canvas HTML5 a pantalla completa sincronizado con el scroll.
   - Secuencia de fotogramas WebP extraídos de video HD (`public/frames/desktop/` y `public/frames/mobile/`).
   - Narrativa editorial en 2 pasos (50% / 50%), anclada al tercio inferior, manteniendo libre el 60% superior de la pantalla.
2. **Barra de Pilares / Garantías**:
   - Franja de sellos de confianza (*Especialistas en Rizos, Barbería Tradicional, Productos Prémium, Atención Personalizada*).
   - En móvil (< 768px): Carrusel horizontal deslizable (*Scroll Snap*) fluido en una sola fila.
3. **`#servicios` (Catálogo de Servicios — Grid 3 Columnas en Escritorio)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil (`repeat(2, 1fr)`)**.
   - Tarjetas Full-Bleed Minimalistas 3:4 con degradado aterciopelado inferior, 75% superior despejado, y footer de dos filas independientes (`.service-card-price` sin sufijo COP + `.btn-card-book-minimal`).
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales)**:
   - Bloque Editorial con fotografía de ambiente capilar/barbería real (`.salon-image-showcase`) y 4 métricas de autoridad.
   - Bloque Nuestros Profesionales en Retrato Editorial 3:4.2 (grid de 4 columnas en escritorio y carrusel Scroll Snap en móvil).
5. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo con dirección física, horarios, teléfono y Google Maps interactivo embebido georreferenciado (`z=16`).
6. **Footer Principal**:
   - Enlaces de navegación, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.

---

## 🎨 Tríada Visual & Regla de Unicidad de Color

- **Fondo Obsidian Base**: `#0e0c0a`
- **Acento de Marca**: `var(--color-accent)` (`#cbb39c` Camel Rose / Cobre cálido).
- **Prohibición de Colores Hardcoded**: Todos los precios, firmas script, énfasis display y roles de profesionales deben consumir estrictamente `var(--color-accent)`.
- **CSS `overflow-x: clip;`**: Requisito obligatorio en `html, body` para evitar la destrucción de `position: sticky` en el Canvas hero.
