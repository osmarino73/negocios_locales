# 🍔 Estándar de Nicho: Restaurantes, Comidas Rápidas & Cocina Criolla

Este documento define las reglas de arquitectura, diseño visual (*Gourmet & Fast Food Dark Luxury*), catálogo interactivo, tipografía forense, copywriting persuasivo, sistema unificado de iconos y protocolos de sincronización B2B con Menús Digitales (Mennu7) para sitios web de **Restaurantes, Comidas Rápidas, Pollerías, Hamburgueserías, Pizzerías y Cocina Criolla**, garantizando una imagen apetitosa de alta conversión por WhatsApp y optimización total para SEO Local.

---

## 📌 1. Arquitectura de Secciones Oficial Mandatoria

Para mantener los sitios limpios, ultra-rápidos y de alta conversión, cada página se compone exclusivamente de las siguientes 6 secciones oficiales:

1. **`#inicio` (Hero Full-Width Bleed al 100% de Ancho con Doble Imagen Responsive)**:
   - Portada inmersiva gastronómica donde la fotografía del plato estrella / cocina en vivo (`.hero-bg-cover`) ocupa **estrictamente el 100% del ancho del Hero (`width: 100%; left: 0;`)**.
   - **Estándar Mandatorio de Dos Imágenes Hero (`<picture>`)**:
     - **Versión Escritorio (16:9)**: Fotografía horizontal (`1920x1080` aprox.) con el plato/combo protagonista en el lado derecho o medio-derecho, dejando el tercio izquierdo despejado para la lectura fluida.
     - **Versión Móvil (9:16)**: Fotografía vertical dedicada (`768x1376` o `720x1280`) con el plato centrado en el tercio superior/medio, dejando la base oscura natural para los textos y botones sin recortes laterales ni deformaciones.
     - **Implementación HTML Semántica Obligatoria**:
       ```html
       <div class="hero-bg-cover">
         <picture class="hero-bg-picture">
           <source media="(max-width: 768px)" srcset="hero_movil.webp" width="768" height="1376">
           <img src="hero_desktop.webp" alt="..." class="hero-bg-img" loading="eager" width="1920" height="1072">
         </picture>
       </div>
       ```
   - Titular de impacto editorial estructurado en **3 líneas balanceadas** o con script manuscrito de autor (`Caveat` / `Great Vibes`). *Si el usuario solicita omitir la firma manuscrita y el eyebrow, el titular inicia directamente con el titular de 3 líneas.*
   - **Regla Mandatoria del Degradado Mínimo Ultraligero (`.hero-bg-overlay`)**:
     - **Prohibición Estricta de Veladuras Lechosas o Degradados Densos**: Queda terminantemente prohibido extender degradados que superen el 42% del ancho horizontal o aplicar veladuras verticales continuas (`180deg`) que cubran toda la foto con niebla blanca/grisácea, lavando la textura y apetitosidad de los alimentos.
     - **Desvanecimiento Rápido al 38%–42%**: El degradado horizontal (`90deg`) se restringe exclusivamente al margen del texto (0% a 35%) y debe ser **100% transparente a más tardar en el 38%–42%**:
       ```css
       background: linear-gradient(
         90deg, 
         rgba(var(--bg-rgb), 0.88) 0%, 
         rgba(var(--bg-rgb), 0.72) 18%, 
         rgba(var(--bg-rgb), 0.32) 28%, 
         rgba(var(--bg-rgb), 0.06) 36%, 
         transparent 42%
       );
       ```
     - **Legibilidad Asegurada por Text-Shadow**: El 60% central y derecho (donde reposa la hamburguesa, combo, papas o plato estrella) queda al 100% libre de capas lechosas con nitidez fotográfica total. La legibilidad de los textos se garantiza mediante un refinado `text-shadow`:
       - Fondos claros: `text-shadow: 0 1px 8px rgba(255, 255, 255, 0.95);`
       - Fondos oscuros: `text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);`
     - **En Móvil (< 768px)**: El degradado vertical en 180deg mantiene el **60%–70% superior 100% transparente** (`transparent 0%` hasta `transparent 65%`), protegiendo únicamente la base inferior donde se posicionan el titular y botones.
   - Botones de acción: Botón principal de pedido directo por WhatsApp (`[ WhatsApp ] PEDIR A DOMICILIO`) y botón/enlace minimalista `VER MENÚ ➔`.
