# Instrucciones para Agentes de IA: Elles Sala de Belleza & Tienda Cosmética

Este directorio contiene la landing page oficial y archivos de contexto para **Elles Sala de Belleza & Tienda Cosmética**, ubicada en Apartadó, Antioquia.

## 🎯 Secciones Oficiales Implementadas
1. `#inicio`: Hero Full-Width Bleed con modelo de fondo oscuro (`Woman_wearing_black_silk_top_202609021631.webp`), titulares editoriales y botón de agendamiento.
2. `Barra de Garantías`: 5 sellos de confianza con carrusel horizontal táctil (*Scroll Snap*) en móviles.
3. `#servicios`: Grid de 6 servicios (6 columnas en escritorio, 2 columnas en móvil) con fotos 1:1, píldoras de duración y precio, y botón «Agendar Cita».
4. `#nosotros`: Bloque editorial de experiencia con foto de salón, 4 métricas de autoridad y bloque de especialistas (4 columnas en escritorio, 2 columnas en móvil) con botón a WhatsApp.
5. `#ubicacion`: Panel con dirección, horarios, teléfono y Google Maps embebido con fórmula georreferenciada (`z=16`).
6. `Footer`: Navegación, contacto, redes y módulo con botón conciso **«Agendar»**.

## 📱 Reglas Críticas
- En móvil, el hero debe mantener `min-height: 720px !important;`.
- Servicios y Profesionales deben renderizarse en **2 columnas en móvil**.
- Botón flotante de WhatsApp con soporte de `safe-area-inset-bottom`.
- Logotipo puramente tipográfico, sin emojis ni íconos decorativos.
- Botones concisos con texto **«Agendar»**.
