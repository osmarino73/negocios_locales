---
name: negocio-local-html
description: Experto en convertir imágenes o capturas de referencia web en sitios web HTML5/CSS3 responsivos, modernos, 100% autónomos (standalone), optimizados para SEO Local (Schema.org JSON-LD, OpenGraph, Google Maps) y acompañados del Triángulo de Contexto IA (AGENTS.md, FICHA_DISENO.md y DATOS_NEGOCIO.json) para garantizar la continuidad del proyecto por cualquier IA.
---

# Experto en Páginas Web HTML Autónomas, SEO Local y Proyectos Turnkey para IA

Este skill guía la transformación de **imágenes de referencia visual** en páginas web HTML/CSS de producción para **negocios locales**, garantizando:
1. Un **archivo HTML 100% autónomo y autocontenido (Standalone)**.
2. **Optimización total para SEO Local en Google** (Schema.org JSON-LD + OpenGraph).
3. El **Triángulo de Contexto para IA (`AGENTS.md`, `FICHA_DISENO.md`, `DATOS_NEGOCIO.json`)** para que cualquier Inteligencia Artificial (Claude, ChatGPT, Gemini, Antigravity, Cursor, etc.) pueda tomar la carpeta y continuar el proyecto inmediatamente.

---

## 🏆 Reglas Obligatorias de Producción

### 1. Entregable Autónomo & Optimizado
- **CSS Embebido**: Todo el diseño debe ir en `<style>` dentro del `<head>`.
- **Fotografías Hero de Alta Gama Optimizadas (`assets/heroes/`)**: Priorizar el banco local de imágenes curadas WebP (`assets/heroes/{barberias,maquillaje,nails,peinados,salon_belleza,spa}/`) para velocidad de carga instantánea (< 70 KB) y fondos oscuros con degradado perfecto. Para servicios y ambiente se puede usar [BANCO_IMAGENES.json](file:///c:/Users/Rio%20Belen/negocios_locales/BANCO_IMAGENES.json) o fotografías propias del cliente.
- **Logotipos e Íconos**: SVGs limpios o FontAwesome para micro-gráficos.
- **Cero archivos secundarios locales obligatorios**: El `.html` carga instantáneamente y funciona de manera autónoma en cualquier navegador.

---

### 2. Estructura Oficial de Secciones & Clonación de Tríada Visual
Toda página web o landing page generada, independientemente de la imagen de referencia utilizada, debe estructurarse obligatoriamente bajo las siguientes **secciones oficiales**:
1. **`#inicio` (Hero Full-Width Bleed)**: Portada inmersiva con fotografía en alta fidelidad a la derecha (`.hero-bg-cover`), titular de impacto editorial, copy cercano y cálido (cero tecnicismos como "de autor"), descripción y botón principal de agendamiento. Altura desktop `640px` y móvil estrictamente `720px !important`.
2. **Barra de Pilares / Garantías**: Franja de 4 a 5 sellos de confianza con íconos de marca. En móvil (< 768px): **Carrusel horizontal deslizable (*Scroll Snap*) con auto-scroll inteligente (3s) y pausa táctil** en 1 sola fila compacta.
3. **`#servicios` (Catálogo de Servicios — Grid 6 Columnas)**: Grid de **6 columnas en escritorio (`repeat(6, 1fr)`)** para mostrar los 6 servicios en una sola fila continua con fotos 1:1, badges de valor, precios claros y botón ancho completo de agendamiento (obligatorio en **2 columnas** en móvil).
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales — Estándar Crismar)**:
   - **Bloque Editorial Sobre Nosotros (`.experience-layout`)**: Grid 2 columnas con fotografía del salón/ambiente (`.salon-image-showcase`) con badge flotante VIP (`.experience-floating-badge`), titular editorial, descripción cálida, 4 métricas de autoridad (`.metrics-row` en 2 columnas en móvil) y botón de contacto.
   - **Bloque Nuestros Profesionales (`.team-grid` — Grid 4 Columnas)**: Grid de **4 columnas en escritorio (`repeat(4, 1fr)`)** con especialistas del negocio (fotos circulares 50% con marco de marca, badges de nivel, rol uniforme, 5 estrellas y botón directo a WhatsApp; obligatorio en **2 columnas** en móvil).
5. **`#ubicacion` (Mapa & Contacto)**: Panel informativo con dirección física, horarios, teléfono y Google Maps interactivo embebido con fórmula georreferenciada (`z=16`).
6. **Footer Principal**: Enlaces de navegación, datos de contacto, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.