2. **Barra de Pilares / Garantías de Sabor**:
   - Franja de 4 a 5 sellos de confianza (*Ingredientes 100% Frescos, Domicilio Rápido en <30 Min, Receta Tradicional Criolla, Empaque Térmico VIP, Calificación 5.0★*).
   - **En Móvil (< 768px)**: Carrusel horizontal deslizable (*Scroll Snap*) fluido en una sola fila compacta con desplazamiento táctil suave.
3. **`#servicios` (Catálogo de Menú, Buscador & Barra de Categorías)**:
   - **Buscador en Tiempo Real (`#menuSearchInput`)**: Campo de búsqueda redondeado estilo pill (`.menu-search-box`) con ícono de lupa SVG y botón de filtros (`.search-filter-btn`).
   - **Barra de Categorías Interactivas (`.menu-categories-scroll`)**: Botones estilizados con íconos (`.category-btn`) (*Todos, Pollo Crujiente, Hamburguesas, Cocina Criolla, Alitas BBQ, Picadas & Combos*).
   - **Regla Anti-Corte en Flexbox (`justify-content: flex-start !important;`)**: Ver Sección 7.
   - **Grid de 3 columnas en escritorio (`repeat(3, 1fr)`)** y **2 columnas en móvil** con tarjetas **Full-Bleed Minimalistas (3:4 o 4:3)** con insignias de *BESTSELLER* o *PROMO*, precio claro sin sufijo `COP` y enlace minimalista `PEDIR ➔`.
   - **Límite de Exposición**: Máximo **6 platos populares** por categoría en landing con botón minimalista `🍽️ VER CARTA COMPLETA (X PLATOS)` enlazando al menú digital completo.
4. **`#nosotros` (Sobre Nosotros & Especialidades del Chef — Estándar Editorial)**:
   - **Bloque Editorial Sobre Nosotros (`.experience-layout`)**: Grid a 2 columnas con fotografía del restaurante/cocina (`.about-image-showcase`) con badge flotante 5.0★, titular editorial, descripción apetitosa y 4 métricas de autoridad (años de sazón, platos servidos, tiempo prom de entrega, 5.0★ en Google) y botón de pedido.
   - **Bloque Especialidades del Chef / Platos Estrella (`.team-grid`)**: Grid de **4 columnas en escritorio (`repeat(4, 1fr)`)** o carrusel horizontal en móvil (*Scroll Snap*) con retratos de los combos/platos estrella, precio y botón directo a WhatsApp.
5. **`#ubicacion` (Sede & Domicilios)**:
   - Panel informativo con dirección física, horarios de atención, teléfonos de pedidos y Google Maps interactivo embebido georreferenciado (`z=16`).
6. **Footer Principal**:
   - Enlaces de navegación, datos de contacto, redes sociales, horarios y módulo de pedido con botón conciso **«Pedir»**.

---

## 🎨 2. Arquetipos de Diseño & Paleta Gastronómica

### Arquetipo: Sizzling Dark Luxury (Estilo Fast Food & Gourmet)
- **Acento Primario (`--color-accent`)**: Naranja Fuego / Sizzling Orange `#ff6b00` o `#ff5500`.
- **Acento Secundario (`--color-secondary`)**: Amarillo Oro Crujiente `#ffb700` o `#ffaa00`.
- **Fondos (`--bg-dark`)**: Ébano Carbón `#0f1210` y Obsidiana `#161917`.
- **Tarjetas & Modales (`--bg-card`)**: `#1a1d1b` con borde suave `rgba(255, 255, 255, 0.08)`.

---

## ✒️ 3. Tríada Tipográfica Forense

1. **Titulares Display & Scripts**: `Caveat` / `Great Vibes` (Google Fonts Script) + `DM Serif Display` / `Plus Jakarta Sans` (Heavy Sans/Serif).
2. **Cuerpo & UI**: `Plus Jakarta Sans` (Google Fonts).

---

## 💻 4. Estándar CSS/JS para Buscador & Categorías del Menú

### CSS de Categorías y Buscador

