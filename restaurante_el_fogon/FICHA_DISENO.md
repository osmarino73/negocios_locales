# Ficha Técnica de Diseño: Restaurante El Fogón Apartadó

Basado en el arquetipo visual **Matanga Warm Criollo / Red & Amber Gourmet**: estética cálida, enérgica, tarjetas blancas limpias sobre fondo suave, rojo vibrante de llamado a la acción, acentos dorados y pie de página en carbón profundo.

---

## 🎨 Paleta de Colores Forense

- **Color Primario de Marca (`--color-primary`)**: `#DC2626` (Rojo Fuego Fogón)
- **Color Primario Hover (`--color-primary-hover`)**: `#B91C1C`
- **Color Acento Dorado (`--color-accent`)**: `#F59E0B` (Oro / Mostaza Cálido)
- **Color Acento Hover (`--color-accent-hover`)**: `#D97706`
- **Fondo General Claro (`--bg-light`)**: `#F9FAFB`
- **Fondo Tarjetas Blanco (`--bg-card`)**: `#FFFFFF`
- **Fondo Footer Carbón (`--bg-footer`)**: `#111827`
- **Texto Principal (`--text-main`)**: `#111827`
- **Texto Secundario (`--text-muted`)**: `#6B7280`
- **Bordes Suaves (`--border-color`)**: `rgba(0, 0, 0, 0.08)`

---

## 🔤 Tipografías

- **Titulares Display**: `'Bebas Neue', sans-serif` (Pesos 700/800, `letter-spacing: 0.02em - 0.04em`, *Title/Uppercase*)
- **Cuerpo, UI y Botones**: `'Plus Jakarta Sans', sans-serif` (Pesos 400, 500, 600, 700, 800)

---

## 📱 Componentes UI Clave

1. **Header**: Fondo blanco translúcido con desenfoque (`backdrop-filter: blur(10px)`), logotipo tipográfico puro `EL FOGÓN` en rojo y botón dorado de agendamiento.
2. **Hero Inmersivo con Degradado Mínimo**:
   - Fotografía de tomahawk/asado al carbón en escritorio (`hero_fogon.webp` en 16:9) y almuerzo/sancocho criollo tradicional en móvil (`hero_fogon_mobile.webp` en 9:16).
   - Degradado mínimo ultraligero que se disuelve al 32% en escritorio y deja el 75%–80% superior 100% transparente en móvil con `min-height: 840px !important;`.
3. **Selector de Categorías & Buscador**:
   - Filtros en forma de píldora con íconos vectoriales y buscador en tiempo real.
4. **Catálogo de 6 Platos Principales**:
   - Tarjetas blancas con sombra suave, badge superior (`MÁS PEDIDO`, `ESPECIALIDAD`), fotografía apetitosa, título en display negro, descripción, precio en rojo (`$38.000`) y botón dorado `AGENDAR ➔`.
5. **Bloque Sobre Nosotros (`#nosotros`)**:
   - Fotografía de ambiente de restaurante y cocina al carbón con badge flotante (`100% Sazón al Fogón`) + Tarjeta blanca con razones de autoridad y 4 métricas (`50+ Platos`, `18+ Años`, `100% Carne Fresca`, `5.0★ Google`).
6. **Franja Dorada de Domicilios**:
   - Banner `¿CON HAMBRE? ¡TE LO LLEVAMOS A TU PUERTA!` con botón directo a WhatsApp.
7. **Ubicación & Google Maps**:
   - Tarjeta con detalles de contacto en Apartadó (`Cl. 99 #10451`) y mapa interactivo.
8. **WhatsApp Flotante**:
   - Botón verde oficial con `env(safe-area-inset-bottom)`.
