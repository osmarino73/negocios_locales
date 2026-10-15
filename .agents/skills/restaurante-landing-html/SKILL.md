---
name: restaurante-landing-html
description: Experto en desarrollo de landing pages y cartas digitales para el sector gastronómico (restaurantes, bistrós, pizzerías, hamburgueserías, cafeterías y dark kitchens) con sistema de tokens dinámicos, etiquetado semántico estricto, apetitosidad visual y conversión a pedidos.
---

# 🍽️ Desarrollo de Landing Pages & Cartas Digitales para Restaurantes y Gastronomía

Este skill define el estándar mandatorio de desarrollo para sitios web, cartas digitales interactivas y landing pages del **nicho gastronómico** (restaurantes, bistrós, asadores, cafeterías de especialidad, pizzerías y dark kitchens), garantizando:
1. **Sistema de Tokens / Placeholders Estándar** para templating e integración automatizada.
2. **Nodos Hoja y Clases Semánticas Estrictas** para parsing y CMS sin colisiones de estilo.
3. **Fotografía Gastronómica de Alta Apetitosidad** con la regla del degradado ultraligero (sin veladuras oscuras que laven los platos).
4. **Conversión Rápida a Pedidos y Reservas** vía WhatsApp o plataforma digital (`/m/{{SLUG}}`).

---

## 🏷️ 1. Reglas Obligatorias de Etiquetado y Tokens Editables

### A. Placeholders / Tokens Estándar
Cuando se genere una plantilla estructurada o se parametrice desde `DATOS_NEGOCIO.json`, se deben utilizar exclusivamente estos identificadores entre dobles llaves:

| Token | Descripción | Ejemplo de Valor |
| :--- | :--- | :--- |
| `{{BUSINESS_NAME}}` | Nombre comercial del restaurante o negocio. | *Fuego & Masa Pizzería* |
| `{{PRIMARY_COLOR}}` | Color de acento principal en CSS. | `#D97706` o `#C2410C` |
| `{{HERO_BADGE}}` | Categoría o texto superior del Hero (Eyebrow). | `🔥 PIZZA ARTESANAL · MEDELLÍN` |
| `{{HERO_SLOGAN}}` | Titular principal H1 de impacto gastronómico. | `El Auténtico Sabor a Leña` |
| `{{HERO_SUBTITLE}}` | Párrafo descriptivo bajo el H1 del Hero. | `Masa madre fermentada 48 horas e ingredientes importados.` |
| `{{STORY_TITLE}}` | Titular de la sección Nosotros / Nuestra Historia. | `Tradición, Pasión y Fuego Vivo` |
| `{{STORY_P1}}` | Primer párrafo de historia o filosofía de cocina. | `Nacimos con la promesa de revivir las recetas clásicas...` |
| `{{STORY_P2}}` | Segundo párrafo con técnicas e ingredientes. | `Cada plato es preparado al momento por nuestros maestros...` |
| `{{STAT1_VALUE}}` / `{{STAT1_LABEL}}` | Métrica 1 de autoridad / calidad. | `100%` / `Masa Madre Natural` |
| `{{STAT2_VALUE}}` / `{{STAT2_LABEL}}` | Métrica 2 de rapidez o frescura. | `< 30 min` / `Entrega Rápida` |
| `{{STAT3_VALUE}}` / `{{STAT3_LABEL}}` | Métrica 3 de volumen o experiencia. | `+25K` / `Platos Servidos` |
| `{{STAT4_VALUE}}` / `{{STAT4_LABEL}}` | Métrica 4 de valoración social. | `4.9 ★` / `Valoración en Google` |
| `{{ADDRESS}}` | Dirección física exacta del restaurante. | `Calle 10 # 43E-12, El Poblado` |
| `{{CITY}}` | Ciudad, municipio o zona gastronómica. | `Medellín` |
| `{{HORARIO}}` | Horarios de atención y cocina. | `Mar - Dom: 12:00 PM - 10:30 PM` |
| `{{WHATSAPP_LINK}}` | Enlace completo para agendar / pedir. | `https://wa.me/573001234567?text=...` |
| `{{GOOGLE_MAPS_URL}}` | Enlace de navegación externa ("Cómo llegar"). | `https://maps.google.com/?q=...` |
| `{{MAP_EMBED_URL}}` | URL para el iframe embebido interactivo. | `https://www.google.com/maps/embed?...` |
| `{{SLUG}}` | Identificador único del plato / enlace pedido. | `pizza-burrata-especial` |

---

## 🧱 2. Clases Semánticas Obligatorias (Nodos Hoja)

Todo texto o dato dinámico debe residir en su propio elemento semántico específico con clases estándar:

### 1. Logotipo del Navbar (`.brand-logo`)
El logotipo debe ser puramente tipográfico (sin íconos ni emojis al lado del nombre):
```html
<a href="#inicio" class="brand-logo">
  <span class="brand-title">{{BUSINESS_NAME}}</span>
  <span class="brand-sub">{{HERO_BADGE}}</span>
</a>
```

