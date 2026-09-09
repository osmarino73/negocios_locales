# 💇‍♀️ Estándar de Nicho: Salones de Belleza, Barberías, Spas & Nails

Este documento define las reglas de estructura y las secciones esenciales para sitios web de **Salones de Belleza, Salones de Manicura/Nails, Barberías, Centros de Estética y Spas**, garantizando una experiencia visual inmersiva de alta gama, compatibilidad con reservas y optimización para SEO Local.

---

## 📌 1. Arquitectura de Secciones Oficial

Para mantener los sitios limpios, ultra-rápidos y de alta conversión, cada página se compone exclusivamente de las siguientes secciones:

1. **`#inicio` (Hero Full-Width Bleed)**: Portada inmersiva con fotografía en alta fidelidad a la derecha (`.hero-bg-cover`), titular de impacto editorial, frase script de autor, descripción y botón principal de agendamiento.
2. **Barra de Pilares / Garantías**: Franja de 4 a 5 sellos de confianza (*Estilistas Expertos, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Seguridad*).
3. **`#servicios` (Catálogo de Servicios — Grid 3 Columnas)**: Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil** con diseño **Full-Bleed Minimalista** (fotografía protagonista al 100%, relación 3:4, degradado inferior aterciopelado, precio claro y enlace minimalista `AGENDAR ➔`).
4. **`#nosotros` (Sobre Nosotros & Retrato Editorial — Grid 4 Columnas)**: Bloque de experiencia editorial a 2 columnas con foto de ambiente representativa y bloque de especialistas en formato **Retrato Editorial Full-Bleed (3:4.2)** en **4 columnas en escritorio (`repeat(4, 1fr)`)** y **2 columnas en móvil**.
5. **`#ubicacion` (Mapa & Contacto)**: Panel con dirección física, horarios, teléfono y Google Maps embebido (`z=16`).
6. **Footer Principal**: Enlaces, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.

---

## 🌟 2. Hero Header Full-Width Inmersivo Obligatorio (`#inicio`)

En el nicho de belleza, estética y spas, el Hero **siempre debe implementarse a ancho completo (Edge-to-Edge Full-Width)**. Se debe priorizar el banco local de fotografías curadas en WebP en `assets/heroes/{nicho}/` (`barberias/`, `maquillaje/`, `nails/`, `peinados/`, `salon_belleza/`, `spa/`), todas con pesos ultra optimizados (< 70 KB) y fondos oscuros con bokeh cálido para una integración perfecta.

- **Estructura HTML Estándar**:
  ```html
  <section class="hero-fullwidth-section" id="inicio">
    <div class="hero-bg-cover">
      <img src="..." alt="Nombre del Negocio" class="hero-bg-img" />
      <div class="hero-bg-overlay"></div>
    </div>
    <div class="hero-floating-badge">
      <span class="hero-badge-number">5.0</span>
      <span class="hero-badge-text">Calidad VIP</span>
      <div class="hero-badge-stars">★★★★★</div>
    </div>
    <div class="container hero-content-wrapper">
      <div class="hero-text-block">
        <span class="hero-eyebrow">...</span>
        <h1 class="hero-title">...</h1>
        <p class="hero-desc">...</p>
        <div class="hero-actions">...</div>
      </div>
    </div>
  </section>
  ```
- **Dimensiones & Fusión Gradiente en Escritorio (> 768px)**:
  - `min-height: 640px; width: 100%;`
  - `.hero-bg-cover`: `width: 70% - 72%; height: 100%;`
  - `.hero-bg-img`: `width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.96;`
  - **Prohibición de `mask-image` en el Contenedor**: Queda terminantemente prohibido aplicar `-webkit-mask-image` sobre `.hero-bg-cover` para evitar bandas sucias y cortes grisáceos por doble máscara.
  - **Degradado Orgánico Aterciopelado Calibrado (Curva Eased de 8 Paradas con Luminosidad Optimizada)**:
    ```css
    background: linear-gradient(
      90deg, 
      #colorBase 0%, 
      #colorBase 25%, 
      rgba(..., 0.96) 32%, 
      rgba(..., 0.8) 40%, 
      rgba(..., 0.5) 50%, 
      rgba(..., 0.2) 62%, 
      rgba(..., 0.05) 74%, 
      transparent 84%
    );
    ```
    Garantiza **100% de contraste a la izquierda (0% a 25%)** y una revelación luminosa y sedosa hacia la derecha, dejando la fotografía completamente limpia y radiante a partir del 84%, eliminando sombras oscuras excesivas sobre la modelo.
