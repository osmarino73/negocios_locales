# Contexto e Instrucciones para Agentes IA: Isaza Salón

Este directorio contiene el sitio web de producción 100% autónomo (*standalone*) para **Isaza Salón**, ubicado en Montería, Córdoba.

---

## 🎯 Regla Mandatoria: Estructura Oficial de Secciones

1. **`#inicio` (Hero Canvas Video Scroll Scrubbing)**:
   - Portada inmersiva con fotogramas WebP sincronizados por scroll.
   - Anclado en la base (`align-items: flex-end`) con 60% superior despejado.
2. **Barra de Pilares / Garantías**:
   - 5 sellos de confianza. En móvil: Carrusel horizontal deslizable (*Scroll Snap*).
3. **`#servicios` (Catálogo 3 Col Desktop / 2 Col Mobile)**:
   - Grid 3 columnas desktop (2 en móvil) con tarjetas Full-Bleed Minimalistas 3:4.
4. **`#nosotros` (Sobre Nosotros & Nuestros Profesionales)**:
   - Bloque editorial con foto de salón de peinado (`photo-1560066984-138dadb4c035`) y 4 métricas.
   - Grid de equipo 4 columnas (carrusel scroll snap en móvil).
5. **`#ubicacion` (Mapa & Contacto)**:
   - Panel informativo con dirección, teléfono y mapa oficial de Google Maps (`z=16`).
6. **Footer Principal**:
   - Enlaces, datos de contacto, módulo de agendamiento con botón conciso **«Agendar»**.

---

## 🎨 Regla Mandatoria de Unicidad de Color
- Todos los elementos cromáticos de acento consumen **exclusivamente `var(--color-accent)`**. Prohibido quemar valores HEX/RGB hardcoded.
- HTML con `overflow-x: clip;` para proteger `position: sticky`.