- **Reglas Complementarias Obligatorias**:
  - **Smart Header Limpio**: Sin barra promocional superior (`.promo-topbar`). En móvil: Solo Logotipo (izquierda) y botón conciso **«Agendar»** (derecha) sin menú hamburguesa.
  - **Logotipo Tipográfico Puro**: Prohibido insertar íconos de FontAwesome o emojis decorativos junto al nombre del negocio en el header o footer (`.brand-logo`). La identidad de marca debe ser 100% tipográfica, limpia y profesional.
  - **Imagen de Ambiente en Sobre Nosotros Coherente con el Nicho**: La fotografía de `.salon-image-showcase` debe reflejar fielmente el tipo de negocio (para uñas: mesas de manicura y esmaltes; para spa: cabina de masajes/zen; para peluquería: tocadores y lavado; para barbería: sillones de cuero). Prohibido poner sillas de peluquería en salones de manicura o spas.
  - **Botón Flotante WhatsApp**: Posición fija con `env(safe-area-inset-bottom)`, tooltip oculto en móvil y `z-index: 99999`.
  - **Copywriting Cercano**: Prohibición de términos abstractos o pomposos (*«de autor»*, *«visagismo»*); uso de un tono cercano, natural y persuasivo.

---

### 3. Hero Header Inmersivo a Ancho Completo (Full-Width Bleed)
- **Impacto Visual Edge-to-Edge**: Cuando el diseño de referencia presente una modelo, producto o composición de fondo continua, se debe implementar el Hero a pantalla completa (`width: 100%`, `min-height: 640px`) eliminando marcos o cajas pequeñas aisladas.
- **Técnica de Fusión Aterciopelada en Escritorio (`.hero-bg-overlay`) — Curva Eased de 8 Paradas**:
  - Se sitúa la imagen en alta resolución en la capa posterior `.hero-bg-cover` posicionada a la derecha (`width: 65%`, `object-fit: cover; object-position: center top; opacity: 0.96;`).
  - **Prohibición Estricta de `mask-image` en el Contenedor**: Queda terminantemente prohibido aplicar `-webkit-mask-image` sobre `.hero-bg-cover` porque genera cortes grisáceos y bandas sucias (*Mach bands*) cuando las fotografías tienen fondos claros contra fondos oscuros.
  - **Degradado Orgánico Aterciopelado (Curva Eased Multi-Parada)**: La transición debe realizarse puramente mediante `.hero-bg-overlay` con un degradado progresivo:
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
  - Garantiza **100% de legibilidad y contraste para el texto** a la izquierda (0% a 35%), mientras la mitad derecha (50% a 100%) luce la modelo y la fotografía **100% nítida, brillante y sin veladuras oscuras ni franjas intermedias**.
- **Responsividad Móvil Calibrada (< 768px)**:
  - **Regla Mandatoria de Altura**: En móvil debe tener **estrictamente `min-height: 720px !important;`**. Jamás por debajo de 720px.
  - **Fotografía Nítida en Alta Fidelidad**: `.hero-bg-img` con `width: 100%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.95;` garantizando nitidez total, sin filtros pesados que laven la imagen.
  - **Texto Centralizado Estrictamente en la Mitad Inferior (Sin tapar a la modelo)**:
    - `.hero-fullwidth-section`: `display: flex; align-items: flex-end; justify-content: center; min-height: 720px !important; padding: 140px 16px 28px;` (bloque de contenido posicionado estrictamente desde el 50% de la altura hacia abajo).
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
      El 38% superior es 100% transparente, dejando la fotografía limpia y sin veladuras oscuras sobre la modelo.
    - `.hero-text-block`: Centrado simétrico total (`text-align: center; margin: 0 auto; max-width: 360px; width: 100%; text-shadow: 0 2px 8px rgba(0,0,0,0.9);`).
    - **Escala Tipográfica Display Compacta en Móvil**:
      - Eyebrow: `0.72rem; letter-spacing: 0.18em; margin-bottom: 6px;`
      - Titular (`.hero-title`): `1.85rem - 1.95rem; line-height: 1.12; margin-bottom: 10px;`
      - Script (`.hero-script`): `1.25em - 1.28em; margin-top: 2px;`
      - Descripción (`.hero-desc`): `0.85rem - 0.86rem; line-height: 1.5; margin-bottom: 18px - 20px;` (nunca >1rem en móvil).
  - **Botones Optimizados Ergonómicos en Móvil**:
    - `.hero-actions`: Disposición vertical centrada (`display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%; margin: 0 auto;`).
    - Botones (`.btn-primary`, `.btn-secondary`): `width: 100%; max-width: 275px; padding: 12px 20px; font-size: 0.84rem; font-weight: 700; border-radius: 50px; text-align: center; justify-content: center; touch-action: manipulation;`.
    - Botón primario con color de acento y sombra ambiental suave; botón secundario con acabado *glassmorphism* translúcido de borde suave (`backdrop-filter: blur(8px); border: 1px solid rgba(..., 0.35);`).
  - **Smart Header / Navbar Inteligente**: Barra superior envuelta en `.header-sticky-wrapper` con auto-hide al scrollear hacia abajo y reaparición instantánea al subir. Botón de cabecera reducido a **«Agendar»** con clase `.btn-header-cta` (`padding: 8px 15px; font-size: 0.78rem; white-space: nowrap;`).

