# Guía Global de Agentes e Instrucciones del Repositorio: Negocios Locales

Este repositorio contiene landing pages y sitios web de producción 100% autónomos (*standalone*) para negocios locales, optimizados para SEO Local y conversión directa.

---

## 🎯 Regla Mandatoria: Estructura Oficial de Secciones del Sitio Web

Aunque se tome como referencia visual una imagen para clonar su paleta de colores, tipografía y estilo gráfico, **toda landing page o sitio web debe contener exclusivamente las siguientes secciones oficiales**:

1. **`#inicio` (Hero Full-Width Bleed)**:
   - Portada inmersiva con fotografía en alta fidelidad a la derecha (`.hero-bg-cover`), titular de impacto editorial, frase script de autor, descripción y botón principal de agendamiento.
2. **Barra de Pilares / Garantías**:
   - Franja de 4 a 5 sellos de confianza (*Estilistas Expertos, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Seguridad*).
   - **En Móvil (< 768px)**: Carrusel horizontal deslizable (*Scroll Snap*) fluido en una sola fila compacta, evitando el scroll vertical y permitiendo deslizar los sellos con el dedo de forma fluida.
3. **`#servicios` (Catálogo de Servicios — Grid 3 Columnas en Escritorio)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** para mostrar los 6 servicios en 2 filas amplias, aireadas y elegantes con diseño **Full-Bleed Minimalista** (fotografía protagonista al 100%, relación 3:4, degradado inferior, precio claro y enlace minimalista `AGENDAR ➔`; obligatorio en **2 columnas** en móvil).
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales — Estándar Editorial)**:
   - **Bloque Editorial Sobre Nosotros (`.experience-layout`)**: Grid a 2 columnas con fotografía del salón/ambiente (`.salon-image-showcase`) con badge flotante VIP (`.experience-floating-badge`), titular editorial de impacto, descripción cálida y fila de 4 métricas de autoridad (`.metrics-row`: años exp, clientes atendidos, técnica/filosofía, calificación 5★; en 2 columnas en móvil) y botón de contacto.
     - **Regla Mandatoria de Imagen de Ambiente Coherente con el Nicho**: Queda terminantemente prohibido reutilizar imágenes genéricas de sillas de peluquería para todos los rubros. Cada categoría debe utilizar una fotografía de ambiente representativa:
       - *Uñas / Manicura / Pedicura*: Fotografía real de salón de uñas con mesas de manicura, manicurista en atención, esmaltes y lámparas UV (`https://pub-22e6e94a97b84b068f4217675926ef7f.r2.dev/stock/nails/about-nuva-nails-manicurista.jpg`, `photo-1604654894610-df63bc536371` o `photo-1519014816548-bf5fe059798b`). **Queda terminantemente prohibido usar `photo-1527799820374-dcf8d9d4a388` en uñas**, ya que es una fotografía de planchas y secadores de cabello (exclusivo para peluquerías).
       - *Spa / Masajes / Faciales*: Cabina de relajación zen, camillas con toallas y ambientación aromática (`photo-1600334129128-685c5582fd35` o `photo-1596178065887-1198b6148b2b`).
       - *Peluquería / Rizos / Color*: Tocadores, estaciones de peinado, secadores y planchas (`photo-1560066984-138dadb4c035` o `photo-1527799820374-dcf8d9d4a388`).
       - *Barbería*: Estaciones de corte clásicas con cuero y madera (`photo-1585747860715-2ba37e788b70`).
    - **Bloque Nuestros Profesionales (`.team-grid` — Grid 4 Columnas / Retrato Editorial Full-Bleed)**: Grid de **4 columnas en escritorio (`repeat(4, 1fr)`)** con formato **Retrato Editorial Full-Bleed (3:4.2)** con fotografías en plano medio de las terapeutas/estilistas, degradado inferior aterciopelado, línea de acento cobre, nombre en tipografía display blanca, rol en tono cálido, calificación 5★ y enlace minimalista `AGENDAR ➔` directo a WhatsApp. **En móvil (< 768px): Obligatoriamente Carrusel Horizontal Deslizable (*Scroll Snap*) en una sola fila fluida** (`display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; gap: 16px;`) con tarjetas editoriales grandes (`flex: 0 0 255px; aspect-ratio: 3/4.2;`) y efecto «Peek» (asoman 70-100px del siguiente profesional), eliminando el scroll vertical excesivo y maximizando el impacto fotográfico.
5. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo con dirección física, horarios, teléfono y Google Maps interactivo embebido con fórmula georreferenciada (`z=16`).
6. **Footer Principal**:
   - Enlaces de navegación, datos de contacto, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.

---

## 🎨 Regla Mandatoria: Clonación Forense de Tipografía, Diseño y Paleta de Colores

En todo proyecto adaptado a partir de una **imagen de referencia**, se debe clonar con precisión la tríada visual:

1. **Tipografía Forense Idéntica**:
   - **Caligrafía & Signature Script**: Si la referencia usa una fuente manuscrita / de firma caligráfica (ej. *Alex Brush*, *Great Vibes*, *Pinyon Script*), está **terminantemente prohibido** sustituirla por itálicas de imprenta clásicas.
   - **Titulares Display**: Analizar el peso y proporción real (ej. serifas editoriales esbeltas `500-600` como *DM Serif Display*, *Cormorant Garamond*, *Cinzel* o *Prata*).
   - **Logotipos & UI**: Replicar el espaciado (*letter-spacing* amplio), estilos geométricos minimalistas (*Tenor Sans*, *Montserrat*, *Plus Jakarta Sans*) y líneas divisorias de marca.
2. **Diseño y Acabados Visuales**:
   - Replicar el estilo de botones, acentos tonales, sombras suaves, divisores con diamantes o líneas finas, adaptados a la estructura oficial de secciones.
3. **Paleta de Colores Forense**:
   - Extraer con exactitud los códigos HEX/HSL reales de la referencia (fondos oscuros obsidian/ébano, cremas marfil, acentos oro cálido/camel rose) y prohibir la invención de colores discordantes.
4. **Unicidad Estricta del Color Principal & Prohibición de Colores Hardcoded**:
   - **Consumo Obligatorio de Tokens CSS**: Todos los elementos que expresen el acento de marca o tono cromático del negocio **deben consumir estrictamente la variable CSS oficial del proyecto** (ej. `var(--color-accent)` o `var(--color-camel)`).
   - **Queda terminantemente prohibido quemar valores HEX/RGB (*hardcoded*)** en elementos que representen la identidad o acentos del negocio, en especial:
     - Firma caligráfica manuscrita (`.hero-script-tag`, `.section-script-eyebrow`, `.hero-script`).
     - Énfasis itálico de titulares display (`.hero-title em`, `.section-title em`, `.experience-title em`).
     - Subtítulo del logotipo de marca (`.brand-subtitle`).
     - Líneas decorativas o de acento en tarjetas (`.service-card-accent-line`, `.team-card-accent-line`, y sus estados `:hover`).
     - Precios destacados en tarjetas de servicios (`.service-card-price`).
     - Rol de las especialistas/profesionales (`.team-role`).
     - Enlaces minimalistas de agendamiento y micro-interacciones hover (`.btn-card-book-minimal`, `.btn-hero-minimal-link:hover`).
   - **Propagación Dinámica Instantánea**: Esta regla garantiza que si el usuario o cliente cambia el valor del color primario en `:root` (ej. `--color-accent: #...;`), **el 100% de los botones, firmas script, subtítulos, roles y textos destacados se transformen al unísono de forma automática e impecable**, sin dejar textos o acentos desfasados con colores heredados de plantillas o valores fijos.

---

## 💅 Estándar Mandatorio: Nicho Belleza, Salones, Spas & Nails

Para cualquier proyecto de salones de belleza, uñas, spas, barberías o estética, se deben aplicar estrictamente las siguientes reglas:

0. **Banco Oficial de Fotografías Hero Locales (`assets/heroes/`)**:
   - Para garantizar velocidad de carga instantánea (<70 KB por imagen) y fondos oscuros con degradado perfecto, se debe priorizar el uso del banco de imágenes local del repositorio según el nicho:
     - **Barberías**: `assets/heroes/barberias/` (fades modernos, perfilado con navaja, capas negras y sillón clásico).
     - **Maquillaje / Makeup**: `assets/heroes/maquillaje/` (maquillaje social, novias, cejas laminadas y piel blindada).
     - **Uñas / Nails**: `assets/heroes/nails/` (nail art 3D floral, acrílicas esculpidas, joyas y manos en primer plano).
     - **Peinados / Rizos**: `assets/heroes/peinados/` (ondas al agua, cepillado voluminoso y rizos glow).
     - **Salón de Belleza**: `assets/heroes/salon_belleza/` (color, mechas balayage, alisados y volumen).
     - **Spa & Bienestar**: `assets/heroes/spa/` (cuidado facial glow, relajación y atmósfera zen).
   - Al crear un proyecto individual, se puede vincular directamente la ruta relativa `../assets/heroes/{nicho}/{imagen}.webp` o copiar la imagen seleccionada a la carpeta del negocio.

