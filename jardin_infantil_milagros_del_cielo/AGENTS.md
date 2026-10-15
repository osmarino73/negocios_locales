# 🤖 Guía de Agentes e Instrucciones de Continuidad: Jardín Infantil Milagros del Cielo Apartadó

Este archivo contiene las directrices técnicas, reglas visuales y acuerdos de diseño para que cualquier agente de Inteligencia Artificial (Claude, ChatGPT, Gemini, Antigravity, Cursor, etc.) pueda mantener y expandir el sitio web de **Jardín Infantil Milagros del Cielo Apartadó**.

---

## 🎯 Estructura de Secciones

El sitio web contiene las siguientes secciones oficiales:

1. **`#inicio` (Hero Full-Width Bleed)**: Portada inmersiva con fotografía de alta fidelidad a la derecha, olas SVG superiores/inferiores, firma script en `Caveat` (`.hero-script-tag`), titular editorial en `Fredoka`, descripción y botones de postulación directa.
   - **Móvil (< 768px)**: `min-height: 720px !important;`. El 38% superior es 100% transparente sin veladuras oscuras sobre los niños. El texto y los botones se ubican estrictamente en la mitad inferior.
2. **`#pilares` (Barra de Sellos de Confianza)**: Franja con 4 pilares pedagógicos (*Estimulación Temprana, Nutrición Saludable, Entorno Seguro, Docentes Certificadas*).
   - **Móvil (< 768px)**: Carrusel horizontal deslizable (*Scroll Snap*) en una sola fila compacta.
3. **`#servicios` (Catálogo de Programas / Niveles Educativos)**:
   - **Escritorio**: Grid de 3 columnas (`repeat(3, 1fr)`).
   - **Móvil**: Grid de 2 columnas (`repeat(2, 1fr)`).
   - Tarjetas pasteles Kidza con badges de edad, fotografías curadas 100% del nicho infantil/preescolar, footer de 2 filas (precio amplio y enlace minimalista `SOLICITAR CUPO ➔` directo a WhatsApp).
4. **`#nosotros` (Sobre Nosotros)**:
   - Grid 2 columnas con fotografía del aula/ambiente pedagógico (`.salon-image-showcase`), badge flotante `5.0 ★`, titular editorial, descripción y 4 métricas de autoridad. *(Nota: La sección de equipo docente/especialistas fue eliminada por instrucción explícita del usuario)*.
5. **Formulario de Admisión**: Módulo de postulación rápida para acudientes directo a WhatsApp.
6. **`#ubicacion` (Mapa & Contacto)**: Panel informativo con Google Maps georreferenciado (`z=16`).
7. **Footer Principal**: Enlaces, horarios, redes y módulo de reserva con botón conciso **«Solicitar Cupo»**.

---

## 📸 Banco de Imágenes 100% Curadas del Nicho Infantil

Todas las fotografías deben pertenecer exclusivamente al rubro de jardines infantiles, guarderías y preescolar (niños aprendiendo, jugando con bloques, pintura, lectura temprana y aulas infantiles). Queda prohibido el uso de imágenes corporativas genéricas.

---

## 🎨 Unicidad del Color Principal & Prohibición de Hardcoding

Todos los elementos de acento deben consumir dinámicamente las variables CSS del proyecto:
- Color Primario: `var(--color-primary)` (`#5D3EBC`)
- Color Acento: `var(--color-accent)` (`#FF6B35`)

---

## 📱 Reglas Móviles Anti-Corte

1. **Header Móvil**: El navbar muestra únicamente el Logotipo tipográfico puro (*Milagros del Cielo*). Se oculta el botón agendar del header (`.btn-header-cta { display: none !important; }`) y el menú hamburguesa.
2. **Botón Flotante de WhatsApp**: Posicionamiento `bottom: calc(28px + env(safe-area-inset-bottom, 0px)); right: max(20px, env(safe-area-inset-right, 20px)); z-index: 99999;`. Cero `overflow: hidden` para evitar recortes del ícono.
