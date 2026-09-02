# Contexto IA y Reglas Específicas: Sandra Color´s

Este archivo mantiene la memoria y las reglas de diseño para la landing page de **Sandra Color´s**.

## 📌 Identidad del Negocio
- **Nombre**: Sandra Color´s (Hair Salon & Color Studio)
- **Rubro**: Salón de Belleza Especializado & Colorimetría Capilar
- **Ubicación**: Cra. 104 #103-61, Apartadó, Antioquia
- **WhatsApp**: +57 312 875 5269
- **Inspiración Visual Forense**: LUXEHAIR (Deep Obsidian / Espresso + Camel Rose Warm Nude + Crema Marfil)

## 📐 Reglas Estructurales Obligatorias
1. **Hero Full-Width Bleed**: Titular editorial con script caligráfico (*Alex Brush*), imagen inmersiva a la derecha en desktop y centrada con `min-height: 720px !important` en móvil.
2. **5 Pilares / Garantías**: Íconos de línea minimalistas con carrusel horizontal con scroll snap en móvil.
3. **Catálogo de Servicios**: Grid de **6 columnas en desktop** y **2 columnas en móvil**, con foto 1:1, 2 píldoras esenciales (`⏱️ Duración` y `💰 Precio`) y botón de agendamiento 100% de ancho directo a WhatsApp.
4. **Sobre Nosotros & Profesionales**:
   - Layout de 2 columnas con fotografía real del salón/tocadores (`photo-1560066984-138dadb4c035`), badge VIP flotante y 4 métricas de autoridad.
   - Grid de **4 columnas en desktop** y **2 columnas en móvil** para las 4 profesionales, avatares circulares 50% con marco de color de marca y badge oculto en móvil.
5. **Ubicación & Contacto**: Tarjeta con datos y Google Maps embebido (`z=16`).
6. **Smart Header**: Sin barra superior promocional, logotipo puramente tipográfico, menú oculto en móvil con botón conciso «Agendar».
7. **Botón Flotante WhatsApp**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px))`, sin `overflow: hidden`.
