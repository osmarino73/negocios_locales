# Ficha de Diseño Forense: Sarón Spa Centro de Estética y Belleza

Manual de identidad visual, arquitectura UI y componentes forenses clonados a partir de la referencia **NOVA MED SPA**, adaptado a la arquitectura oficial de 6 secciones de `AGENTS.md`.

---

## 🎨 1. Paleta de Colores Forense (NOVA MED SPA Style)

| Token CSS | Color HEX | Rol / Uso en la Interfaz |
| :--- | :--- | :--- |
| `--bg-dark-base` | `#141312` | Fondo principal oscuro para Hero, Sobre Nosotros y Footer. |
| `--bg-dark-surface` | `#1c1a18` | Fondo de tarjetas sobre fondos oscuros y contenedores elevados. |
| `--bg-light-base` | `#f6f3ed` | Fondo contrastante cálido Cashmere Cream para la sección de Servicios y Resultados. |
| `--bg-light-surface`| `#ffffff` | Fondo de tarjetas sobre fondos claros. |
| `--color-nude-sand` | `#d8c7b5` | Acento primario Sand Nude / Taupe para botones principales y badges. |
| `--color-nude-light`| `#ede3d7` | Tono claro para textos de script / glows sutiles. |
| `--color-nude-dark` | `#9c8774` | Tono oscuro para bordes y acentos secundarios. |
| `--border-dark` | `rgba(216, 199, 181, 0.18)` | Bordes sutiles en secciones oscuras. |
| `--border-light` | `rgba(20, 19, 18, 0.08)` | Bordes sutiles en secciones claras. |
| `--text-dark-primary`| `#fbf9f6` | Titulares y textos principales sobre fondo oscuro. |
| `--text-dark-muted` | `#b5ada4` | Textos secundarios y descripciones sobre fondo oscuro. |
| `--text-light-primary`| `#1a1816` | Titulares sobre fondo claro (Espresso profundo). |
| `--text-light-muted`| `#6b645c` | Textos secundarios sobre fondo claro. |

---

## 🔤 2. Tipografía Editorial Forense

- **Titulares Display (`--font-display`)**: `Playfair Display`, `Cormorant Garamond`, Georgia, serif (pesos `500`, `600`, `700`).
- **Cuerpo y UI (`--font-body`)**: `Plus Jakarta Sans`, system-ui, sans-serif (pesos `400`, `500`, `600`, `700`).
- **Eyebrows Tracked**: `text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; font-weight: 700;`.

---

## 🏛️ 3. Estructura Oficial de Secciones (6 Secciones Mandatorias)

1. **Smart Header**: Sin barra superior promocional. Móvil: Logo a la izquierda + Botón conciso **«Agendar»** a la derecha.
2. **`#inicio` (Hero Full-Width Bleed)**: Modelo de estética a la derecha con degradado translúcido hacia la izquierda. Desktop `640px` / Móvil `720px !important`. Copywriting cercano y cálido.
3. **Barra de Pilares / Garantías (5 Sellos)**: Seguridad clínica, tecnología no invasiva, atención VIP, privacidad total y resultados garantizados. Móvil: Carrusel horizontal Scroll Snap en 1 sola fila con auto-scroll suave (3s) y pausa táctil.
4. **`#servicios` (Catálogo de Tratamientos)**: Fondo Cashmere Cream `#f6f3ed`. Grid de 6 servicios con fotos 1:1, píldoras (`⏱️ Tiempo`, `✨ Técnica`, `💰 Precio COP`) y botón full-width `btn-card-book`. Móvil: estrictamente **2 columnas**.
5. **`#nosotros` (Sobre Nosotros & Especialistas — Estándar Crismar)**:
   - Bloque Editorial: Grid 2 columnas (1 col móvil) con foto del spa/cabina + badge VIP flotante + titular editorial + 4 métricas de autoridad (en 2 columnas en móvil) + botón directo.
   - Bloque Profesionales: Especialistas certificadas con avatares circulares al 50%, marco sand nude, badges de nivel, 5 estrellas y botón directo a WhatsApp (en 2 columnas en móvil).
6. **`#ubicacion` (Mapa & Contacto)**: Panel con Cl. 104 #101 - 24, Apartadó + Google Maps interactivo georreferenciado (`z=16`).
7. **Footer Principal**: Módulo de reserva `Agenda Tu Cita VIP` con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**: Posición fija con Safe Area, tooltip oculto en móvil y `z-index: 99999`.