### 2. Tarjetas de Menú / Catálogo Gastronómico (`.menu-card`)
Cada tarjeta debe incorporar obligatoriamente el atributo `data-product-title`:
```html
<div class="menu-card" data-product-title="Pizza Burrata & Prosciutto">
  <span class="menu-tag">ESPECIALIDAD</span>
  <img class="menu-img" src="img/plato.webp" alt="Pizza Burrata & Prosciutto" loading="lazy" width="400" height="300" />
  <div class="menu-card-body">
    <h3 class="menu-title">Pizza Burrata & Prosciutto</h3>
    <p class="menu-desc">Base de masa madre, pomodoro San Marzano, mozzarella fior di latte, burrata fresca y prosciutto di Parma.</p>
    <div class="menu-card-footer">
      <span class="menu-price">$46.000</span>
      <a href="/m/{{SLUG}}" class="btn-pedir">AGREGAR ➔</a>
    </div>
  </div>
</div>
```

### 3. Footer Estructurado de 4 Columnas Aisladas
Mantén las 4 columnas perfectamente aisladas con la clase `.footer-col`. El logo en el footer debe ser un enlace inline limpio (sin envolver divs ni párrafos):
```html
<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-col footer-brand-col">
      <a href="#inicio" class="footer-logo">{{BUSINESS_NAME}}</a>
      <p class="footer-desc">{{HERO_SUBTITLE}}</p>
      <div class="footer-socials">
        <a href="#" aria-label="Instagram">...</a>
        <a href="#" aria-label="TikTok">...</a>
      </div>
    </div>
    <div class="footer-col footer-links-col">
      <h4 class="footer-heading">Navegación</h4>
      <ul class="footer-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#menu">Nuestro Menú</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#ubicacion">Ubicación</a></li>
      </ul>
    </div>
    <div class="footer-col footer-hours-col">
      <h4 class="footer-heading">Horarios de Cocina</h4>
      <p class="footer-hours-text">{{HORARIO}}</p>
    </div>
    <div class="footer-col footer-contact-col">
      <h4 class="footer-heading">Reservas & Pedidos</h4>
      <p class="footer-contact-address">{{ADDRESS}}, {{CITY}}</p>
      <a href="{{WHATSAPP_LINK}}" class="btn-footer-cta">Pedir a Domicilio</a>
    </div>
  </div>
</footer>
```

---

## 🚫 3. Prohibiciones Estrictas del Nicho Gastronómico

1. **Cero Nombres Fijos / Ciudades Quemadas en Modo Plantilla**:
   - En templates reutilizables, nunca quemar nombres ("El Fogón", "Medellín") en el código. Usar siempre `{{BUSINESS_NAME}}`, `{{CITY}}`, etc.
2. **Prohibido Envolver Columnas o Grids en `.brand-logo`**:
   - La clase `.brand-logo` es exclusiva para el nodo de marca tipográfica en el header/footer.
3. **Prohibido el Sufijo de Moneda ISO `COP`**:
   - Mostrar estrictamente `$38.000`, jamás `$38.000 COP`.
4. **Prohibidas las Veladuras Oscuras sobre la Comida**:
   - Queda terminantemente prohibido aplicar degradados o fondos negros sólidos sobre la fotografía de los platos. La comida debe lucir jugosa, iluminada y crujiente.
5. **Prohibidos Íconos de Emojis en el Logo**:
   - Nada de `🍕 El Fogón` o `🍔 Burger Club` en el `.brand-title`. Mantener siempre el logotipo tipográfico puro y profesional.

---

## 🥩 4. Estándar Visual de Apetitosidad y Grids

### A. Hero Full-Width Gastronómico
- **Desktop**: Fotografía del plato insignia o preparación en el lateral derecho (`.hero-bg-cover`). Degradado horizontal desvanecido antes del 32% (`linear-gradient(90deg, rgba(var(--bg-rgb), 0.7) 0%, transparent 32%)`).
- **Móvil (< 768px)**: Altura de `min-height: 840px !important;`. Mitad superior limpia para el plato principal y textos alineados en el tercio inferior con alto contraste (`text-shadow`).

### B. Menú en Grid Responsivo
- **Desktop**: Grid de 3 columnas (`repeat(3, 1fr)`).
- **Móvil**: Grid balanceado de 2 columnas (`repeat(2, minmax(0, 1fr))`) para escanear la carta con rapidez sin scroll vertical infinito.

### C. Tokens de Estilos CSS (`:root`)
El archivo debe enlazar dinámicamente los colores y tipografías:
```css
:root {
  --color-accent: {{PRIMARY_COLOR}};
  --primary: {{PRIMARY_COLOR}};
  --color-bg: #0F0F11;
  --color-surface: #18181B;
  --color-text: #F4F4F5;
  --color-text-muted: #A1A1AA;
  --font-display: 'Cinzel', 'Playfair Display', serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}
```
