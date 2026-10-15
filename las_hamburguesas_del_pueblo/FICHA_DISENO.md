# Ficha de Diseño Visual: Las Hamburguesas del Pueblo

**Referencia Visual:** Clonación forense del arquetipo editorial *Burger Factory / Dark Sizzling Gourmet*.

---

## 🎨 1. Paleta Cromática Forense

| Nombre Token | Valor HEX | Uso en Interfaz |
|---|---|---|
| `--color-accent` | `#E89C1F` | Botón CTA principal, firmas de autor, acentos del titular, precios destacados |
| `--color-accent-hover` | `#D48A15` | Estados hover de botones primarios y enlaces interactivos |
| `--color-secondary` | `#FFB11B` | Insignias de confianza, estrellas 5★ y badges promocionales |
| `--bg-dark` | `#0E0F12` | Fondo inmersivo del Hero, barra de pilares, footer y combo banner |
| `--bg-card-dark` | `#181A1E` | Contenedores oscuros, modales y panel de ubicación |
| `--bg-cream` | `#F7F5F0` | Fondo liso contrastante de la sección de Catálogo de Hamburguesas |
| `--bg-card-white`| `#FFFFFF` | Tarjetas blancas limpias con sombra suave en el catálogo |
| `--bg-gold-about`| `#E89C1F` | Fondo sólido del bloque derecho en la sección "Sobre Nosotros" |
| `--text-light` | `#FFFFFF` | Texto principal en secciones oscuras |
| `--text-dark` | `#1A1D20` | Texto principal en sección de catálogo blanco/crema |
| `--text-muted` | `#9CA3AF` | Descripciones secundarias en fondos oscuros |

---

## ✒️ 2. Tríada Tipográfica

1. **Titulares Display Impacto:**
   - Familia: `'Bebas Neue', sans-serif` (Google Fonts).
   - Peso: 700 / 800, mayúsculas compactas (*uppercase*), `letter-spacing: 0.04em`.
   - Propósito: Titular de impacto Hero (`BURGERS DONE RIGHT` ➔ `LAS HAMBURGUESAS DEL PUEBLO`), encabezados de sección y títulos de combo.

2. **Firma Manuscrita de Autor:**
   - Familia: `'Caveat', cursive` (Google Fonts).
   - Estilo: Cursiva caligráfica artesanal, `font-weight: 700`, color `--color-accent`.
   - Propósito: *«Sabor de Pueblo. Hechas con Pasión. ⚡»*, *«Nuestra Carta»*, *«¡Hazlo Combo!»*, *«Sobre Nosotros»*.

3. **Cuerpo de Texto, Precios & UI:**
   - Familia: `'Plus Jakarta Sans', sans-serif` (Google Fonts).
   - Pesos: 400 (regular), 600 (semi-bold), 700 (bold).
   - Propósito: Descripciones de ingredientes, botones de llamada a la acción, inputs del buscador y especificaciones.

---

## 🍔 3. Componentes Visuales Inspirados en la Referencia

### A. Hero Inmersivo Full-Bleed (Doble Imagen Responsive <picture>)
- **Fondo:** `#0E0F12` con textura suave ahumada y degradado lateral hacia la imagen de la hamburguesa.
- **Fotografía Protagonista Escritorio (16:9):** Hamburguesa gourmet ultra jugosa con queso cheddar derretido, tocineta crujiente, vegetales frescos y pan brioche con ajonjolí en ángulo 3/4 ([hero_burger.webp](file:///c:/Users/Rio%20Belen/negocios_locales/las_hamburguesas_del_pueblo/hero_burger.webp)).
- **Fotografía Protagonista Móvil (9:16):** Vertical de alta fidelidad con doble smash artesanal rebosante de cheddar derretido, tocineta ahumada, papas doradas y gaseosa con pitillo en el tercio superior/medio, sobre mesa de pizarra oscura continua en la base para albergar textos y botones con máxima nitidez ([hero_burger_mobile.webp](file:///c:/Users/Rio%20Belen/negocios_locales/las_hamburguesas_del_pueblo/hero_burger_mobile.webp)).
- **Sello Flotante:** Insignia circular dorada con relieve: *«100% CARNE DE RES · SABOR ARTESANAL · NUNCA CONGELADA»*.
- **Acciones:** Botón primario mostaza dorado con icono de WhatsApp + Botón píldora traslúcido para ver menú.
- **Social Proof:** ⭐⭐⭐⭐⭐ `4.8 (Más de 500+ reseñas de clientes en Urabá)`.

### B. Barra de Pilares de Sabor
- Franja oscura `#141619` con 4 sellos dorados:
  1. *Calidad Prémium (100% carne seleccionada).*
  2. *Papas Rústicas (Crujientes y doradas con sazón de la casa).*
  3. *Malteadas & Sodas (Cremosas y refrescantes).*
  4. *Ingredientes del Día (Pan brioche horneado diario).*
- En móvil: Carrusel horizontal deslizable (*Scroll Snap*).

### C. Catálogo de Menú "Los Favoritos del Pueblo"
- Contraste visual de alta gama con fondo marfil/crema `#F7F5F0`.
- Buscador reactivo pill `#menuSearchInput`.
- Barra de Categorías en carrusel horizontal con regla anti-corte `justify-content: flex-start !important;`.
- Tarjetas blancas limpias `#FFFFFF` con fotografía nítida, título en display condensed, ingredientes legibles, precio en amarillo oro y botón circular `+` / `PEDIR ➔` a WhatsApp.
- Botón CTA minimalista al pie: `🍽️ VER CARTA COMPLETA (12 PLATOS)` hacia el menú interactivo.

### D. Bloque Split Editorial: Promo Combo + Sobre Nosotros
- Replicación exacta del bloque de la referencia:
  - **Lado Izquierdo (Fondo Carbón `#121316`):** *«¡Hazlo COMBO!»* con fotografía apetitosa de hamburguesa + papas + gaseosa fría por un valor adicional mínimo (`+$6.000`).
  - **Lado Derecho (Fondo Oro Mostaza `#E89C1F`):** *«BURGERS CON AUTÉNTICA PASIÓN»* en tipografía display negra, descripción de historia y amor por la cocina artesanal, botón negro `NUESTRA HISTORIA >` y sello circular con espátulas cruzadas *«INGREDIENTES REALES · HAMBURGUESAS DE VERDAD»*.

---

## 📱 4. Reglas Responsivas (< 768px)
- Altura del Hero móvil: `min-height: 720px !important;`.
- Header: Solo Logotipo tipográfico con el 100% del ancho, sin colisiones ni cortes.
- Categorías: Deslizamiento horizontal en una sola fila (`flex-wrap: nowrap !important; overflow-x: auto;`).
- Grid de hamburguesas en **2 columnas balanceadas**.
- Botón flotante de WhatsApp protegido de cortes inferiores con `env(safe-area-inset-bottom)`.
