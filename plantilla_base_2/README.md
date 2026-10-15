# 🍖 Plantilla Base 2 — Guía Oficial (Arquetipo Dark Sizzling Slate & Golden Mustard)

Plantilla maestra HTML5/CSS3 universal, 100% autónoma (*standalone*), parametrizada con tokens dinámicos `{{TOKEN}}` basada en el arquetipo de alta conversión **Dark Sizzling Slate & Golden Mustard** (ideal para restaurantes criollos, asaderos, parrilladas, hamburgueserías gourmet y gastronomía nocturna).

---

## 🎨 Características Distintivas de la Plantilla Base 2

1. **Tríada Tipográfica de Autor**:
   - `Bebas Neue`: Titulares Display H1/H2 y nombres de platos en mayúsculas de alto impacto.
   - `Caveat`: Caligrafía y signature script para subtítulos de sección (*«Los Más Pedidos»*, *«Nuestra Pasión Culinaria»*, *«Visítanos o Pide a Casa»*).
   - `Plus Jakarta Sans`: Cuerpo, descripciones de ingredientes y elementos de UI.

2. **Cinta Flotante Blanca de Categorías (`.categories-floating-section`)**:
   - Tarjeta blanca horizontal superpuesta entre el Hero y el menú con iconos vectoriales SVG de línea y etiquetas descriptivas.
   - **En Móvil (< 768px)**: Carrusel horizontal deslizable (*Scroll Snap*) con chips flotantes individuales para selección ágil con el dedo.

3. **Catálogo de Favoritos / Bestsellers Grid**:
   - **4 Columnas en Escritorio (`repeat(4, 1fr)`)** y **2 Columnas en Móvil**.
   - Tarjetas oscuras `.bestseller-card` con `data-product-title`, badges de especialidad (*«MÁS PEDIDO»*, *«CORTE PREMIUM»*), descripciones de ingredientes, precios sin sufijo ISO COP (`$32.000`) y botón circular `+` conectado a WhatsApp con pedido preconfigurado.
   - Buscador interactivo en tiempo real integrado en la cabecera del catálogo.

4. **Sobre Nosotros con Ambiente y Métricas de Autoridad**:
   - Grid a 2 columnas con fotografía del salón/cocina, badge flotante de calificación en estrellas y fila de 4 métricas de autoridad (`100% Sazón Casera`, `<30M Entrega Domicilio`, `+15K Platos Servidos`, `4.5★ Satisfacción Total`).

5. **Sede, Domicilios & Google Maps**:
   - Panel de información con dirección física, horarios, botón directo de georreferenciación y mapa embebido interactivo.

6. **Smart Header & Footer Nocturno**:
   - Logotipo tipográfico puro con subtítulo de marca (`.brand-title` y `.brand-subtitle`).
   - Botón de encabezado `PEDIR EN LÍNEA`.
   - Footer modular de 4 columnas aisladas (`.footer-col`) con botón conciso `PEDIR`.

---

## 🔑 Diccionario de Tokens Dinámicos

| Token | Descripción | Ejemplo de Valor |
| :--- | :--- | :--- |
| `{{BUSINESS_NAME}}` | Nombre comercial del restaurante | `Restaurante El Parque` |
| `{{PRIMARY_COLOR}}` | Color primario en HEX | `#F7A81B` o `#D97706` |
| `{{HERO_BADGE}}` | Subtítulo / Eyebrow del Hero | `🔥 AUTÉNTICA COCINA CRIOLLA · APARTADÓ` |
| `{{HERO_SLOGAN}}` | Titular principal H1 | `AUTÉNTICA COCINA CRIOLLA & PARRILLA` |
| `{{HERO_SUBTITLE}}` | Descripción persuasiva del Hero | `Tradición, sazón casera y cortes jugosos al carbón...` |
| `{{STORY_TITLE}}` | Titular de Sobre Nosotros | `TRADICIÓN GASTRONÓMICA CON SABOR A HOGAR` |
| `{{STORY_P1}}` | Párrafo 1 de historia | `Preservamos las recetas tradicionales...` |
| `{{STORY_P2}}` | Párrafo 2 de ingredientes y amor | `Seleccionamos ingredientes locales frescos...` |
| `{{STAT1_VALUE}}`, `{{STAT1_LABEL}}` | Métrica 1 de autoridad | `100%`, `Sazón Casera` |
| `{{STAT2_VALUE}}`, `{{STAT2_LABEL}}` | Métrica 2 de rapidez | `< 30 min`, `Entrega Domicilio` |
| `{{STAT3_VALUE}}`, `{{STAT3_LABEL}}` | Métrica 3 de experiencia | `15+ Años`, `Platos Servidos` |
| `{{STAT4_VALUE}}`, `{{STAT4_LABEL}}` | Métrica 4 de calificación | `4.8 ★`, `Google Reviews` |
| `{{ADDRESS}}` | Dirección física | `Cl. 95 #95-59` |
| `{{CITY}}` | Ciudad | `Apartadó` |
| `{{HORARIO}}` | Horarios de atención | `Lunes a Domingo: 11:30 AM – 10:30 PM` |
| `{{WHATSAPP_LINK}}` | Enlace de WhatsApp con mensaje | `https://wa.me/573108223276?text=...` |
| `{{GOOGLE_MAPS_URL}}` | URL de Google Maps | `https://www.google.com/maps/place/...` |
| `{{MAP_EMBED_URL}}` | URL iframe del mapa embebido | `https://maps.google.com/maps?q=...` |
| `{{SLUG}}` | Identificador de URL | `restaurante-el-parque` |

---

## 🚀 Diferencias Clave: Plantilla Base 1 vs. Plantilla Base 2

| Característica | Plantilla Base 1 | Plantilla Base 2 |
| :--- | :--- | :--- |
| **Arquetipo Visual** | Asador / Fogón Criollo Clásico | Dark Sizzling Slate & Golden Mustard |
| **Tipografía de Acento** | Solo Bebas Neue + Plus Jakarta Sans | Bebas Neue + **Caveat (Firma/Script)** + Plus Jakarta Sans |
| **Selector de Categorías** | Barra de pills horizontal | **Cinta Blanca Flotante con Iconos SVG Vectoriales** |
| **Grid de Menú** | 3 Columnas en Escritorio (Full Bleed) | **4 Columnas en Escritorio (Tarjetas Bestsellers)** |
| **Botón de Tarjeta** | Enlace horizontal `AGREGAR` | Botón circular flotante `+` / WhatsApp directo |