```css
/* Buscador estilo Pill */
.menu-search-wrapper {
  max-width: 680px;
  margin: 0 auto 28px;
}

.menu-search-box {
  display: flex;
  align-items: center;
  background: #161917;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 6px 8px 6px 20px;
}

/* Categorías en Escritorio */
.menu-categories-wrapper {
  position: relative !important;
  max-width: 1080px !important;
  margin: 0 auto 38px !important;
  padding: 0 48px !important; /* Margen para controles o flechas */
}

.menu-categories-scroll {
  display: flex !important;
  flex-wrap: nowrap !important;
  justify-content: flex-start !important; /* REGLA MANDATORIA ANTI-CORTE */
  overflow-x: auto !important;
  scroll-behavior: smooth !important;
  -webkit-overflow-scrolling: touch !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
  gap: 12px !important;
  padding: 8px 6px 14px !important;
}

.menu-categories-scroll::-webkit-scrollbar {
  display: none;
}

.category-btn {
  flex: 0 0 auto !important;
  scroll-snap-align: start !important;
  white-space: nowrap !important;
  min-width: 88px;
  padding: 10px 18px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #1a1d1b;
  color: #f3f4f6;
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.category-btn.active,
.category-btn:hover {
  background: var(--color-accent, #ff6b00);
  border-color: var(--color-accent, #ff6b00);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(255, 107, 0, 0.35);
}

/* Categorías en Móvil (< 768px) - REGLA MANDATORIA CARRUSEL HORIZONTAL */
@media (max-width: 768px) {
  .menu-categories-wrapper {
    max-width: 100% !important;
    margin: 0 -16px 28px !important;
    padding: 0 !important;
  }

  .menu-categories-scroll {
    display: flex !important;
    flex-wrap: nowrap !important; /* Prohibido apilar en filas */
    overflow-x: auto !important;
    scroll-snap-type: x mandatory !important;
    justify-content: flex-start !important;
    gap: 10px !important;
    padding: 6px 16px 16px !important;
  }

  .category-btn {
    padding: 8px 14px !important;
    font-size: 0.82rem !important;
    border-radius: 14px !important;
  }
}
```

