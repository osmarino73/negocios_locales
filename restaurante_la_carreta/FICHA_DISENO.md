# Ficha de Diseño Visual: Restaurante La Carreta

**Referencia Visual:** Arquetipo *Burger Hub / Dark Sizzling Fast Food & Golden Mustard (`#F7A81B` / `#FFB700`)* con cabecera oscura inmersiva, cinta flotante blanca de categorías, tarjetas de bestsellers oscuras y banner de entrega rápida amarillo vibrante.

---

## 🎨 1. Paleta Cromática Forense

| Nombre Token | Valor HEX / RGBA | Uso en Interfaz |
|---|---|---|
| `--color-accent` | `#F7A81B` | Amarillo mostaza / dorado brasa de alta conversión (botones principales, badges, precios, acentos) |
| `--color-accent-hover` | `#E0940B` | Estado hover de botones y elementos interactivos |
| `--bg-dark` | `#0B0C0E` | Fondo negro carbón mate del Hero y Header |
| `--bg-dark-card` | `#121316` | Fondo de tarjetas de menú y paneles oscuros |
| `--bg-body` | `#0B0C0E` | Fondo general de la página |
| `--bg-banner-yellow` | `#FFB700` | Fondo del banner de ofertas especiales |
| `--border-dark` | `rgba(255, 255, 255, 0.08)` | Bordes suaves perimetrales de tarjetas |
| `--text-light` | `#FFFFFF` | Títulos y textos principales |
| `--text-muted` | `#94A3B8` | Ingredientes, descripciones y textos secundarios |

---

## ✒️ 2. Tríada Tipográfica

1. **Titulares Display de Impacto:**
   - Familia: `'Bebas Neue', sans-serif` (Google Fonts).
   - Peso: 700 / 800, mayúsculas compactas (*uppercase*), `letter-spacing: 0.04em`.
   - Propósito: Titular Hero (*«BUENA COMIDA, RÁPIDA & FRESCA»*), títulos de sección (*«NUESTROS FAVORITOS»*) y nombres de platos.

2. **Caligrafía & Scripts de Autor:**
   - Familia: `'Caveat', cursive` (Google Fonts).
   - Estilo: Manuscrito fluido en tono dorado (`font-weight: 700`).
   - Propósito: Frase superior (*«Sabor Que Satisface Tu Antojo»*), subtítulo (*«Los Más Pedidos»*).

3. **Cuerpo de Texto & UI:**
   - Familia: `'Plus Jakarta Sans', sans-serif` (Google Fonts).
   - Pesos: 400, 500, 600, 700, 800.
   - Propósito: Buscador, descripciones de platos, botones y dirección.

---

## 🍔 3. Componentes Visuales del Sitio

### A. Hero Full-Width Bleed Oscuro (Doble Imagen `<picture>`)
- **Fondo:** Pizarra oscura con textura carbón mate (`#0B0C0E`).
- **Fotografía Protagonista Escritorio (16:9):** Hamburguesa artesanal doble con queso derretido, papas en cono y bebida helada (`hero_carreta.webp`).
- **Fotografía Protagonista Móvil (9:16):** Vertical de alta fidelidad centrada (`hero_carreta_mobile.webp`).
- **Degradado Mínimo al 40%:** El degradado horizontal desaparece en el 40%, dejando el 60% derecho donde está la comida 100% libre de capas oscuras con brillo y nitidez total.
- **Acciones:** Botón primario dorado `PEDIR AHORA ➔` + Botón con ícono `VER NUESTRO MENÚ`.
- **Sellos de Confianza:** Franja de 3 sellos integrados (*Envío Rápido, Máxima Calidad, Ofertas Únicas*).

### B. Cinta Flotante Blanca de Categorías
- Tarjeta horizontal flotante en blanco puro (`#FFFFFF`) con esquinas redondeadas (`20px`) e iconos de línea (*Hamburguesas, Papas, Pizzas, Bebidas, Pollo, Postres*) con filtrado en vivo.

### C. Catálogo "Nuestros Favoritos" (Bestsellers Grid)
- Grid de tarjetas oscuras (`#121316`) con fotos reales del sector restaurante (`RECURSOS_RESTAURANTES.json`), badges de estado, descripción, precio en dorado y botón circular `+` conectado a WhatsApp.
- Botón central `VER CARTA COMPLETA ➔`.

### D. Banner Promocional Amarillo («¿Tienes Hambre? ¡Llegamos Rápido!»)
- Tarjeta panorámica en amarillo dorado `#FFB700` con texto en negro profundo:
  - Ícono de reloj y titular de entrega rápida.
  - Descuento: `HASTA 20% OFF EN TU PRIMER PEDIDO`.
  - Chip con cupón copiable `CÓDIGO: CARRETA20`.
  - Gráfico de domiciliario en motocicleta + botón directo a WhatsApp.

### E. Sección Sobre Nosotros (`#nosotros`)
- Salón de restaurante acogedor con iluminación cálida gourmet (`photo-1555396273-367ea4eb4db5`), badge de calificación 4.3★ y 4 métricas de autoridad.

### F. Sede & Google Maps (`#ubicacion`)
- Panel con dirección física en Cra. 102 #99-2, horarios, WhatsApp y Google Maps interactivo embebido (`z=16`).

### G. Navbar & Footer Nocturno
- Header limpio sin píldoras extrañas: únicamente logotipo tipográfico puro con fórmula oficial de subtítulo `${negocio.rubro.toUpperCase()} · ${negocio.ubicacion.ciudad.toUpperCase()}` (`RESTAURANTE · APARTADÓ`) + enlaces + botón dorado `Pedir en Línea`.
- Footer nocturno `#060708` con subtítulo estandarizado, enlaces de navegación y botón flotante de WhatsApp protegido con `env(safe-area-inset-bottom)`.
