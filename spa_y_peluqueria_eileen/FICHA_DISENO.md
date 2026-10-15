# 🎨 Ficha de Diseño & Guía de Marca — Spa y Peluquería Eileen

Ficha técnica y manual del sistema de diseño para mantener la coherencia visual en el proyecto **Spa y Peluquería Eileen** (Carepa, Antioquia).

---

## 1. Identidad de Marca

- **Nombre Oficial**: Spa y Peluquería Eileen
- **Nicho/Rubro**: Centro de Estética, Spa, Nail Art 3D & Peluquería
- **Ubicación**: Cl. 80, Carepa, Antioquia, Colombia
- **Eslogan**: *"Spa y peluqueria Eileen — Centro de estética en Carepa"*
- **Propuesta de Valor**: Experiencias de transformación capilar, diseño de uñas acrílicas en 3D, tratamientos faciales orgánicos y spa de relajación con atención personalizada.
- **Tono de Comunicación**: Sofisticado, elegante, acogedor, profesional y exclusivo.

---

## 2. Paleta de Colores & Tokens CSS

| Uso / Elemento | Nombre Token | Código HEX | Propósito Visual |
| :--- | :--- | :--- | :--- |
| **Color Acento Camel Rose** | `--color-camel` / `--color-accent` | `#cbb39c` | Botones de reserva, enlaces activos y acentos de marca. |
| **Camel Oscuro / Hover** | `--color-camel-dark` | `#b89d84` | Estado hover de botones y bordes destacados. |
| **Fondo Oscuro Lujo** | `--color-dark-bg` | `#0d0b0a` | Fondo principal del sitio y Hero section. |
| **Superficie Tarjeta Oscura** | `--color-dark-surface` | `#141110` | Fondos de tarjetas y secciones sobre nosotros. |
| **Borde Translúcido** | `--color-dark-border` | `rgba(255, 255, 255, 0.1)` | Delimitación sutil de contenedores. |
| **Texto Blanco Primario** | `--color-white` | `#ffffff` | Titulares y nombres principales. |
| **Texto Crema Soft** | `--color-slate-300` | `#e5dcd3` | Párrafos y descripciones editoriales. |

---

## 3. Tipografía & Jerarquía Visual

- **Fuente para Encabezados Display**: `'DM Serif Display'`, serif (Google Fonts)
- **Fuente para Firmas Script**: `'Alex Brush'`, cursive (Google Fonts)
- **Fuente para Cuerpo & UI**: `'Plus Jakarta Sans'`, sans-serif (Google Fonts)

---

## 4. Estructura Oficial de Secciones (`AGENTS.md`)

1. `#inicio`: Hero Canvas Video Scroll Scrubbing 300vh con 2 pasos secuenciales (0-50% y 50-100%).
2. Franja de Pilares (5 sellos de confianza; carrusel horizontal en móvil).
3. `#servicios`: Grid 3 columnas desktop (2 columnas en móvil) con tarjetas Full-Bleed 3:4.
4. `#nosotros`: Experiencia de marca + Equipo de 4 especialistas en Retrato Editorial 3:4.2 (carrusel horizontal en móvil).
5. `#ubicacion`: Datos de contacto y mapa georreferenciado `z=16`.
6. Footer con módulo de reserva y botón conciso **«Agendar»**.
7. Navbar transparente arriba y botón flotante de WhatsApp abajo a la derecha.
