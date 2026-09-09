# 🎒 Estándar de Nicho: Educación Infantil, Jardines Infantiles, Guarderías & Preescolares

Este documento define las reglas de arquitectura, diseño, responsividad móvil y conversión para sitios web y landing pages de **Educación Inicial, Jardines Infantiles, Guarderías (Daycare), Preescolares y Colegios Campestres**, garantizando una experiencia visual alegre, confiable, 100% optimizada para dispositivos móviles y orientada a la postulación de padres de familia.

---

## 🎯 1. Regla Mandatoria: Calibración del Hero en Móvil (Texto de la Mitad hacia Abajo)

En las webs de educación inicial y preescolares, la fotografía principal muestra niños felices jugando, explorando o aprendiendo. En pantallas móviles verticales (smartphones < 768px), **los rostros y sonrisas de los niños jamás deben quedar tapados por textos, badges o botones**.

### 📐 Principios de Maquetación Móvil (< 768px):

1. **Alineación Inferior del Contenedor**:
   - `.hero-fullwidth-section`: `display: flex !important; align-items: flex-end !important; justify-content: center !important; min-height: 740px !important; height: 100vh; max-height: 860px; padding: 120px 16px 28px !important;`.
   - El contenedor empuja todo el contenido de texto hacia el fondo de la pantalla, dejando la mitad superior completamente libre.

2. **Gradiente Vertical Translúcido (40% Superior 100% Transparente)**:
   - Queda **terminantemente prohibido** aplicar veladuras o filtros oscuros uniformes sobre toda la imagen en móvil.
   - La transición debe realizarse mediante `.hero-bg-overlay` con gradiente vertical calibrado:
     ```css
     background: linear-gradient(
         180deg, 
         rgba(30, 42, 56, 0) 0%, 
         rgba(30, 42, 56, 0) 36%, 
         rgba(30, 42, 56, 0.55) 50%, 
         rgba(30, 42, 56, 0.90) 72%, 
         #1E2A38 98%
     ) !important;
     ```
   - **Del 0% al 36%**: 100% transparente (cero veladuras sobre los rostros y ojos de los niños).
   - **Del 50% al 98%**: Sombra progresiva aterciopelada que garantiza 100% de contraste para los textos y botones.

3. **Escala Tipográfica Display Compacta en Celulares**:
   - **Eyebrow**: `0.68rem - 0.72rem; letter-spacing: 0.16em; padding: 4px 12px; margin-bottom: 8px;`.
   - **Titular (`.hero-title`)**: `1.85rem - 1.95rem; line-height: 1.15; margin-bottom: 8px; text-shadow: 0 2px 10px rgba(0,0,0,0.8);`.
   - **Descripción (`.hero-desc`)**: `0.82rem - 0.85rem; line-height: 1.45; max-width: 320px; margin: 0 auto 16px;` (prohibido dejarla >1rem en móvil para no crecer hacia arriba).
   - **Botones Apilados al Centro (`.hero-actions`)**:
     - Disposición en columna: `display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%;`.
     - Botones con `max-width: 265px; padding: 10px 18px; font-size: 0.82rem; border-radius: 50px; justify-content: center; text-align: center;`.
   - **Indicadores de Puntos (`.hero-dots-container`)**: Margen superior compacto de `12px - 14px`.

---

## 🚫 2. Prohibición Estricta: Franja de Pilares Dentro del Hero

- **Error Común**: Colocar la franja de 4 pilares (*Educación Activa, Nutrición, Bilingüismo, Seguridad*) dentro del contenedor del Hero. En celulares, al apilarse verticalmente, las 4 tarjetas consumen todo el alto de la pantalla y empujan el texto sobre las caras de los niños.
- **Regla Obligatoria**:
  - La **Franja de Pilares (`#pilares`)** debe ser una **sección completamente independiente** ubicada inmediatamente después de `</section>` del Hero.
  - **En Escritorio (> 768px)**: Grid simétrico de 4 columnas (`grid grid-cols-4 gap-6`).
  - **En Móvil (< 768px)**: **Carrusel horizontal táctil con *Scroll Snap*** en una sola fila compacta:
    ```css
    @media (max-width: 767px) {
        .pillars-scroll-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 8px !important;
            gap: 12px !important;
        }
        .pillars-scroll-container::-webkit-scrollbar {
            display: none;
        }
        .pillar-card {
            flex: 0 0 250px !important;
            scroll-snap-align: start !important;
            padding: 18px !important;
        }
    }
    ```
  - Permite a los padres deslizar los 4 sellos con el pulgar fluidamente en 120px de alto, reduciendo el scroll vertical en un 70%.

