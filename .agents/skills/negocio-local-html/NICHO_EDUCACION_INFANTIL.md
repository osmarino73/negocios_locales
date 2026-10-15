# 🎒 Estándar de Nicho: Educación Infantil, Jardines Infantiles, Guarderías & Preescolares

Este documento define las reglas oficiales de arquitectura, diseño, responsividad móvil y conversión para sitios web y landing pages de **Educación Inicial, Jardines Infantiles, Guarderías (Daycare), Preescolares y Colegios Campestres**, garantizando una experiencia visual alegre, confiable, 100% optimizada para dispositivos móviles y orientada a la solicitud de cupos y matrículas por parte de los padres de familia.

---

## 🎯 1. Hero Header Full-Width Bleed Inmersivo con Imagen Dedicada (Desktop & Mobile)

En las webs de educación inicial y preescolares, la fotografía principal muestra niños felices jugando, explorando o aprendiendo. Para lograr un impacto visual inmediato y garantizar velocidad de carga instantánea:

### 📸 Imágenes Dedicadas de Fondo (`assets/` o local):
- **Escritorio (16:9)**: Fotografía horizontal en alta resolución (`assets/hero_desktop.webp` a `1920x1080` <100 KB WebP).
- **Móvil (9:16)**: Fotografía vertical encuadrada simétricamente (`assets/hero_mobile.webp` a `720x1280` <80 KB WebP).

### 📐 Calibración y Posicionamiento Móvil (< 768px):
1. **Regla Mandatoria de Altura en Celulares**:
   - `.hero-fullwidth-section`: `display: flex !important; align-items: flex-end !important; justify-content: center !important; min-height: 840px !important; padding: 140px 16px 40px !important;` (rango `840px - 860px`).
   - El contenedor empuja todo el contenido de texto hacia el tercio inferior de la pantalla, dejando la mitad superior completamente libre.

2. **Gradiente Vertical Translúcido (0% al 48% Superior 100% Transparente)**:
   - Queda **terminantemente prohibido** aplicar veladuras o filtros oscuros uniformes sobre toda la imagen en móvil.
   - La transición debe realizarse mediante `.hero-bg-overlay` con gradiente vertical calibrado:
     ```css
     background: linear-gradient(
         180deg, 
         rgba(15, 23, 42, 0) 0%, 
         rgba(15, 23, 42, 0) 48%, 
         rgba(15, 23, 42, 0.65) 64%, 
         rgba(15, 23, 42, 0.92) 82%, 
         #0F172A 98%
     ) !important;
     ```
   - **Del 0% al 48%**: 100% transparente (cero sombras sobre los rostros, sonrisas y ojos de los niños).
   - **Del 64% al 98%**: Sombra aterciopelada que garantiza 100% de contraste y legibilidad para los textos y botones.

3. **Escala Tipográfica Display Compacta en Celulares**:
   - **Insignia / Eyebrow**: `0.70rem - 0.72rem; letter-spacing: 0.16em; font-weight: 700; margin-bottom: 6px;`.
   - **Firma Script (`.hero-script-tag`)**: Tipografía manuscrita cálida (ej. *Alex Brush*, *Great Vibes*, *Caveat*) `1.25em - 1.35em; color: var(--color-yellow);`.
   - **Titular (`.hero-title`)**: `1.80rem - 1.95rem; line-height: 1.12; margin-bottom: 10px; text-shadow: 0 2px 10px rgba(0,0,0,0.85);`.
   - **Descripción (`.hero-desc`)**: `0.82rem - 0.85rem; line-height: 1.45; max-width: 320px; margin: 0 auto 16px; color: rgba(255,255,255,0.92);` (prohibido dejarla >1rem en móvil).
   - **Botones Apilados al Centro (`.hero-actions`)**:
     - Disposición en columna: `display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%;`.
     - Botones con `max-width: 250px; padding: 10px 18px; font-size: 0.82rem; border-radius: 50px; justify-content: center; text-align: center;`.

---

## 🎨 2. Smart Header Transparente & Navbar Inteligente

1. **Efecto Transparente sobre el Hero**:
   - La barra de navegación inicia transparente sobre la fotografía principal (`.header-sticky-wrapper { background: transparent; backdrop-filter: blur(4px); transition: all 0.35s ease; }`).
   - Al descender con el scroll (>50px), añade la clase `.header-scrolled` adoptando un fondo translúcido blanco o crema con efecto cristal (`background-color: rgba(255, 253, 248, 0.94); backdrop-filter: blur(14px); shadow: 0 4px 20px rgba(0,0,0,0.06);`).

2. **Logotipo Tipográfico Puro**:
   - Queda prohibido colocar emojis o íconos decorativos junto al nombre del jardín. Debe ser puramente tipográfico (`.brand-title` en serif/display redondeada + `.brand-subtitle` indicando `Jardín Infantil · Ciudad`).

3. **Optimización Móvil (< 768px)**:
   - **Sin Botón CTA en el Navbar Móvil**: `.btn-header-cta { display: none !important; }` para evitar colisiones horizontales o saltos de línea en pantallas pequeñas.
   - **Sin Menú Hamburguesa Roto**: Se utiliza navegación limpia y fluida directo a las secciones oficiales (`#inicio`, `#pilares`, `#servicios`, `#nosotros`, `#ubicacion`).

---

## 📚 3. Catálogo Pedagógico / Programas Educativos (`#servicios`)

