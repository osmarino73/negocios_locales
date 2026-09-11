---
name: video-to-scroll-frames
description: Experto en convertir videos en secuencias de fotogramas WebP ultra ligeros calibrados para Desktop (16:9) y Mobile (9:16), con scripts de extracción FFmpeg/Node.js y motor de animación Canvas HTML5 sincronizado con scroll (preloading, poster fallback y overflow-x clip). Se activa cuando el usuario entrega video además del JSON de negocio e imagen de referencia.
---

# Extracción de Fotogramas y Animación de Scroll en Canvas HTML5 (Video-to-Scroll-Frames)

Esta habilidad se activa cuando el usuario proporciona un **video de alta fidelidad** (o clip de referencia publicitaria) junto con los `DATOS_NEGOCIO.json` y la imagen de referencia visual, para crear una experiencia web premium donde **el usuario controla la reproducción del video mediante el scroll** usando un Canvas HTML5.

---

## 🎯 Objetivos de Rendimiento y Estándares Técnicos

1. **Secuencia Ligera**: Entre **60 y 90 fotogramas WebP** en total (suficiente para un scroll suave de 1 a 2 pantallas de desplazamiento, típicamente a **18-20 fps**).
2. **Peso Pluma por Frame**: Entre **25 y 45 KB** por imagen WebP (secuencia completa entre **1.8 MB y 3.5 MB**, mucho más eficiente que un video `.mp4` pesado con problemas de decodificación en scroll táctil).
3. **Doble Calibración Nativa**:
   - **Desktop (16:9)**: Resolución `1280x720` (o `1920x1080` si la nitidez en monitores 4K es prioritaria).
   - **Mobile (9:16)**: Resolución `720x1280`, centrada y recortada al sujeto o acción principal.
4. **Cero Pantallas Negras (Poster Fallback)**: Un `poster.webp` estático que se dibuja en el Canvas en el primer ciclo de render, garantizando fidelidad visual instantánea antes de que el resto de frames se precarguen.
5. **Regla de Oro CSS**: Uso estricto de `overflow-x: clip;` en `html, body`. **Terminantemente prohibido usar `overflow-x: hidden;`** en el contenedor padre, ya que destruye `position: sticky` en los navegadores modernos e inhabilita el scroll scrubbing.
6. **Cobertura 100% Full Cover (Edge-to-Edge)**: El video debe llenar la pantalla al 100% usando `scale = Math.max(cw / iw, ch / ih);`. Prohibido aplicar multiplicadores de reducción artificial (como `* 0.90`) porque generan bandas, barras o recuadros negros alrededor del Canvas.
7. **Narrativa Editorial en 2 Pasos (50% / 50%)**: Para evitar saturación visual y fatiga de lectura durante el scroll:
   - **Paso 1 (0% a 50%)**: Gran titular principal de bienvenida de máximo impacto sin párrafo descriptivo, botones CTA principales y badge de reputación/Google Reviews.
   - **Paso 2 (50% a 100%)**: Mensaje de valor de servicios/técnica con la descripción completa y llamadas a la acción secundarias.

---

## 📁 Estructura de Directorios Estándar

Al procesar el video de un negocio, los archivos deben generarse y ubicarse dentro de la carpeta del proyecto de acuerdo con la siguiente estructura:

```text
negocio_local/
├── public/
│   └── frames/
│       ├── desktop/
│       │   ├── poster.webp               # Cuadro inicial o más representativo
│       │   ├── frame-0001.webp
│       │   ├── frame-0002.webp
│       │   └── ... frame-0075.webp
│       └── mobile/
│           ├── poster.webp               # Poster vertical 9:16
│           ├── frame-0001.webp
│           ├── frame-0002.webp
│           └── ... frame-0075.webp
├── scripts/
│   └── extract-frames.js                 # Script Node.js de respaldo
├── index.html                            # Landing page completa con Canvas
├── DATOS_NEGOCIO.json
├── FICHA_DISENO.md
└── AGENTS.md
```

---

## ⚙️ Detección y Comandos de Extracción FFmpeg

Antes de procesar, verificar si FFmpeg está disponible en la terminal:

```powershell
ffmpeg -version
```

### 1. Extracción para Desktop (16:9 — 1920x1080 Nativo)
Extrae a resolución completa 1080p con WebP Q85 y compresión nivel 6 para garantizar nitidez cristalina en monitores Retina y 4K:

```powershell
# Crear directorios de destino
New-Item -ItemType Directory -Force -Path "public/frames/desktop", "public/frames/mobile"

# Extracción Desktop (16:9 a 1920x1080 nativo, WebP Q85, 12-18 fps según duración)
ffmpeg -i input.mp4 -vf "fps=12,scale=1920:1080" -c:v libwebp -quality 85 -compression_level 6 public/frames/desktop/frame-%04d.webp

# Generación automática de poster Desktop
Copy-Item "public/frames/desktop/frame-0001.webp" -Destination "public/frames/desktop/poster.webp"
```

### 2. Extracción para Mobile (9:16 — 720x1280)
Aplica recorte centrado inteligente para mantener el sujeto enfocado en pantallas verticales.

> [!IMPORTANT]
> **Regla de Posicionamiento de Video (Modelo en el Centro de la Segunda Mitad)**:
> Por estándar de producción, los videos 16:9 (1920x1080) sitúan a la modelo en el **centro de la segunda mitad** (mitad derecha, $x \approx 1440$), dejando la primera mitad (izquierda) limpia para los textos editoriales en escritorio.
> Al extraer para **Móvil (9:16)**, el cuadro de recorte ($ow = 1080 \times 9/16 = 608\text{px}$) debe centrarse sobre la modelo desplazando el eje horizontal a $x = 1140$ ($1440 - 608/2 \approx 1136 \to 1140$):
> ```powershell
> # Extracción Móvil Calibrada (Modelo en el centro de la segunda mitad):
> ffmpeg -i input.mp4 -vf "fps=18.5,crop=ih*9/16:ih:1140:0,scale=720:1280" -c:v libwebp -quality 76 -compression_level 6 public/frames/mobile/frame-%04d.webp
> ```

```powershell
# Extracción Mobile Estándar (cuando el video está centrado globalmente a x=(iw-ow)/2):
ffmpeg -i input.mp4 -vf "fps=18,crop=ih*9/16:ih:(iw-ow)/2:0,scale=720:1280" -c:v libwebp -quality 76 -compression_level 6 public/frames/mobile/frame-%04d.webp

# Generación automática de poster Mobile
Copy-Item "public/frames/mobile/frame-0001.webp" -Destination "public/frames/mobile/poster.webp"
```

### 💡 Ajuste Fino para Clips de Longitud Variable (Objetivo 60-90 Frames)
Calcula el `fps` en base al número de frames deseado (ej. 72 frames para 6 segundos: $72 / 6 = 12$ fps):

$$\text{FPS} = \frac{\text{Frames Meta (ej. 72)}}{\text{duración en segundos}}$$

---

## 🛠️ Script Alternativo en Node.js (Sin FFmpeg Global en PATH)

Si la máquina del usuario o el entorno no tiene `ffmpeg` instalado globalmente, se debe proveer y ejecutar un script asistido con `npx` y `@ffmpeg-installer/ffmpeg` o `ffmpeg-static`:

### `scripts/extract-frames.js`