1. **Hero Header Inmersivo Full-Width Bleed / Canvas Video Scroll Scrubbing**:
   - **Estándar Mandatorio de Dos Imágenes Hero (`<picture>`) para Sitios con Fotografía**:
     - Toda landing page que utilice fotografía estática en su Hero **debe contar obligatoriamente con dos imágenes dedicadas**:
       1. **Versión Escritorio (16:9)**: Fotografía panorámica horizontal (`1920x1080`), ubicando el sujeto/plato/modelo en el tercio derecho o centro-derecha para dejar espacio amplio al titular y CTA en la izquierda.
       2. **Versión Móvil (9:16)**: Fotografía vertical dedicada (`768x1376` o `720x1280`), centrando al sujeto/plato/modelo en el tercio superior/medio, dejando la base natural limpia para los textos y botones, sin recortes horizontales forzados ni distorsiones.
     - **Implementación HTML Semántica Obligatoria**:
       ```html
       <div class="hero-bg-cover">
         <picture class="hero-bg-picture">
           <source media="(max-width: 768px)" srcset="hero_mobile.webp" width="768" height="1376">
           <img src="hero_desktop.webp" alt="..." class="hero-bg-img" loading="eager" width="1920" height="1072">
         </picture>
       </div>
       ```
   - **Estándar Mandatorio de Videos Hero (Canvas Scrubbing)**: A partir de ahora, el usuario proporcionará la imagen de referencia visual, el `DATOS_NEGOCIO.json` y una **carpeta con dos videos dedicados**:
     - **Video de Escritorio (16:9)**: Video horizontal para extraer fotogramas Desktop (`public/frames/desktop/` a `1920x1080` Q85).
     - **Video de Móvil (9:16)**: Video vertical para extraer fotogramas Mobile (`public/frames/mobile/` a `720x1280` Q76).
   - En caso de recibir un único video 16:9 de origen, la extracción para **móvil (9:16)** se calibrará con `crop=ih*9/16:ih:1140:0,scale=720:1280` para centrar simétricamente a la modelo.
   - Capa posterior `.hero-bg-cover` o Canvas a pantalla completa con `overflow-x: clip;` en `html, body`.
   - **Vista de Escritorio (> 768px)**:
      - **Anclaje Inferior Mandatorio (`align-items: flex-end`)**: `.hero-fullwidth-section` o `.hero-container-align`: `min-height: 640px; height: 100%; display: flex; align-items: flex-end; justify-content: flex-start; padding-bottom: clamp(48px, 9vh, 85px);`.
      - **Prohibición Estricta del Centrado Vertical Rígido**: Queda terminantemente prohibido centrar el texto al medio (`top: 50%; transform: translateY(-50%)`) ya que sitúa los textos frente a los ojos, frente y peinado del modelo. Las capas de texto (`.hero-scroll-step` o `.hero-text-block`) deben anclarse a la base (`bottom: 0; left: 0;`).
      - **Regla del 60% Superior Despejado**: Al menos el **60% superior de la pantalla debe permanecer 100% limpio y libre de textos**, dejando que el rostro, cabello, mirada o producto luzcan con total nitidez e impacto editorial.
      - **Prohibición de `mask-image` sobre el contenedor de imagen**: Queda terminantemente prohibido aplicar `-webkit-mask-image` sobre `.hero-bg-cover` porque genera cortes grisáceos y bandas sucias (*Mach bands*) cuando las fotografías tienen fondos claros contra fondos oscuros.
      - **Degradado Aterciopelado & Regla del Degradado Mínimo Ultraligero (`.hero-bg-overlay` o `.canvas-gradient-overlay`)**:
        - **Regla Mandatoria Universal para Todos los Nichos (Degradado Mínimo al 30%–35%)**:
          - **Prohibición Estricta de Bloques Sólidos o Veladuras Oscuras**: Queda terminantemente prohibido usar bloques negros artificiales o gradientes continuos (`180deg` o `90deg`) que sobrepasen el 35% horizontal o laven el color, textura y apetitosidad de los productos, platos o modelos.
          - **Desvanecimiento Rápido al 30%–35% en Escritorio**: El gradiente horizontal (`90deg`) se restringe estrictamente a la zona inicial de lectura (0% a 25%) y debe ser **100% transparente a más tardar en el 30%–35%**:
            ```css
            background: linear-gradient(
              90deg, 
              rgba(var(--bg-rgb), 0.65) 0%, 
              rgba(var(--bg-rgb), 0.32) 15%, 
              rgba(var(--bg-rgb), 0.08) 25%, 
              transparent 32%
            );
            ```
          - La legibilidad se asegura con `text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.85);` (en fondos oscuros) o `text-shadow: 0 1px 8px rgba(255, 255, 255, 0.95);` (en fondos claros), manteniendo la foto 100% visible, vibrante y llena de luz.
      - `padding-top: 75px - 85px` en el contenedor para evitar que el navbar tape los titulares en vistas intermedias.
   - **Móvil Calibrado Obligatorio (< 768px)**:
     - **Regla Mandatoria de Altura Hero**: En móvil debe tener **estrictamente `min-height: 840px !important;`** (rango `840px - 860px`), con `padding: 140px 16px 40px;` para otorgar máxima presencia visual y espacio amplio al sujeto/plato.
     - `.hero-bg-img`: `width: 100%; height: 100%; object-fit: cover; object-position: center top !important; opacity: 1;` dejando despejada y protagónica la mitad superior para la modelo/plato con nitidez total.
     - `.hero-fullwidth-section`: `display: flex; align-items: flex-end; justify-content: center; min-height: 840px !important; padding: 140px 16px 40px;`.
     - `.hero-bg-overlay` / `.canvas-gradient-overlay` en Móvil: Gradiente vertical reservado estrictamente al 20% inferior para máxima nitidez:
       ```css
       background: linear-gradient(
         180deg, 
         transparent 0%, 
         transparent 75%, 
         rgba(var(--bg-rgb), 0.65) 90%, 
         #colorFondo 100%
       ) !important;
       ```
       El 75%–80% superior permanece 100% transparente (0% veladuras oscuras sobre el sujeto/plato).
     - **Disposición y Escala del Texto en Móvil (Estrictamente en la Mitad Inferior)**:
       - `.hero-text-block`: Centrado simétrico total (`text-align: center; margin: 0 auto; max-width: 360px; width: 100%; text-shadow: 0 2px 8px rgba(0,0,0,0.9);`).
       - Eyebrow: `0.72rem; letter-spacing: 0.18em; margin-bottom: 6px;`
       - Titular (`.hero-title`): `1.85rem - 1.95rem; line-height: 1.12; margin-bottom: 10px;`
       - Script (`.hero-script`): `1.25em - 1.28em; margin-top: 2px;`
       - Descripción (`.hero-desc`): `0.85rem - 0.86rem; line-height: 1.5; margin-bottom: 18px - 20px;` (terminantemente prohibido dejarla >1rem en móvil para no empujar el texto sobre la modelo).
       - Botones apilados al centro: `.hero-actions { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; margin: 0 auto; }` con botones de `max-width: 275px; padding: 12px 20px; font-size: 0.84rem; justify-content: center;`.