1. **Grid Responsive**:
   - **Escritorio (> 768px)**: Grid de 3 columnas (`repeat(3, 1fr)`).
   - **Móvil (≤ 768px)**: Grid de 2 columnas balanceadas (`grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px;`).

2. **Diseño de Tarjetas Full-Bleed Minimalistas**:
   - Fotografía con niños en actividades del programa en relación 3:4 (`aspect-ratio: 3/4`).
   - Badges de color por rango de edad en la esquina superior (*1 a 2 Años*, *2 a 3 Años*, *3 a 4 Años*, *4 a 5 Años*, *5 a 6 Años*).
   - Titular del programa (*Caminadores & Sala Cuna*, *Párvulos & Descubrimiento*, *Prejardín Exploradores*, *Jardín / Kindergarten*, *Transición / Pre-K*).

3. **Regla de Eliminación de Precios / Tarifas Mensuales**:
   - En el nicho de educación infantil, **no se deben publicar precios fijos o mensualidades en las tarjetas de programas** por defecto, promoviendo la consulta directa de matrícula.
   - El pie de la tarjeta contiene exclusivamente el enlace minimalista `SOLICITAR CUPO ➔` (`.btn-card-book-minimal`), el cual abre el WhatsApp oficial con un mensaje precargado específico del nivel (ej. `"Hola, deseo solicitar información y cupo para el nivel de Caminadores y Sala Cuna."`).

---

## 🏢 4. Flexibilidad en la Sección de Educadoras / Equipo

- **Opción Estándar (Con Equipo)**: Grid de 4 columnas en escritorio con fotos en formato Retrato Editorial (3:4.2), nombres, especialidad pedagógica y calificación 5★. En móvil: Carrusel horizontal deslizable (*Scroll Snap*).
- **Opción Adaptada (Sin Equipo)**: Si el jardín prefiere no publicar fotos del personal por privacidad o solicitud expresa, **se elimina la sección `#equipo` / `#docentes`** y se fortalece el bloque **`#nosotros`** (`.experience-layout`) mediante:
  1. Grid a 2 columnas con imagen del ambiente del jardín o aula lúdica (`.salon-image-showcase`).
  2. Badge VIP flotante (ej. *"Espacios Bioseguros & Ambientes Lúdicos"*).
  3. Fila de 4 métricas de autoridad (`.metrics-row`: *+15 Años de Cuidado*, *+500 Niños Formados*, *Modelo Reggio / Montessori*, *5.0 ★ en Google Maps*).

---

## 🛡️ 5. Franja de Pilares & Sellos de Confianza (`#pilares`)

- Franja de 4 a 5 sellos independientes ubicados fuera del Hero:
  1. **Docentes Certificadas**: Licenciadas en educación infantil con vocación de buen trato.
  2. **Estimulación Temprana**: Desarrollo cognitivo, motor y emocional acorde a la edad.
  3. **Ambientes Bioseguros**: Instalaciones adaptadas con máxima seguridad e higiene.
  4. **Nutrición Balanceada**: Minuta alimentaria supervisada por profesionales.
  5. **Bilingüismo & Arte**: Formación en inglés práctico, música y expresión artística.
- **En Móvil (< 768px)**: Carrusel horizontal táctil deslizable (*Scroll Snap*) en 1 sola fila fluida para no saturar el scroll vertical.

---

## 🗺️ 6. Ubicación Estratégica, Google Maps & SEO Local (Schema.org ChildCare)

- Marcado estructurado Schema.org JSON-LD en el `<head>`:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": "Jardín infantil Milagros del cielo Apartadó",
    "image": "https://.../hero_desktop.webp",
    "telephone": "(+57) 312 283 8118",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Diagonal 100# 109-31B",
      "addressLocality": "Apartadó",
      "addressRegion": "Antioquia",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 7.8813772,
      "longitude": -76.6539942
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo Pedagógico",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Caminadores & Sala Cuna" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Párvulos & Descubrimiento" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Prejardín Exploradores" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jardín / Kindergarten" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transición / Pre-K" } }
      ]
    }
  }
  ```
- **Mapa Interactivo Embebido**: Formula georreferenciada con `z=16`:
  `https://maps.google.com/maps?q={NOMBRE_JARDIN},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`

---

## 📋 7. Lista de Comprobación Final (Checklist Rápido)

- [x] **Hero Móvil**: ¿Mantiene `min-height: 840px !important;` y los textos se ubican en el tercio inferior sin tapar las caritas de los niños?
- [x] **Navbar**: ¿Es transparente sobre el Hero y adopta estilo blanco/blur al scrollear?
- [x] **Navbar Móvil**: ¿Se eliminó el botón de agendar en el header móvil para evitar cortes de texto en el logotipo?
- [x] **Catálogo Pedagógico**: ¿Las tarjetas de programas están en 3 columnas (desktop) / 2 columnas (móvil) y NO muestran valores de mensualidad?
- [x] **Botón Solicitar Cupo**: ¿Cada programa incluye su enlace `SOLICITAR CUPO ➔` directo al WhatsApp oficial con el nivel precargado?
- [x] **Sección Equipo**: ¿Es flexible para eliminarse si el cliente lo prefiere, reforzando la sección Sobre Nosotros con métricas de autoridad?
- [x] **Schema.org**: ¿Incluye el esquema `@type: "ChildCare"` o `"Preschool"` con dirección local y datos de geolocalización?