```javascript
/**
 * Script turnkey para extraer secuencias WebP optimizadas para scroll
 * Ejecución: node scripts/extract-frames.js ./video.mp4
 */
const { execSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoInput = process.argv[2] || 'input.mp4';
if (!fs.existsSync(videoInput)) {
  console.error(`❌ Error: El video "${videoInput}" no existe.`);
  process.exit(1);
}

// 1. Resolver binario de FFmpeg
let ffmpegCmd = 'ffmpeg';
try {
  execSync('ffmpeg -version', { stdio: 'ignore' });
} catch {
  console.log('⚠️ FFmpeg global no detectado. Intentando usar ffmpeg-static via npx...');
  try {
    const staticBin = execSync('npx -y ffmpeg-static --path', { encoding: 'utf-8' }).trim();
    if (staticBin && fs.existsSync(staticBin)) {
      ffmpegCmd = staticBin;
    }
  } catch (err) {
    console.error('❌ No se pudo resolver FFmpeg. Instale FFmpeg o ejecute "npm i -D ffmpeg-static".');
    process.exit(1);
  }
}

// 2. Crear carpetas de salida
const desktopDir = path.join('public', 'frames', 'desktop');
const mobileDir = path.join('public', 'frames', 'mobile');
fs.mkdirSync(desktopDir, { recursive: true });
fs.mkdirSync(mobileDir, { recursive: true });

console.log(`🎬 Procesando "${videoInput}" con: ${ffmpegCmd}`);

// 3. Obtener duración del video con ffprobe o asumir default
// Extraer Desktop (16:9, ~75 frames, calidad 78)
console.log('🖥️ Generando frames para Desktop (1280x720)...');
spawnSync(ffmpegCmd, [
  '-y', '-i', videoInput,
  '-vf', 'fps=18,scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720',
  '-c:v', 'libwebp',
  '-quality', '78',
  '-compression_level', '6',
  path.join(desktopDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 4. Extraer Mobile (9:16, ~75 frames, calidad 76)
console.log('📱 Generando frames para Mobile (720x1280)...');
spawnSync(ffmpegCmd, [
  '-y', '-i', videoInput,
  '-vf', 'fps=18,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280',
  '-c:v', 'libwebp',
  '-quality', '76',
  '-compression_level', '6',
  path.join(mobileDir, 'frame-%04d.webp')
], { stdio: 'inherit' });

// 5. Copiar posters
const firstDesk = path.join(desktopDir, 'frame-0001.webp');
if (fs.existsSync(firstDesk)) {
  fs.copyFileSync(firstDesk, path.join(desktopDir, 'poster.webp'));
  console.log('✅ Poster Desktop generado.');
}
const firstMob = path.join(mobileDir, 'frame-0001.webp');
if (fs.existsSync(firstMob)) {
  fs.copyFileSync(firstMob, path.join(mobileDir, 'poster.webp'));
  console.log('✅ Poster Mobile generado.');
}

console.log('🎉 ¡Secuencia de fotogramas generada exitosamente en /public/frames/!');
```

---

## 🚀 Arquitectura del Canvas HTML5 y Reglas Críticas de Rendimiento

### 1. La Regla Crítica de CSS: `overflow-x: clip;`
- **Problema de `overflow-x: hidden;`**: En CSS, cuando aplicas `overflow-x: hidden` a un contenedor padre (`html`, `body` o `.scroll-container`), el navegador promueve el elemento a un nuevo contexto de desplazamiento (*scroll container*), lo que **rompe `position: sticky; top: 0;`** en Safari, Chrome Mobile y Firefox. El Canvas deja de fijarse y la animación se descalabra.
- **Solución Mandatoria**:
  ```css
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: clip; /* Previene scroll horizontal SIN romper position: sticky */
    overflow-y: visible;
  }
  ```

### 2. Estructura HTML del Canvas Scrubbing
El contenedor exterior determina la "duración física" del scroll (ej. `300vh`), mientras que el contenedor sticky (`height: 100vh`) aloja el Canvas fijado:

```html
<!-- Sección Hero con Scroll Scrubbing de Video -->
<section class="hero-scroll-section" id="inicio">
  <div class="canvas-sticky-wrapper">
    <!-- Canvas que dibuja los fotogramas sincronizados -->
    <canvas id="scroll-video-canvas"></canvas>
    
    <!-- Poster estático de reserva contra flashes negros -->
    <img 
      id="canvas-poster-fallback" 
      src="public/frames/desktop/poster.webp" 
      alt="Portada del negocio"
      class="canvas-poster-img"
    />

    <!-- Cero capas opacas sobre el video para 100% nitidez óptica -->

    <!-- Contenido editorial asimétrico con 2 pasos secuenciales (50% / 50%) -->
    <div class="container hero-container-align">
      <div class="hero-scroll-content">
        <!-- Paso 1 (0% a 50%): Gran Titular Principal sin descripción para despejar el video -->
        <div class="hero-scroll-step step-1 active">
          <span class="hero-script-tag">Título de Autor</span>
          <span class="hero-eyebrow">CATEGORÍA · CIUDAD</span>
          <h1 class="hero-title">MÁS QUE UN SERVICIO.<br><em>UN ESTILO DE VIDA.</em></h1>
          <div class="hero-actions">
            <a href="https://wa.me/..." class="btn btn-primary">Agendar Cita</a>
            <a href="#servicios" class="btn btn-outline">Ver Servicios</a>
          </div>
          <div class="hero-proof-badge">
            <span class="hero-proof-stars">★★★★★</span>
            <span class="hero-proof-text">5.0 en Google Reviews · Ubicación</span>
          </div>
        </div>

        <!-- Paso 2 (50% a 100%): Técnica, Servicios & Detalle con descripción completa -->
        <div class="hero-scroll-step step-2">
          <span class="hero-script-tag">Maestría en Cada Detalle</span>
          <span class="hero-eyebrow">PRECISIÓN &amp; TÉCNICA</span>
          <h2 class="hero-title">ARTE CLÁSICO &amp;<br><em>TENDENCIA MODERNA</em></h2>
          <p class="hero-desc">Descripción detallada, clara y persuasiva de los procedimientos, atención personalizada e higiene de primer nivel para el cliente.</p>
          <div class="hero-actions">
            <a href="#servicios" class="btn btn-primary">Conocer Servicios</a>
            <a href="https://wa.me/..." class="btn btn-outline">Consultar Horarios</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Estilos CSS Esenciales

```css
/* Contenedor de scroll: 300vh proporciona el ritmo perfecto para los 3 textos */
.hero-scroll-section {
  position: relative;
  height: 300vh;
  width: 100%;
  background-color: #0d0e12;
}