2. **Arquitectura Estándar Crismar para Servicios & Profesionales (Full-Bleed Minimalista)**:
   - **Tarjetas de Servicios Full-Bleed Minimalistas (`.service-card`)**:
     - Grid en Escritorio: **3 columnas (`repeat(3, 1fr); gap: 24px;`)** para mostrar los servicios en filas amplias, aireadas y elegantes.
     - Formato Inmersivo: Fotografía en alta fidelidad como protagonista al 100% en la capa base (`aspect-ratio: 3/4; min-height: 440px; border-radius: 22px; overflow: hidden; position: relative;`).
     - **Degradado Aterciopelado Inferior**: Transición vertical que mantiene el 40%–45% superior 100% transparente para que el procedimiento/modelo luzca impecable:
        ```css
        background: linear-gradient(
          180deg, 
          rgba(..., 0) 0%, 
          rgba(..., 0) 45%, 
          rgba(..., 0.72) 72%, 
          rgba(..., 0.95) 92%, 
          #colorBase 100%
        );
        ```
      - **Prohibición de Píldoras Superiores**: Queda terminantemente prohibido colocar píldoras flotantes de duración o badges en la parte superior de la tarjeta, manteniendo la fotografía 100% despejada.
      - **Anclaje Inferior Estricto (Regla del 70%–75% Superior Despejado)**:
        - En móvil: `.service-card` con `padding: 0 !important;` y `.service-card-content` con `padding: 8px 10px 10px !important;`.
        - `.service-card-desc` con `display: none !important;` en móvil (en desktop oculta o minimalista). La altura del bloque tipográfico no debe superar ~65px, garantizando que el **70%–75% superior de la foto permanezca 100% despejado y libre de textos**.
      - **Footer de Dos Filas Verticales Independientes (`.service-card-footer`)**:
        - Organizado obligatoriamente en **dos filas (`display: flex; flex-direction: column; align-items: flex-start; gap: 4px; border-top: 1px solid rgba(255, 255, 255, 0.12); padding-top: 4px;`)**:
          1. **Fila 1 — Precio con Ancho 100% (`.service-card-price`)**: Dispone del 100% del ancho horizontal para acomodar con total holgura cifras de más de $99.000 (ej. `$120.000`, `$150.000`, `$250.000`), evitando cortes o saltos de línea forzados.
             - **Prohibición del sufijo `COP`**: Queda prohibido añadir el código ISO `COP` (ej. usar estrictamente `$85.000`, nunca `$85.000 COP`).
             - **Formato sutil para «Desde»**: En tarifas variables se utiliza la etiqueta `<small>Desde</small> $XX.XXX` (`font-size: 0.72em; font-weight: 500; opacity: 0.85; align-items: baseline;`), comunicando la variación comercial sin competir con la cifra.
          2. **Fila 2 — Enlace Minimalista `AGENDAR ➔` (`.btn-card-book-minimal`)**: Ubicado en su propio renglón independiente con `width: 100%; display: inline-flex; align-items: center; gap: 5px;`, ofreciendo un área táctil ergonómica para el dedo en móviles y micro-desplazamiento en hover (`translateX(5px)`).
    - **Tarjetas de Profesionales en Formato Retrato Editorial (`.team-card`)**:
      - Grid en Escritorio: **4 columnas (`repeat(4, 1fr); gap: 20px;`)** con las especialistas del negocio.
      - Formato Retrato Editorial Vertical: Fotografías en plano medio/busto de alta gama (`aspect-ratio: 3/4.2; min-height: 410px; border-radius: 20px; overflow: hidden; position: relative;`). Sustituye a los avatares circulares tradicionales por una estética visual de revista de moda/belleza.
      - Degradado vertical suave que protege el rostro en la mitad superior y da contraste a los textos en la base.
      - Tercio inferior: Línea de acento, Nombre de la profesional en tipografía display blanca, Rol de altura uniforme con tono cálido, Calificación de 5 estrellas (`⭐⭐⭐⭐⭐ (5.0)`) y enlace minimalista **`AGENDAR ➔`** directo a WhatsApp.
    - **Disposición Móvil Calibrada (< 768px)**:
      - **Servicios (`.services-grid`)**: Se renderizan obligatoriamente en **2 columnas balanceadas** (`grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 16px; row-gap: 20px;`) con `min-height: 0; min-width: 0;` y `aspect-ratio: 3/4.4;`, reduciendo el scroll vertical en un 50% con lectura ágil.
      - **Profesionales / Equipo (`.team-grid`)**: Se renderiza obligatoriamente en **Carrusel Horizontal Deslizable (*Scroll Snap*)** de una sola fila (`display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; margin: 0 -16px; width: calc(100% + 32px); padding: 8px 16px 20px; scrollbar-width: none;`). Cada tarjeta (`.team-card`) tiene tamaño fijo `flex: 0 0 255px; aspect-ratio: 3/4.2; scroll-snap-align: start;`, permitiendo apreciar los retratos en alta fidelidad y dejando asomar entre 70px y 100px del siguiente profesional a la derecha (efecto «Peek»).

