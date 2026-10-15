# Ficha de Diseño: Mambo's Barberia (Inspiración "LEGEND BARBER SHOP")

Manual de diseño visual y sistema de componentes extraído de la referencia de alta gama **"LEGEND Barber Shop"**, adaptado con fidelidad fotográfica en alta resolución estática (Hero Desktop 16:9 y Mobile 9:16 dedicados), tipografía display e industrial (**Cinzel** + **Oswald** + **Plus Jakarta Sans**) y adaptado para **Mambo's Barberia** en **Medellín, Antioquia**.

---

## 🎨 Paleta de Colores Forense (Legend Amber Gold & Dark Obsidian)

| Rol del Color | Token CSS | HEX | Aplicación Visual |
| :--- | :--- | :--- | :--- |
| **Amber Gold (Color Primario)** | `var(--color-accent)` | `#d5a755` | Botones principales, acento en titular, badges, precios, enlaces minimalistas y ribetes |
| **Amber Gold Hover** | `var(--color-accent-hover)` | `#e5bb68` | Efecto hover e iluminación interactiva |
| **Deep Obsidian (Fondo Base)** | `var(--bg-dark)` | `#0c0d0f` | Fondo inmersivo del Hero, navbar, footer y contenedor principal |
| **Charcoal Surface (Superficies)** | `var(--bg-card)` | `#15161a` | Tarjetas de servicios, equipo de barberos y paneles de información |
| **Pure White (Tipografía Principal)** | `var(--text-white)` | `#ffffff` | Titulares H1, H2, nombres y etiquetas clave |
| **Muted Ash Gray (Textos Secundarios)** | `var(--text-muted)` | `#a1a1aa` | Descripciones, duraciones, horarios y teléfonos |
| **Borde Vintage Fino** | `var(--border-subtle)` | `rgba(213, 167, 85, 0.22)` | Delimitadores de tarjetas, pastillas y líneas divisorias |

> **Regla de Oro**: Todos los acentos cromáticos consumen estrictamente `var(--color-accent)` sin valores fijos hardcodeados, permitiendo una propagación cromática 100% instantánea.

---

## 🔤 Tipografía Curada

* **1. Logotipo de Marca**: `'Cinzel', Georgia, serif` (Google Fonts, Pesos `700`, `800`). Serif romana de distinción con espaciado amplio (`letter-spacing: 0.08em`). Subtítulo en `'Plus Jakarta Sans'` (`0.62rem; letter-spacing: 0.22em; color: var(--color-accent);`).
* **2. Titulares Display del Hero & Secciones**: `'Oswald', sans-serif` (Google Fonts, Pesos `600`, `700`). Mayúsculas compactas e imponentes:
  * *"MÁS QUE UN CORTE. / UN **ESTILO DE VIDA.**"*
  * *"NUESTROS SERVICIOS / **SERVICIOS QUE OFRECEMOS**"*
  * *"PRECISIÓN. ESTILO. CONFIANZA."*
* **3. Tipografía de UI & Lectura (Párrafos, Menús, Botones)**: `'Plus Jakarta Sans', sans-serif` (Google Fonts, Pesos `400`, `500`, `600`, `700`, `800`).
* **4. Eyebrows & Badges**: Sans-serif en mayúsculas con espaciado (`letter-spacing: 0.2em; font-size: 0.72rem; color: var(--color-accent);`).

---

## 🧩 Arquitectura Visual & Componentes Oficiales

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro: `MAMBO'S BARBERIA` con subtítulo `BARBERÍA VIP & GROOMING · MEDELLÍN`.
   - Navegación con enlaces mayúsculas directos (`#inicio`, `#servicios`, `#nosotros`, `#profesionales`, `#ubicacion`).
   - Botón dorado en escritorio con texto conciso «Agendar».
   - En móvil (< 768px): Logotipo al 100% de ancho sin cortes. Cero menú hamburguesa y botón CTA oculto en cabecera móvil.
   - Auto-hide al bajar en secciones inferiores y reaparición inmediata al subir.

2. **Hero Inmersivo Full-Width Bleed (Estático en Alta Fidelidad)**:
   - **Desktop (16:9)**: Fotografía ultra HD del cliente y barbero en acción (`hero_desktop.webp`), anclaje inferior estricto (`align-items: flex-end`) dejando el 60% superior despejado para lucir el rostro, cabello y atmósfera del salón. Doble degradado orgánico aterciopelado (horizontal 90deg + vertical 180deg).
   - **Móvil (9:16)**: Fotografía vertical dedicada (`hero_mobile.webp`) con `min-height: 720px !important`, 80% superior transparente y textos e interacciones situados exclusivamente en la mitad inferior.
   - Titular: *MÁS QUE UN CORTE. UN ESTILO DE VIDA.*
   - Botón primario dorado + Enlace secundario minimalista `Ver Servicios ➔`. Social proof con estrellas 5.0★ (50 Reseñas).

3. **Franja de 4 Sellos de Garantía (Trust Bar)**:
   - Barberos Expertos, Productos Prémium, Higiene & Seguridad, Satisfacción Total.
   - En móvil (< 768px): Carrusel horizontal deslizable (Scroll Snap) fluido en 1 sola fila.

4. **Catálogo de Servicios Full-Bleed Minimalista (#servicios)**:
   - Grid 3 columnas en escritorio (`repeat(3, 1fr)`), 2 columnas en móvil (`repeat(2, 1fr)`).
   - Tarjetas 3:4 con foto protagonista al 100%, degradado inferior aterciopelado (40-45% superior transparente).
   - Footer en dos filas independientes: Fila 1 Precio 100% ancho (sin `COP`), Fila 2 Enlace minimalista `AGENDAR ➔` directo a WhatsApp.

5. **Sobre Nosotros (#nosotros)**:
   - Grid 2 columnas: fotografía del salón de barbería clásica en cuero y madera (`photo-1585747860715-2ba37e788b70`) con badge flotante VIP, titular de impacto, copy cercano y 4 métricas de autoridad (8+ Años, 25K+ Cortes, 6 Barberos Máster, 5.0 Rating con 50+ Reseñas).

6. **Nuestros Profesionales (#profesionales)**:
   - Grid 4 columnas en escritorio, carrusel horizontal deslizable (Scroll Snap) en móvil con efecto «Peek».
   - Formato Retrato Editorial (3:4.2) en alta resolución con línea de acento, tipografía display, rol y agendamiento directo.

7. **Ubicación & Google Maps Georreferenciado (#ubicacion)**:
   - Panel de información con Medellín, Antioquia.
   - Iframe interactivo georreferenciado con fórmula oficial (`z=16`).

8. **Footer Principal**:
   - Logotipo tipográfico, enlaces, horarios, contacto y tarjeta de agendamiento con botón conciso **«Agendar»**.

9. **Botón Flotante WhatsApp Anti-Corte Móvil**:
   - Despeje `env(safe-area-inset-bottom)` y `z-index: 99999` para visibilidad impecable en todo momento.
