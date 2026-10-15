# 🦷 Estándar de Nicho: Clínicas Odontológicas, Salud Dental & Estética Oral

Este documento define las reglas de estructura, estética médica de lujo (*Medical Luxury*), secciones esenciales, tipografía forense y copywriting para sitios web de **Clínicas Odontológicas, Odontología Estética, Ortodoncia, Implantología y Centros de Salud Dental**, garantizando una imagen profesional de alta confianza, compatibilidad con reservas y optimización total para SEO Local.

---

## 📌 1. Arquitectura de Secciones Oficial Mandatoria

Para mantener los sitios limpios, ultra-rápidos y de alta conversión, cada página se compone exclusivamente de las siguientes 6 secciones oficiales:

1. **`#inicio` (Hero Full-Width Bleed al 100% de Ancho)**:
   - Portada médica inmersiva donde la fotografía del consultorio/clínica (`.hero-bg-cover`) ocupa **estrictamente el 100% del ancho del Hero (`width: 100%; left: 0;`)**.
   - Titular de impacto editorial estructurado en **3 líneas balanceadas** (ej. *Sonrisas*<br>*Que Perduran*<br>*Toda una Vida* o *Una Sonrisa Más Brillante,*<br>*Tu Mejor Versión*).
   - **Regla del Degradado Suave Translúcido (`.hero-bg-overlay`)**: Queda terminantemente prohibido colocar bloques negros sólidos (`#121614 100%`) que oscurezcan más del 25% de la imagen. Se aplica una veladura translúcida suave (`linear-gradient(90deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.60) 25%, rgba(15, 23, 42, 0.25) 45%, transparent 65%)`) que preserva la luz y calidez del consultorio mientras asegura legibilidad impecable mediante `text-shadow`.
   - Botón principal de agendamiento directo y barra de prueba social (avatares + `10.000+ Pacientes` + `5.0★ 50+ Reseñas`).
2. **Barra de Pilares / Garantías**: Franja de 5 sellos de confianza con iconos pastel circulares (*Odontología General, Implantes 3D, Ortodoncia Invisible, Estética Dental, Endodoncia 3D*). En móvil (< 768px): Carrusel horizontal deslizable (*Scroll Snap*).
3. **`#servicios` (Tratamientos Exclusivos — Grid 3 Columnas)**: Grid de **3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil** con tarjetas **Full-Bleed Minimalistas (3:4)** (fotografía de estética oral/ortodoncia/salud, degradado inferior aterciopelado, precio claro y enlace minimalista `AGENDAR ➔`).
4. **`#nosotros` (Sobre Nosotros & Cuerpo Médico — Estándar Editorial)**:
   - **Bloque Editorial Sobre Nosotros (`.experience-layout` / `.about-layout`)**: Grid a 2 columnas con fotografía del consultorio/clínica odontológica (`.about-image-showcase`) con badge flotante 5.0★ (`.about-floating-badge`), titular editorial, descripción cálida y 4 métricas de autoridad (años exp, sonrisas diseñadas, tecnología 3D digital, calificación 5.0★; en 2 columnas en móvil) y botón de contacto.
   - **Bloque Odontólogos Especialistas (`.team-grid`)**: Grid de **4 columnas en escritorio (`repeat(4, 1fr)`)** con formato **Retrato Editorial Full-Bleed (3:4.2)** de los doctores en bata médica/pijama clínica, degradado inferior, línea de acento, nombre en display blanca, rol en tono cálido/cian, 5 estrellas y enlace minimalista `AGENDAR ➔` directo a WhatsApp. En móvil (< 768px): Carrusel Horizontal Deslizable (*Scroll Snap*) con efecto «Peek».
5. **`#ubicacion` (Sede & Contacto)**: Panel informativo con dirección física, horarios, teléfono y Google Maps interactivo embebido con fórmula georreferenciada (`z=16`).
6. **Footer Principal**: Enlaces de navegación, datos de atención, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.

---

## 🎨 2. Arquetipos de Diseño & Clonación Forense

> [!IMPORTANT]
> **REGLA MANDATORIA DE CLONACIÓN FORENSE**:
> La paleta de colores (fondos, acentos, degradados), la tipografía exacta (display serif, scripts de autor, sans-serif UI) y el estilo gráfico general (botones, tarjetas, bordes y sombras) **SE EXTRAERÁN SIEMPRE Y STRICTAMENTE DE LA IMAGEN DE REFERENCIA BASE** adjuntada por el usuario en su solicitud, adaptándose a la estructura de las 6 secciones oficiales del repositorio.

### Arquetipo A: Medical Dark Luxury (Estilo PureSmile)
- **Acento Primario (`--color-accent`)**: Bronce / Camello `#bda485` u Oro `#d4af37`.
- **Fondos (`--bg-dark`)**: Obsidian `#121614` y Ébano.
- **Tipografía Display**: `Playfair Display` / `Cormorant Garamond` (Serif de alta gama).
- **Signature Script**: `Alex Brush` (Caligrafía de autor).