- **Adaptabilidad Móvil Calibrada (< 768px)**:
  - **Regla Mandatoria de Altura**: En móvil debe tener **estrictamente `min-height: 720px !important;`**. Jamás por debajo de 720px.
  - **Fotografía Nítida en Alta Fidelidad**: `.hero-bg-img` con `width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.95;` dejando despejado el tercio superior para la modelo con nitidez total.
  - **Texto Centralizado Estrictamente en la Mitad Inferior (Sin tapar a la modelo)**:
    - `.hero-fullwidth-section`: `display: flex; align-items: flex-end; justify-content: center; min-height: 720px !important; padding: 140px 16px 28px;` (contenido posicionado exclusivamente desde el 50% de la altura hacia abajo).
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
    - `.hero-text-block`: Centrado simétrico (`text-align: center; margin: 0 auto; max-width: 360px; width: 100%; text-shadow: 0 2px 8px rgba(0,0,0,0.9);`).
    - **Escala Tipográfica Móvil Compacta**:
      - Eyebrow: `0.72rem; letter-spacing: 0.18em; margin-bottom: 6px;`
      - Titular: `1.85rem - 1.95rem; line-height: 1.12; margin-bottom: 10px;`
      - Script: `1.25em - 1.28em; margin-top: 2px;`
      - Descripción: `0.85rem - 0.86rem; line-height: 1.5; margin-bottom: 18px - 20px;` (nunca >1rem en móvil).
  - **Botones Optimizados Ergonómicos en Móvil**:
    - `.hero-actions`: `display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; margin: 0 auto;`.
    - Botones (`.btn-primary`, `.btn-secondary`): `width: 100%; max-width: 275px; padding: 12px 20px; font-size: 0.84rem; font-weight: 700; border-radius: 50px; text-align: center; justify-content: center; touch-action: manipulation;`.
    - Botón primario de reserva destacado con sombra ambiental y botón secundario con acabado translúcido tipo píldora (`backdrop-filter: blur(8px); border: 1px solid rgba(..., 0.35);`).
  - **Smart Header / Navbar Inteligente**: Barra superior en `.header-sticky-wrapper` con auto-hide al bajar y aparición al subir. Botón superior compacto **«Agendar»** con `.btn-header-cta`.
  - **Botón de Reserva del Footer**: El botón de la tarjeta de reserva del footer (`.btn-footer-reserve`) debe decir exclusivamente **«Agendar»** (no usar «Agendar por WhatsApp»).

---

## 💎 3. Tarjetas de Servicios: Catálogo Full-Bleed Minimalista (3 Columnas Desktop / 2 Móvil)

- **Distribución de Columnas**:
  - **Escritorio (> 768px)**: Grid de **3 columnas (`repeat(3, 1fr); gap: 24px;`)** para 6 servicios distribuidos en 2 filas elegantes y holgadas.
  - **Móvil (≤ 768px)**: Grid de **2 columnas (`grid-template-columns: repeat(2, 1fr); gap: 12px;`)**, reduciendo el scroll vertical a la mitad con diseño compacto tipo catálogo de lujo.
- **Fotografía Protagonista Full-Bleed (3:4)**:
  - `.service-card`: `position: relative; aspect-ratio: 3 / 4; min-height: 440px; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end;`. En móvil: `min-height: 300px; border-radius: 18px;`.
  - La imagen ocupa el 100% de la tarjeta (`position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;`).
- **Degradado Aterciopelado Inferior**:
  - `linear-gradient(180deg, rgba(..., 0) 0%, rgba(..., 0) 38%, rgba(..., 0.72) 65%, rgba(..., 0.96) 92%, #colorFondo 100%)`.
  - El tercio superior (primeros 38%) es 100% transparente para mostrar la modelo o procedimiento con máxima nitidez.
