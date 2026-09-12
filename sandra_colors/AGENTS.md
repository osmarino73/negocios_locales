# Contexto IA y Reglas Específicas: Sandra Color´s

Este archivo mantiene la memoria y las reglas de diseño para la landing page de **Sandra Color´s**.

## 📌 Identidad del Negocio
- **Nombre**: Sandra Color´s (Hair Salon & Color Studio)
- **Rubro**: Salón de Belleza Especializado & Colorimetría Capilar
- **Ubicación**: Cra. 104 #103-61, Apartadó, Antioquia
- **WhatsApp**: +57 312 875 5269
- **Inspiración Visual Forense**: LUXEHAIR (Deep Obsidian / Espresso + Camel Rose Warm Nude + Crema Marfil)

## 📐 Reglas Estructurales Obligatorias
1. **Hero Header Inmersivo (Canvas Video Scroll Scrubbing - 300vh Track)**:
   - **Video Fuente Oficial**: `.agents/document/morena_salon-color.mp4` (4.0s, 74 frames WebP por vista).
   - **Regla Mandatoria de Encuadre (Modelo en el Centro de la Segunda Mitad)**: La modelo se sitúa en el centro de la mitad derecha ($x \approx 1440$ en 1920x1080), dejando el 50% izquierdo limpio para la tipografía editorial en escritorio.
   - **Escritorio (>768px)**: Overlay gradiente horizontal suave al 52% con la modelo 100% nítida y visible con su transformación balayage.
   - **Móvil (<768px)**: `min-height: 720px !important`, extracción vertical calibrada con `crop=ih*9/16:ih:1130:0,scale=720:1280` para centrar perfectamente a la modelo en la pantalla vertical del celular. Zona superior (46%) 100% transparente sin veladuras sobre el rostro, y textos compactos ubicados estrictamente en la mitad inferior con botones apilados (ancho máx. 275px).
2. **5 Pilares / Garantías**: Íconos de línea minimalistas con carrusel horizontal con scroll snap en móvil.
3. **Catálogo de Servicios**: Grid de **6 columnas en desktop** y **2 columnas en móvil**, con foto 1:1, 2 píldoras esenciales (`⏱️ Duración` y `💰 Precio`) y botón de agendamiento 100% de ancho directo a WhatsApp.
4. **Sobre Nosotros & Profesionales**:
   - Layout de 2 columnas con fotografía real del salón/tocadores (`photo-1560066984-138dadb4c035`), badge VIP flotante y 4 métricas de autoridad.
   - Grid de **4 columnas en desktop** y **2 columnas en móvil** para las 4 profesionales, avatares circulares 50% con marco de color de marca y badge oculto en móvil.
5. **Ubicación & Contacto**: Tarjeta con datos y Google Maps embebido con fórmula nominal georreferenciada (`z=16`).
6. **Smart Header**: Sin barra superior promocional, logotipo puramente tipográfico con soporte `padding-top: env(safe-area-inset-top, 0px)`, menú oculto en móvil con botón conciso «Agendar» y altura elástica (`min-height: 64px; padding: 10px 0`) con escala móvil compacta (`1.25rem` / `0.58rem`) para evitar que la parte de abajo del nombre se corte en celulares.
7. **Botón Flotante WhatsApp**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px))`, sin `overflow: hidden`.