---

### 3. Prohibición Estricta de Iconografía Genérica (Icon Badges de Alta Gama)
- **Cero Iconos Sueltos o Genéricos**: Queda estrictamente prohibido usar íconos planos, aislados o estilos genéricos de plantilla básica.
- **Tratamiento Bespoke por Componente**: Cada ícono debe diseñarse como una pieza gráfica exclusiva:
  - Contenedor geométrico o circular estilizado (`border-radius: 16px` a `50%`).
  - Fondos tonales sutiles (pasteles, glassmorphism con `backdrop-filter`, o gradientes metálicos acordes al rubro).
  - Sombras de luz perimetral (*ambient glow*) o bordes con relieve.
  - Micro-interacción interactiva al hacer hover (giro suave `rotate(6deg)`, elevación `translateY(-3px)` o escala `scale(1.08)`).
- **Semántica Exacta del Nicho**: Elegir glifos de FontAwesome 6 o SVGs personalizados que comuniquen con precisión el servicio (ej. instrumental clínico, tijeras de autor, bloques lúdicos, platos gourmet, pesas de studio).

---

### 4. Tarjetas de Servicios y Equipo: Cuadrícula Doble Columna (2 Columnas) en Móvil & Fotos 1:1
- **Cuadrícula Doble Columna Mobile-First (≤768px y ≤480px)**:
  - Las secciones de **Servicios** (`.services-grid`, `.services-grid-6`) y **Colaboradores / Equipo** (`.team-grid`, `.stylists-grid`, `.staff-grid`) se renderizan obligatoriamente en **2 columnas balanceadas (`grid-template-columns: repeat(2, 1fr); gap: 12px;`)** en pantallas móviles.
  - Esto reduce la longitud de scroll vertical en un **50%**, ofreciendo una experiencia tipo catálogo editorial y e-commerce prémium.
- **Fotografías Cuadradas (1:1)**:
  - Las imágenes de las tarjetas adoptan una relación de aspecto cuadrada `aspect-ratio: 1 / 1; width: 100%; object-fit: cover;` para garantizar simetría visual total.
- **Normalización y Centrado Automático de Encabezados**:
  - Tipografía proporcional y compacta en móvil: títulos de tarjetas entre `0.9rem` y `1.05rem`, subtítulos/roles en `0.75rem - 0.82rem`.
  - Distribución ergonómica de badges de duración/técnica y precios.
- **Limpieza de Íconos / Medallas Desalineadas**:
  - Se eliminan automáticamente elementos flotantes, medallas circulares o arcos residuales situados entre la foto y el texto para garantizar un acabado limpio, moderno y sin desalineaciones.
- **Estructura de Badges Esenciales en Tarjetas de Servicios (Regla Estricta)**: 
  - Toda tarjeta de servicio debe incorporar **únicamente 2 píldoras compactas**:
    1. **Duración**: (ej. `<span class="service-badge-pill"><i class="fa-solid fa-clock"></i> 45 Mins</span>`)
    2. **Precio**: (ej. `<span class="service-badge-pill"><i class="fa-solid fa-tag"></i> $45.000 COP</span>`)
  - **Prohibición de Píldoras Descriptivas / Técnicas Secundarias**: Queda prohibido añadir una tercera píldora descriptiva extensa (ej. *"Técnica de Lavado Botánico"*, *"Fitagem & Duración"*) que sobrecargue la cuadrícula o desborde en móvil y escritorio.
- **Botón Flotante WhatsApp Anti-Corte Móvil**:
  - `bottom: calc(28px + env(safe-area-inset-bottom, 0px));`
  - `right: max(20px, env(safe-area-inset-right, 20px));`
  - Sin `overflow: hidden`, asegurando que el ícono quede 100% visible sin ser tapado por la barra de navegación de navegadores móviles.
