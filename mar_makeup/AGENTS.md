# Agentes e Instrucciones de Desarrollo: Mar_makeup💕

Bienvenido al proyecto web de **Mar_makeup💕 — Centro de Estética & Maquillaje** en **Turbo, Antioquia, Colombia**.

## 📌 Resumen del Proyecto

- **Negocio**: Mar_makeup💕
- **Rubro**: Centro de Estética & Maquillaje Profesional
- **Ubicación**: Barrio Baltazar, Turbo, Antioquia, Colombia
- **Contacto Principal**: (+57) 305 934 2141 | WhatsApp: +573059342141
- **Estilo Visual**: Warm Espresso Obsidian (`#1b1918`), Soft Cashmere Cream (`#f6f3ee`) y Warm Nude Taupe (`#c4a58b`) extraído de la referencia "NOVA MED SPA".
- **Archivos Clave**:
  - `DATOS_NEGOCIO.json`: Datos oficiales y estructurados del negocio.
  - `FICHA_DISENO.md`: Sistema de diseño, paleta de colores y tipografías.
  - `index.html`: Sitio web standalone 100% autónomo y optimizado para SEO Local.

---

## 🎯 Reglas Mandatorias de Estructura y Código

1. **Estructura Oficial de Secciones**:
   - `#inicio`: Hero full-width bleed con foto nítida a la derecha y máscara máx. al 50%.
   - Barra de Pilares de Excelencia: 5 sellos de confianza.
   - `#servicios`: Catálogo de servicios en 2 columnas en móvil (`repeat(2, 1fr)`), fotos 1:1, precios y botón `Agendar`.
   - `#nosotros`: Sección dedicada exclusivamente a **Nuestros Profesionales** (fotos 1:1, badges de experiencia, roles y botón de agendamiento directo a WhatsApp en 2 columnas en móvil).
   - `#ubicacion`: Mapa interactivo de Google Maps embebido (`z=16`) y panel de contacto.
   - Footer: Enlaces, redes, horarios y módulo con botón conciso **«Agendar»**.

2. **Smart Header**:
   - Navbar inteligente con auto-hide al bajar y reaparición instantánea al subir.
   - Botón de cabecera debe ser **«Agendar»** (`.btn-header-cta`).

3. **Sin Action Dock Móvil**:
   - Se mantiene exclusivamente el botón flotante de WhatsApp interactivo.

4. **Standalone y Cero Dependencias Locales**:
   - Todo el CSS embebido en `<style>`.
   - Imágenes en CDN WebP optimizado de alta velocidad.
   - Metadatos Schema.org JSON-LD y OpenGraph completos.
