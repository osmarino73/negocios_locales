# Guía para Agentes de IA - Hogar Infantil Oro Verde (Apartadó)

Este repositorio contiene la arquitectura web completa del **Hogar Infantil Oro Verde** (Apartadó, Antioquia).

## 📁 Estructura del Proyecto
- `DATOS_NEGOCIO.json`: Fuente única de verdad con programas pedagógicos por edad, dirección en Calle 100 # 99-22, Apartadó y WhatsApp.
- `FICHA_DISENO.md`: Manual de identidad visual con paleta Coral `#f97316`, Turquesa `#2dd4bf` e Índigo `#6366f1` y divisiones en ola de nubes.
- `index.html`: Maqueta HTML5 completa responsiva y WebApp PWA.
- `styles.css`: Hojas de estilo CSS3 con animaciones de nubes y formas orgánicas blob.
- `build_standalone.js`: Script de compilación en archivo autónomo único con Base64.
- `hogar_infantil_oro_verde_standalone.html`: Entregable final de producción.

## 🤖 Reglas de Mantenimiento
1. Cualquier cambio en servicios o docentes debe actualizarse en `DATOS_NEGOCIO.json`.
2. Para regenerar el entregable autónomo, ejecutar `node build_standalone.js`.
