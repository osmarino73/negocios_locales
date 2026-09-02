# Agentes e Instrucciones de Desarrollo: Rizos Felices Urabá

Bienvenido al proyecto web de **Rizos Felices Urabá — Especialistas en Cabello Rizado, Ondulado y Afro** en **Apartadó, Antioquia, Colombia**.

## 📌 Resumen del Proyecto

- **Negocio**: Rizos Felices Urabá
- **Rubro**: Centro de Estética & Salón Especializado en Rizos, Ondas y Afro
- **Ubicación**: Cl. 100 #108-37, Apartadó, Antioquia, Colombia
- **Contacto Principal**: (+57) 310 726 7538 | WhatsApp: +573107267538
- **Estilo Visual**: Soft Porcelain White (`#ffffff`), Warm Blush Ivory (`#fff8f8`), Coral Rose Blush (`#e87a82`) y Luxury Slate (`#19181a`) extraído de la referencia "GLOW & GRACE".
- **Archivos Clave**:
  - `DATOS_NEGOCIO.json`: Datos oficiales y estructurados del negocio.
  - `FICHA_DISENO.md`: Sistema de diseño, paleta de colores y tipografías.
  - `index.html`: Sitio web standalone 100% autónomo y optimizado para SEO Local.

---

## 🎯 Reglas Mandatorias de Estructura y Código

1. **Estructura Oficial de Secciones**:
   - `#inicio`: Hero full-width bleed con foto nítida a la derecha y máscara máx. al 50%.
   - Barra de Pilares de Confianza: 5 sellos de garantía.
   - `#servicios`: Catálogo de servicios en 2 columnas en móvil (`repeat(2, 1fr)`), fotos 1:1, precios y botón `Agendar`.
   - `#nosotros`: Sección dedicada a **Nuestros Profesionales** con estructura estándar (avatar circular centrado, badge flotante de nivel, estrellas, rol y botón de agendamiento en 2 columnas en móvil).
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