3. **Botón Flotante de WhatsApp Anti-Corte Móvil (`.whatsapp-float`)**:
   - **Despeje Inferior Obligatorio**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px));` y `right: max(20px, env(safe-area-inset-right, 20px));` para que nunca quede tapado por las barras de herramientas o gestos inferiores de Chrome/Safari en celulares.
   - **Cero `overflow: hidden`**: No utilizar `overflow: hidden` en el botón flotante para evitar que el ícono o las sombras se recorten.
   - **Protección de Ancho Viewport**: Aplicar siempre `html, body { overflow-x: hidden; width: 100%; max-width: 100%; }`.

4. **Smart Header / Navbar Inteligente & Botones Concisos «Agendar»**:
   - **Prohibición Estricta de Barra Informativa Superior (Top Bar)**: **Ningún archivo HTML debe incluir la mini-barra superior promocional o informativa** (`.promo-topbar` / announcement bar). El sitio web debe iniciar directamente con el Navbar / Smart Header para máxima limpieza visual.
   - **Logotipo Tipográfico Puro (Prohibición de Íconos junto al Nombre)**: En el encabezado y pie de página (`.brand-logo`), **queda terminantemente prohibido colocar íconos decorativos de FontAwesome o emojis junto al nombre del negocio** (ej. coronas, gemas, varitas mágicas, tijeras o destellos). El logotipo debe ser puramente tipográfico, limpio y elegante, compuesto únicamente por el nombre del negocio con estilos tipográficos de marca y su subtítulo de ubicación/categoría.
     - Contenedor `.header-sticky-wrapper` 100% transparente (`background: transparent; border-bottom: none;`) sin gradientes ni desenfoques de fondo, usando sombra sutil de texto (`text-shadow`) en la marca y enlaces, con regla de visibilidad inteligente:
       - **Permanencia en el Header / Hero**: Mientras el usuario se encuentra dentro del recorrido de scroll del Hero (ej. interactive canvas video scrubbing o cabecera inmersiva), la barra de navegación **permanece siempre visible y no se oculta**.
       - **Auto-Hide en el Resto de la Página**: Únicamente al descender hacia las secciones inferiores de la página web (pilares, servicios, sobre nosotros, mapa) se oculta suavemente al hacer scroll hacia abajo y reaparece instantáneamente al hacer scroll hacia arriba.
   - **Soporte Obligatorio de Safe-Area en Móviles**: `.header-sticky-wrapper` debe incluir siempre `padding-top: env(safe-area-inset-top, 0px);` para evitar que el notch, dynamic island o barra de estado del celular empujen o recorten el contenido del encabezado.
   - **Vista Móvil (<768px) Ultra Limpia y Sin Cortes en el Logotipo**:
     - **Prohibición del Botón «Agendar» en el Navbar Móvil**: En pantallas móviles (< 768px), el navbar **no debe llevar botón de agendar** (`.btn-header-cta { display: none !important; }`) ni menú hamburguesa. El encabezado móvil muestra **exclusivamente el Nombre y Subtítulo del Logotipo con el 100% del ancho disponible**, eliminando por completo colisiones horizontales, cortes de texto o desbordes.
     - `.header-nav`: `height: auto; min-height: 52px; padding: 12px 20px; padding-left: max(20px, env(safe-area-inset-left, 20px)); padding-right: max(20px, env(safe-area-inset-right, 20px));` con centrado vertical, garantizando un margen lateral holgado (20px) para que el logotipo respire con elegancia.
     - **Proporciones Móviles del Logotipo (`.brand-logo`)**:
       - Nombre principal (`.brand-name` o `.brand-title`): `font-size: 1.22rem - 1.25rem; line-height: 1.1; letter-spacing: 0.08em;`
       - Subtítulo de categoría/ubicación (`.brand-subtitle` o `.brand-tagline`): `font-size: 0.58rem; line-height: 1.2; letter-spacing: 0.16em; margin-top: 2px; white-space: nowrap;` (evita desbordes y garantiza un margen inferior holgado para que la parte de abajo nunca se corte).
     - **Botón del Footer**: En el módulo/tarjeta de reserva del footer, el texto debe ser estrictamente **«Agendar»**.
     - **Prohibición Estricta de Menús o Barras Inferiores Fijas (Bottom Nav / Action Dock)**: **Queda terminantemente prohibido implementar barras de navegación inferiores fijas** (`.mobile-bottom-nav`, `.mobile-action-dock`, *sticky bottom docks* o menús flotantes tipo pestaña con accesos como "Llamar", "Ubicación", "WhatsApp", "Agendar"). Estas barras saturan la pantalla del celular, roban área de lectura vertical, chocan con las barras del sistema operativo móvil y compiten con el botón flotante oficial de WhatsApp. La navegación móvil debe ser completamente limpia: Header superior minimalista arriba y únicamente el botón flotante circular de WhatsApp (`.whatsapp-float`) abajo a la derecha.

5. **Mapa Interactivo Georreferenciado**:
   - **Fórmula Obligatoria Oficial de Google Maps**:
     `https://maps.google.com/maps?q={NOMBRE_NEGOCIO},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`
   - Parámetros clave: `z=16` (zoom urbano que muestra calles y puntos de referencia), `iwloc=` (limpia popups molestos), `output=embed` (embebido universal y rápido sin API key).
   - **Prohibición Estricta de Strings Experimentales / pb Strings**: Queda prohibido usar strings opacos o binarios no indexados (`pb=!1m18...`) ya que causan errores o mapas en blanco.
   - `iframe` nominal con `z=16`, zoom urbano y diseño responsive simétrico.

