# Contexto IA y Reglas de Repositorio: Katerine Canedo Estética Integral

Este proyecto contiene el sitio web oficial autónomo (*standalone*) de **Katerine Canedo Estética Integral** en Montería, Colombia.

## 📌 Datos de Identificación
- **Nombre Comercial**: Katerine Canedo Estética Integral
- **Rubro**: Esteticista facial & Cosmiatría
- **Ciudad / Ubicación**: Cl. 32 #9-80, Montería, Córdoba, Colombia
- **Teléfono / WhatsApp**: (+57) 311 862 4122 / `+573118624122`
- **Google Maps Iframe**: `https://maps.google.com/maps?q=Katerine+Canedo+Est%C3%A9tica+Integral,+Cl.+32+%239-80,+Monter%C3%ADa,+C%C3%B3rdoba&t=&z=16&ie=UTF8&iwloc=&output=embed`

## 🎯 Reglas Mandatorias de Desarrollo
1. **Unicidad del Color de Acento**: Consumo estricto de `var(--color-accent)` (`#c88269`) en botones, firmas script `.hero-script-tag`, precios `.service-card-price`, roles `.team-role` y enlaces `.btn-card-book-minimal`.
2. **Hero Canvas Video Scrubbing**: Motor JavaScript que anima fotogramas WebP en `public/frames/desktop/` (1920x1080) y `public/frames/mobile/` (720x1280) según el viewport, controlado por el scroll de la sección de 300vh.
3. **Estructura Oficial de Secciones**:
   - `#inicio` (Hero Canvas Video Scrubbing 300vh)
   - Barra de Pilares (Scroll Snap en móvil)
   - `#servicios` (Grid 3 columnas desktop, 2 columnas móvil; Full-Bleed 3:4)
   - `#nosotros` (Layout editorial sobre experiencia + Grid 4 profesionales en Retrato Editorial 3:4.2; Scroll Snap carrusel 1 fila en móvil)
   - `#ubicacion` (Mapa embebido `z=16` y datos de atención)
   - Footer con reserva concisa **«Agendar»** y WhatsApp flotante anti-corte.
