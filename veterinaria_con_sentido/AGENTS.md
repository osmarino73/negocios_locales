# Guía para Agentes de IA - Veterinaria Con Sentido

Este repositorio contiene la arquitectura completa de **Veterinaria Con Sentido** (Dra. Diana Veterinaria).

## 📁 Estructura del Proyecto
- `DATOS_NEGOCIO.json`: Fuente única de verdad sobre la clínica, servicios médicos, WhatsApp y enlaces.
- `FICHA_DISENO.md`: Manual de identidad visual, colores HSL/HEX y tipografía.
- `index.html`: Maqueta HTML5 completa y optimizada para SEO Local y PWA.
- `styles.css`: Hojas de estilo CSS3 responsivo con variables de diseño.
- `build_standalone.js`: Script para compilar el HTML en un único archivo standalone con imágenes en Base64.
- `veterinaria_con_sentido_standalone.html`: Entregable final 100% autónomo.

## 🤖 Reglas para IA
1. Toda modificación de datos debe actualizarse primero en `DATOS_NEGOCIO.json`.
2. Para regenerar la versión autónoma, ejecutar `node build_standalone.js`.
3. Mantener el marcado Schema.org JSON-LD tipo `@type: "VeterinaryCare"`.
