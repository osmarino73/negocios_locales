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
3. **`#servicios` (Catálogo de Servicios — Grid 6 Columnas)**:
   - Grid de **6 columnas en escritorio (`repeat(6, 1fr)`)** para mostrar los 6 servicios populares en una sola fila horizontal compacta con fotos 1:1, badges de valor, precios claros y botón de agendamiento directo a WhatsApp (obligatorio en **2 columnas** en móvil).
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales — Estándar Crismar)**:
   - **Bloque Editorial Sobre Nosotros (`.experience-layout`)**: Grid a 2 columnas con fotografía del salón/ambiente (`.salon-image-showcase`) con badge flotante VIP (`.experience-floating-badge`), titular editorial de impacto, descripción cálida y fila de 4 métricas de autoridad (`.metrics-row`: años exp, clientes atendidos, técnica/filosofía, calificación 5★; en 2 columnas en móvil) y botón de contacto.
     - **Regla Mandatoria de Imagen de Ambiente Coherente con el Nicho**: Queda terminantemente prohibido reutilizar imágenes genéricas de sillas de peluquería para todos los rubros. Cada categoría debe utilizar una fotografía de ambiente representativa:
       - *Uñas / Manicura / Pedicura*: Fotografía de salón de uñas con mesas de manicura, esmaltes y lámparas UV (`photo-1527799820374-dcf8d9d4a388` o `photo-1519014816548-bf5fe059798b`).
       - *Spa / Masajes / Faciales*: Cabina de relajación zen, camillas con toallas y ambientación aromática (`photo-1600334129128-685c5582fd35` o `photo-1596178065887-1198b6148b2b`).
       - *Peluquería / Rizos / Color*: Tocadores y estaciones de peinado (`photo-1560066984-138dadb4c035`).
       - *Barbería*: Estaciones de corte clásicas con cuero y madera (`photo-1585747860715-2ba37e788b70`).
   - **Bloque Nuestros Profesionales (`.team-grid` — Grid 4 Columnas)**: Grid de **4 columnas en escritorio (`repeat(4, 1fr)`)** con especialistas del negocio (hasta **4 a 6 profesionales**, fotos circulares 50% con marco de marca, badges de nivel/autoridad, nombre, rol de altura uniforme, calificación 5★ y botón individual de agendamiento directo a WhatsApp; obligatorio en **2 columnas** en móvil).
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

1. **Hero Header Inmersivo Full-Width Bleed**:
   - Capa posterior `.hero-bg-cover` con imagen a la derecha (`width: 65%`).
   - **Vista de Escritorio (> 768px)**:
     - `.hero-fullwidth-section`: `min-height: 640px; display: flex; align-items: center;`
     - **Prohibición de `mask-image` sobre el contenedor de imagen**: Queda terminantemente prohibido aplicar `-webkit-mask-image` sobre `.hero-bg-cover` porque genera cortes grisáceos y bandas sucias (*Mach bands*) cuando las fotografías tienen fondos claros contra fondos oscuros.
     - **Curva de Degradado Orgánica y Aterciopelada (Curva Eased de 8 Paradas en `.hero-bg-overlay`)**: La transición debe realizarse puramente mediante `.hero-bg-overlay` con un degradado progresivo multi-parada:
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
       Garantiza 100% de contraste y legibilidad para el texto a la izquierda (0% a 35%) y una fusión como seda hacia la derecha, dejando la fotografía nítida y brillante a partir del 90%.
     - `padding-top: 75px - 85px` en el contenedor para evitar que el navbar tape los titulares.
   - **Móvil Calibrado Obligatorio (< 768px)**:
     - **Regla Mandatoria**: En móvil debe tener **estrictamente `min-height: 720px !important;`**. Jamás por debajo de 720px.
     - `.hero-bg-img`: `width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.95;` dejando despejado el tercio superior para la modelo con nitidez total.
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
       El 38% superior es 100% transparente (0% veladuras sobre la modelo).
     - **Disposición y Escala del Texto en Móvil (Estrictamente en la Mitad Inferior)**:
       - `.hero-text-block`: Centrado simétrico total (`text-align: center; margin: 0 auto; max-width: 360px; width: 100%; text-shadow: 0 2px 8px rgba(0,0,0,0.9);`).
       - Eyebrow: `0.72rem; letter-spacing: 0.18em; margin-bottom: 6px;`
       - Titular (`.hero-title`): `1.85rem - 1.95rem; line-height: 1.12; margin-bottom: 10px;`
       - Script (`.hero-script`): `1.25em - 1.28em; margin-top: 2px;`
       - Descripción (`.hero-desc`): `0.85rem - 0.86rem; line-height: 1.5; margin-bottom: 18px - 20px;` (terminantemente prohibido dejarla >1rem en móvil para no empujar el texto sobre la modelo).
       - Botones apilados al centro: `.hero-actions { display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; margin: 0 auto; }` con botones de `max-width: 275px; padding: 12px 20px; font-size: 0.84rem; justify-content: center;`.