6. **Triángulo de Contexto IA**:
   - Cada carpeta debe incluir `DATOS_NEGOCIO.json`, `FICHA_DISENO.md`, `AGENTS.md` e `index.html`.

7. **Copywriting Cercano, Natural y Directo & Jerarquía Minimalista del Hero**:
   - **Jerarquía Tipográfica Editorial Oficial del Hero**:
     - **Estructura Oficial en el Tercio Inferior (Máxima Sofisticación & Rostro Despejado)**:
       1. **Firma Caligráfica de Marca (`.hero-script-tag`)**: Fuente manuscrita (*Alex Brush*, *Great Vibes* o similar según referencia), en tamaño compacto (`clamp(2rem, 3.4vw, 2.75rem); line-height: 1.05; margin-bottom: 2px;`) y tono cálido camel, aportando la identidad de firma o sello de autor (ej. *«Nail Spa & Esthetic»*, *«Belleza que Perdura»*).
       2. **Eyebrow Técnico (`.hero-eyebrow`)**: En sans-serif limpia con espaciado amplio (`letter-spacing: 2px - 2.5px; font-size: 0.68rem - 0.70rem; margin-bottom: 10px;`), indicando con sobriedad la `CATEGORÍA · CIUDAD` (ej. `ESTUDIO DE UÑAS · APARTADÓ`, `BARBERÍA & CORTE · TURBO`, `SALÓN DE BELLEZA · APARTADÓ`).
       3. **Titular Editorial Display (`.hero-title`)**: Tipografía display (Playfair / Cormorant) en *Title Case* o *Sentence Case* fluido (`clamp(2.1rem, 3.6vw, 3.2rem); font-weight: 600; line-height: 1.12; margin-bottom: 18px;`), con la segunda frase en cursiva cálida (`em`). Prohibido titular en mayúsculas sostenidas agresivas con puntos en medio.
       4. **Acciones Asimétricas y Minimalistas**:
          - Un botón principal llamativo (`.btn-primary`, ej. `Agendar Cita`).
          - Un enlace minimalista limpio (`.btn-hero-minimal-link` con micro-desplazamiento de flecha `Ver Servicios ➔`), sustituyendo al segundo botón grueso tipo pastilla.
       5. **Insignia de Confianza Compacta**: Badge translúcido (`.hero-proof-badge`), sin saturar el tercio inferior.
     - **En Paso 2 de Scroll Scrubbing**:
       - Firma script complementaria (ej. *«Belleza que Perdura»*).
       - Eyebrow técnico refinado (ej. `TÉCNICA & CUIDADO PRÉMIUM`).
       - Titular corto y sugerente (ej. `Detalles que marcan la diferencia.`).
       - Párrafo descriptivo sintético (máximo 1-2 líneas directas a los servicios estrella, sin tecnicismos pesados).
       - Botón `Agendar Cita` + enlace limpio `Conocer Servicios ➔`.
   - **Prohibición de Lenguaje Abstracto o Pomposo**: Queda **prohibido** el uso de frases sobrecargadas o tecnicismos como *«de autor»*, *«experiencia sensorial»*, *«protocolos visagistas»*, *«alta costura capilar»*, etc.
   - **Tono Claro, Cálido y Enfocado en el Negocio Local**: El copy debe ser directo, natural y persuasivo, explicando con sencillez lo que la clienta va a recibir:
     - *Hero de Rizos*: «Cuida y define la belleza natural de tus rizos en Apartadó. Cortes especializados, hidratación profunda y peinados con atención personalizada.»
     - *Hero de Spa / Salón*: «Tu salón de belleza y spa de confianza en Turbo. Especialistas en color, alisados, limpiezas faciales y masajes relajantes.»
     - *Hero de Estética / Makeup*: «Maquillaje profesional, cuidado facial y diseño de cejas y pestañas para resaltar tu mejor versión en Turbo.»

