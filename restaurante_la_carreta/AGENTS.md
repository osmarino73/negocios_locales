# Contexto de Agente IA: Restaurante La Carreta

Este archivo proporciona el contexto operativo esencial para que cualquier agente IA continúe el desarrollo y mantenimiento del sitio web de **Restaurante La Carreta** en Apartadó, Antioquia.

---

## 🎯 Directrices Operativas del Proyecto

1. **Arquetipo de Diseño**: *Burger Hub / Dark Sizzling Fast Food & Golden Mustard (`#F7A81B` / `#FFB700`)* con cabecera oscura inmersiva, cinta flotante blanca de categorías, tarjetas de bestsellers oscuras y banner de entrega rápida amarillo vibrante.
2. **Estructura de Secciones Oficial Mandatoria**:
   - `#inicio`: Hero inmersivo con `<picture>` responsive dual (escritorio 16:9 y móvil 9:16), degradado mínimo ultraligero que termina al 40% para que la comida permanezca 100% visible y nítida (`opacity: 1`), titular display en Bebas Neue y CTA directo a WhatsApp.
   - Cinta de Categorías: Selector horizontal flotante en blanco puro con iconos de línea y filtrado instantáneo.
   - `#menu` (Nuestros Favoritos / Bestsellers): Catálogo de platos populares con fotos gastronómicas del banco oficial `RECURSOS_RESTAURANTES.json`, precios claros en COP y botones circulares de adición con mensaje prellenado a WhatsApp.
   - Banner de Oferta Especial: Bloque amarillo `#FFB700` con descuento del 20%, cupón copiable `CARRETA20` y gráfico de domiciliario en moto.
   - `#nosotros`: Bloque editorial con foto de salón acogedor de restaurante (`photo-1555396273-367ea4eb4db5`), badge 4.3★ y 4 métricas de autoridad en tarjetas balanceadas.
   - `#ubicacion`: Sede física en Cra. 102 #99-2, Apartadó, horarios, WhatsApp y Google Maps embebido georreferenciado (`z=16`).
   - Footer: Fondo oscuro `#0B0C0E`, enlaces, redes sociales, datos de contacto y copyright.
3. **Calibración Móvil & UX**:
   - Altura mínima del Hero: `clamp(860px, 96vh, 920px) !important;`.
   - Header móvil: Logotipo tipográfico puro con ancho completo + botón hamburguesa compacto con *slide drawer*.
   - Botón flotante de WhatsApp protegido con `env(safe-area-inset-bottom)`.
4. **Archivos de Producción**:
   - Local: `restaurante_la_carreta/index.html`
   - Standalone raíz: `restaurante_la_carreta_standalone.html`