- **Botón de Agendamiento Obligatorio en Cada Tarjeta**: Toda tarjeta de servicio y colaborador DEBE incorporar SIEMPRE un botón compacto de acción directo (`.btn-card-book`, `.btn-team-book`) anclado a WhatsApp con mensaje contextual precargado:
  ```html
  <a href="https://wa.me/57XXXXXXXXXX?text=Hola,%20deseo%20agendar%20el%20servicio%20de%20[Nombre%20del%20Servicio]" class="btn-card-book">
    Agendar <i class="fa-solid fa-arrow-right"></i>
  </a>
  ```
- **Conversión Multicanal Sincronizada**:
  - Botón de acción directa en CADA tarjeta de servicio (con mensaje precargado del servicio específico).
  - Botón principal del Header / Hero.
  - **Módulo de Reserva en el Footer**: El botón de reserva (`.btn-footer-reserve`) debe tener el texto conciso y elegante **«Agendar»** (no debe decir «Agendar por WhatsApp»).
- **Prohibición Estricta de Barras o Docks Inferiores Fijos**: Queda terminantemente prohibido implementar menús o docks inferiores fijos en móvil (`.mobile-bottom-nav`, `.mobile-action-dock`). La navegación móvil debe constar únicamente del Header minimalista superior y el botón flotante circular de WhatsApp (`.whatsapp-float`).
- Widget flotante interactivo de WhatsApp con despeje anti-corte en móvil.

---

### 5. Idioma 100% en Español y Localización Natural (Regla Estricta)
- **Traducción y Adaptación Total**: Queda **terminantemente prohibido** dejar palabras, etiquetas, subtítulos, botones o *eyebrows* en inglés procedentes de imágenes de referencia (ej. prohibido *"Beauty. Confidence. You."*, *"About Us"*, *"Services"*, *"Book Appointment"*, *"Explore"*, *"Subscribe"*, *"What We Offer"*).
- **Español Claro y Persuasivo**: Todo el contenido, menús, botones, insignias, llamados a la acción (CTAs) y precios deben estar redactados en **español natural**, adaptados a la cultura y modismos comerciales del negocio local (ej. *"Belleza • Confianza • Para Ti"*, *"Nuestra Carta"*, *"Sobre Nosotros"*, *"Agendar Cita"*, *"$45.000"*).
- **Atributo de Idioma HTML**: Todo documento HTML debe iniciar con `<html lang="es">`.

---

### 6. Triángulo de Contexto Obligatorio para IA ("Turnkey Project")

En la carpeta de cada negocio local se generarán automáticamente:
1. 🤖 **`AGENTS.md`**: Guía de bienvenida e instrucciones claras para que cualquier IA entienda el proyecto, las reglas del código y cómo generar subpáginas.
2. 🎨 **`FICHA_DISENO.md`**: Manual de marca con paleta de colores HEX/HSL, fuentes extraídas de la referencia, escala tipográfica y diseño de componentes UI.
3. 📊 **`DATOS_NEGOCIO.json`**: Fuente única de verdad estructurada en JSON con teléfonos, WhatsApp, enlace de Google Maps, horarios y catálogo de servicios.

---

### 7. Optimización Total para SEO Local, Mapa Interactivo Obligatorio & Copywriting Contextual