### Motor de Filtrado Reactivo JS

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('menuSearchInput');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  let activeCategory = 'todos';

  function filterMenu() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    serviceCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || 'todos';
      const titleText = card.querySelector('.service-card-title')?.textContent.toLowerCase() || '';
      const descText = card.querySelector('.service-card-desc')?.textContent.toLowerCase() || '';

      const matchesCategory = (activeCategory === 'todos' || cardCategory === activeCategory);
      const matchesSearch = query === '' || titleText.includes(query) || descText.includes(query);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterMenu);
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'todos';
      
      // Auto-centrado suave de la pestaña activa
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      
      filterMenu();
    });
  });
});
```

---

## 🚫 5. Extractor Universal de HTML & Lista Negra de Exclusión (`isProductTitle`)

Para la ingesta automática de menús y evitar falsos productos provenientes de elementos visuales de la landing page:

### A. Detección Flexible de Precios
- Analiza nodos profundos sin restricciones rígidas de etiquetas hijas para capturar precios en cualquier formato: `$38.000`, `<span>$</span> 38.000`, `38.000 COP`, `<small>Desde</small> $42.000`.

### B. Lista Negra de Exclusión Estricta (`isProductTitle()`)
Excluye automáticamente elementos no gastronómicos, insignias de confianza, bloques de características y horarios para evitar que cajas informativas se conviertan en platos:
- **Tarjetas de Características / Pilares:** `Entrega Térmica VIP`, `Cortes Seleccionados`, `Higiene & Seguridad`, `Satisfacción 100%`, `Recetas Criollas`, `Comidas Sanas`.
- **Métricas & Insignias:** `15+ Años`, `60K+ Pedidos`, `<30m Entrega Rápida`, `5.0★`, `Experiencia Única`.
- **Horarios y Preguntas:** `11:00 AM - 9:00 PM`, `¿Tienes Hambre?`, `Encuentra Nuestro Restaurante`.
- **Pie de página / Datos:** `Dirección Física`, `Horario de Atención`, `Línea Directa`, `Pide a Domicilio`, `Contacto`, `Teléfono`, `WhatsApp`.
- **Filtro Estricto de Precio:** Si un contenedor de la landing page no posee un precio numérico/formatos `$XX.XXX` ni términos gastronómicos explícitos, se descarta para evitar convertir cajas informativas en productos.

### C. Inferencia Automática de Categorías (`inferCategoryFromProduct`)
Clasifica los platillos automáticamente en rubros limpios según sus términos o la sección padre HTML:
- 🍗 **Pollo Crujiente:** *Balde Pollo Broaster 8 PCS, Crispy Chicken, Pechuga Apanada*
- 🍔 **Hamburguesas:** *Hamburguesa Sizzling Crunch, Doble Carne, Smash Burgers*
- 🍗 **Alitas BBQ:** *Alitas BBQ Honey 12 PCS, Hot Buffalo Wings*
- 🍖 **Cocina Criolla:** *Bandeja Criolla Tradicional, Costillas a la Leña, Patacones, Sancocho*
- 📦 **Combos & Picadas:** *Combos Familiares, Baldes, Tríos, Dúos, Picadas Mixtas*
- 🥤 **Bebidas & Postres:** *Gaseosas, Jugos Naturales, Cervezas Artesanales, Limonadas, Malteadas*

---

## 🍽️ 6. Sistema Unificado de Categorías con Íconos Gastronómicos

Para garantizar coherencia total entre el Menú Digital, la Landing Page y el Panel de Administración:

| Categoría | Identificador Semántico | FontAwesome 6 Class | Descripción / Uso |
|---|---|---|---|
| **Todos** | `utensils` | `fa-solid fa-utensils` | Pestaña inicial global |
| **Pollo Crujiente** | `drumstick-bite` | `fa-solid fa-drumstick-bite` | Broaster, crispy, pechugas |
| **Hamburguesas** | `burger` | `fa-solid fa-burger` | Smash, artesanales, dobles |
| **Alitas & Picante** | `fire` / `drumstick-bite` | `fa-solid fa-fire` | BBQ, buffalo, miel mostaza |
| **Cocina Criolla / Platos Fuertes** | `bowl-food` | `fa-solid fa-bowl-food` | Bandejas criollas, asados |
| **Pizzas** | `pizza-slice` | `fa-solid fa-pizza-slice` | Artesanales, porciones |
| **Parrilla & Carnes** | `bacon` / `fire-burner` | `fa-solid fa-bacon` | Costillas, cortes premium |
| **Combos & Baldes** | `box-open` / `cubes-stacked`| `fa-solid fa-box-open` | Packs familiares, combos dúo |
| **Bebidas & Jugos** | `wine-glass` / `mug-hot` | `fa-solid fa-wine-glass` | Gaseosas, jugos, cervezas |
| **Postres & Helados** | `ice-cream` | `fa-solid fa-ice-cream` | Malteadas, tartas, helados |

---

## 📏 7. Estándar de Barra de Categorías: Regla Anti-Corte en Flexbox

### A. Regla Anti-Corte Mandatoria (`justify-content: flex-start !important;`)
- **Peligro Crítico de Flexbox:** En un contenedor con `overflow-x: auto;`, si se aplica `justify-content: center;`, el navegador sitúa los elementos que desbordan a la izquierda en coordenadas negativas (`scrollLeft < 0`). Esto provoca que la primera tarjeta ("Todos") quede **recortada irreversiblemente e inalcanzable para el usuario**.
- **Solución Obligatoria:** 
  - Usar siempre `justify-content: flex-start !important;` en `.menu-categories-scroll`.
  - Definir `flex: 0 0 auto !important;` en `.category-btn` para prohibir deformaciones o encogimientos.

### B. Controles Asistidos en Escritorio
- **Flechas de Navegación Inteligentes (`cat-nav-arrow`):** Botones flotantes laterales izquierdo y derecho. Ocultar la flecha previa si `scrollLeft <= 10`; ocultar la siguiente al llegar al final del scroll.
- **Drag-to-Scroll & Wheel:** Permitir arrastrar con el mouse y transformar eventos de rueda del mouse (`wheel`) en scroll horizontal.
- **Auto-centrado de Pestaña Activa:** Al hacer clic en un botón, invocar `btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })`.

### C. Límite de 6 Platos Populares en Landing Page
- Tanto en la vista general como en cada pestaña filtrada, la landing page debe exhibir como máximo **6 platos destacados**.
- Al pie de la cuadrícula, se debe incluir un botón de llamado a la acción minimalista:
  `🍽️ VER CARTA COMPLETA (X PLATOS)` enlazando a `/menu/:slug` para invitar al cliente a descubrir la totalidad del menú interactivo.

---

## 🎨 8. Sincronización Dinámica de Colores & Regla Anti-Oscuridad (`isDarkTone`)

Para garantizar coherencia absoluta entre Landing Page, Menú Digital y Pasarela/WhatsApp:

### A. Regla de Oro Anti-Oscuridad (`isDarkTone`)
- En sitios de estilo *dark luxury*, los fondos son oscuros (`#0f1210`, `#161917`).
- **NUNCA** asignar un color de fondo oscuro como `--color-accent` o color de botones de acción.
- Los botones siempre deben tener alta luminosidad y contraste cromático (ej. `#ff6b00`, `#ff5500`, `#ffb700`).

