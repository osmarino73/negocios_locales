# Ficha de Diseño Visual: Matanga Burger Ortiz

**Referencia Visual:** Clonación forense del arquetipo *QuickBite Fast Food / Clean Fresh Fast Food*.

---

## 🎨 1. Paleta Cromática Forense

| Nombre Token | Valor HEX | Uso en Interfaz |
|---|---|---|
| `--color-primary` | `#C9182B` | Botón principal "Pedir Ahora", acento de titulares, badges de promo roja |
| `--color-primary-hover` | `#A81323` | Estados hover de botones primarios rojos |
| `--color-accent` | `#F5A623` | Botones de añadir al carrito, botón del header "Pedir Online", banner de urgencia |
| `--color-accent-hover` | `#D98200` | Estados hover de botones dorados |
| `--color-secondary` | `#EAA221` | Estrellas 5★ y squiggles decorativos |
| `--bg-page` | `#FFFFFF` | Fondo limpio principal de la página |
| `--bg-alt` | `#FAF9F6` | Fondo crema marfil suave para contraste en catálogo |
| `--bg-promo-red` | `#C9182B` | Fondo sólido del bloque "Mega Deal" en sección split |
| `--bg-dark-footer`| `#111215` | Fondo oscuro carbón para el pie de página |
| `--text-main` | `#18191B` | Tipografía principal de lectura |
| `--text-muted` | `#64748B` | Textos secundarios y descripciones |

---

## ✒️ 2. Tríada Tipográfica

1. **Titulares Display Impacto:**
   - Familia: `'Bebas Neue', sans-serif` (Google Fonts).
   - Peso: 700 / 800, mayúsculas compactas (*uppercase*), `letter-spacing: 0.04em`.
   - Propósito: Titular de impacto Hero (`ANTOJO TOTAL. PASIÓN REAL.`), encabezados de sección y títulos del menú.

2. **Acentos & Scripts:**
   - Familia: `'Caveat', cursive` (Google Fonts).
   - Estilo: Manuscrito dinámico, `font-weight: 700`, color `--color-primary` o `--color-accent`.
   - Propósito: *«Comidas Rápidas · Gran Sabor»*, *«Nuestra Carta»*, *«Lo Mejor de Apartadó»*.

3. **Cuerpo de Texto & Botones:**
   - Familia: `'Plus Jakarta Sans', sans-serif` (Google Fonts).
   - Pesos: 500, 600, 700, 800.
   - Propósito: Descripciones de productos, botones de llamada a la acción y datos de contacto.

---

## 🍔 3. Componentes Visuales Inspirados en la Referencia

### A. Hero Inmersivo Full-Width Bleed Brillante (Doble Imagen Responsive <picture>)
- **Ambiente:** Comedor acogedor iluminado con luz natural y desenfoque bokeh suave.
- **Fotografía Protagonista Escritorio (16:9):** Combo fast food completo: doble hamburguesa artesanal jugosa, bebida helada y canastilla de papas fritas doradas sobre mesa de madera rústica ([hero_matanga.webp](file:///c:/Users/Rio%20Belen/negocios_locales/matanga_burger_ortiz/hero_matanga.webp)).
- **Fotografía Protagonista Móvil (9:16):** Vertical de alta fidelidad con doble smash burger con cheddar derretido, canastilla metálica de papas y vaso escarchado de cola con rodaja de limón en el tercio superior/medio, dejando la mesa de pizarra continua en la base para albergar textos y botones sin colisiones ([hero_matanga_mobile.webp](file:///c:/Users/Rio%20Belen/negocios_locales/matanga_burger_ortiz/hero_matanga_mobile.webp)).
- **Degradado Mínimo al 38%–42% (`.hero-bg-overlay`)**: Sin veladuras lechosas ni capas verticales continuas. El degradado horizontal pasa a 100% transparente en el 42%, dejando el 60% central y derecho con nitidez y colores 100% vivos. Legibilidad asegurada mediante `text-shadow: 0 1px 8px rgba(255, 255, 255, 0.95);`.
- **Sello Flotante:** Insignia circular con borde punteado: *«HECHO FRESCO · HECHO PARA TI»*.
- **Acciones:** Botón primario rojo con ícono de bolsa/WhatsApp + Botón secundario contorno.
- **Garantías Integradas:** 4 íconos lineales con texto (Domicilio Rápido, Ingredientes Frescos, Mejores Precios, 100% Satisfacción).

### B. Catálogo "Los Más Pedidos" (Most Loved Menu)
- Fondo crema suave `#FAF9F6`.
- Encabezado con badge rojo "POPULAR PICKS", título display y squiggle dorado.
- Grid de 6 productos: fotografía nítida, título en display, precio en rojo vibrante y botón ámbar `AGREGAR <i class="fa-solid fa-cart-shopping"></i>`.
- Botón central al pie `VER CARTA COMPLETA ➔`.

### C. Bloque Split: Mega Deal (Promo) + ¿Por Qué Elegirnos?
- **Lado Izquierdo (Fondo Rojo `#C9182B`):** Banner promocional "MEGA PROMO MATANGA" con badge amarillo explosivo "SOLO $26.000", detalle de combo y botón blanco de pedido rápido.
- **Lado Derecho (Fondo Blanco Limpio):** "Calidad en Cada Bocado. Rapidez en Cada Entrega." con 4 métricas de autoridad con íconos temáticos (50+ Platos, 10+ Años, 100% Fresco, 5.000+ Clientes).

### D. Banner Amarillo de Urgencia ("¿Con Hambre? ¡Te lo Llevamos Ya!")
- Barra amarilla dorada `#F5A623` con ícono de bolsa de compras, copy persuasivo de entrega inmediata y botón rojo directo a WhatsApp.

### E. Ubicación & Domicilios
- Panel con dirección Cl. 100F #108-133 (Barrio Ortiz) en Apartadó, teléfono directo `(604) 829 8050`, horarios y Google Maps interactivo georreferenciado (`z=16`).

---

## 📱 4. Reglas Responsivas (< 768px)
- Hero móvil: `min-height: 720px !important;` con imagen visible y textos centrados en la base.
- Header móvil: Logotipo tipográfico puro sin menú saturado.
- Grid de menú: **2 columnas balanceadas**.
- Botón flotante de WhatsApp protegido de cortes con `env(safe-area-inset-bottom)`.
