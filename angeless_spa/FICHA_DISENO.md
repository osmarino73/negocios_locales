# Ficha de Diseño Visual: Angeless Spa
*Clonación Forense de Identidad Visual Luxe Spa & Wellness*

## 🎨 Tríada de Identidad Visual
* **Paleta de Colores**:
  * Fondo Oscuro Primario: `#0f0d0c` (Obsidiana / Ébano Chocolate Profundo)
  * Fondo Superficie Oscura: `#161311` (Superficie Header / Barra Garantías / Footer)
  * Fondo Claro (Sección Servicios & Nosotros): `#fbf8f4` (Crema Marfil Suave)
  * Fondo Superficie Clara (Tarjetas): `#ffffff` con borde sutil `#eee6de`
  * Acento Primario: `#c49377` (Cobre Rosa / Camel Nude Satinado de la Referencia)
  * Acento Hover: `#ae7a5e`
  * Gradiente Botón: `linear-gradient(135deg, #ce9e82 0%, #b27b60 100%)`
  * Acento Suave: `rgba(196, 147, 119, 0.15)`
  * Bordes Finos: `rgba(196, 147, 119, 0.28)`
  * Texto Claro: `#fbf8f5`
  * Texto Muted Claro: `#a89f97`
  * Texto Oscuro: `#201c19`
  * Texto Muted Oscuro: `#6e655e`

* **Tipografía**:
  * Titulares Display: `'DM Serif Display', Georgia, serif` con cursiva de acento
  * Frase Caligráfica / Signature Script: `'Alex Brush', cursive`
  * Eyebrows & UI de Autor: `'Plus Jakarta Sans', sans-serif` (letter-spacing: 0.18em)
  * Cuerpo de Texto: `'Plus Jakarta Sans', sans-serif`

* **Componentes Visuales de Marca**:
  * Barra de Garantías con doble marco circular y glifos lineales en cobre cálido.
  * Tarjetas de Servicios Full-Bleed Minimalistas: Fotografía protagonista en 100% del contenedor (aspect-ratio 3:4), línea de acento cobre, titular blanco y barra inferior con precio y enlace minimalista «Agendar ➔» directo a WhatsApp.
  * Tarjetas de Equipo Full-Bleed (Retrato Editorial): Fotografía vertical en plano medio (aspect-ratio 3:4.2), línea de acento cobre, nombre en serifa blanca, rol en tono arena/cobre, calificación 5★ y enlace minimalista «Agendar ➔» directo a WhatsApp con la especialista.
  * Módulo de Experiencia con fotografía zen de cabina de spa, badge flotante de vidrio (*glassmorphism*) y 4 tarjetas métricas de autoridad.
  * Botones con radio suave de 50px (estilo píldora prémium).

## 📸 Fotografías & Assets
* **Hero Principal**: `../assets/heroes/spa/Woman_relaxing_at_wellness_spa_202609021629.webp` (WebP ~28 KB, modelo relajándose en spa con toalla blanca y atmósfera zen)
* **Ambiente Sobre Nosotros**: `https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=80` (Cabina de relajación zen, camillas con toallas y ambientación aromática)
* **Servicios (Full-Bleed 3:4)**: Grid de 3 columnas en escritorio (2 filas de 3 tarjetas) con fotografías protagonistas en alta definición (2 columnas en móvil).
* **Equipo (Retrato Editorial 3:4.2)**: Grid de 4 columnas en escritorio con retratos de alta definición de las terapeutas y especialistas (2 columnas en móvil).

## 📱 Especificaciones Móviles (< 768px)
* Hero con `min-height: 720px !important;`
* Degradado vertical con 38% superior 100% transparente para mostrar a la modelo con nitidez.
* Texto y botones centrados en la mitad inferior (`max-width: 360px`).
* Servicios y Especialistas en **2 columnas balanceadas** (`repeat(2, 1fr)`).
* Barra de garantías con **carrusel deslizable (Scroll Snap)** fluido.
* Header móvil sin menú hamburguesa: solo Logotipo a la izquierda y botón **«Agendar»** a la derecha.
* Botón flotante de WhatsApp con protección anti-corte `safe-area-inset-bottom`.
