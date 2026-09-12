# Ficha de Diseño: Crismar Barbershop (Inspiración "LEGEND BARBER SHOP")

Manual de diseño visual y sistema de componentes extraído de la referencia de alta gama **"LEGEND Barber Shop"**, aplicando el estándar de **Canvas Video Scroll Scrubbing Hero (300vh Track)** a partir de `Barber1.mp4`, tipografía industrial/vintage (**Cinzel** + **Oswald** + **Plus Jakarta Sans**) y adaptado para **Crismar Barbershop** en **Apartadó, Antioquia**.

---

## 🎨 Paleta de Colores Curada (Legend Gold & Dark Club)

| Rol del Color | HEX | HSL | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Legend Warm Amber Gold (Color Primario)** | `#e5a854` | `hsl(35, 75%, 62%)` | Botones principales, acento en titular ("UN ESTILO DE VIDA"), badges activos y ribetes |
| **Deep Obsidian Black (Fondo Principal)** | `#0c0c0e` | `hsl(240, 8%, 5%)` | Fondo inmersivo del Hero, navbar past-hero, footer y canvas base |
| **Charcoal Surface (Superficies de Tarjetas)** | `#16161a` | `hsl(240, 8%, 10%)` | Tarjetas de servicios, equipo de barberos y panel de ubicación |
| **Pure White / Cream White (Tipografía)** | `#f4f4f6` | `hsl(240, 6%, 96%)` | Titulares H1, H2, nombres y etiquetas |
| **Muted Ash Gray (Textos Secundarios)** | `#9e9ea7` | `hsl(240, 5%, 64%)` | Descripciones, duraciones, horarios y teléfonos |
| **Borde Vintage Fino** | `rgba(229, 168, 84, 0.25)` | — | Delimitadores de tarjetas, pills y líneas divisorias |

---

## 🔤 Tipografía Curada

* **1. Logotipo de Marca**: `'Cinzel', Georgia, serif` (Google Fonts, Pesos `700`, `800`). Serif romana de alta distinción con espaciado elegante (`letter-spacing: 0.06em`). Subtítulo en `'Plus Jakarta Sans'` (`0.62rem; letter-spacing: 0.18em;`).
* **2. Titulares Display del Hero & Secciones**: `'Oswald', sans-serif` (Google Fonts, Pesos `700`, `800`). Sans-serif condensada, mayúsculas imponentes con interletrado ajustado:
  * *"MÁS QUE UN CORTE. / UN **ESTILO DE VIDA.**"*
  * *"ARTE CLÁSICO & / **FADES DE PRECISIÓN.**"*
* **3. Tipografía de Lectura & UI (Body, Menús, Botones, Párrafos)**: `'Plus Jakarta Sans', sans-serif` (Google Fonts, Pesos `400`, `500`, `600`, `700`, `800`).
* **4. Eyebrows & Badges**: Mayúsculas espaciadas en Oro Ámbar dentro de pastillas con borde sutil (`background: rgba(229, 168, 84, 0.15); border: 1px solid rgba(229, 168, 84, 0.25); color: #e5a854;`).

---

## 🧩 Arquitectura Visual & Componentes Exclusivos (Canvas Scrubbing Standard)

1. **Smart Header / Navbar Inteligente**:
   * Logotipo tipográfico puro sin iconos externos.
   * Navegación con enlaces limpios en mayúsculas a las 4 secciones oficiales.
   * Botón dorado conciso `.btn-header-cta` con texto **«Agendar»**.
   * Regla de scroll: permanece visible durante el recorrido interactivo del Hero (300vh) y se auto-oculta únicamente al descender en secciones inferiores.
   * En móvil (< 768px): Logotipo a la izquierda y botón «Agendar» a la derecha. Cero menú hamburguesa innecesario.
2. **Hero Track Canvas Video Scroll Scrubbing (300vh)**:
   * 74 fotogramas WebP ultra ligeros renderizados vía `<canvas>` con aceleración por hardware (`requestAnimationFrame` y DPR scaling).
   * **Desktop (16:9)**: Modelo centrado en la segunda mitad ($x \approx 1380$), mitad izquierda despejada con degradado horizontal `90deg` (`#0c0c0e` en el primer 22%, desvaneciéndose hacia el 64%).
   * **Móvil (9:16)**: `min-height: 720px !important`, extracción calibrada con `crop=ih*9/16:ih:1070:0,scale=720:1280` para centrar simétricamente al cliente/modelo. Gradiente vertical con 44% superior transparente para nitidez del rostro y peinado, textos situados en la mitad inferior.
   * Narrativa en 2 pasos editoriales sincronizados con el recorrido del scroll:
     - **Paso 1 (0% - 48%)**: Bienvenida, titular "MÁS QUE UN CORTE. UN ESTILO DE VIDA", botones de agendamiento y social proof con calificación 4.9★.
     - **Paso 2 (48% - 100%)**: Revelación 360°, técnica "ARTE CLÁSICO & FADES DE PRECISIÓN" y botón de reserva directa.
3. **Franja Oscura de 4 Sellos de Garantía**:
   * ✂️ *Barberos Expertos (Profesionales certificados)*
   * 🧴 *Productos Premium (Cosmética capilar masculina)*
   * 🪑 *Higiene & Confort (Máxima bioseguridad y esterilización)*
   * 🏆 *100% Satisfacción (Resultados que superan expectativas)*
4. **Catálogo de Servicios Populares (#servicios)**:
   * 6 tarjetas oscuras en `#16161a` con fotos de cortes/afeitados, badges de duración/técnica y botón compacto dorado `.btn-card-book` con texto «Agendar».
   * **Móvil (< 768px)**: Cuadrícula doble columna (`repeat(2, 1fr)`), fotografías cuadradas (1:1) y tipografía optimizada.
5. **Nosotros / Experiencia & Especialistas (#nosotros)**:
   * Composición visual con foto de la barbería vintage, métricas en 2 columnas en móvil (8+ Años, 20K+ Cortes, 4 Barberos Máster, 4.9 Rating) y grid de barberos máster con enlace de WhatsApp individual.
6. **Ubicación & Google Maps Georreferenciado (#ubicacion)**:
   * Tarjeta a dos columnas en Apartadó con iframe interactivo exacto (`z=16`).
7. **Footer Premium Dark Club (`#0c0c0e`)**:
   * Logotipo tipográfico, enlaces de navegación, contacto y módulo de agendamiento con botón conciso **«Agendar»**.
8. **Botón Flotante WhatsApp Anti-Corte Móvil (`.whatsapp-float`)**:
   * Botón circular verde `#25d366` posicionado con `bottom: calc(28px + env(safe-area-inset-bottom, 0px));` y `right: max(24px, env(safe-area-inset-right, 24px));`. Libre de recortes en cualquier dispositivo.
