# Ficha de Diseño Visual: Restaurante El Parque - Cocina criolla

**Referencia Visual:** Arquetipo *SLOU FOOD / BURGER HUB (Dark Sizzling Slate `#0B0C0E` & Golden Mustard `#F7A81B`)* con cabecera oscura inmersiva, cinta flotante blanca de categorías con iconos vectoriales SVG limpios, grid de 8 bestsellers nocturnos, bloque sobre nosotros de calidez artesanal y panel de sede/domicilios con Google Maps.

---

## 🎨 1. Paleta Cromática Forense

| Nombre Token | Valor HEX / RGBA | Uso en Interfaz |
|---|---|---|
| `--color-accent` | `#F7A81B` | Amarillo dorado mostaza de alta conversión (botones, badges, precios, acentos) |
| `--color-accent-hover` | `#E0940B` | Estado hover de botones y elementos interactivos |
| `--bg-dark` | `#0B0C0E` | Fondo negro carbón mate del Hero y Header |
| `--bg-dark-card` | `#121316` | Fondo de tarjetas de menú y paneles oscuros |
| `--bg-body` | `#0B0C0E` | Fondo general de la página |
| `--border-dark` | `rgba(255, 255, 255, 0.08)` | Bordes perimetrales suaves de tarjetas |
| `--text-light` | `#FFFFFF` | Títulos y textos principales |
| `--text-muted` | `#94A3B8` | Ingredientes, descripciones y textos secundarios |

---

## ✒️ 2. Tríada Tipográfica

1. **Titulares Display de Impacto:**
   - Familia: `'Bebas Neue', sans-serif` (Google Fonts).
   - Peso: 700 / 800, mayúsculas compactas (*uppercase*), `letter-spacing: 0.04em`.
   - Propósito: Titular Hero (*«AUTÉNTICA COCINA CRIOLLA & PARRILLA»*), títulos de sección (*«NUESTROS FAVORITOS»*) y nombres de platos.

2. **Caligrafía & Scripts de Autor:**
   - Familia: `'Caveat', cursive` (Google Fonts).
   - Estilo: Manuscrito fluido en tono dorado (`font-weight: 700`).
   - Propósito: Subtítulos de sección (*«Los Más Pedidos»*), (*«Nuestra Pasión Culinaria»*), (*«Visítanos o Pide a Casa»*).

3. **Cuerpo de Texto & UI:**
   - Familia: `'Plus Jakarta Sans', sans-serif` (Google Fonts).
   - Pesos: 400, 500, 600, 700, 800.
   - Propósito: Buscador, descripciones de platos, botones y dirección.

---

## 🍲 3. Componentes Visuales del Sitio

### A. Hero Full-Width Bleed Oscuro (Doble Imagen `<picture>`)
- **Fondo:** Pizarra oscura con textura carbón mate (`#0B0C0E`).
- **Fotografía Protagonista:** Panorámica de alta fidelidad (`hero_parque.webp` y `hero_parque_mobile.webp`).
- **Degradado Mínimo al 40% en Escritorio:** El degradado horizontal desaparece al 40%, dejando el 60% derecho donde está la comida 100% libre de capas oscuras con brillo y apetitosidad total.
- **Móvil Calibrado:** Altura natural sin cortes, comida despejada en la mitad superior, y espaciado de ~50px hacia la cinta de categorías sin colisiones.

### B. Cinta Flotante Blanca de Categorías Criollas
- Tarjeta horizontal flotante en blanco puro (`#FFFFFF`) con esquinas redondeadas (`18px-20px`) e iconos vectoriales SVG de línea:
  1. 🍛 **PLATOS CRIOLLOS** (*Bandejas & Tradición*)
  2. 🥩 **PARRILLA & ASADOS** (*Cortes al Carbón*)
  3. 🐟 **PESCADOS & MARISCOS** (*Fresco del Caribe*)
  4. 🍲 **SOPAS & SANCOCHOS** (*Sabor Casero*)
  5. 🥤 **BEBIDAS TÍPICAS** (*Jugos & Refrescos*)
  6. 🍮 **POSTRES CASEROS** (*Dulce Tradición*)

### C. Catálogo "Nuestros Favoritos" (Bestsellers Grid - 8 Platos Criollos)
- Grid de 4 columnas en escritorio (2 filas de 4 platos) y 2 columnas en móvil.
- Tarjetas nocturnas (`#121316`), badges de especialidad, descripciones de ingredientes, precios en COP (`$32.000`) y botón circular `+` conectado a WhatsApp con pedido preconfigurado.
- Botón central `VER CARTA COMPLETA ➔`.

### D. Sección Sobre Nosotros (`#nosotros`)
- Salón de restaurante moderno y acogedor (`photo-1555396273-367ea4eb4db5`), badge de calificación 4.4★ y 4 métricas de autoridad (`100% Sazón Casera`, `<30M Entrega Domicilio`, `+15K Platos Servidos`, `4.4★ Satisfacción Total`).

### E. Sede & Google Maps (`#ubicacion`)
- Panel con dirección física en Cl. 95 #95-59, Apartadó, Antioquia, horarios, WhatsApp y Google Maps interactivo embebido (`z=16`).

### F. Navbar & Footer Nocturno
- Smart Header con fórmula oficial de subtítulo `${negocio.rubro.toUpperCase()} · ${negocio.ubicacion.ciudad.toUpperCase()}` (`RESTAURANTE · APARTADÓ`) + botón dorado `Pedir en Línea`.
- Footer nocturno `#060708` y botón flotante de WhatsApp protegido con `env(safe-area-inset-bottom)`.
