# Regla Obligatoria: Estándar del Nicho Belleza, Spas, Salones & Nails

Esta regla es de cumplimiento estricto y automático para cualquier landing page, sitio web o proyecto perteneciente al **Nicho de Belleza, Salones de Manicura/Nails, Barberías, Centros de Estética y Spas**:

---

## 🌟 1. Hero Header Full-Width Bleed Inmersivo Obligatorio
Todo proyecto de belleza debe implementar el Hero a ancho completo edge-to-edge:
- **Estructura en Escritorio (> 768px)**:
  - Capa de fondo `.hero-bg-cover` con la imagen a la derecha (`width: 65%`, `object-fit: cover; object-position: center top; opacity: 0.96;`).
  - **Prohibición de `mask-image` sobre el contenedor de imagen**: Queda prohibido aplicar `-webkit-mask-image` sobre `.hero-bg-cover` para evitar bandas sucias y cortes grisáceos por doble máscara.
  - **Curva de Degradado Orgánica y Aterciopelada (Scrim Multi-Parada)**: La transición debe realizarse mediante `.hero-bg-overlay`:
    ```css
    background: linear-gradient(
      90deg, 
      #colorBase 0%, 
      #colorBase 35%, 
      rgba(..., 0.96) 42%, 
      rgba(..., 0.8) 50%, 
      rgba(..., 0.5) 60%, 
      rgba(..., 0.2) 72%, 
      rgba(..., 0.05) 84%, 
      transparent 94%
    );
    ```
    Garantiza 100% de contraste a la izquierda (0% a 35%) e integración como seda hacia la derecha, dejando la fotografía nítida y brillante a partir del 90%.
  - `padding-top: 75px - 85px` en el contenedor para despejar el Navbar.
- **Fórmula Móvil Calibrada (< 768px)**:
  - **Regla Mandatoria de Altura**: En móvil debe tener **estrictamente `min-height: 720px !important;`**. Jamás por debajo de 720px.
  - `.hero-bg-img`: `width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.95;` dejando despejado el tercio superior para la modelo con nitidez total.
  - **Texto Centralizado Estrictamente en la Mitad Inferior (Sin tapar a la modelo)**:
    - `.hero-fullwidth-section`: `display: flex; align-items: flex-end; justify-content: center; min-height: 720px !important; padding: 140px 16px 28px;`.
    - `.hero-bg-overlay`: Gradiente vertical translúcido:
      ```css
      background: linear-gradient(
        180deg, 
        rgba(..., 0) 0%, 
        rgba(..., 0) 38%, 
        rgba(..., 0.6) 54%, 
        rgba(..., 0.92) 74%, 
        #colorFondo 96%
      );
      ```
      El 38% superior es 100% transparente (cero veladuras oscuras sobre la cara de la modelo).
    - `.hero-text-block`: Centrado simétrico total (`text-align: center; margin: 0 auto; max-width: 360px; width: 100%; text-shadow: 0 2px 8px rgba(0,0,0,0.9);`).
    - **Escala Tipográfica Móvil Compacta**:
      - Eyebrow: `0.72rem; letter-spacing: 0.18em; margin-bottom: 6px;`
      - Titular: `1.85rem - 1.95rem; line-height: 1.12; margin-bottom: 10px;`
      - Script: `1.25em - 1.28em; margin-top: 2px;`
      - Descripción: `0.85rem - 0.86rem; line-height: 1.5; margin-bottom: 18px - 20px;` (nunca >1rem en móvil).
  - **Botones Optimizados en Móvil**:
    - `.hero-actions`: `display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; margin: 0 auto;`.
    - Botones (`.btn-primary`, `.btn-secondary`): `width: 100%; max-width: 275px; padding: 12px 20px; font-size: 0.84rem; font-weight: 700; border-radius: 50px; text-align: center; justify-content: center; touch-action: manipulation;`.

---

## 💎 2. Tarjetas de Servicios Sin Precios Numéricos & Botón de Agendamiento
- **Cero Precios Fijos en Cards**: Prohibido mostrar valores numéricos (ej. `$25.000 COP`, `$45.000`).
- **Enfoque en Valor y Duración**: Las tarjetas deben mostrar badges informativos de técnica o tiempo (ej. *«Duración: 45 min»*, *«Secado UV/LED»*, *«Ritual Spa Relax»*, *«Diseño de Autor»*, *«Estructura Esculpida»*, *«Cuidado Nutritivo»*).
- **Botón Compacto para Agendar**: Cada tarjeta puede incluir un botón `.btn-card-book` con enlace directo a WhatsApp precargando el nombre del servicio para agendar o cotizar de forma personalizada.

---

## 🗺️ 3. Ubicación & Google Maps Georreferenciado
- **Fórmula Obligatoria Oficial**:
  `https://maps.google.com/maps?q={NOMBRE_NEGOCIO},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`
- **Prohibición de Strings Experimentales / pb Strings**: Queda prohibido usar URLs con `pb=!1m18...` ya que rompen el mapa o muestran pantallas en blanco.
- Tarjeta a 2 columnas con panel de datos y el `iframe` interactivo georreferenciado con zoom `z=16` y diseño responsive sin desbordes horizontales.

---

## 📁 4. Triángulo de Contexto IA
En cada carpeta se deben generar obligatoriamente:
1. `DATOS_NEGOCIO.json`
2. `FICHA_DISENO.md`
3. `AGENTS.md`
4. `index.html` (100% autónomo standalone con CSS embebido y Schema.org JSON-LD).