### Arquetipo B: Medical Bright Luxury (Estilo BrightSmile)
- **Acento Primario (`--color-primary`)**: Azul Electrizante `#1e65ff` / `#2563eb`.
- **Acento Secundario (`--color-secondary`)**: Cian Glaciar `#00b4d8` / `#06b6d4`.
- **Fondos (`--bg-light`)**: Blanco glaciar `#f8fafc` y Azul cielo suave `#f0f7ff`.
- **Tipografía Display**: `Plus Jakarta Sans` / `Outfit` (Bold Geometric Sans).

---

## ✒️ 3. Tríada Tipográfica Forense

1. **Titulares Display**: `Playfair Display` (Serif) o `Plus Jakarta Sans` (Bold Geometric Sans).
   - Uso: Encabezados `#inicio`, `#servicios`, `#nosotros`, `#ubicacion`.
   - Estructura en Hero: Titular desplegado en **3 líneas simétricas** para máximo impacto editorial.

2. **Caligrafía & Signature Script**: `Alex Brush` (Google Fonts).
   - Uso: Eyebrows de autor (`.hero-script-tag`, `.section-script-eyebrow`), ej. *"Sonrisa Radiante & Saludable"*.

3. **Cuerpo & UI Geométrico**: `Plus Jakarta Sans` (Google Fonts).
   - Uso: Botones, menú, párrafos, tarjetas de tratamientos y especialistas, datos de contacto.

---

## 🦷 4. Reglas Específicas del Nicho Odontológico

1. **Fotografía de Ambiente Coherente**:
   - `.hero-bg-cover` y `.salon-image-showcase` deben utilizar imágenes reales de consultorios dentales, unidades odontológicas modernas o escáneres 3D (ej. `assets/hero.webp`, `photo-1629909613654-28e377c37b09` o `photo-1606811841689-23dfddce3e95`).
   - **Queda strictly prohibido usar imágenes de salones de belleza, peinados o peluquerías**.
2. **Hero Full-Width 100% de Ancho**:
   - La imagen del Hero debe abarcar el 100% del ancho del contenedor sin recortes horizontales. El degradado horizontal debe permitir apreciar la calidez del consultorio sin oscurecerlo.
3. **Copywriting Orientado a la Confianza & Sin Dolor**:
   - Enfocar el mensaje en confort, tecnología 3D sin moldes molestos, estética natural y atención personalizada libre de dolor.
4. **Cuerpo Médico Verificado**:
   - Los especialistas deben mostrar la especialidad médica exacta (ej. *Diseño de Sonrisa & Estética*, *Implantología & Cirugía Maxilofacial*, *Ortodoncia & Alineadores Invisibles*, *Rehabilitación Oral & Endodoncia*).
5. **Smart Header / Navbar Inteligente con Menú Hamburguesa Móvil**:
   - Logotipo puramente tipográfico o con isotipo circular refinado. Prohibido insertar emojis o íconos decorativos infantiles en el logo.
   - En móvil (< 768px): Botón CTA de cabecera oculto (`.btn-header-cta { display: none !important; }`), incorporando el botón circular de menú hamburguesa (`.mobile-menu-toggle`) a la derecha con menú desplegable cristalino (`.nav-links.nav-active`).
6. **Portabilidad Standalone Obligatoria**:
   - Todo proyecto de odontología debe generar su versión `*_standalone.html` con las imágenes principales (Hero y Logotipo) convertidas a **Base64 (`data:image/webp;base64,...`)** para funcionar de forma 100% autónoma.
7. **Botón Flotante de WhatsApp**:
   - Posición fija con `calc(28px + env(safe-area-inset-bottom, 0px))`. Cero docks ni menús inferiores fijos (*no bottom action docks*).
8. **Hero Móvil Calibrado (< 768px)**:
   - `min-height: 840px !important; align-items: flex-end; justify-content: center; padding: 140px 16px 40px;`
   - La mitad superior de la imagen (`.hero-bg-cover`) se mantiene 100% despejada y libre de sombras oscuras (0% veladuras).
   - El degradado vertical (`180deg`) y los bloques de texto se anclan en la base inferior con centrado simétrico (`text-align: center; max-width: 360px;`), garantizando contraste perfecto y lectura limpia sin tapar la mirada del paciente o consultorio.
9. **Espaciado Obligatorio entre Columnas de Tarjetas en Móvil (`.services-grid`)**:
   - En pantallas móviles (< 768px), el catálogo de servicios (`.services-grid`) se renderiza obligatoriamente en **2 columnas balanceadas** (`grid-template-columns: repeat(2, minmax(0, 1fr));`) con un espaciado explícito entre columnas de `column-gap: 16px;` y de filas `row-gap: 24px;`, garantizando una separación holgada y limpia entre todas las tarjetas.
10. **Menú Móvil Interactivo Desplegable (`.mobile-menu-toggle`)**:
   - En móviles (< 768px), el botón `.mobile-menu-toggle` permite abrir/cerrar un menú de navegación flotante (`.nav-links.nav-active`) con fondo traslúcido, desenfoque de cristal y animación fluida. El icono alterna entre `fa-bars` y `fa-xmark`, y se cierra de forma automática al hacer clic en cualquier enlace.
