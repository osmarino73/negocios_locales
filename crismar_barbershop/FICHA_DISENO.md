# Ficha de Diseño: Crismar Barbershop (Inspiración "LEGEND BARBER SHOP")

Manual de diseño visual y sistema de componentes extraído de la referencia de alta gama **"LEGEND Barber Shop"**, aplicando el estándar de **Hero Header Inmersivo a Ancho Completo (`Full-Width Bleed`)**, tipografía industrial/vintage (**Bebas Neue** + **Plus Jakarta Sans**) y adaptado para **Crismar Barbershop** en **Apartadó, Antioquia**.

---

## 🎨 Paleta de Colores Curada (Legend Gold & Dark Club)

| Rol del Color | HEX | HSL | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Legend Warm Amber Gold (Color Primario)** | `#e5a854` | `hsl(35, 75%, 62%)` | Botones principales, acento en titular ("LIFESTYLE"), badges activos y ribetes |
| **Deep Obsidian Black (Fondo Principal Hero & Topbar)** | `#0c0c0e` | `hsl(240, 8%, 5%)` | Fondo inmersivo del Hero, topbar, footer y tarjetas oscuras |
| **Charcoal Surface (Superficies de Tarjetas)** | `#16161a` | `hsl(240, 8%, 10%)` | Tarjetas de servicios, equipo de barberos y panel de ubicación |
| **Pure White / Cream White (Tipografía)** | `#f4f4f6` | `hsl(240, 6%, 96%)` | Titulares H1, H2, nombres y etiquetas |
| **Muted Ash Gray (Textos Secundarios)** | `#9e9ea7` | `hsl(240, 5%, 64%)` | Descripciones, duraciones, horarios y teléfonos |
| **Borde Vintage Fino** | `rgba(229, 168, 84, 0.18)` | — | Delimitadores de tarjetas y líneas divisorias |

---

## 🔤 Tipografía Extraída Fielmente de la Referencia ("LEGEND BARBER SHOP")

* **1. Logotipo & Titulares Clásicos**: `'Cinzel', Georgia, serif` (Google Fonts, Pesos `700`, `800`, `900`). Serif romana de alta distinción con espaciado amplio (`letter-spacing: 2px`).
* **2. Gran Titular del Hero (Display de Impacto)**: `'Oswald', sans-serif` (Google Fonts, Pesos `700`, `800`). Sans-serif condensada, mayúsculas imponentes con interletrado ajustado:
  * *"MÁS QUE UN CORTE. / ES UN **ESTILO DE VIDA.**"*
* **3. Tipografía de Lectura & UI (Body, Menús, Botones, Párrafos)**: `'Plus Jakarta Sans', sans-serif` (Google Fonts, Pesos `400`, `500`, `600`, `700`, `800`).
* **4. Eyebrows & Badges**: Mayúsculas espaciadas en Oro Ámbar (`color: #e5a854; letter-spacing: 2.5px; font-size: 0.78rem; font-weight: 800`).

---

## 🧩 Arquitectura Visual & Componentes Exclusivos (Legend Style)

1. **Top Announcement Bar Dark (`#0c0c0e`)**:
   * Ubicación física, badge *"Atención con y sin Cita"*, teléfono directo y redes sociales.
2. **Header Minimalista Dark (`#0c0c0e`) & Smart Sticky**:
   * Escudo heráldico dorado con tijeras cruzadas.
   * Logotipo con tipografía `Cinzel` y subtítulo en oro.
   * Menú con las 4 secciones estrictas y botón dorado conciso `.btn-header-cta` con texto **«Agendar»**.
   * Comportamiento inteligente: se oculta suavemente al hacer scroll hacia abajo y reaparece al hacer scroll hacia arriba.
3. **Hero Header Inmersivo a Ancho Completo (`Full-Width Bleed`)**:
   * Fondo continuo `#0c0c0e` que abarca el 100% de la pantalla (`min-height: 640px` en desktop y `min-height: 720px` en móvil (+20% de altura) para máxima presencia fotográfica).
   * Capa `.hero-bg-cover` con el modelo y degradado fade a la derecha (`width: 65%`).
   * Máscara `.hero-bg-overlay` con degradado oscuro profundo de `#0c0c0e` a transparente.
   * Botón dorado de agenda con icono de calendario + Botón contorno `VER SERVICIOS`.
   * Avatar group de clientes y rating ⭐⭐⭐⭐⭐ **4.9 (120+ Reseñas en Google)**.
   * Calibración móvil (< 768px): Centrado editorial, altura mínima 720px (+20%), padding 150px 16px 36px y textos con escala responsiva.
4. **Franja Oscura de 4 Sellos de Garantía**:
   * ✂️ *Barberos Expertos (Profesionales certificados)*
   * 🧴 *Productos Premium (Cosmética capilar masculina)*
   * 🪑 *Higiene & Esterilización (Máxima bioseguridad)*
   * 🏆 *100% Satisfacción (Resultados garantizados)*
5. **Catálogo de Servicios Populares (#servicios)**:
   * 6 tarjetas oscuras en `#16161a` con fotos de cortes/afeitados, badges de duración/técnica y botón compacto dorado `.btn-card-book` con texto «Agendar».
   * **Móvil (< 768px y ≤ 480px)**: Cuadrícula doble columna (`repeat(2, 1fr)`), fotografías cuadradas (1:1), supresión de iconos flotantes y tipografía optimizada.
6. **Nosotros / Experiencia & Especialistas (#nosotros)**:
   * Composición visual con foto de la barbería vintage, métricas en 2 columnas en móvil (8+ Años, 20K+ Cortes, 4 Barberos, 4.9 Rating) y grid de barberos master con enlace de WhatsApp individual.
   * **Grid de Barberos en Móvil**: Cuadrícula doble columna (`repeat(2, 1fr)`) con avatares circulares centrados y botón `.btn-team-book`.
7. **Ubicación & Google Maps Georreferenciado (#ubicacion)**:
   * Tarjeta a dos columnas en Apartadó con iframe interactivo exacto (`z=16`).
8. **Footer Premium Dark Club (`#0c0c0e`)**:
   * Escudo dorado, enlaces de navegación, contacto y módulo de agendamiento con botón conciso **«Agendar»**.
9. **Sticky Bottom Action Dock (< 768px)**:
   * Barra de navegación móvil fija ergonómica con accesos a Llamar, Ubicación, WhatsApp y Agendar con soporte para Safe-Area Inset.
