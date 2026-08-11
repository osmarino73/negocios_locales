# Guía para Agentes de IA - Veterinaria Los Almendros (Apartadó)

Este repositorio contiene la arquitectura completa de **Veterinaria Los Almendros** (Apartadó, Antioquia).

## 📁 Estructura del Proyecto
- `DATOS_NEGOCIO.json`: Fuente única de verdad sobre la clínica, médicos destacados (Dra. Mónica Blandón, Dr. Diego), WhatsApp y dirección en Carrera 99A, Apartadó.
- `FICHA_DISENO.md`: Manual de marca con la paleta warm caramel `#b48a62`, soft beige stone `#f3ede8` y deep mocha `#4a3e3d`.
- `index.html`: Maqueta HTML5 completa responsiva y PWA WebApp.
- `styles.css`: Hojas de estilo CSS3 con hero en arco y grid de tarjetas en bloque.
- `build_standalone.js`: Script de compilación en archivo único con Base64.
- `veterinaria_los_almendros_standalone.html`: Entregable autónomo de alta calidad.

## 🤖 Instrucciones de Mantenimiento
1. Todo cambio de datos o catálogo de servicios debe realizarse en `DATOS_NEGOCIO.json`.
2. Para actualizar el archivo autónomo, ejecutar `node build_standalone.js`.