---

## 📸 3. Sistema de Hero Slider con Alternancia de Fotos 2K (Crossfade & Ken Burns)

Para transmitir dinamismo y mostrar las diferentes facetas del preescolar (música, estimulación, aula, juego al aire libre), el Hero debe soportar **rotación automática de fondos**:

1. **Fotografías Curadas en 2K (Zona Segura para Móvil)**:
   - Toda fotografía generada o seleccionada debe tener la acción principal y los rostros en el **50% central-superior** del encuadre, dejando el tercio inferior (suelo, césped, alfombra) limpio para los textos móviles.
   - Cero texto, tipografías o marcas de agua dentro de la imagen.
2. **Efecto Visual**:
   - Transición *crossfade* suave de 1.2 segundos: `.hero-slide { opacity: 0; transition: opacity 1.2s ease-in-out, transform 7s ease-out; transform: scale(1); }`.
   - Micro-zoom sutil estilo *Ken Burns* mientras está activa: `.hero-slide.active { opacity: 1; transform: scale(1.05); }`.
   - Rotación automática cada **5 a 6 segundos**.
3. **Puntos Indicadores (*Dots*)**:
   - Puntos interactivos discretos debajo de los botones que se expanden y activan con el color acento de marca (ej. `#F8A825`).

---

## 📱 4. Smart Header Móvil Minimalista

- **Barra Superior de Utilidad (Oculta en Móvil con `hidden lg:block`)**: La barra informativa superior se oculta en celulares para evitar que se apilen verticalmente múltiples líneas de texto y ganar más de 120px de fotografía limpia, iniciando directamente con el Smart Header.
- **Cero Menú Hamburguesa**: En sitios de preescolares locales, el menú hamburguesa tiene baja tasa de apertura y agrega pasos innecesarios. Se oculta por completo en móvil (`display: none;`).
- **Composición Móvil**:
  - **Izquierda**: Nombre y subtítulo del Preescolar (`.brand-logo`).
  - **Derecha**: Botón directo y conciso **«POSTULAR»** o **«INSCRIBIRSE»** (`.btn-header-cta`).
- Resultado: Encabezado limpio de menos de 65px de alto que no roba espacio de lectura.

---

## 📝 5. Formulario de Admisiones Directo a WhatsApp

- Todo formulario de postulación o visita guiada debe incluir validación nativa y, al hacer *submit*, abrir directamente la API de WhatsApp con el mensaje estructurado precargado:
  ```javascript
  const msg = encodeURIComponent(`Hola [Nombre Preescolar], mi nombre es ${nombre}. Quisiera información de matrícula para el nivel ${edad}. Mi teléfono es ${tel}.`);
  window.open(`https://wa.me/[NUMERO]?text=${msg}`, '_blank');
  ```

---

## 🗺️ 6. Ubicación Estratégica & Google Maps

- Módulo responsive con dirección, horarios y Google Maps interactivo (`iframe`) embebido con zoom urbano calibrado (`z=16`):
  `https://maps.google.com/maps?q={NOMBRE_PREESCOLAR},+{DIRECCION},+{CIUDAD},+{PAIS}&t=&z=16&ie=UTF8&iwloc=&output=embed`
- En móvil, botones de acción al 100% de ancho: «Abrir en Google Maps» y «Pedir Ubicación por WhatsApp».

---

## 📋 7. Checklist Rápido de Calidad para la IA

Antes de dar por terminado un sitio web de educación infantil / preescolar, verificar:
- [ ] En móvil (< 768px), ¿el titular, descripción y botones están **estrictamente en la mitad inferior**?
- [ ] ¿El 35%-40% superior del Hero está 100% libre de veladuras oscuras sobre los niños?
- [ ] ¿La franja de pilares está **fuera** del contenedor del Hero y es deslizable horizontalmente en celular?
- [ ] ¿El header móvil tiene el botón conciso **«POSTULAR»** y ningún menú hamburguesa roto?
- [ ] ¿Las imágenes del Hero alternan suavemente sin parpadeos ni cortes bruscos?
- [ ] ¿El formulario de matrícula envía los datos a WhatsApp con el nivel y nombre seleccionados?
