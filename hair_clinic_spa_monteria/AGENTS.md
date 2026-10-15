# Guía de Agente e Instrucciones Local: HAIR CLINIC SPA MONTERIA

Este archivo contiene la especificación autónoma (*standalone*) para **HAIR CLINIC SPA MONTERIA** en Montería, Córdoba.

---

## 🎯 Reglas Mandatorias de Arquitectura & Diseño

1. **Estructura Oficial de Secciones**:
   - `#inicio` (Hero Full-Width Bleed con modelo de alta fidelidad y contraste aterciopelado)
   - Barra de Pilares (5 sellos de confianza; carrusel scroll-snap en móvil)
   - `#servicios` (Catálogo en grid 3 columnas desktop / 2 columnas móvil con tarjetas 3:4 full-bleed)
   - `#nosotros` (Bloque Editorial Sobre Nosotros + Grid 4 columnas equipo en escritorio / carrusel scroll-snap en móvil)
   - `#ubicacion` (Información + Google Maps interactivo georreferenciado `z=16`)
   - Footer Principal (Módulo de agendamiento conciso «Agendar»)

2. **Unicidad del Acento & Consumo de Variables CSS**:
   - Todo acento visual consume estrictamente `var(--color-accent)` (`#c59b7d`).
   - Queda prohibido hardcodear colores en firmas script, precios, roles de equipo y links minimalistas.

3. **WhatsApp Float Anti-Corte**:
   - `bottom: calc(28px + env(safe-area-inset-bottom, 0px)); right: max(20px, env(safe-area-inset-right, 20px));`.

4. **Triángulo de Contexto IA**:
   - `DATOS_NEGOCIO.json`
   - `FICHA_DISENO.md`
   - `AGENTS.md`
   - `index.html`
