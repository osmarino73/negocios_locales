# Ficha de Diseño: Clínica Odontológica - Dr Rafael Negrete

## 1. Tríada de Identidad Visual Forense
- **Estilo**: Medical Bright Luxury / High-Tech Dental Care.
- **Inspiración Base**: Referencia BrightSmile (Estética dental moderna con fondos blancos brillantes `#f8fafc`, azul electrizante `#1e65ff`, acentos cian/teal `#00b4d8`, sombras suaves de elevación `box-shadow: 0 12px 32px rgba(30, 101, 255, 0.12)` y tarjetas de pilladas 3D).
- **Tipografía**:
  - Display / Headlines: `Plus Jakarta Sans` (Font weight 700 / 800).
  - Body & UI: `Plus Jakarta Sans` (Font weight 400 / 500 / 600).
- **Paleta de Colores**:
  - Primary Accent (`--color-accent`): `#1e65ff` (Azul Médico Electrizante)
  - Secondary Accent (`--color-cyan`): `#00b4d8` (Cian Glaciar)
  - Dark Accent (`--color-navy`): `#0f172a` (Azul Marino Oscuro)
  - Soft Fills (`--bg-soft`): `#f0f7ff` (Azul Cielo Ultraligero)
  - Card Fills (`--bg-card`): `#ffffff` (Blanco Puro con Borde Fino `#e2e8f0`)
  - Text Primary (`--text-main`): `#0f172a`
  - Text Muted (`--text-muted`): `#64748b`

## 2. Componentes Específicos
- **Hero Section (`#inicio`)**:
  - Fondo glaciar claro con sutiles orbes de gradiente azul.
  - Columna Izquierda: Badge flotante `✦ Cuidado Dental Avanzado`, Titular de alto impacto `Una Sonrisa Más Brillante, Tu Mejor Versión`, descripción clara de confort sin dolor, botones principales de agendamiento y barra de confianza con avatares + 10,000+ pacientes y 5.0★.
  - Columna Derecha: Fotografía inmersiva de consultorio y paciente sonriendo en sillón odontológico con badges flotantes 3D de sellos VIP (`Tratamiento Sin Dolor`, `Equipos Modernos`, `Odontólogos Expertos`, `Atención 24/7`).
- **Barra de Garantías / Pilares**: 5 sellos con iconos pastel circulares (Odontología General, Implantes 3D, Ortodoncia Invisible, Estética Oral, Endodoncia Microscópica). Carrusel deslizable en móvil.
- **Sección `#servicios`**: Grid de 3 columnas en desktop y 2 columnas en móvil en formato Full-Bleed minimalista con fotograma de tratamiento, degradado inferior y botón `AGENDAR ➔`.
- **Sección `#nosotros`**: Perfil del Dr. Rafael Negrete con métricas de autoridad (15+ Años, 10.000+ Pacientes, 100% 3D Digital, 5.0★ Google) + Equipo de especialistas (Grid 4 columnas en desktop / Carrusel Scroll Snap en móvil).
- **Barra de Estadísticas**: Franja azul gradient (`linear-gradient(90deg, #1e65ff 0%, #00b4d8 100%)`) con 5 métricas.
- **Sección `#ubicacion`**: Mapa georreferenciado `z=16` de Apartadó + panel de contacto y horarios.
