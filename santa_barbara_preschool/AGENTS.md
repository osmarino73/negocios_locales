# 🤖 Guía de Contexto e Instrucciones para la IA — Santa Barbara Preschool Chía-Cajicá

Bienvenido. Si eres un modelo de Inteligencia Artificial (Claude, ChatGPT, Gemini, Antigravity, Cursor, etc.) que está leyendo esta carpeta, este documento contiene el contexto maestro para continuar manteniendo, expandiendo o actualizando el sitio web del negocio local **Santa Barbara Preschool Chía-Cajicá**.

---

## 🎯 Meta del Proyecto

Desarrollar y mantener una experiencia web educativa bilingüe, alegre, de alta conversión y 100% responsiva para padres de familia interesados en educación inicial y preescolar en la Sabana Norte de Bogotá (Chía y Cajicá, Cundinamarca).

---

## 📁 Estructura del Proyecto

- `AGENTS.md`: Este documento maestro de instrucciones para IA.
- `FICHA_DISENO.md`: Especificaciones del sistema de diseño (paleta HEX, tipografías Nunito e Inter, componentes UI).
- `DATOS_NEGOCIO.json`: Fuente de verdad estructurada con teléfonos, WhatsApp, horarios, niveles y programas pedagógicos.
- `index.html`: Sitio web principal y autónomo (Single-File Standalone con SEO Local JSON-LD y OpenGraph).
- `santa_barbara_preschool_standalone.html`: Copia idéntica autónoma para entrega directa al cliente o despliegue rápido.

---

## 📐 Reglas de Desarrollo para la IA

1. **Rubro Real del Negocio**:
   - Este negocio es una **institución de educación preescolar bilingüe y jardín infantil** (no es barbería ni peluquería; cualquier dato previo con ese error quedó subsanado en `DATOS_NEGOCIO.json`).
2. **Ubicación Geográfica**:
   - Sector Chía - Cajicá, Cundinamarca, Colombia. Coordenadas: `4.8959161, -74.0348085`.
3. **Conversión y Contacto**:
   - Toda llamada a la acción hacia WhatsApp debe incluir texto contextual precargado para agilizar la consulta del padre de familia.
4. **Mapa Interactivo**:
   - Conservar siempre el iframe de Google Maps con el parámetro `z=16` y consulta georreferenciada nominal.
5. **SEO Local**:
   - Mantener el marcado estructurado Schema.org JSON-LD de tipo `"ChildCare"` y `"Preschool"` en el `<head>`.
6. **Calibración Móvil del Hero (Texto Estrictamente de la Mitad hacia Abajo)**:
   - En celulares (< 768px), el Hero debe tener `min-height: 740px !important;` y alineación `align-items: flex-end;`.
   - El gradiente `.hero-bg-overlay` debe ser 100% transparente en el 40% superior para dejar despejados los rostros de los niños.
   - El titular, la descripción compacta y los botones se sitúan estrictamente de la mitad hacia abajo.
7. **Franja de Pilares Fuera del Hero**:
   - Queda prohibido meter los pilares dentro del Hero. Debe ser una sección independiente (`#pilares`) con carrusel horizontal (*Scroll Snap*) en móviles.
8. **Smart Header Dinámico con Auto-Hide & Efecto Translúcido**:
   - El navbar usa `.header-sticky-wrapper` con acabado translúcido `rgba(255, 255, 255, 0.82) !important`, `backdrop-filter: blur(14px) saturate(180%)`, borde suave y sombra de elevación.
   - Ocultamiento suave al hacer scroll hacia abajo y reaparición instantánea al hacer scroll hacia arriba.
9. **Estándar de Nicho**:
   - Seguir estrictamente la guía [NICHO_EDUCACION_INFANTIL.md](file:///c:/Users/Rio%20Belen/negocios_locales/.agents/skills/negocio-local-html/NICHO_EDUCACION_INFANTIL.md).
