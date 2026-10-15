# 🍔 Banco de Recursos Oficiales: Restaurantes, Comidas Rápidas & Cocina Criolla

Esta carpeta contiene el **Banco de Recursos Oficiales** para el nicho de **Restaurantes, Comidas Rápidas, Pollerías, Hamburgueserías, Pizzerías & Cocina Criolla**, optimizado para el uso inmediato por Inteligencia Artificial y desarrolladores web.

---

## 📁 Estructura de la Carpeta de Recursos

```
.agents/skills/negocio-local-html/resources/restaurantes/
├── RECURSOS_RESTAURANTES.json   # Catálogo estructurado de imágenes HD, paletas, categorías, íconos y Schema
└── RECURSOS_RESTAURANTES.md     # Guía rápida de integración para Agentes IA
```

---

## 🎨 Paleta de Colores Oficial Recomendada (Sizzling Dark Luxury)

| Token | Propósito | Color Hexadecimal |
|---|---|---|
| `--color-primary` | Acento Principal de Fuego / Sabor | `#FF6B00` (Naranja Fuego) |
| `--color-accent` | Botones & Destacados de Menú | `#FF6B00` (Sizzling Orange) |
| `--color-secondary` | Insignias & Toque Crujiente | `#FFB700` (Amarillo Oro) |
| `--bg-dark` | Fondo Principal Inmersivo | `#0F1210` (Ébano Carbón) |
| `--bg-card` | Tarjetas de Menú y Contenedores | `#1A1D1B` (Obsidiana Grafito) |
| `--border-soft` | Bordes translúcidos elegantes | `rgba(255, 255, 255, 0.08)` |
| `--text-main` | Tipografía principal | `#FFFFFF` |
| `--text-muted` | Textos secundarios y descripciones | `#9CA3AF` |

> ⚠️ **Regla de Oro Anti-Oscuridad (`isDarkTone`)**: Queda estrictamente prohibido asignar fondos oscuros como color de acento o de botones. El botón debe contrastar al 100% con el fondo.

---

## 🍗 Catálogo de Íconos FontAwesome 6 por Categorías

1. **Todos**: `<i class="fa-solid fa-utensils"></i>`
2. **Pollo Crujiente / Broaster**: `<i class="fa-solid fa-drumstick-bite"></i>`
3. **Hamburguesas**: `<i class="fa-solid fa-burger"></i>`
4. **Alitas & Picante**: `<i class="fa-solid fa-fire"></i>`
5. **Cocina Criolla / Platos Fuertes**: `<i class="fa-solid fa-bowl-food"></i>`
6. **Pizzas**: `<i class="fa-solid fa-pizza-slice"></i>`
7. **Parrilla, Carnes & Asados**: `<i class="fa-solid fa-bacon"></i>`
8. **Combos & Picadas**: `<i class="fa-solid fa-box-open"></i>`
9. **Bebidas & Jugos**: `<i class="fa-solid fa-wine-glass"></i>`
10. **Postres & Helados**: `<i class="fa-solid fa-ice-cream"></i>`

---

## 🚫 Lista Negra de Exclusión de Productos (`isProductTitle`)

Al extraer menús desde el HTML, **descartar estrictamente**:
- Sellos de confianza y garantías: *Entrega Térmica VIP, Cortes Seleccionados, Higiene & Seguridad, Satisfacción 100%, Recetas Criollas*.
- Métricas: *15+ Años, 60K+ Pedidos, <30m Entrega Rápida, 5.0★*.
- Bloques de contacto y horarios: *Dirección Física, Horario de Atención, Teléfono, WhatsApp*.

---

## 📐 Regla Anti-Corte en Flexbox para Categorías

Para la barra horizontal de categorías en desktop y móvil:
- **Mandatorio:** `justify-content: flex-start !important;` en `.menu-categories-scroll`.
- **Prohibido:** `justify-content: center;` con `overflow-x: auto;` (provoca que la pestaña "Todos" se corte a la izquierda sin poder ser recuperada).
- **En Móvil (< 768px):** Desplazamiento fluido horizontal con `scroll-snap-type: x mandatory; flex-wrap: nowrap !important;`.
- **Límite de Exposición:** Máximo 6 platos por pestaña con botón `🍽️ VER CARTA COMPLETA (X PLATOS)` enlazando a `/menu/:slug`.
