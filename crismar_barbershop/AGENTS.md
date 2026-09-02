# Crismar Barbershop - Guía de Continuidad para Agentes de IA

Bienvenido al proyecto web de **Crismar Barbershop** en Apartadó, Antioquia. Este archivo proporciona el contexto técnico y operativo para que cualquier Inteligencia Artificial pueda continuar, extender o mantener el proyecto de manera autónoma y precisa.

---

## 📌 1. Estructura del Proyecto
* `index.html`: Página web 100% autónoma (standalone) con estilos CSS embebidos, Schema.org JSON-LD de Google, OpenGraph y mapa interactivo.
* `DATOS_NEGOCIO.json`: Fuente única de la verdad con teléfonos, WhatsApp, horarios, dirección y catálogo de servicios y barberos.
* `FICHA_DISENO.md`: Sistema de diseño, paleta de colores Legend Amber Gold & Dark Obsidian, tipografía `Bebas Neue` y especificaciones de componentes.
* `AGENTS.md`: Este archivo de instrucciones y lineamientos.

---

## 🏛️ 2. Arquitectura de 4 Secciones Estrictas
1. **`#inicio`**: Hero Header Inmersivo Full-Width con modelo a la derecha, degradado oscuro a la izquierda, calificación de clientes y botón de agendamiento.
2. **`#servicios`**: Catálogo de 6 procedimientos clave (Fades, Barba con toalla caliente, Diseños, etc.) con badges de técnica/duración y botón compacto de agendamiento directo por WhatsApp.
3. **`#nosotros`**: Vitrina editorial con experiencia del salón, métricas y grid de barberos certificados con agendamiento directo a WhatsApp.
4. **`#ubicacion`**: Tarjeta a 2 columnas con mapa interactivo georreferenciado en Apartadó (`Cl. 104 #113-53`).

---

## 🛡️ 3. Reglas Obligatorias para cualquier IA
* **Idioma 100% en Español**: Cero textos en inglés residuales procedentes de plantillas o referencias visuales.
* **Mapa de Google Embebido Exacto**:
  `https://maps.google.com/maps?q=Crismar+Barbershop,+Cl.+104+%23113-53,+Apartad%C3%B3,+Antioquia&t=&z=16&ie=UTF8&iwloc=&output=embed`
* **Botones WhatsApp**: Todos deben dirigir al enlace de WhatsApp oficial del negocio (`+573000000000`) con mensaje prellenado amigable.
* **Smart Header & Botones Concisos**: Botón header `.btn-header-cta` y botón de reserva del footer `.btn-footer-reserve` estrictamente con texto conciso **«Agendar»**.
* **Cuadrícula Doble Columna (2 Columnas) en Móvil (< 768px)**: Tanto Servicios (`.services-grid-6`) como Equipo (`.team-grid`) se renderizan en 2 columnas (`repeat(2, 1fr); gap: 12px;`) con fotos cuadradas (1:1) y limpieza de elementos flotantes.
* **Arquitectura Mobile-First & Sticky Bottom Action Dock (< 768px)**: Barra flotante de acciones fija (`.mobile-action-dock`) con accesos rápidos a Llamar, Ubicación, WhatsApp y Agendar con soporte para Safe-Area Inset y `padding-bottom: 74px` en el body.
