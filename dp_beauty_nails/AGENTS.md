# Contexto de IA: Dp Beauty Nails (Apartadó, Antioquia)

Instrucciones y contexto específico para el mantenimiento y evolución de **Dp Beauty Nails**.

---

## 🏛️ Identidad y Clonación Forense
- **Referencia Visual**: *LUXE NAIL STUDIO* (Elegancia de salón de uñas y manicura de lujo, fondos oscuros obsidian `#121012`, acentos dusty rose gold `#d99b9b`, contrastes en crema marfil `#fbf6f4`, tipografía *Playfair Display* y firma *Alex Brush*).
- **Copywriting**: Directo, cálido y enfocado en el público local de Apartadó, sin tecnicismos pomposos (*«de autor»*).

---

## 📌 Estructura Oficial de 6 Secciones (Mandatoria)
1. **Smart Header**: Sin barra superior promocional. Móvil: Logo (izq) y botón conciso **«Agendar»** (der) sin botón hamburguesa.
2. **`#inicio` (Hero Full-Width Bleed)**: Desktop `640px`, Móvil `720px !important;`.
3. **Barra de Pilares / Garantías**: 5 sellos. En móvil: Carrusel horizontal en 1 fila con auto-scroll suave (3s) y pausa al tacto.
4. **`#servicios` (Catálogo de Uñas & Pedicura)**: Grid de **6 Columnas en Escritorio (`repeat(6, 1fr)`)**, estrictamente **2 Columnas en Móvil**.
5. **`#nosotros` (Sobre Nosotros & Especialistas — Estándar Crismar)**:
   - Bloque Editorial: Foto de cabina VIP + badge flotante + 4 métricas de autoridad (en 2 columnas en móvil) + botón directo.
   - Bloque Profesionales: 4 especialistas en **4 Columnas en Escritorio (`repeat(4, 1fr)`)**, **2 Columnas en Móvil** con `.team-badge` oculto en móvil.
6. **`#ubicacion` (Mapa & Contacto)**: Cra. 97 #98-20, Apartadó + Google Maps interactivo (`z=16`).
7. **Footer Principal**: Tarjeta de reserva con botón conciso **«Agendar»**.
8. **WhatsApp Flotante**: `env(safe-area-inset-bottom)`, `overflow: hidden`, `translate3d`, `z-index: 999999`, sin tooltip distorsionador.
