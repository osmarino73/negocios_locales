# Instrucciones para Agentes de IA: Angeless Spa

Este directorio contiene la landing page oficial y archivos de contexto para **Angeless Spa**, un spa de día y centro de bienestar ubicado en Apartadó, Antioquia.

## 🎯 Secciones Oficiales Implementadas
1. `#inicio`: Hero Full-Width Bleed con modelo de fondo oscuro en atmósfera zen (`Woman_relaxing_at_wellness_spa_202609021629.webp`), titulares editoriales y botón de agendamiento.
2. `Barra de Garantías`: 5 sellos de confianza con carrusel horizontal táctil (*Scroll Snap*) en móviles.
3. `#servicios`: Grid de 6 servicios (6 columnas en escritorio, 2 columnas en móvil) con fotos 1:1, píldoras esenciales de duración y precio, y botón «Agendar Cita».
4. `#nosotros`: Bloque editorial de experiencia con foto de cabina zen (`photo-1600334129128-685c5582fd35`), 4 métricas de autoridad y bloque de especialistas (4 columnas en escritorio, 2 columnas en móvil) con botón a WhatsApp.
5. `#ubicacion`: Panel con dirección (`Cl. 106 #105-69, Apartadó`), horarios, teléfono y Google Maps embebido con fórmula georreferenciada (`z=16`).
6. `Footer`: Navegación, contacto, redes y módulo con botón conciso **«Agendar»**.

## 📱 Reglas Críticas Mandatorias
- En móvil (< 768px), el Hero debe mantener estrictamente `min-height: 720px !important;`.
- Servicios y Especialistas deben renderizarse en **2 columnas balanceadas en móvil**.
- Botón flotante de WhatsApp con soporte de `safe-area-inset-bottom` y `z-index: 99999`.
- Logotipo puramente tipográfico, sin emojis ni íconos decorativos junto al nombre.
- Botones de cabecera y reserva con texto conciso **«Agendar»**.
- Iframe de Google Maps georreferenciado con fórmula oficial sin strings experimentales.
