# Ficha de Diseño Visual: Elles Sala de Belleza & Tienda Cosmética

## 🎨 Tríada de Identidad Visual
* **Paleta de Colores**:
  * Fondo Oscuro Primario: `#0f0e0c` (Obsidiana / Ébano Profundo)
  * Fondo Superficie Oscura: `#181613` (Superficie Header / Cards)
  * Fondo Claro: `#faf7f2` (Marfil Suave)
  * Fondo Superficie Clara: `#ffffff`
  * Acento Primario: `#d49b78` (Oro Rosa / Camel Glow)
  * Acento Hover: `#c08865`
  * Acento Suave: `rgba(212, 155, 120, 0.15)`
  * Bordes Finos: `rgba(212, 155, 120, 0.35)`
  * Texto Claro: `#f7f4ee`
  * Texto Oscuro: `#22201e`

* **Tipografía**:
  * Titulares Display: `'DM Serif Display', Georgia, serif`
  * Frase Caligráfica / Signature Script: `'Alex Brush', cursive`
  * Cuerpo & UI: `'Plus Jakarta Sans', sans-serif`

* **Elementos de Marca**:
  * Bordes redondeados suaves (`14px` a `20px`, píldoras de `9999px`)
  * Sombras multicapa difusas (`0 10px 30px rgba(0,0,0,0.08)`)
  * Badges con reflejo de luz sutil y degradados orgánicos

## 📸 Fotografías & Assets
* **Hero Principal**: `../assets/heroes/salon_belleza/Woman_wearing_black_silk_top_202609021631.webp` (WebP ~57 KB, modelo con blusa de seda negra y fondo oscuro con bokeh cálido)
* **Ambiente Sobre Nosotros**: `https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80` (Tocadores y estaciones de peinado de lujo)
* **Servicios (1:1)**: Grid de 6 servicios con fotografías cuadradas en alta definición y píldoras esenciales de duración y precio.

## 📱 Especificaciones Móviles (< 768px)
* Hero con `min-height: 720px !important;`
* Degradado vertical con 38% superior 100% transparente para mostrar el rostro de la modelo.
* Texto y botones centrados en la mitad inferior.
* Servicios y Especialistas en **2 columnas balanceadas**.
* Barra de garantías con **carrusel deslizable (Scroll Snap)**.
* Header móvil sin menú hamburguesa: solo Logotipo a la izquierda y botón **«Agendar»** a la derecha.
