# Ficha de Diseño Visual: Slou Food

**Referencia Visual:** Clonación forense del arquetipo *Burger Hub / Dark Sizzling Gourmet & Cheddar Gold*.

---

## 🎨 1. Paleta Cromática Forense

| Nombre Token | Valor HEX | Uso en Interfaz |
|---|---|---|
| `--color-accent` | `#F7A81B` | Acento dorado cheddar, botones de pedido, precios, badges y squiggles |
| `--color-accent-hover` | `#DE9310` | Estados hover de botones dorados |
| `--color-secondary` | `#FFFFFF` | Textos display principales y contrastes |
| `--bg-dark` | `#121316` | Fondo obsidian / carbón mate de la página |
| `--bg-card` | `#1A1C22` | Fondo de tarjetas de menú y paneles oscuros |
| `--bg-card-border` | `rgba(255, 255, 255, 0.08)` | Bordes sutiles perimetrales de tarjetas |
| `--bg-floating-pills` | `#FFFFFF` | Fondo de la cinta flotante de categorías |
| `--bg-banner-gold` | `#F7A81B` | Fondo sólido del banner promocional "Save Big / 15% OFF" |
| `--text-main` | `#FFFFFF` | Títulos y textos principales |
| `--text-muted` | `#94A3B8` | Descripciones, ingredientes y textos secundarios |

---

## ✒️ 2. Tríada Tipográfica Forense

1. **Titulares Display de Impacto:**
   - Familia: `'Bebas Neue', sans-serif` (Google Fonts).
   - Peso: 700 / 800, mayúsculas compactas (*uppercase*), `letter-spacing: 0.04em`.
   - Propósito: Titular Hero (`TASTE THE EXTRAORDINARY, FAST & FRESH`), encabezados de sección (`OUR BESTSELLERS`) y nombres de combos.

2. **Acentos & Scripts de Autor:**
   - Familia: `'Caveat', cursive` (Google Fonts).
   - Estilo: Manuscrito esbelto en tono dorado `#F7A81B` (`font-weight: 700`).
   - Propósito: Frase superior de autor (*«Your Ultimate Flavor Journey»*), subtítulo de categoría (*«Popular Picks»*).

3. **Cuerpo de Texto & Botones:**
   - Familia: `'Plus Jakarta Sans', sans-serif` (Google Fonts).
   - Pesos: 400, 500, 600, 700, 800.
   - Propósito: Descripciones de productos, botones de llamada a la acción y datos de contacto.

---

## 🍔 3. Componentes Visuales Inspirados en la Referencia

### A. Hero Full-Width Bleed Oscuro (Doble Imagen Responsive <picture>)
- **Fondo:** Pizarra oscura con textura carbón mate (`#121316`).
- **Fotografía Protagonista Escritorio (16:9):** En el lado derecho, double smash burger artesanal con queso cheddar derretido, cebollas caramelizadas, vaso de papas rústicas y cola helada ([hero_slou.webp](file:///c:/Users/Rio%20Belen/negocios_locales/slou_food/hero_slou.webp)).
- **Fotografía Protagonista Móvil (9:16):** Vertical en alta fidelidad con double smash burger y bebida helada en la mitad superior, y mesa de pizarra oscura continua en la base para albergar textos y botones con total holgura visual ([hero_slou_mobile.webp](file:///c:/Users/Rio%20Belen/negocios_locales/slou_food/hero_slou_mobile.webp)).
- **Sello Circular Flotante:** Insignia dorada con texto *«100% FRESCO & ARTESANAL»*.
- **Acciones:** Botón dorado de WhatsApp *"PEDIR A DOMICILIO"* + enlace minimalista *"EXPLORAR MENÚ"*.
- **Garantías Integradas:** 3 sellos lineales con íconos amarillos: Entrega Rápida (Apartadó), Calidad Prémium (100% Fresco), Grandes Ofertas (Cada semana).

### B. Cinta Flotante de Categorías (Floating White Ribbon)
- Bloque blanco flotante `#FFFFFF` con esquinas redondeadas y sombra perimetral.
- 6 categorías con iconos estilizados:
  1. BURGERS (Gourmet & Juicy)
  2. FRIES (Seasoned & Crispy)
  3. PIZZA (Artisanal & Hot)
  4. DRINKS (Chill & Refreshing)
  5. CHICKEN (Crispy & Spicy)
  6. DESSERTS (Sweet Treats)
- Interacción hover y scroll snap fluido en móviles.

### C. Sección "OUR BESTSELLERS" (Catálogo Destacado)
- Encabezado con script dorado *«Popular Picks»*, título display `OUR BESTSELLERS`.
- Grid de 4 columnas en escritorio y 2 columnas en móvil:
  - Tarjeta oscura `#1A1C22` con borde fino.
  - Fotografía nítida en relación armónica.
  - Título en mayúsculas, descripción de ingredientes en gris `#94A3B8`.
  - Precio en dorado `#F7A81B` (ej. `$24.000`) y botón circular dorado con `+` para añadir a WhatsApp.
- Botón central dorado: *"VIEW FULL MENU ➔"*.

### D. Banner Promocional "FIRST TIME? SAVE BIG!"
- Tarjeta rectangular en dorado brillante `#F7A81B` con bordes redondeados.
- Gráfico de reloj de urgencia a la izquierda: *"A SPECIAL TASTE AWAITS: FIRST TIME? SAVE BIG!"*.
- Centro: Badge grande con *"GET 15% OFF ON YOUR FIRST ORDER"*.
- Cupón en caja negra: `SLOU15`.
- Ilustración/icono de repartidor en scooter amarillo a la derecha.

### E. Navegación Móvil & Smart Header
- Botón de menú hamburguesa superior (`.btn-mobile-menu`) en barra superior.
- Panel desplegable lateral (*slide drawer*) con fondo oscuro `#121316` y enlaces con acento dorado.
- Degradado inferior minimizado en móvil para mantener la hamburguesa 100% nítida y visible arriba.
