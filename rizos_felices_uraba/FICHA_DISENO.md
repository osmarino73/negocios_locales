# Ficha de Diseño Visual Forense: Rizos Felices Urabá
*Clonación Forense de Identidad Visual Haute Beauty (Referencia TMR)*

## 🎨 Tríada de Identidad Visual Forense
* **Paleta de Colores Extraída**:
  * **Fondo Base Primario**: `#0a0807` (Negro Ébano Cálido Profundo)
  * **Fondo Superficies / Tarjetas**: `#14100d` con degradado radial sutil hacia `#1c1612`
  * **Fondo Tarjetas Claras (Modo Contraste)**: `#faf6f0` (Crema Marfil Suave)
  * **Acento Oro Champaña Satinado**: `#dfb78c` (Primario) / `#ba8a58` (Hover / Sombra)
  * **Bordes Finos de Lujo**: `rgba(223, 183, 140, 0.22)`
  * **Botón Primario Forense**: `linear-gradient(135deg, #dfb78c 0%, #ba8a58 100%)` con **texto oscuro contrastante `#1a130e`** y esquinas `8px` a `12px`
  * **Botón Secundario**: Fondo translúcido con borde fino `1px solid rgba(223, 183, 140, 0.4)` y texto `#fcfaf7`
  * **Texto Claro Principal**: `#fcfaf7`
  * **Texto Muted / Secundario**: `#a69b91`

* **Tipografía Forense**:
  * **Titulares Display**: `'DM Serif Display', Georgia, serif` con **palabras acentuadas en serifa itálica dorada** (`font-style: italic; color: #dfb78c;`)
  * **Caligrafía & Firma**: `'Alex Brush', cursive`
  * **Eyebrows con Línea de Marca**: Estilo con línea fina de autor (`letter-spacing: 0.18em; text-transform: uppercase; color: #dfb78c;`)
  * **Cuerpo & UI**: `'Plus Jakarta Sans', sans-serif`

* **Componentes Visuales Forenses**:
  * **Barra de Garantías**: Íconos circulares con doble borde sutil de marca y etiquetas inferiores limpias (*Scroll Snap* en móvil).
  * **Tarjetas de Métricas de Autoridad**: 4 tarjetas rectangulares oscuras con degradado radial, número en serifa dorada grande (`1.5K+`, `7+`, `100%`, `5.0★`) y etiquetas compactas.
  * **Módulo de Experiencia**: Imagen de salón con badge de vidrio translúcido (*glassmorphism*) con texto editorial y botón oro con texto oscuro.

## 📸 Fotografías & Assets
* **Hero Principal**: `../assets/heroes/peinados/Woman_smiling_with_styled_hair_202609021630.webp` (WebP ~62 KB, modelo con rizos luminosos sobre terciopelo negro y bokeh dorado)
* **Ambiente Sobre Nosotros**: `https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80` (Salón de peinado y estaciones de tocador)
* **Servicios (1:1)**: Grid de 6 servicios con fotografías cuadradas en alta definición y píldoras esenciales de duración y precio.

## 📱 Especificaciones Móviles (< 768px)
* Hero con `min-height: 720px !important;`
* Degradado vertical con 38% superior 100% transparente para mostrar a la modelo con sus rizos perfectos.
* Texto y botones centrados en la mitad inferior.
* Servicios y Especialistas en **2 columnas balanceadas**.
* Barra de garantías con **carrusel horizontal táctil (Scroll Snap)**.
* Header móvil sin menú hamburguesa: solo Logotipo a la izquierda y botón **«Agendar»** a la derecha.
