# 🎨 Ficha de Diseño Visual — Santa Barbara Preschool Chía-Cajicá

Documento oficial de referencia del sistema de diseño para **Santa Barbara Preschool Chía-Cajicá**, preescolar bilingüe enfocado en educación activa, valores y estimulación temprana.

---

## 🎨 Paleta de Colores de Marca

Inspirada en el aprendizaje lúdico infantil de alta gama, con contrastes alegres y fondos limpios:

| Token Semántico | Código HEX | Rol y Aplicación |
| :--- | :--- | :--- |
| `--brand-blue` | `#00A3E8` | Color corporativo primario, botones de acción, acentos y cabecera de utilidades. |
| `--brand-green` | `#7CB342` | Acento de naturaleza, nutrición, WhatsApp y pilar de ambiente seguro. |
| `--brand-purple` | `#7B1FA2` | Creatividad, inmersión bilingüe y talleres artísticos. |
| `--brand-red` | `#EA4335` | Calidez, desarrollo emocional y nivel Jardín. |
| `--brand-yellow` | `#F8A825` | Acento cálido principal, botones de postulación, estrellas y medallas. |
| `--text-dark` | `#1E2A38` | Texto principal de alta legibilidad, fondos del footer y contrastes. |
| `--bg-soft` | `#F9FBFD` | Fondo general suave para secciones alternas y descansos visuales. |
| `--white` | `#FFFFFF` | Tarjetas, contenedores de contenido y contrastes limpios. |

---

## 🔤 Tipografía Oficial

- **Titulares y Display**: `Nunito`, sans-serif (pesos: `700`, `800`, `900`).
  - Redondeada, amigable, cálida y con personalidad preescolar de excelencia.
- **Cuerpo de Texto**: `Inter`, sans-serif (pesos: `400`, `500`, `600`).
  - Moderna, geométrica y con óptima legibilidad en dispositivos móviles.

---

## 📐 Componentes UI Clave

1. **Smart Header Inteligente (Auto-Hide al Scroll & Efecto Translúcido Glassmorphism)**:
   - Barra de navegación fija con `position: sticky; top: 0; z-index: 50;`.
   - **Acabado Translúcido Prémium**: Fondo semi-transparente `rgba(255, 255, 255, 0.82) !important` con desenfoque de fondo ultra suave (`backdrop-filter: blur(14px) saturate(180%)`), borde inferior translúcido `rgba(226, 232, 240, 0.6)` y sombra sutil `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.06)` que permite apreciar los colores del fondo de forma armónica y moderna.
   - **Comportamiento Auto-Hide Dinámico**: Se desliza hacia arriba suavemente (`translateY(-100%)`, 0.35s) al hacer scroll hacia abajo para dar el 100% de visibilidad al contenido, y reaparece instantáneamente en cuanto el usuario hace el más mínimo scroll hacia arriba.
2. **Hero Header Inmersivo (Calibrado para Móvil)**:
   - Slider automático con *crossfade* entre las fotos 2K oficiales.
   - **En Móvil (< 768px)**: Altura `min-height: 740px !important`, con alineación `align-items: flex-end`. El texto, botones e indicadores se posicionan **estrictamente de la mitad hacia abajo**, dejando el 40% superior 100% transparente para que los rostros de los niños se aprecien nítidos y sin veladuras oscuras.
   - Titular de gran impacto: *"Los Niños Son Los Mejores Exploradores Del Mundo"*.
   - Botón CTA de postulación redondeado (`rounded-full`) con sombra difusa.
3. **Franja de Pilares Educativos (Sección Independiente)**:
   - Ubicada inmediatamente después del Hero (fuera del contenedor del Hero para no saturar la pantalla móvil).
   - En escritorio: Grid de 4 columnas (`repeat(4, 1fr)`).
   - En móvil (< 768px): Carrusel deslizable horizontalmente (*Scroll Snap* táctil en 1 fila continua), evitando el scroll vertical y permitiendo deslizar los sellos con el dedo.
4. **Tarjetas de Ventajas Institucionales (Sección Bienvenidos)**:
   - Cuadrícula 2x2 con escalonamiento dinámico (`lg:mt-8` en columnas alternas).
   - Iconos vectoriales SVG duotono en contenedores redondeados `rounded-2xl` con micro-rotación y zoom en hover.
   - Píldoras de micro-autoridad superior (*«🌱 100% Campestre»*, *«🥗 Nutrición Avalada»*, *«🎨 Talleres Diarios»*, *«🚌 Puerta a Puerta»*).
   - Bordes superiores con código de color de marca (`border-t-4`) y resplandor tonal en hover (`hover:shadow-color-*`).
5. **Catálogo de Niveles y Programas**:
   - Tarjetas por edad (Caminadores, Párvulos, Pre-Jardín, Jardín) con bordes superiores identificativos y botón de consulta de cupo.
4. **Equipo Docente Especializado**:
   - Tarjetas con fotografía, nombre, nivel a cargo y especialidad pedagógica.
5. **Mapa y Geolocalización**:
   - Módulo responsive con Google Maps interactivo georreferenciado (`z=16`) en el sector Chía-Cajicá.
6. **Conversión WhatsApp**:
   - Botón flotante circular permanente con safe-area inferior anti-corte en móviles.

---

## 📸 Recursos Fotográficos Oficiales

- **Hero Slider (Carrusel de Fondo con Alternancia Suave)**:
  - **Efecto de transición**: Crossfade de 1.2 segundos con micro-zoom sutil Ken Burns (`scale(1.05)`) y rotación automática cada 5.5 segundos.
  - **Foto 1 (Taller de Música & Ritmo — Optimizado para Móvil)**:
    - Archivo: `hero.webp` (original: `Toddlers_playing_instruments_in_…_2K_202609061748.webp`, 212 KB, 2K).
    - Descripción: Cuatro niños pequeños sonrientes en el suelo tocando tambores y xilófono frente a su maestra con luz natural dorada. Composición segura centrada con suelo despejado abajo para óptima legibilidad en móviles.
  - **Foto 2 (Juego & Estimulación en Guardería)**:
    - Archivo: `hero-2.webp` (original: `Five_children_playing_in_daycare_2K_202609061736.webp`, 633 KB, 2K).
    - Descripción: Cinco niños jugando en la guardería con bloques gigantes de madera, caballete de pintura artística, disfraces infantiles y mesa de tren con docente al fondo.