---

## 🎒 Estándar Mandatorio: Nicho Educación Infantil, Guarderías & Preescolares

Para cualquier proyecto de **jardines infantiles, guarderías (daycare), preescolares o colegios campestres**, se aplican obligatoriamente las siguientes reglas:

1. **Hero Header Inmersivo con Fotografías Dedicadas (Desktop & Mobile)**:
   - **Imágenes Dedicadas**: Usar fotografía 16:9 para Desktop (`hero_desktop.webp`) y 9:16 para Móvil (`hero_mobile.webp`) a 2K WebP (<100 KB).
   - **Calibración Móvil (< 768px)**: Debe tener **`min-height: 720px !important;`** a `840px !important;` con alineación inferior `display: flex; align-items: flex-end; justify-content: center;`.
   - **Gradiente Vertical 48% Transparente**: El 48% superior de `.hero-bg-overlay` es **100% transparente** (`rgba(..., 0)`), garantizando que las caritas, sonrisas y actividades lúdicas de los niños luzcan nítidas sin veladuras oscuras.
   - **Disposición Inferior**: Titular (`1.80rem`), descripción reducida (`0.82rem`, max 320px) y botones apilados (`max-width: 250px`) ubican el contenido **estrictamente en el tercio inferior**.

2. **Smart Header Transparente con Transición al Scroll**:
   - Inicia transparente sobre la fotografía principal (`background: transparent; backdrop-filter: blur(4px);`) y cambia suavemente a un fondo cristal translúcido al scrollear (`.header-scrolled`).
   - Logotipo tipográfico puro sin íconos decorativos.
   - **Vista Móvil (< 768px)**: Cero botón CTA en el navbar (`.btn-header-cta { display: none !important; }`) y cero menú hamburguesa roto, concediendo el 100% del ancho al Logotipo para evitar cortes horizontalmente.

