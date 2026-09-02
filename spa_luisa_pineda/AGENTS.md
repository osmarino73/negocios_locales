# Agentes e Instrucciones de Desarrollo: Spa Luisa Pineda

Bienvenido al proyecto web de **Spa Luisa Pineda** en **Turbo, Antioquia, Colombia**.

## 📌 Resumen del Proyecto

- **Negocio**: Spa Luisa Pineda
- **Rubro**: Peluquería, Spa & Cuidado Capilar de Alta Gama
- **Ubicación**: Cl. 100 #15-3, Turbo, Antioquia, Colombia
- **Contacto Principal**: (+57) 323 393 2013 | WhatsApp: +573233932013
- **Estilo Visual**: Deep Obsidian Black (`#0d0f12`), Warm Champagne Gold (`#d4af37`), Dark Charcoal Slate (`#15181f`) extraído de la referencia "Tabbsum Shah Beauty".
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
   - Navbar inteligente que se oculta al bajar y reaparece al subir.
   - Botón de cabecera debe ser **«Agendar»** (`.btn-header-cta`).

3. **Standalone y Cero Dependencias Locales**:
   - Todo el CSS embebido en `<style>`.
   - Imágenes en CDN WebP de alta velocidad.
   - Metadatos Schema.org JSON-LD y OpenGraph completos.
