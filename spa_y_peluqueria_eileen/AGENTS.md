# 🤖 Guía de Contexto e Instrucciones para la IA — Spa y Peluquería Eileen

Bienvenido. Si eres un modelo de Inteligencia Artificial (Claude, ChatGPT, Gemini, Antigravity, Cursor, etc.) que está leyendo esta carpeta, este documento contiene el contexto maestro para continuar manteniendo o expandiendo el sitio web del negocio local **Spa y Peluquería Eileen** en Carepa, Antioquia.

---

## 🎯 Meta del Proyecto

Desarrollar y mantener una experiencia web de alta gama con motor **Canvas Video Scroll Scrubbing** (secuencia de fotogramas WebP calibrados para Desktop 16:9 y Mobile 9:16), sofisticada, responsiva y enfocada en la reserva de citas por WhatsApp.

---

## 📁 Estructura del Proyecto

- `AGENTS.md`: Este archivo. Guía de contexto maestro para la IA.
- `FICHA_DISENO.md`: Manual del sistema de diseño (tokens de color HEX/HSL, fuentes de Google Fonts, escala tipográfica y componentes).
- `DATOS_NEGOCIO.json`: Fuente única de verdad con teléfonos, WhatsApp, mapa de Google Maps, horarios y lista de servicios.
- `index.html`: Estructura HTML5 principal con motor Canvas 300vh.
- `spa_y_peluqueria_eileen_standalone.html`: Versión 100% autónoma en un solo archivo.
- `styles.css`: Hoja de estilos con variables CSS (`:root`), degradado aterciopelado y carruseles scroll snap.
- `public/frames/desktop/`: Secuencia de fotogramas WebP (1920x1080) para escritorio.
- `public/frames/mobile/`: Secuencia de fotogramas WebP (720x1280) para celular.
- `build_standalone.js`: Script ejecutable en Node.js (`node build_standalone.js`) para empaquetar los cambios.

---

## 📐 Reglas de Desarrollo para la IA

1. **Revisar `FICHA_DISENO.md`**:
   - Usar la paleta de colores `--color-camel` / `--color-accent` (`#cbb39c`), `--color-dark-bg` (`#0d0b0a`) y las fuentes `'DM Serif Display'` para títulos display, `'Alex Brush'` para firmas caligráficas y `'Plus Jakarta Sans'` para UI.
2. **Hero Canvas Video Scroll Scrubbing**:
   - Mantener la regla CSS `overflow-x: clip;` en `html, body` (prohibido `overflow-x: hidden` en el body para proteger `position: sticky`).
   - Storytelling en 2 pasos secuenciales (0-50% y 50-100%) anclados al tercio inferior de la pantalla.
   - Gradiente de escritorio: horizontal 90deg a la izquierda detras del texto.
   - Gradiente de móvil: vertical 180deg abajo con 38% superior 100% transparente.
3. **Secciones Oficiales**:
   - `#inicio`: Hero Canvas Scrubbing de alta fidelidad.
   - Franja de Pilares (Scroll Snap en móvil).
   - `#servicios`: Grid 3 columnas desktop (2 columnas en móvil) con tarjetas Full-Bleed 3:4.
   - `#nosotros`: Experiencia de marca + Equipo de 4 especialistas en Retrato Editorial 3:4.2 (carrusel horizontal en móvil).
   - `#ubicacion`: Datos de contacto y mapa embebido `z=16`.
   - Footer con módulo de reserva y botón conciso **«Agendar»**.
4. **Generar la Versión Standalone**:
   - Tras realizar cambios en HTML o CSS, ejecutar `node build_standalone.js`.
