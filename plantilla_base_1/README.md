# 🍔 Plantilla Base 1 — Guía Oficial de Landing Pages Gastronómicas

Plantilla maestra HTML5/CSS3 universal, 100% autónoma (*standalone*), ultra-optimizada y parametrizada mediante tokens dinámicos `{{TOKEN}}` para todo el nicho gastronómico (restaurantes, asaderos, parrilladas, pizzerías, hamburgueserías, cafeterías y dark kitchens).

---

## 📐 Estándares de Diseño & Reglas Mandatorias

### 1. Logotipo Tipográfico Puro (Prohibición Estricta de Íconos)
- **Regla**: El logotipo (`.brand-logo` y `.footer-logo`) debe ser **100% tipográfico y limpio**, sin emojis ni íconos decorativos de FontAwesome (ej. llamas, tenedores, coronas) junto al nombre del negocio.
- **Estructura Semántica**:
  ```html
  <a href="#inicio" class="brand-logo">
    <span class="brand-title">{{BUSINESS_NAME}}</span>
    <span class="brand-sub">{{HERO_BADGE}}</span>
  </a>
  ```
- **Estilos**: `.brand-title` en tipografía display con sombra suave y `.brand-sub` con micro-caps y espaciado editorial amplio (`letter-spacing: 0.16em`).

---

### 2. Hero Panorámico Inmersivo (Sin Recortes & Apetitosidad Total)
- **Contenedor Full-Bleed**: `.hero-bg-cover` ocupa el **100% del ancho y alto** con `object-position: right center;` y altura dinámica `min-height: clamp(630px, 86vh, 750px);`.
- **Cero Cortes**: La composición garantiza que el plato principal, guarniciones y bebidas queden 100% visibles sin recortes verticales ni márgenes forzados.
- **Degradado Ultraligero**: Degradado horizontal del 0% al 28% para legibilidad del titular, volviéndose 100% transparente a partir del 60%–70% para no lavar el color ni la apetitosidad de los alimentos.
- **Doble Imagen con `<picture>`**:
  ```html
  <picture class="hero-bg-picture">
    <source media="(max-width: 768px)" srcset="hero_fogon_mobile.webp" width="720" height="1280">
    <img src="hero_fogon.webp" alt="{{HERO_SLOGAN}}" class="hero-bg-img" loading="eager" width="1920" height="1080">
  </picture>
  ```

---

### 3. Smart Header / Navbar Obsidian Glassmorphic
- **Fondo**: `rgba(17, 24, 39, 0.94)` con `backdrop-filter: blur(16px)` y borde sutil `border-bottom: 1px solid rgba(255, 255, 255, 0.08)`.
- **Navegación**: Enlaces en mayúsculas con línea de acento cálida en hover/activo.
- **Botón CTA de Encabezado**: Botón con degradado carmesí/naranja `Pedir en Línea`.

---

### 4. Footer Modular de 4 Columnas
- **Columna 1**: Logotipo tipográfico puro + descripción del negocio + redes sociales con micro-interacciones hover.
- **Columna 2 (Navegación)**: Enlaces directos a las secciones con viñetas `›`.
- **Columna 3 (Horarios)**: Tarjeta con badge de estado activo (*«🟢 Abierto Hoy»*) y horarios detallados.
- **Columna 4 (Atención & Pedidos)**: Dirección física, horario y botón de acción conciso **`PEDIR`** enlazado a WhatsApp.
- **Barra Inferior**: Separador con derechos de autor y georreferenciación local.

---

### 5. Catálogo de Menú & Tarjetas Semánticas
- **Tarjetas `.menu-card`**:
  - Atributo obligatorio: `data-product-title="Nombre del Plato"`.
  - Etiqueta de especialidad: `.menu-tag`.
  - Fotografía con zoom hover: `.menu-img`.
  - Título y descripción de apetitosidad: `.menu-title`, `.menu-desc`.
  - Precio formateado sin ISO COP: `.menu-price` (ej. `$38.000`, nunca `$38.000 COP`).
  - Botón de agregar/pedir: `.btn-pedir`.
- **Filtro Interactivo**: Pills deslizables (*Scroll-Snap* en móviles) y buscador en tiempo real.

---

## 🔑 Diccionario de Tokens Dinámicos

| Token | Descripción | Ejemplo de Valor |
| :--- | :--- | :--- |
| `{{BUSINESS_NAME}}` | Nombre oficial del restaurante | `Restaurante El Fogón Apartadó` |
| `{{PRIMARY_COLOR}}` | Color primario en HEX | `#DC2626` |
| `{{HERO_BADGE}}` | Badge superior del Hero y subtítulo | `🔥 TRADICIÓN CRIOLLA · APARTADÓ` |
| `{{HERO_SLOGAN}}` | Titular display del Hero | `SABOR AL FOGÓN. PASIÓN CRIOLLA.` |
| `{{HERO_SUBTITLE}}` | Descripción persuasiva del Hero | `Cortes madurados a la brasa...` |
| `{{STORY_TITLE}}` | Titular de Sobre Nosotros | `CALIDAD EN CADA BOCADO...` |
| `{{STORY_P1}}` | Párrafo 1 de historia/tradición | `En Restaurante El Fogón unimos...` |
| `{{STORY_P2}}` | Párrafo 2 de preparación/leña | `Horneamos y asamos al carbón...` |
| `{{STAT1_VALUE}}`, `{{STAT1_LABEL}}` | Métrica 1 | `100%`, `Carne Fresca` |
| `{{STAT2_VALUE}}`, `{{STAT2_LABEL}}` | Métrica 2 | `< 30 min`, `Envío Rápido` |
| `{{STAT3_VALUE}}`, `{{STAT3_LABEL}}` | Métrica 3 | `18+`, `Años Sazón` |
| `{{STAT4_VALUE}}`, `{{STAT4_LABEL}}` | Métrica 4 | `5.0 ★`, `Google Reviews` |
| `{{ADDRESS}}` | Dirección física | `Cl. 99 #10451` |
| `{{CITY}}` | Ciudad | `Apartadó` |
| `{{HORARIO}}` | Horario de atención | `Lunes a Domingo: 11:00 AM - 10:00 PM` |
| `{{WHATSAPP_LINK}}` | Enlace directo con mensaje codificado | `https://wa.me/573215832242?text=...` |
| `{{GOOGLE_MAPS_URL}}` | Enlace a la ficha de Google Maps | `https://www.google.com/maps/place/...` |
| `{{MAP_EMBED_URL}}` | URL del iframe de Google Maps | `https://maps.google.com/maps?q=...` |
| `{{SLUG}}` | Identificador URL / Carta digital | `el-fogon-apartado` |

---

## 🚀 Cómo Generar un Nuevo Restaurante

1. Crear la carpeta del negocio (ej. `restaurante_ejemplo/`) con su `DATOS_NEGOCIO.json` que incluya el objeto `tokens`.
2. Copiar `plantilla_base_1/index.html` e inyectar los valores de `tokens`.
3. Proporcionar las dos imágenes Hero (`hero_desktop.webp` y `hero_mobile.webp`).
4. Generar el archivo standalone incrustando las imágenes en Base64.