.canvas-sticky-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

#scroll-video-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  image-rendering: -webkit-optimize-contrast;
}

.canvas-poster-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  transition: opacity 0.35s ease;
}

.canvas-poster-img.loaded {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  display: none; /* Cero capas residuales sobre el video */
}

/* Regla Crítica: CERO capas opacas o veladuras completas sobre el video */

.hero-container-align {
  position: relative;
  z-index: 4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
}

.hero-scroll-content {
  position: relative;
  z-index: 4;
  width: 100%;
  max-width: 580px;
  min-height: 400px;
}

.hero-scroll-step {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateY(14px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-scroll-step.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(-50%) translateY(0);
}

.hero-scroll-step .hero-title,
.hero-scroll-step .hero-desc,
.hero-scroll-step .hero-script-tag,
.hero-scroll-step .hero-eyebrow {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 25px rgba(0, 0, 0, 0.9);
}

.step-1 .hero-title {
  margin-bottom: 26px; /* Espaciado equilibrado hacia los botones al no tener párrafo */
}

@media (max-width: 768px) {
  .step-1 .hero-title {
    margin-bottom: 18px;
  }
}
```

---

## 💻 Motor JavaScript: Precarga con `Promise.all` y Render Loop High-DPI

Este motor gestiona la precarga asíncrona, detecta si el usuario está en móvil o escritorio para cargar la ruta adecuada, escala para pantallas Retina (`devicePixelRatio`) y vincula el scroll con `requestAnimationFrame`:

```javascript
(function () {
  const canvas = document.getElementById('scroll-video-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: false });
  const posterImg = document.getElementById('canvas-poster-fallback');
  const scrollSection = document.querySelector('.hero-scroll-section');

  // 1. Configuración de parámetros
  const TOTAL_FRAMES = 75; // Total de frames extraídos
  const isMobile = window.innerWidth < 768;
  const framesFolder = isMobile ? 'public/frames/mobile' : 'public/frames/desktop';

  // Actualizar src del poster según dispositivo
  if (posterImg) {
    posterImg.src = `${framesFolder}/poster.webp`;
  }

  // 2. Generador de URLs padeadas (frame-0001.webp)
  const getFrameUrl = (index) => {
    const pad = String(index).padStart(4, '0');
    return `${framesFolder}/frame-${pad}.webp`;
  };

  const images = [];
  let loadedCount = 0;
  let currentFrameIndex = 0;
  let targetFrameIndex = 0;
  let rafId = null;

  // 3. Calibrar tamaño del Canvas con soporte High-DPI (Retina)
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderFrame(currentFrameIndex);
  }
  window.addEventListener('resize', resizeCanvas, { passive: true });

  // 4. Renderizador con Cobertura 100% Full Cover Edge-to-Edge (Sin franjas negras)
  function renderFrame(index) {
    const img = images[index];
    if (!img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    // Limpiar canvas con color base de fondo
    ctx.fillStyle = '#0d0e12';
    ctx.fillRect(0, 0, cw, ch);

    // Escala Full Cover al 100% (cero reducciones artificiales)
    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;

    const isMob = window.innerWidth < 768;
    // Centrado inteligente: en escritorio se sujeta ligeramente a la derecha para dejar aire al texto
    const nx = isMob ? (cw - nw) / 2 : ((cw - nw) / 2) + (cw * 0.05);
    const ny = (ch - nh) / 2;

    ctx.drawImage(img, nx, ny, nw, nh);
  }

  // 5. Precarga de imágenes con Promise.all
  function preloadImages() {
    const loadPromises = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const p = new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === 1) {
            currentFrameIndex = 0;
            renderFrame(0);
          }
          if (loadedCount >= Math.min(6, TOTAL_FRAMES)) {
            if (posterImg) {
              posterImg.classList.add('loaded');
              posterImg.style.display = 'none';
            }
          }
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        images.push(img);
      });
      loadPromises.push(p);
    }

    Promise.all(loadPromises).then(() => {
      if (posterImg) {
        posterImg.classList.add('loaded');
        posterImg.style.display = 'none';
      }
    });
  }

  // 6. Cálculo del fotograma y alternancia de 3 textos basado en scroll
  function updateScrollProgress() {
    if (!scrollSection) return;
    const rect = scrollSection.getBoundingClientRect();
    const scrollDistance = scrollSection.offsetHeight - window.innerHeight;
    
    if (scrollDistance <= 0) return;

    // Progreso normalizado de 0 a 1 dentro de la sección
    const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
    
    targetFrameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progress * TOTAL_FRAMES)
    );

    if (targetFrameIndex !== currentFrameIndex) {
      currentFrameIndex = targetFrameIndex;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          renderFrame(currentFrameIndex);
          rafId = null;
        });
      }
    }

    // Alternancia de los 2 pasos editoriales según el progreso de scroll (50% / 50%)
    const steps = document.querySelectorAll('.hero-scroll-step');
    if (steps.length >= 2) {
      const activeIndex = progress < 0.5 ? 0 : 1;
      steps.forEach((step, idx) => {
        step.classList.toggle('active', idx === activeIndex);
      });
    }
  }

  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // Inicialización
  resizeCanvas();
  preloadImages();
})();
```

---

## 📋 Checklist de Integración con el Repositorio de Negocios Locales

Al recibir un video y construir la landing page:

- [ ] **Extracción Dual 1080p**: Se han generado los frames para Desktop (16:9 - 1920x1080 Q85) y Mobile (9:16 - 720x1280 Q76) en `public/frames/`.
- [ ] **Posters Listos y Fallback Limpio**: Existen `public/frames/desktop/poster.webp` y `public/frames/mobile/poster.webp`, y se ocultan completamente tras el render inicial (`display: none;`).
- [ ] **Cero Capas Opacas sobre el Video**: Sin veladuras ni overlays generales que resten nitidez a la modelo o sujeto; el texto cuenta con sombras tipográficas nítidas (`text-shadow`) y composición asimétrica a la izquierda.
- [ ] **Cobertura 100% Full Cover**: `renderFrame()` utiliza escala cover pura `Math.max(cw/iw, ch/ih)` sin reducciones artificiales para evitar marcos o franjas negras alrededor del Canvas.
- [ ] **Storytelling en 2 Pasos (50% / 50%)**: Paso 1 (Gran titular de bienvenida sin descripción + botones CTA + badge Google) y Paso 2 (Mensaje de técnica/servicios con descripción completa).
- [ ] **Regla CSS `clip`**: El `html` y `body` usan estrictamente `overflow-x: clip;` para proteger `position: sticky`.
- [ ] **Respeto a las Secciones Oficiales (`AGENTS.md`)**:
  - `#inicio`: Hero Canvas Video Scrubbing de alta fidelidad.
  - Franja de Pilares (Scroll Snap en móvil).
  - `#servicios`: Grid 3 columnas desktop (2 columnas en móvil) con tarjetas Full-Bleed Minimalistas 3:4.
  - `#nosotros`: Experiencia del rubro + 4 Especialistas en Retrato Editorial 3:4.2 (2 columnas en móvil).
  - `#ubicacion`: Datos de contacto y mapa oficial embebido `z=16`.
  - Footer con módulo de reserva y botón conciso **«Agendar»**.
- [ ] **Móvil Blindado**: El Canvas se adapta con `height: 100dvh` y el botón flotante de WhatsApp respeta `env(safe-area-inset-bottom)`.