- **Prohibición Estricta de Badges o Píldoras Superiores**:
  - Cero etiquetas de duración o badges flotantes en la parte superior para evitar ensuciar la fotografía.
- **Tercio Inferior Tipográfico & Minimalista**:
  - Línea de acento sutil (`.service-card-accent-line`).
  - Nombre del servicio en tipografía display blanca y legible (`1.25rem - 1.35rem` en desktop, `0.95rem - 1.05rem` en móvil).
  - Precio monetario claro y visible en tono de marca (`.service-card-price`, ej. `$90.000 COP`).
  - Enlace de agendamiento minimalista **`AGENDAR ➔`** (`.btn-card-book-minimal`): sin fondo de pastilla pesado (`background: transparent; border: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;`), con micro-interacción hover con flecha que se desplaza (`translateX(5px)`).

---

## 👥 4. Sección de Equipo: Retrato Editorial Full-Bleed (4 Columnas Desktop / 2 Móvil)

- **Distribución de Columnas**:
  - **Escritorio (> 768px)**: Grid de **4 columnas (`repeat(4, 1fr); gap: 20px;`)**.
  - **Móvil (≤ 768px)**: Grid de **2 columnas (`grid-template-columns: repeat(2, 1fr); gap: 12px;`)**.
- **Formato Retrato Editorial Vertical (3:4.2)**:
  - Sustituye los avatares circulares tradicionales por retratos verticales en plano medio/busto de alta fidelidad (`aspect-ratio: 3 / 4.2; min-height: 410px; border-radius: 20px; overflow: hidden; position: relative; display: flex; flex-direction: column; justify-content: flex-end;`). En móvil: `min-height: 310px; border-radius: 18px;`.
  - Fotografía al 100% en la capa base con degradado vertical envolvente que protege el rostro en la mitad superior.
- **Tercio Inferior de Autoridad**:
  - Línea de acento de marca.
  - Nombre de la especialista en tipografía display blanca (`.team-name`).
  - Rol profesional con altura uniforme (`.team-role`, ej. `Master Stylist`, `Cosmetóloga Senior`).
  - Calificación de 5 estrellas (`⭐⭐⭐⭐⭐ (5.0)`).
  - Enlace directo a WhatsApp **`AGENDAR ➔`** (`.btn-card-book-minimal`) con mensaje personalizado precargado.

---

## 🗺️ 5. Ubicación & Google Maps Georreferenciado (`#ubicacion`)

- **URL de Iframe Obligatoria**:
  `https://maps.google.com/maps?q={NOMBRE_NEGOCIO},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`
- **Diseño**: Tarjeta a 2 columnas con panel informativo y mapa adaptativo responsive sin desbordes.

---

## 📱 6. Navegación Móvil Limpia & Botón Flotante Anti-Corte (< 768px)

En todos los proyectos de salones, spas y belleza:
1. **Prohibición Estricta de Menús o Barras Inferiores Fijas (Action Dock)**:
   - **Queda terminantemente prohibido implementar barras de navegación inferiores fijas** (`.mobile-bottom-nav`, `.mobile-action-dock` o menús tipo pestaña). Estas barras saturan la pantalla del celular, roban área de lectura vertical, chocan con las barras de navegación de iOS/Android y compiten visualmente con WhatsApp.
2. **Navegación Móvil Ultra Limpia y Sin Fricción**:
   - Arriba: Smart Header minimalista con Logotipo tipográfico puro a la izquierda y botón conciso **«Agendar»** a la derecha (`.btn-header-cta`).
   - Abajo: Únicamente el botón flotante circular oficial de WhatsApp (`.whatsapp-float`).
3. **Botón Flotante WhatsApp Anti-Corte**:
   - `bottom: calc(28px + env(safe-area-inset-bottom, 0px));`
   - `right: max(20px, env(safe-area-inset-right, 20px));`
   - Cero `overflow: hidden`, asegurando que el ícono quede 100% visible sin ser recortado por las barras de herramientas del navegador móvil.