Cada página generada debe incluir automáticamente:
- **Schema.org JSON-LD**: Marcado de negocio local (`@type: "ChildCare"`, `"BeautySalon"`, `"Restaurant"`, `"LocalBusiness"`, etc.) con nombre, dirección, teléfono, coordenadas/mapa y horarios.
- **Metatags OpenGraph (OG)**: `og:title`, `og:description`, `og:type` y `og:url` para previsualización en WhatsApp y redes sociales.
- **Arquitectura Semántica HTML5**: `<h1>` único por página con palabra clave local, etiquetas semánticas y textos `alt="..."` en todas las imágenes.
- **🗺️ Mapa Interactivo de Google Maps (100% Obligatorio, Preciso y Responsive)**:
  - Todo negocio local físico debe tener su sección destacada con un `<iframe>` interactivo de Google Maps embebido con la ubicación comercial precisa.
  - **Fórmula Obligatoria de URL del Iframe (Cero Errores de Posicionamiento)**:
    - **NO usar coordenadas numéricas aisladas** (pueden caer en carreteras secundarias o afueras).
    - **Usar siempre la consulta georreferenciada nominal con zoom urbano calibrado**:
      `https://maps.google.com/maps?q={NOMBRE_NEGOCIO},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`
      *(Ejemplo: `https://maps.google.com/maps?q=Sandra+Color%27s,+Cra.+104+%23103-61,+Apartad%C3%B3,+Antioquia&t=&z=16&ie=UTF8&iwloc=&output=embed`)*
    - Parámetros clave: `z=16` (zoom urbano que muestra calles y puntos de referencia), `iwloc=` (limpia popups molestos), `output=embed` (embebido universal y rápido sin API key).
  - **Estándar CSS Responsive Obligatorio para el Mapa (Móviles & Desktop)**:
    - **Escritorio (`> 768px`)**: Grid a 2 columnas (`1fr 1.35fr`), panel de información holgado con `padding: 48px`, iframe ocupando el 100% de la columna derecha con altura sincronizada (`min-height: 400px`).
    - **Móviles & Tablets (`≤ 768px`)**:
      - `.map-showcase-card`: Transición automática a **1 columna (`grid-template-columns: 1fr`)** con bordes redondeados simétricos (`border-radius: var(--radius-md)`).
      - `.map-info-panel`: `padding: 30px 20px` para evitar desbordes.
      - `.map-actions`: `flex-direction: column` con botones al **100% de ancho (`width: 100%`)** y texto centrado.
      - `.map-frame-wrapper`: `min-height: 320px; height: 320px; width: 100%; border-top: 1px solid var(--border-soft);` para garantizar visibilidad total del mapa sin cortes ni scroll lateral.
    - **Cero desbordes horizontales**: Garantizar que el iframe nunca supere los límites del viewport (`overflow: hidden; max-width: 100%;`).
- **📅 Regla de Vigencia y Uso del Año (Contextual)**:
  - **Solo para Educación, Jardines y Guarderías**: Se incluye el año escolar activo (ej. *"Inscripciones Abiertas 2027"*).
  - **Para Negocios de Servicios Continuos (Belleza, Spas, Restaurantes, Barberías, Veterinarias, etc.)**: **NO forzar menciones a años en titulares ni banners**. El copywriting debe ser atemporal, enfocado en atención inmediata (*"Agenda tu Cita Hoy"*, *"Tendencias de Temporada"*, *"Servicios Exclusivos"*). El año solo figurará de forma discreta en el pie de página de derechos reservados.

---

### 8. Estándar Mandatorio de Arquitectura Mobile-First (< 768px)

Dado que >85% de los usuarios de negocios locales acceden desde dispositivos móviles:
- **Barra de Acciones Fija Inferior (`.mobile-action-dock`)**:
  - En móviles (< 768px), incorporar una barra fija inferior con accesos rápidos ergonómicos:
    - 📞 **Llamar** (`tel:`)
    - 🗺️ **Ubicación** (`maps.google.com` / `#ubicacion`)
    - 💬 **WhatsApp** (`wa.me` contextual)
    - 📅 **Agendar Cita**
  - Ocultar en pantallas grandes (`@media (min-width: 769px) { .mobile-action-dock { display: none; } }`).
- **Ergonomía Táctil y Safe Area**:
  - `body { padding-bottom: 74px; }` en pantallas móviles para prevenir superposición con el footer.
  - `padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px))` para compatibilidad con la barra de gestos de iOS.
  - Dimensiones de toque mínimas de 48px con `touch-action: manipulation`.

---

## Protocolo de Trabajo Obligatorio

1. **Análisis Visual & Tipográfico**: Identificar paleta de colores, estructura de secciones y la familia tipográfica precisa de la imagen de referencia.
2. **Extracción y Configuración de Fuentes**: Seleccionar en Google Fonts la tipografía idéntica a la referencia e insertarla en el `<head>` y en `FICHA_DISENO.md`.
3. **Selección Fotográfica**: Utilizar fotografías temáticas de alta gama desde `BANCO_IMAGENES.json` en formato CDN WebP optimizado.
4. **Adaptación de Datos Locales & Estándar de Nicho**: Vincular WhatsApp directo (`wa.me`), llamada directa (`tel:`), Google Maps real y verificar lineamientos específicos del sector (ej. [NICHO_BELLEZA_SPA.md](file:///c:/Users/Rio%20Belen/negocios_locales/.agents/skills/negocio-local-html/NICHO_BELLEZA_SPA.md) para salones y spas).
5. **Compilación Standalone + SEO**: Embeber estilos CSS en `<style>` + insertar metadatos Schema.org JSON-LD y OpenGraph.
6. **Creación del Triángulo de Contexto**: Guardar `DATOS_NEGOCIO.json`, `FICHA_DISENO.md` y `AGENTS.md` en la carpeta del negocio.
