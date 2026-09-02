# Regla Obligatoria: Estándar del Nicho Belleza, Spas, Salones & Nails

Esta regla es de cumplimiento estricto y automático para cualquier landing page, sitio web o proyecto perteneciente al **Nicho de Belleza, Salones de Manicura/Nails, Barberías, Centros de Estética y Spas**:

---

## 🌟 1. Hero Header Full-Width Bleed Inmersivo Obligatorio
Todo proyecto de belleza debe implementar el Hero a ancho completo edge-to-edge:
- **Estructura**: Capa de fondo `.hero-bg-cover` con la imagen a la derecha (`width: 65%`), máscara gradiente `.hero-bg-overlay` fusionada con el color base de la marca (`linear-gradient(90deg, #colorBase 0%, #colorBase 36%, rgba(...) 52%, transparent 100%)`) y badge flotante circular (`5.0 ★`).
- **Fórmula Móvil Calibrada (< 768px)**:
  - `.hero-bg-img`: `width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.88 - 0.95;` para que la fotografía/modelo luzca **100% nítida, brillante y cristalina**, sin capas que la blanqueen ni opaquen.
  - **Texto Centralizado Desde la Mitad Hacia Abajo**:
    - `.hero-fullwidth-section`: `display: flex; align-items: flex-end; justify-content: center; min-height: 580px - 620px; padding: 120px 20px 40px;` (bloque de contenido posicionado estrictamente desde el 50% de la altura hacia abajo).
    - `.hero-bg-overlay`: Gradiente vertical translúcido `linear-gradient(180deg, rgba(..., 0) 0%, rgba(..., 0.12) 40%, rgba(..., 0.78) 70%, rgba(..., 0.98) 100%)` dejando libre la mitad superior para apreciar la foto y generando contraste perfecto en la mitad inferior.
    - `.hero-text-block`: Centrado simétrico total (`text-align: center; margin: 0 auto; max-width: 380px; width: 100%;`) con sombra sutil de texto.
  - **Botones Optimizados en Móvil**:
    - `.hero-actions`: `display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; margin-top: 18px;`.
    - Botones (`.btn-primary`, `.btn-secondary`): `width: 100%; max-width: 280px; padding: 12px 20px; font-size: 0.84rem - 0.88rem; font-weight: 700; border-radius: 50px; text-align: center; justify-content: center; touch-action: manipulation;`.

---

## 💎 2. Tarjetas de Servicios Sin Precios Numéricos & Botón de Agendamiento
- **Cero Precios Fijos en Cards**: Prohibido mostrar valores numéricos (ej. `$25.000 COP`, `$45.000`).
- **Enfoque en Valor y Duración**: Las tarjetas deben mostrar badges informativos de técnica o tiempo (ej. *«Duración: 45 min»*, *«Secado UV/LED»*, *«Ritual Spa Relax»*, *«Diseño de Autor»*, *«Estructura Esculpida»*, *«Cuidado Nutritivo»*).
- **Botón Compacto para Agendar**: Cada tarjeta puede incluir un botón `.btn-card-book` con enlace directo a WhatsApp precargando el nombre del servicio para agendar o cotizar de forma personalizada.

---

## 🗺️ 3. Ubicación & Google Maps Georreferenciado
- Tarjeta a 2 columnas con panel de datos y el `iframe` interactivo georreferenciado con zoom `z=16` y diseño responsive sin desbordes horizontales.

---

## 📁 4. Triángulo de Contexto IA
En cada carpeta se deben generar obligatoriamente:
1. `DATOS_NEGOCIO.json`
2. `FICHA_DISENO.md`
3. `AGENTS.md`
4. `index.html` (100% autónomo standalone con CSS embebido y Schema.org JSON-LD).