2. **Arquitectura Estándar Crismar para Servicios & Profesionales**:
   - **Tarjetas de Servicios (`.service-card`)**:
     - Estructura limpia y centrada con foto en alta fidelidad (`height: 200px` / `aspect-ratio: 1/1`).
     - Título del servicio destacado.
     - **Píldoras de Detalles Exclusivas (`.service-badge-pill`)**: Estrictamente **2 píldoras esenciales**:
       1. **Duración** (`⏱️ XX Mins`)
       2. **Precio** (`💰 $XX.000 COP`)
       - **Prohibición de Píldoras Intermedias / Descriptivas**: Queda prohibido añadir una tercera píldora con textos largos de técnica o beneficios (ej. *"Caída Natural"*, *"Vapor & Mantecas"*) para evitar desbordamientos y mantener las tarjetas limpias y simétricas.
     - Botón **«Agendar Cita»** ancho completo al 100% abajo de la tarjeta (`.btn-card-book`).
   - **Tarjetas de Profesionales (`.team-card`)**:
     - Avatar circular 50% con marco de color de marca (`.team-avatar`, `border-radius: 50%`).
     - Badge flotante en la esquina (`Master`, `Pro`, `Senior`) visible en escritorio.
     - **En Móvil (< 768px)**: Se **oculta obligatoriamente el badge flotante** (`.team-badge { display: none !important; }`) para que el rostro del profesional se aprecie 100% nítido, limpio y sin obstrucciones.
     - Nombre y Rol con altura uniforme fija (`min-height: 38px`) para alineación perfecta.
     - Calificación de 5 estrellas (`⭐⭐⭐⭐⭐ (5.0)`).
     - Botón individual **«Agendar Cita»** directo a WhatsApp.
   - **Cuadrícula Doble Columna (2 Columnas) en Móvil (< 768px)**:
     - Tanto Servicios como Profesionales se renderizan obligatoriamente en **2 columnas balanceadas** (`grid-template-columns: repeat(2, 1fr); gap: 12px;`) en pantallas móviles, reduciendo el scroll en un 50%.

3. **Botón Flotante de WhatsApp Anti-Corte Móvil (`.whatsapp-float`)**:
   - **Despeje Inferior Obligatorio**: `bottom: calc(28px + env(safe-area-inset-bottom, 0px));` y `right: max(20px, env(safe-area-inset-right, 20px));` para que nunca quede tapado por las barras de herramientas o gestos inferiores de Chrome/Safari en celulares.
   - **Cero `overflow: hidden`**: No utilizar `overflow: hidden` en el botón flotante para evitar que el ícono o las sombras se recorten.
   - **Protección de Ancho Viewport**: Aplicar siempre `html, body { overflow-x: hidden; width: 100%; max-width: 100%; }`.

4. **Smart Header / Navbar Inteligente & Botones Concisos «Agendar»**:
   - **Prohibición Estricta de Barra Informativa Superior (Top Bar)**: **Ningún archivo HTML debe incluir la mini-barra superior promocional o informativa** (`.promo-topbar` / announcement bar). El sitio web debe iniciar directamente con el Navbar / Smart Header para máxima limpieza visual.
   - **Logotipo Tipográfico Puro (Prohibición de Íconos junto al Nombre)**: En el encabezado y pie de página (`.brand-logo`), **queda terminantemente prohibido colocar íconos decorativos de FontAwesome o emojis junto al nombre del negocio** (ej. coronas, gemas, varitas mágicas, tijeras o destellos). El logotipo debe ser puramente tipográfico, limpio y elegante, compuesto únicamente por el nombre del negocio con estilos tipográficos de marca y su subtítulo de ubicación/categoría.
   - Contenedor `.header-sticky-wrapper` que se oculta suavemente al hacer scroll hacia abajo y reaparece instantáneamente al hacer scroll hacia arriba.
   - **Soporte Obligatorio de Safe-Area en Móviles**: `.header-sticky-wrapper` debe incluir siempre `padding-top: env(safe-area-inset-top, 0px);` para evitar que el notch, dynamic island o barra de estado del celular empujen o recorten el contenido del encabezado.
   - **Vista Móvil (<768px) Ultra Limpia y Sin Cortes en el Logotipo**:
     - Se **elimina por completo el botón de menú hamburguesa** (`display: none;`). El header móvil muestra exclusivamente el **Nombre / Logotipo del Negocio a la izquierda** y el botón **«Agendar» a la derecha** (`.btn-header-cta`).
     - `.header-nav`: `height: auto; min-height: 64px; padding: 10px 0;` con centrado vertical, evitando alturas fijas rígidas que causen que el subtítulo del negocio roce o se corte contra el borde inferior.
     - **Proporciones Móviles del Logotipo (`.brand-logo`)**:
       - Nombre principal (`.brand-name`): `font-size: 1.22rem - 1.25rem; line-height: 1.1; letter-spacing: 0.08em;`
       - Subtítulo de categoría/ubicación (`.brand-subtitle`): `font-size: 0.58rem; line-height: 1.2; letter-spacing: 0.16em; margin-top: 2px; white-space: nowrap;` (evita desbordes y garantiza un margen inferior holgado para que la parte de abajo nunca se corte).
     - **Botón del Header**: Texto conciso **«Agendar»** con clase `.btn-header-cta` (`padding: 8px 16px; font-size: 0.78rem; white-space: nowrap; flex-shrink: 0;`).
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

7. **Copywriting Cercano, Natural y Directo (Cero Tecnicismos Pretenciosos)**:
   - **Prohibición de Lenguaje Abstracto o Pomposo**: Queda **prohibido** el uso de frases sobrecargadas o tecnicismos como *«de autor»*, *«experiencia sensorial»*, *«protocolos visagistas»*, *«alta costura capilar»*, etc.
   - **Tono Claro, Cálido y Enfocado en el Negocio Local**: El copy debe ser directo, natural y persuasivo, explicando con sencillez lo que la clienta va a recibir:
     - *Hero de Rizos*: «Cuida y define la belleza natural de tus rizos en Apartadó. Cortes especializados, hidratación profunda y peinados con atención personalizada.»
     - *Hero de Spa / Salón*: «Tu salón de belleza y spa de confianza en Turbo. Especialistas en color, alisados, limpiezas faciales y masajes relajantes.»
     - *Hero de Estética / Makeup*: «Maquillaje profesional, cuidado facial y diseño de cejas y pestañas para resaltar tu mejor versión en Turbo.»
