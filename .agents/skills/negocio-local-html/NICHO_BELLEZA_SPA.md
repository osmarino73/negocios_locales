# 💇‍♀️ Estándar de Nicho: Salones de Belleza, Barberías, Spas & Nails

Este documento define las reglas de estructura y las secciones esenciales para sitios web de **Salones de Belleza, Salones de Manicura/Nails, Barberías, Centros de Estética y Spas**, garantizando una experiencia visual inmersiva de alta gama, compatibilidad con reservas y optimización para SEO Local.

---

## 📌 1. Arquitectura de Secciones Oficial

Para mantener los sitios limpios, ultra-rápidos y de alta conversión, cada página se compone exclusivamente de las siguientes secciones:

1. **`#inicio` (Hero Full-Width Bleed)**: Portada inmersiva con fotografía en alta fidelidad a la derecha (`.hero-bg-cover`), titular de impacto editorial, frase script de autor, descripción y botón principal de agendamiento.
2. **Barra de Pilares / Garantías**: Franja de 4 a 5 sellos de confianza (*Estilistas Expertos, Productos Prémium, Experiencia de Lujo, Satisfacción Total, Higiene & Seguridad*).
3. **`#servicios` (Catálogo de Servicios)**: Grid de tarjetas con fotos 1:1, badges de valor, precios claros y botón directo a WhatsApp (obligatorio en **2 columnas** en móvil).
4. **`#nosotros` / `#equipo` / `#galeria` (Propuesta de Valor)**: Especialistas, galería de transformaciones o paquetes de precios.
5. **`#ubicacion` (Mapa & Contacto)**: Panel con dirección física, horarios, teléfono y Google Maps embebido (`z=16`).
6. **Footer Principal**: Enlaces, redes sociales, horarios y módulo de reserva con botón conciso **«Agendar»**.

---

## 🌟 2. Hero Header Full-Width Inmersivo Obligatorio (`#inicio`)

En el nicho de belleza, estética y spas, el Hero **siempre debe implementarse a ancho completo (Edge-to-Edge Full-Width)**:

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
  - `.hero-bg-img`: `width: 65%; height: 100%; object-fit: cover; object-position: center top; opacity: 0.96;`
  - **Prohibición de `mask-image` en el Contenedor**: Queda terminantemente prohibido aplicar `-webkit-mask-image` sobre `.hero-bg-cover` para evitar bandas sucias y cortes grisáceos por doble máscara.
  - **Degradado Orgánico Aterciopelado (Curva Eased de 8 Paradas)**:
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
    Garantiza **100% de contraste a la izquierda (0% a 35%)** y una fusión suave como seda hacia la derecha, dejando la fotografía nítida y brillante a partir del 90%.
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

## 💎 3. Tarjetas de Servicios: Catálogo Doble Columna (2 Columnas) en Móvil & Fotos 1:1

- **Cuadrícula Doble Columna Mobile-First (≤768px y ≤480px)**:
  - En dispositivos móviles, `.services-grid` y `.services-grid-6` se organizan en **2 columnas balanceadas (`grid-template-columns: repeat(2, 1fr); gap: 12px;`)**, reduciendo el scroll a la mitad y logrando una presentación estética tipo catálogo de belleza prémium.
- **Fotografías Cuadradas (1:1)**:
  - `.service-card-img` o `.service-img`: `aspect-ratio: 1 / 1; width: 100%; object-fit: cover; border-radius: var(--radius-sm);`.
- **Normalización y Centrado Automático**:
  - Títulos de servicio estilizados y compactos (`font-size: 0.95rem - 1.05rem`), categorías en `0.75rem - 0.8rem`.
- **Limpieza de Íconos / Medallas Desalineadas**:
  - Se eliminan elementos flotantes, medallas circulares o arcos desalineados entre la foto y el cuerpo de la tarjeta para un look moderno y limpio.
- **Precios Numéricos Permitidos y Visibles**: Los precios monetarios pueden mostrarse de manera transparente y clara en las tarjetas cuando el negocio lo requiera (ej. `$25.000`, `Desde $45.000`, etc.), o complementarse con etiquetas de valor, técnica y tiempo.
- **Enfoque en Valor, Técnica y Duración**: Las tarjetas pueden destacar los beneficios del procedimiento acompañadas de etiquetas de valor o tiempo (ej. `<span>Duración: 45 min</span>`, `<span>Técnica de Autor</span>`, `<span>Cuidado Especializado</span>`, `<span>Atención Personalizada</span>`, `<span>Secado UV/LED</span>`, `<span>Diagnóstico Incluido</span>`).
- **Botón de Agendamiento Obligatorio en Cada Tarjeta**: Toda tarjeta de servicio DEBE incorporar SIEMPRE un botón compacto `.btn-card-book` con enlace a WhatsApp que precargue el nombre del servicio solicitado (ej. `wa.me/57...?text=Hola,%20deseo%20agendar%20o%20cotizar%20el%20servicio%20de%20[Nombre_Servicio]`) para maximizar la conversión individualizada.

---

## 👥 4. Sección de Equipo / Especialistas (`#nosotros` / `#equipo`)

Al generar la sección de equipo o propuesta de valor:
- **ID de Sección**: `id="nosotros"` en `<section>` para sincronizar con el menú de navegación.
- **ID de Grid**: `id="equipo"` (o clase `.team-grid` / `.stylists-grid` / `.why-us-grid`).
- **Cuadrícula Doble Columna en Móvil**: `grid-template-columns: repeat(2, 1fr); gap: 12px;` en pantallas ≤768px y ≤480px.
- **Fotos Cuadradas (1:1)**: `.team-avatar-img` o imagen del especialista con `aspect-ratio: 1 / 1; width: 100%; object-fit: cover;`.
- **Clases en Tarjetas de Especialistas**: `.team-card`, `.team-avatar`, `.team-badge`, `.team-name`, `.team-role`, `.team-rating` y `.btn-team-book`.
- **Limpieza Estética**: Eliminación de medallas flotantes y arcos intermedios que rompan la simetría de las tarjetas en 2 columnas.

---

## 🗺️ 5. Ubicación & Google Maps Georreferenciado (`#ubicacion`)

- **URL de Iframe Obligatoria**:
  `https://maps.google.com/maps?q={NOMBRE_NEGOCIO},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`
- **Diseño**: Tarjeta a 2 columnas con panel informativo y mapa adaptativo responsive sin desbordes.

---

## 📱 6. Estándar Mandatorio Mobile-First & Sticky Bottom Action Dock (< 768px)

En todos los proyectos de salones, spas y belleza:
1. **Dock Flotante Inferior de Alta Conversión (`.mobile-action-dock`)**:
   - Barra fija en la parte inferior del viewport en móviles (`position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999;`).
   - Contiene 4 acciones táctiles estratégicas:
     - 📞 **Llamar**: Enlace `tel:` directo.
     - 🗺️ **Ubicación**: Enlace a la app de mapas o anclaje a `#ubicacion`.
     - 💬 **WhatsApp**: Conversación inmediata con mensaje de bienvenida.
     - 📅 **Agendar Cita**: Botón con color de acento para reservar.
   - En pantallas de escritorio (`> 768px`), `.mobile-action-dock` se oculta (`display: none;`).
2. **Espaciado y Compatibilidad iOS/Android**:
   - `body { padding-bottom: 74px; }` en pantallas móviles para que el contenido no quede oculto detrás del dock.
   - `padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px))` dentro del dock para evitar interferencia con el indicador de inicio de iPhone.
3. **Áreas Táctiles Mínimas**:
   - Mínimo de 48px de altura en botones y `touch-action: manipulation`.
