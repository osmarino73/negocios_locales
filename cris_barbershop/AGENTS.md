# Guía para Agentes de IA - Cris Barbershop

Este repositorio contiene la arquitectura web completa de **Cris Barbershop** (Barbería Premium & Grooming Masculino).

## 📁 Estructura del Proyecto
- `DATOS_NEGOCIO.json`: Fuente única de verdad con precios, servicios, barberos expertos y enlaces a WhatsApp y Google Maps.
- `FICHA_DISENO.md`: Manual visual con la paleta Bronce `#b48a62`, Carbón `#18181b` y Crema `#faf8f5`.
- `index.html`: Maqueta HTML5 completa, responsiva y WebApp PWA.
- `styles.css`: Hojas de estilo CSS3 con animaciones y widgets oscuros.
- `build_standalone.js`: Script de compilación en archivo único con Base64.
- `cris_barbershop_standalone.html`: Entregable autónomo de producción.

## 🤖 Reglas de Mantenimiento
1. Mantener actualizado `DATOS_NEGOCIO.json` cuando cambien los precios o la lista de barberos.
2. Ejecutar `node build_standalone.js` tras modificar el diseño o estilos.