### B. Jerarquía de Extracción del Color de Botones
Al procesar la landing:
1. `1.°`: `--color-accent` en `:root` (ej: `#ff6b00`, color del CTA principal).
2. `2.°`: `--color-primary` (siempre que `!isDarkTone`).
3. `3.°`: Regla CSS `.btn-primary { background: ... }`.
4. `4.°`: `business_data.colores?.accent` o `colores?.primary`.
5. `5.°`: Fallback seguro a `#ff6b00` (naranja gastronómico de alta conversión).

---

## 🛒 9. Flujo de Pedidos y Navegación al Menú Digital (`?add=[Plato]`)

1. **Tarjetas de Catálogo (`.service-card`) y Especialidades (`.team-card`)**:
   - Cada botón o enlace minimalista (`.btn-card-book-minimal`, `data-action="order"`) incluye el parámetro `?add=[NombreDelPlato]`.
   - Al pulsar un plato específico, navega a `/menu/:slug?add=[NombreDelPlato]`.
   - Si se pulsa un botón genérico del Hero ("Ver Menú", "Pedir a Domicilio"), navega limpiamente a `/menu/:slug`.
2. **Auto-agregado Inteligente en Menú Digital**:
   - Lee `searchParams.get('add')`.
   - Busca el producto por coincidencia difusa, ejecuta `addToCart(matchedProduct, 1)`, despliega el carrito flotante y notifica: `¡[Plato] añadido a tu pedido! 🛒`.
   - Ejecuta `window.history.replaceState` para limpiar la URL y evitar duplicaciones accidentales en recarga (F5).

---

## ⚡ 10. Protocolo de Sincronización en Vivo y Cosecha Jerárquica

1. **Cosecha Integral Dual (Catálogo + Chef)**:
   - Al importar el negocio, se extraen productos de **ambos** bloques:
     - Catálogo General (`.service-card` / `.services-grid`): 6 platos con títulos, descripciones, precios y categorías (`data-category`).
     - Especialidades de la Casa / Chef (`.team-card` / `.team-grid`): 4 platos estrella o combos de autor.
2. **PROHIBICIÓN de Expresiones Regulares sobre HTML Estructural**:
   - **NUNCA** usar regex para reemplazar cuadrículas HTML completas. Se rompe el anidamiento y la cuadrícula colapsa.
   - Utilizar APIs nativas del DOM o scripts de sincronización selectiva (`mennu7-live-sync`).
3. **Manejo de Excedentes**:
   - Si el negocio cuenta con menos productos que las tarjetas maquetadas, ocultar selectivamente las tarjetas sobrantes (`card.style.display = 'none'`), preservando el balance del grid.

---

## 📸 11. Banco Curado de Recursos Fotográficos Gastronómicos HD

- Queda terminantemente prohibido mostrar platos con fotografías repetidas.
- Cuando no se cuente con imágenes propias del restaurante, consultar el catálogo oficial:
  👉 [RECURSOS_RESTAURANTES.json](file:///c:/Users/Rio%20Belen/negocios_locales/.agents/skills/negocio-local-html/resources/restaurantes/RECURSOS_RESTAURANTES.json)
  👉 [RECURSOS_RESTAURANTES.md](file:///c:/Users/Rio%20Belen/negocios_locales/.agents/skills/negocio-local-html/resources/restaurantes/RECURSOS_RESTAURANTES.md)
