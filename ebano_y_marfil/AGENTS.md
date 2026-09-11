# Guía de Agente IA: Ébano & Marfil - Beauty Center

Esta carpeta contiene el proyecto web de producción autónomo (*standalone*) para **Ébano & Marfil - Beauty Center**, salón de belleza y peluquería de alta gama en Turbo, Antioquia, diseñado bajo la estética forense **LUXEHAIR Hair Salon** (Paleta Deep Obsidian Black, Warm Rose Camel `#d1a88b` y Soft Marfil Cream).

---

## 🎯 Archivos del Triángulo de Contexto IA

1. `DATOS_NEGOCIO.json`: Fuente de verdad estructurada (teléfonos, WhatsApp, dirección, horario, catálogo de 6 servicios, 4 paquetes de precios, 4 especialistas, galería de 6 trabajos y testimonios).
2. `FICHA_DISENO.md`: Especificación forense de diseño (paleta obsidian `#0c0b0e`, warm camel rose `#d1a88b`, crema marfil `#fcf9f5`, tipografía `Alex Brush` script + `DM Serif Display` + `Plus Jakarta Sans`, componentes UI).
3. `index.html`: Sitio web standalone 100% autónomo (CSS en `<style>`, SEO Schema.org, OpenGraph, mapa Google Maps `z=16` y mobile action dock).
4. `../ebano_y_marfil_standalone.html`: Copia idéntica en la raíz del repositorio.

---

## 💅 Reglas Obligatorias de Maquetación

- **Paleta de Colores**: Mantener estrictamente el fondo obsidian `#0c0b0e`, el acento cálido camel rose `#d1a88b`, fondos claros crema `#fcf9f5` y bordes sutiles `rgba(209, 168, 139, 0.25)`.
- **Hero Header Inmersivo (Canvas Video Scroll Scrubbing)**: 
  - **Video Fuente Oficial**: `.agents/document/morena_salonbelleza.mp4` (4.0s, 74 frames WebP por vista).
  - **Regla Mandatoria de Encuadre (Modelo en el Centro de la Segunda Mitad)**: Todos los videos sitúan a la modelo en el centro de la mitad derecha ($x \approx 1440$ en 1920x1080), dejando el 50% izquierdo limpio para textos en escritorio.
  - **Escritorio (>768px)**: Overlay gradiente horizontal suave al 56% con la modelo 100% nítida a la derecha.
  - **Móvil (<768px)**: Altura `min-height: 720px !important`, extracción vertical calibrada con `crop=ih*9/16:ih:1140:0,scale=720:1280` para centrar perfectamente a la modelo en la pantalla vertical, tercio superior despejado con gradiente 44% transparente y textos en la mitad inferior con botones apilados (ancho máx. 275px).
- **Tarjetas de Servicios y Equipo**: Obligatoriamente en **2 columnas (`repeat(2, 1fr)`)** en pantallas móviles (≤768px) con fotos 1:1.
- **Botones**: Botón del Header, Footer y tarjetas debe decir concisamente **«Agendar»**.
- **Versión Móvil**: Menú inferior fijo (*action dock*) eliminado por preferencia de diseño. Navegación limpia con botón flotante circular de WhatsApp.