3. **Catálogo Pedagógico de Programas (`#servicios`)**:
   - Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas balanceadas en móvil (`repeat(2, minmax(0, 1fr))`)**.
   - Tarjetas Full-Bleed 3:4 con badges de color por rango de edad (*1 a 2 Años*, *2 a 3 Años*, etc.).
   - **Prohibición de Tarifas / Precios Mensuales**: No mostrar precios mensuales en las tarjetas a menos que el cliente lo pida explícitamente. Cada tarjeta lleva exclusivamente el botón minimalista `SOLICITAR CUPO ➔` enlazado al WhatsApp oficial con mensaje contextual precargado según el nivel pedagógico.

4. **Flexibilidad en la Sección de Educadoras / Equipo**:
   - Si el cliente solicita eliminar la sección de Educadoras por privacidad o preferencia, **se remueve la sección `#equipo` / `#docentes`** y se fortalece la sección **`#nosotros`** (`.experience-layout`) mediante un layout editorial a 2 columnas con imagen del ambiente/aula lúdica, badge VIP flotante, 4 métricas de autoridad (años de trayectoria, niños atendidos, modelo pedagógico, 5.0 ★ en Google Maps) y botón de contacto.

5. **Prohibición Estricta: Franja de Pilares Dentro del Hero**:
   - **Queda terminantemente prohibido colocar las tarjetas de pilares dentro del contenedor del Hero**.
   - La **Barra de Pilares (`#pilares`)** es una **sección independiente** posterior al Hero.
   - **En Móvil (< 768px)**: Carrusel horizontal táctil deslizable (*Scroll Snap*) en 1 sola fila continua y compacta.

6. **SEO Local & Schema.org JSON-LD**:
   - Marcado estructurado `@type: "ChildCare"` o `"Preschool"` con dirección comercial, horarios y geolocalización de Google Maps (`z=16`).

