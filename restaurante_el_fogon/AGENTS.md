# Guía de Continuidad IA: Restaurante El Fogón Apartadó

Este proyecto contiene la landing page oficial de **Restaurante El Fogón Apartadó**, optimizada para SEO Local, conversión directa a WhatsApp y agendamiento ergonómico en dispositivos móviles.

---

## 🎯 Datos Clave del Negocio
- **Nombre**: Restaurante El Fogón Apartadó
- **Rubro**: Restaurante
- **Categoría**: Comida Típica y Carnes
- **Ubicación**: Cl. 99 #10451, Apartadó, Antioquia
- **Teléfono / WhatsApp**: (+57) 321 583 2242 (`+573215832242`)
- **Coordenadas**: `7.8837986, -76.6348408`
- **Horario**: Lunes a Domingo: 11:00 AM - 10:00 PM

---

## 📐 Reglas Mandatorias de Diseño & Código
1. **Regla del Degradado Mínimo Ultraligero**:
   - En el Hero, el degradado se disuelve al 32% en escritorio y mantiene el 80% superior 100% transparente en móvil.
2. **Doble Imagen Responsive Hero**:
   - `hero_fogon.webp` (16:9 - 1920x1080) y `hero_fogon_mobile.webp` (9:16 - 720x1280) mediante `<picture>`.
3. **Catálogo Gastronómico Criollo**:
   - Tarjetas de 6 platos principales en fondo blanco limpio con badges de especialidad, precios en pesos colombianos sin sufijo COP y botones dorados de pedido directo a WhatsApp.
4. **Standalone Bundle**:
   - Mantener siempre sincronizado `restaurante_el_fogon_standalone.html` con las imágenes en base64.
