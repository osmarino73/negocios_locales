# Ficha de Diseño: YENN RIZOS (Peluquería & Estudio Capilar de Rizos)

Manual forense de identidad visual, tipografía, paleta cromática y arquitectura UI para **YENN RIZOS** en Apartadó, Antioquia.

---

## 🎨 1. Paleta de Colores Forense (Aesthetic GMAAEUP Beauty Salon — Dark Ebony & Warm Terracotta Rose)

| Nombre del Color | Código HEX / CSS | Rol / Uso en la Interfaz |
| :--- | :--- | :--- |
| **Deep Ebony Base** | `#0d0d0d` | Fondo global inmersivo, Hero header y footer. |
| **Dark Charcoal Surface** | `#141414` | Superficie de secciones secundarias, barra de pilares y mapa. |
| **Elevated Card Surface** | `#1a1a1a` | Fondo de tarjetas elevadas, contenedores UI y modales. |
| **Warm Terracotta Accent** | `#d48c77` | Color primario de marca (`var(--color-accent)`), botones CTA, firmas script, precios y enlaces minimalistas. |
| **Terracotta Hover** | `#c47a65` | Estado hover de botones y micro-interacciones de marca. |
| **Champagne Rose Light** | `#e8b4a2` | Estrellas de valoración, acentos de iluminación y reflejos. |
| **Pure Soft White** | `#f5f5f7` | Titulares principales `<h1>`, `<h2>` y nombres de especialistas. |
| **Muted Ash Silver** | `#a1a1aa` | Párrafos descriptivos, subtítulos técnicos y metadatos. |
| **Translucent Border** | `rgba(255, 255, 255, 0.08)` | Divisores sutiles y bordes de tarjetas minimalistas. |

---

## 🔤 2. Tipografía y Jerarquía Visual

- **Fuente de Titulares Display**: `DM Serif Display` (Google Fonts, pesos `400`). Proyecta alta peluquería, distinción editorial y estilo clásico refinado.
- **Fuente de Acento Cursivo (Signature Script)**: `Alex Brush` (`font-style: italic`, tamaño `1.15em - 1.25em`). Para la firma de marca `Yenn Rizos Studio` y énfasis en titulares (*"Natural de tus Rizos"*).
- **Fuente de Lectura & UI**: `Plus Jakarta Sans` (Google Fonts, pesos `300`, `400`, `500`, `600`, `700`). Máxima legibilidad, limpieza geométrica y nitidez moderna en pantallas de alta densidad.

---

## 📐 3. Componentes y Layout Forense

1. **Smart Header / Navbar Inteligente**:
   - Logotipo tipográfico puro sin íconos o emojis decorativos (`YENN RIZOS • ESTUDIO DE RIZOS · APARTADÓ`).
   - Sin Top Bar promocional (máxima limpieza visual).
   - En escritorio: Botón CTA conciso «Agendar» (`.btn-header-cta`).
   - En móvil (< 768px): Botón de agendar oculto (`display: none !important;`) y menú hamburguesa eliminado para que el logotipo respire al 100%.
2. **Hero Header Inmersivo con Canvas Video Scroll Scrubbing (Track de 300vh)**:
   - Secuencia optimizada de 74 fotogramas WebP extraídos del paquete `.agents/document_salones/belleza-cabello-rizos`.
   - **Desktop (16:9 — 1920x1080 Q85)**: Proviene del video horizontal con la modelo luciendo ondas y rizos voluminosos con acabado glow.
   - **Mobile (9:16 — 720x1280 Q76)**: Proviene del video vertical calibrado para pantallas móviles.
   - Motor Canvas HTML5 con `overflow-x: clip;` para mantener `position: sticky` intacto, precarga asíncrona con `Promise.all` y `poster.webp` estático como fallback inicial.
   - Narrativa editorial en 2 Pasos (0-50% / 50-100%) con firma caligráfica, titular display, descripción y llamado a la acción directo a WhatsApp.
3. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza (*Estilistas Expertas, Cosmética Botánica, Diagnóstico hebra a hebra, Técnica Curly Auténtica, Satisfacción 100%*).
   - Móvil: Carrusel horizontal deslizable (*Scroll Snap*) en 1 sola fila compacta.
4. **Catálogo de Servicios (Grid 3 Columnas Escritorio / 2 en Móvil)**:
   - 6 tarjetas en formato Full-Bleed Minimalista (relación 3:4, fotografía protagonista al 100%, degradado inferior aterciopelado).
   - Precios claros en cifras (sin sufijo COP) y enlace minimalista `AGENDAR ➔` en filas verticales independientes.
5. **Sobre Nosotros & Profesionales (Estándar Editorial)**:
   - Bloque editorial con fotografía de salón capilar (`photo-1560066984-138dadb4c035`), badge flotante VIP (5.0 ★ Excelente Calificación), titular cálido y 4 métricas de autoridad.
   - Bloque de profesionales en Grid de 4 columnas en escritorio con Retrato Editorial Full-Bleed (3:4.2) y Carrusel Horizontal deslizable con efecto Peek en móvil.
6. **Módulo de Ubicación Georreferenciado en Google Maps**:
   - Tarjeta informativa con dirección física en Cra. 108 & Cl. 107A #057840, Apartadó, horarios y Google Maps interactivo embebido con fórmula georreferenciada `z=16`.
7. **Footer Principal & WhatsApp Flotante**:
   - Enlaces de navegación, redes sociales, caja de reserva con botón conciso **«Agendar»**.
   - Botón flotante de WhatsApp con posición anti-corte en móvil (`env(safe-area-inset-bottom)`).
