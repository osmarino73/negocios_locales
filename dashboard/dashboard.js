/**
 * ==========================================================================
 * PAGE CRAFTER PRO - STUDIO DASHBOARD ENGINE (dashboard.js)
 * Motor de Generación de Landing Pages Exclusivas para Negocios Locales
 * ==========================================================================
 */

// Global State
const state = {
  activeTab: 'workflow',
  activeTriFile: 'tri-datos',
  deviceView: 'desktop',
  splitMode: 'split',
  zoomLevel: 100,
  referenceImageBase64: null,
  palette: {
    primary: '#d4af37',
    secondary: '#0f172a',
    bg: '#07090e',
    text: '#f8fafc'
  },
  vibe: 'luxury-dark',
  headingFont: "'Plus Jakarta Sans', sans-serif",
  business: {
    nombre: 'Kapa Spa & Estética Facial',
    nicho: 'BeautySalon',
    ciudad: 'Bogotá, Colombia',
    eslogan: 'Redescubre tu brillo natural con tratamientos clínicos de vanguardia y aparatología de última generación',
    whatsapp: '573108877665',
    telefono: '+57 310 887 7665',
    whatsappMsg: '¡Hola! Quisiera más información y reservar una cita exclusiva en Kapa Spa.',
    direccion: 'Carrera 15 # 93-47, Chicó Norte, Bogotá',
    mapsUrl: 'https://maps.google.com/?q=Bogota+Chico+Norte',
    horario: 'Lunes a Sábado: 8:00 AM - 7:00 PM',
    stats: [
      { num: '10+ Años', label: 'De Experiencia Clínica' },
      { num: '4,800+', label: 'Pacientes Satisfechos' },
      { num: '100%', label: 'Garantía & Bioseguridad' }
    ],
    servicios: [
      {
        nombre: 'Limpieza Facial Profunda con Hidrodermoabrasión',
        precio: '$180.000 COP',
        desc: 'Extracción ultrasónica, oxigenoterapia y sérums de ácido hialurónico puro para piel radiante.',
        icono: 'fa-wand-magic-sparkles'
      },
      {
        nombre: 'Masaje Relajante & Terapia de Piedras Volcánicas',
        precio: '$150.000 COP',
        desc: 'Aromaterapia personalizada, aceites esenciales orgánicos y liberación miofascial total.',
        icono: 'fa-spa'
      },
      {
        nombre: 'Radiofrecuencia Fraccionada & Rejuvenecimiento',
        precio: '$280.000 COP',
        desc: 'Estimulación intensiva de colágeno y elastina con tecnología médica no invasiva.',
        icono: 'fa-gem'
      },
      {
        nombre: 'Moldeo Corporal con Maderoterapia & Crioterapia',
        precio: '$220.000 COP',
        desc: 'Drenaje linfático profundo, tonificación y reducción de medidas comprobada.',
        icono: 'fa-feather'
      }
    ],
    testimonios: [
      {
        nombre: 'Dra. Marcela Gómez',
        cargo: 'Cliente Verificada',
        texto: 'La atención es insuperable. Las instalaciones son de lujo y los resultados en mi piel se notaron desde la primera sesión. ¡100% recomendado!',
        estrellas: 5
      },
      {
        nombre: 'Carlos E. Restrepo',
        cargo: 'Cliente Frecuente',
        texto: 'El masaje descontracturante con piedras volcánicas me quitó el dolor de espalda acumulado de meses de trabajo. El mejor spa de Bogotá.',
        estrellas: 5
      }
    ]
  },
  modules: {
    heroBadge: true,
    cards3d: true,
    ctaGlow: true,
    testimonials: true,
    floatingWa: true,
    schemaSeo: true
  }
};

// Preset Businesses
const PRESETS = {
  kapa_spa: {
    nombre: 'Kapa Spa & Estética Facial',
    nicho: 'BeautySalon',
    ciudad: 'Bogotá, Colombia',
    eslogan: 'Redescubre tu brillo natural con tratamientos clínicos de vanguardia y aparatología de última generación',
    whatsapp: '573108877665',
    telefono: '+57 310 887 7665',
    whatsappMsg: '¡Hola! Quisiera más información y reservar una cita en Kapa Spa.',
    direccion: 'Carrera 15 # 93-47, Chicó Norte, Bogotá',
    mapsUrl: 'https://maps.google.com/?q=Bogota+Chico+Norte',
    horario: 'Lunes a Sábado: 8:00 AM - 7:00 PM',
    palette: { primary: '#d4af37', secondary: '#1c1917', bg: '#0c0a09', text: '#fafaf9' },
    vibe: 'luxury-dark',
    headingFont: "'Playfair Display', serif",
    stats: [
      { num: '10+ Años', label: 'Experiencia Clínica' },
      { num: '4,800+', label: 'Tratamientos Exitosos' },
      { num: '100%', label: 'Aparatología Certificada' }
    ],
    servicios: [
      { nombre: 'Limpieza Facial Hidrodermoabrasión', precio: '$180.000', desc: 'Oxigenoterapia y sérums de ácido hialurónico puro.', icono: 'fa-wand-magic-sparkles' },
      { nombre: 'Masaje con Piedras Volcánicas', precio: '$150.000', desc: 'Aromaterapia orgánica y relajación profunda.', icono: 'fa-spa' },
      { nombre: 'Radiofrecuencia Fraccionada', precio: '$280.000', desc: 'Estimulación de colágeno médico no invasivo.', icono: 'fa-gem' },
      { nombre: 'Moldeo Corporal & Maderoterapia', precio: '$220.000', desc: 'Drenaje linfático y tonificación integral.', icono: 'fa-feather' }
    ]
  },
  los_pollitos: {
    nombre: 'Hogar Infantil Los Pollitos',
    nicho: 'ChildCare',
    ciudad: 'Barranquilla, Colombia',
    eslogan: 'El segundo hogar donde tus hijos aprenden jugando con amor, seguridad y nutrición balanceada',
    whatsapp: '573001234567',
    telefono: '+57 300 123 4567',
    whatsappMsg: '¡Hola! Me gustaría solicitar información para matrículas en Los Pollitos.',
    direccion: 'Calle 72 # 41-15, Barranquilla',
    mapsUrl: 'https://maps.google.com/?q=Barranquilla+Calle+72',
    horario: 'Lunes a Viernes: 6:30 AM - 6:00 PM',
    palette: { primary: '#f97316', secondary: '#0284c7', bg: '#fffbeb', text: '#1e293b' },
    vibe: 'playful-kids',
    headingFont: "'Outfit', sans-serif",
    stats: [
      { num: '15+ Años', label: 'Cuidando con Amor' },
      { num: '1,200+', label: 'Niños Graduados' },
      { num: '100%', label: 'Cámaras de Seguridad 24/7' }
    ],
    servicios: [
      { nombre: 'Sala Cuna & Estimulación Temprana', precio: 'Mensual', desc: 'Cuidado especializado para bebés de 4 meses a 2 años.', icono: 'fa-baby' },
      { nombre: 'Párvulos & Pre-Jardín Bilingüe', precio: 'Mensual', desc: 'Desarrollo motriz, lenguaje y socialización divertida.', icono: 'fa-cubes' },
      { nombre: 'Comedor con Nutrición Infantil', precio: 'Incluido', desc: 'Minutas supervisadas por nutricionista pediátrico.', icono: 'fa-apple-whole' },
      { nombre: 'Jornada Continua y Tarde Lúdica', precio: 'Flexible', desc: 'Apoyo en tareas, música, arte y recreación dirigida.', icono: 'fa-puzzle-piece' }
    ]
  },
  veterinaria_los_almendros: {
    nombre: 'Veterinaria & Pet Spa Los Almendros',
    nicho: 'VeterinaryCare',
    ciudad: 'Cali, Colombia',
    eslogan: 'Cuidado médico compasivo, diagnóstico avanzado y estética profesional para tu mascota',
    whatsapp: '573159988776',
    telefono: '+57 315 998 8776',
    whatsappMsg: '¡Hola! Necesito agendar una consulta médica veterinaria.',
    direccion: 'Avenida 6N # 28-30, Cali',
    mapsUrl: 'https://maps.google.com/?q=Cali+Avenida+6N',
    horario: 'Atención 24 Horas / Urgencias Médicas',
    palette: { primary: '#10b981', secondary: '#0f172a', bg: '#060d13', text: '#f0fdf4' },
    vibe: 'clean-medical',
    headingFont: "'Plus Jakarta Sans', sans-serif",
    stats: [
      { num: '24/7', label: 'Urgencias Médicas' },
      { num: '8,000+', label: 'Mascotas Sanadas' },
      { num: '100%', label: 'Especialistas Médicos' }
    ],
    servicios: [
      { nombre: 'Consulta Médica Especializada', precio: '$60.000', desc: 'Medicina interna preventiva y diagnóstico integral.', icono: 'fa-stethoscope' },
      { nombre: 'Cirugía & Hospitalización 24h', precio: 'Cotizar', desc: 'Quirófano equipado con anestesia inhalatoria.', icono: 'fa-hospital' },
      { nombre: 'Pet Spa & Baño Medicado', precio: '$45.000', desc: 'Corte de raza, desparasitación y ozonoterapia.', icono: 'fa-shield-dog' },
      { nombre: 'Vacunación & Laboratorio Clínico', precio: '$50.000', desc: 'Pruebas rápidas y esquema de vacunas completo.', icono: 'fa-syringe' }
    ]
  },
  cris_barbershop: {
    nombre: 'Cris Barbershop VIP',
    nicho: 'Barbershop',
    ciudad: 'Medellín, Colombia',
    eslogan: 'El templo del estilo masculino: cortes de alta precisión, ritual de barba y experiencia premium',
    whatsapp: '573204433221',
    telefono: '+57 320 443 3221',
    whatsappMsg: '¡Buenas! Quiero apartar turno para corte y barba VIP.',
    direccion: 'El Poblado, Carrera 37 # 8A-12, Medellín',
    mapsUrl: 'https://maps.google.com/?q=Medellin+El+Poblado',
    horario: 'Martes a Domingo: 10:00 AM - 9:00 PM',
    palette: { primary: '#d4af37', secondary: '#18181b', bg: '#09090b', text: '#f4f4f5' },
    vibe: 'luxury-dark',
    headingFont: "'Cinzel', serif",
    stats: [
      { num: 'Master', label: 'Barberos Galardonados' },
      { num: '12,000+', label: 'Cortes Realizados' },
      { num: 'VIP', label: 'Bebida de Cortesía' }
    ],
    servicios: [
      { nombre: 'Corte Signature & Fade de Autor', precio: '$45.000', desc: 'Perfilado milimétrico y peinado con cera mate.', icono: 'fa-scissors' },
      { nombre: 'Ritual de Barba Toalla Caliente', precio: '$35.000', desc: 'Aceites orgánicos, navaja clásica y vaporizador.', icono: 'fa-spray-can-sparkles' },
      { nombre: 'Combo VIP Total (Corte + Barba + Mascarilla)', precio: '$75.000', desc: 'Exfoliación con carbón activado y masaje capilar.', icono: 'fa-crown' },
      { nombre: 'Camuflaje de Canas & Tratamiento Capilar', precio: '$50.000', desc: 'Tono natural rejuvenecedor sin amoníaco.', icono: 'fa-shield-halved' }
    ]
  },
  makloz_tech: {
    nombre: 'Makloz Tech & MioWeKids',
    nicho: 'LocalBusiness',
    ciudad: 'Colombia',
    eslogan: 'Transformación digital inteligente para centros educativos y negocios con agentes de IA 24/7',
    whatsapp: '573108877665',
    telefono: '+57 310 887 7665',
    whatsappMsg: '¡Hola! Quiero una demo del Agente de Inteligencia Artificial para WhatsApp.',
    direccion: 'Edificio Torre Empresarial, Bogotá',
    mapsUrl: 'https://maps.google.com',
    horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
    palette: { primary: '#06b6d4', secondary: '#0f172a', bg: '#030712', text: '#f9fafb' },
    vibe: 'cyber-glow',
    headingFont: "'Space Grotesk', sans-serif",
    stats: [
      { num: '24/7', label: 'Atención con IA' },
      { num: '98%', label: 'Tasa de Conversión' },
      { num: '< 5s', label: 'Tiempo de Respuesta' }
    ],
    servicios: [
      { nombre: 'Agente IA para Matrículas por WhatsApp', precio: 'Planes Mensuales', desc: 'Respuestas automáticas inteligentes a padres las 24 horas.', icono: 'fa-robot' },
      { nombre: 'Plataforma de Gestión Escolar MioWeKids', precio: 'Suscripción', desc: 'Reportes diarios, fotos en vivo y control de pagos.', icono: 'fa-laptop-code' },
      { nombre: 'Diseño Web Standalone de Alta Conversión', precio: 'Turnkey', desc: 'Sitios web 100% optimizados para Google y SEO Local.', icono: 'fa-layer-group' }
    ]
  }
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAccordions();
  initDropzone();
  initColorPickers();
  initVibeSelector();
  initFormInputs();
  initServicesList();
  initSplitResizer();
  initToolbarControls();
  initContextTriangle();
  initModals();

  // Populate form with default state
  syncStateToForm();
  renderLivePreview();
  updateContextCodeDisplay();
});

// Navigation Tabs
function initNavigation() {
  document.querySelectorAll('.mode-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const targetTab = pill.getAttribute('data-tab');
      state.activeTab = targetTab;

      document.querySelectorAll('.workspace-tab').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
      });

      const selected = document.getElementById(`tab-${targetTab}`);
      if (selected) {
        selected.style.display = 'flex';
        selected.classList.add('active');
      }

      if (targetTab === 'context') {
        updateContextCodeDisplay();
      }
    });
  });
}

// Accordion Toggles
function initAccordions() {
  window.toggleAccordion = function(panelId) {
    const panel = document.getElementById(panelId);
    if (panel) {
      panel.classList.toggle('active');
    }
  };
// Expose file selection triggers globally
window.triggerFileInput = function() {
  const inp = document.getElementById('image-input');
  if (inp) {
    inp.click();
  }
};

window.removeImage = function() {
  removeImage();
};

window.loadDemoImage = function(type) {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 800;
  const ctx = canvas.getContext('2d');
  
  if (type === 'kapa') {
    ctx.fillStyle = '#0c0a09';
    ctx.fillRect(0, 0, 600, 800);
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 36px serif';
    ctx.fillText('KAPA SPA & WELLNESS', 80, 200);
    ctx.fillStyle = '#fafaf9';
    ctx.font = '20px sans-serif';
    ctx.fillText('Captura de Referencia de Diseño Web', 80, 260);
  } else {
    ctx.fillStyle = '#09090b';
    ctx.fillRect(0, 0, 600, 800);
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 36px serif';
    ctx.fillText('BARBER VIP CLUB', 80, 200);
    ctx.fillStyle = '#f4f4f5';
    ctx.font = '20px sans-serif';
    ctx.fillText('Captura de Referencia Masculina', 80, 260);
  }
  
  const base64 = canvas.toDataURL('image/png');
  state.referenceImageBase64 = base64;
  
  const emptyState = document.getElementById('dropzone-empty-state');
  if (emptyState) emptyState.style.display = 'none';
  const preview = document.getElementById('dropzone-preview-state');
  if (preview) preview.style.display = 'block';
  const refImg = document.getElementById('ref-image-element');
  if (refImg) refImg.src = base64;

  const emptyPlaceholder = document.getElementById('ref-empty-placeholder');
  if (emptyPlaceholder) emptyPlaceholder.style.display = 'none';
  const liveImg = document.getElementById('ref-live-view-img');
  if (liveImg) {
    liveImg.src = base64;
    liveImg.style.display = 'block';
  }

  extractColorsFromImage(base64);
  showToast('Captura demo cargada exitosamente');
};

// Dropzone & Image Handling
function initDropzone() {
  const dropzone = document.getElementById('image-dropzone');
  const fileInput = document.getElementById('image-input');
  const removeBtn = document.getElementById('btn-remove-image');

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageFile(e.target.files[0]);
    }
  });

  // Paste support
  window.addEventListener('paste', (e) => {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (let index in items) {
      const item = items[index];
      if (item.kind === 'file' && item.type.includes('image/')) {
        const blob = item.getAsFile();
        handleImageFile(blob);
        showToast('Imagen de referencia pegada exitosamente');
        break;
      }
    }
  });

  if (removeBtn) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeImage();
    });
  }

  // Color extraction button
  document.getElementById('btn-extract-colors').addEventListener('click', () => {
    if (state.referenceImageBase64) {
      extractColorsFromImage(state.referenceImageBase64);
    } else {
      showToast('Carga primero una imagen de referencia');
    }
  });
}

function handleImageFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const base64 = e.target.result;
    state.referenceImageBase64 = base64;
    
    // Update dropzone UI
    document.getElementById('dropzone-empty-state').style.display = 'none';
    const preview = document.getElementById('dropzone-preview-state');
    preview.style.display = 'block';
    document.getElementById('ref-image-element').src = base64;

    // Update Split View Reference Pane
    document.getElementById('ref-empty-placeholder').style.display = 'none';
    const liveImg = document.getElementById('ref-live-view-img');
    liveImg.src = base64;
    liveImg.style.display = 'block';

    extractColorsFromImage(base64);
    showToast('Imagen de referencia cargada y procesada');
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  state.referenceImageBase64 = null;
  document.getElementById('dropzone-empty-state').style.display = 'block';
  document.getElementById('dropzone-preview-state').style.display = 'none';
  document.getElementById('ref-image-element').src = '';
  document.getElementById('ref-empty-placeholder').style.display = 'block';
  document.getElementById('ref-live-view-img').style.display = 'none';
  document.getElementById('ref-live-view-img').src = '';
}

// Color Extraction using HTML5 Canvas
function extractColorsFromImage(base64) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    const canvas = document.getElementById('color-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 100;
    ctx.drawImage(img, 0, 0, 100, 100);

    const imgData = ctx.getImageData(0, 0, 100, 100).data;
    const colorCounts = {};

    for (let i = 0; i < imgData.length; i += 16) {
      const r = imgData[i];
      const g = imgData[i + 1];
      const b = imgData[i + 2];
      const hex = rgbToHex(r, g, b);

      // Skip extremes (pure white or pure black) for accents
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      if (brightness > 30 && brightness < 235) {
        colorCounts[hex] = (colorCounts[hex] || 0) + 1;
      }
    }

    const sorted = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);
    if (sorted.length > 0) {
      state.palette.primary = sorted[0];
      if (sorted.length > 1) state.palette.secondary = sorted[1];
      updateColorPickersUI();
      renderLivePreview();
      showToast('Paleta de colores sincronizada con la imagen');
    }
  };
  img.src = base64;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Color pickers & Vibe Sync
function initColorPickers() {
  const fields = ['primary', 'secondary', 'bg', 'text'];
  fields.forEach(field => {
    const colInput = document.getElementById(`col-${field}`);
    const hexInput = document.getElementById(`hex-${field}`);

    colInput.addEventListener('input', (e) => {
      hexInput.value = e.target.value;
      state.palette[field] = e.target.value;
      renderLivePreview();
    });

    hexInput.addEventListener('change', (e) => {
      let val = e.target.value;
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-F]{6}$/i.test(val)) {
        colInput.value = val;
        state.palette[field] = val;
        renderLivePreview();
      }
    });
  });

  // Font Heading Selector
  const fontSelect = document.getElementById('select-font-heading');
  fontSelect.addEventListener('change', (e) => {
    state.headingFont = e.target.value;
    renderLivePreview();
  });
}

function updateColorPickersUI() {
  ['primary', 'secondary', 'bg', 'text'].forEach(field => {
    document.getElementById(`col-${field}`).value = state.palette[field];
    document.getElementById(`hex-${field}`).value = state.palette[field];
  });
}

function initVibeSelector() {
  document.querySelectorAll('.vibe-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.vibe-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const vibe = chip.getAttribute('data-vibe');
      state.vibe = vibe;

      // Apply preset colors for vibes
      if (vibe === 'luxury-dark') {
        state.palette.primary = '#d4af37';
        state.palette.secondary = '#1e1e24';
        state.palette.bg = '#07090e';
        state.palette.text = '#f8fafc';
        state.headingFont = "'Playfair Display', serif";
        document.getElementById('select-font-heading').value = "'Playfair Display', serif";
      } else if (vibe === 'cyber-glow') {
        state.palette.primary = '#06b6d4';
        state.palette.secondary = '#0f172a';
        state.palette.bg = '#020617';
        state.palette.text = '#f8fafc';
        state.headingFont = "'Space Grotesk', sans-serif";
        document.getElementById('select-font-heading').value = "'Space Grotesk', sans-serif";
      } else if (vibe === 'warm-organic') {
        state.palette.primary = '#d97706';
        state.palette.secondary = '#292524';
        state.palette.bg = '#1c1917';
        state.palette.text = '#fafaf9';
        state.headingFont = "'Plus Jakarta Sans', sans-serif";
        document.getElementById('select-font-heading').value = "'Plus Jakarta Sans', sans-serif";
      } else if (vibe === 'clean-medical') {
        state.palette.primary = '#10b981';
        state.palette.secondary = '#0f172a';
        state.palette.bg = '#060d13';
        state.palette.text = '#f0fdf4';
        state.headingFont = "'Plus Jakarta Sans', sans-serif";
        document.getElementById('select-font-heading').value = "'Plus Jakarta Sans', sans-serif";
      } else if (vibe === 'playful-kids') {
        state.palette.primary = '#f97316';
        state.palette.secondary = '#0284c7';
        state.palette.bg = '#0c1222';
        state.palette.text = '#ffffff';
        state.headingFont = "'Outfit', sans-serif";
        document.getElementById('select-font-heading').value = "'Outfit', sans-serif";
      }

      updateColorPickersUI();
      renderLivePreview();
    });
  });
}

// Form & JSON Synchronizer
function initFormInputs() {
  const textFields = [
    { id: 'f-nombre', key: 'nombre' },
    { id: 'f-nicho', key: 'nicho' },
    { id: 'f-ciudad', key: 'ciudad' },
    { id: 'f-eslogan', key: 'eslogan' },
    { id: 'f-whatsapp', key: 'whatsapp' },
    { id: 'f-telefono', key: 'telefono' },
    { id: 'f-whatsapp-msg', key: 'whatsappMsg' },
    { id: 'f-direccion', key: 'direccion' },
    { id: 'f-maps-url', key: 'mapsUrl' },
    { id: 'f-horario', key: 'horario' }
  ];

  textFields.forEach(({ id, key }) => {
    const el = document.getElementById(id);
    el.addEventListener('input', (e) => {
      state.business[key] = e.target.value;
      syncStateToJsonEditor();
      renderLivePreview();
    });
  });

  // Stats inputs
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`f-stat${i}-num`).addEventListener('input', updateStatsFromForm);
    document.getElementById(`f-stat${i}-label`).addEventListener('input', updateStatsFromForm);
  }

  // Feature checkboxes
  ['hero-badge', 'cards-3d', 'cta-glow', 'testimonials', 'floating-wa', 'schema-seo'].forEach(id => {
    const el = document.getElementById(`chk-${id}`);
    el.addEventListener('change', (e) => {
      const camel = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
      state.modules[camel] = e.target.checked;
      renderLivePreview();
    });
  });

  // JSON editor listener
  const jsonEditor = document.getElementById('json-editor');
  jsonEditor.addEventListener('input', () => {
    try {
      const parsed = JSON.parse(jsonEditor.value);
      state.business = { ...state.business, ...parsed };
      document.getElementById('json-status').className = 'json-status valid';
      document.getElementById('json-status').innerText = 'JSON Válido';
      syncStateToForm();
      renderLivePreview();
    } catch (err) {
      document.getElementById('json-status').className = 'json-status invalid';
      document.getElementById('json-status').innerText = 'Error de sintaxis JSON';
    }
  });

  document.getElementById('btn-format-json').addEventListener('click', () => {
    try {
      const parsed = JSON.parse(jsonEditor.value);
      jsonEditor.value = JSON.stringify(parsed, null, 2);
    } catch (e) {}
  });

  // Preset selector
  document.getElementById('select-demo-preset').addEventListener('change', (e) => {
    if (e.target.value) {
      window.loadBusinessPreset(e.target.value);
    }
  });
}

function updateStatsFromForm() {
  state.business.stats = [
    { num: document.getElementById('f-stat1-num').value, label: document.getElementById('f-stat1-label').value },
    { num: document.getElementById('f-stat2-num').value, label: document.getElementById('f-stat2-label').value },
    { num: document.getElementById('f-stat3-num').value, label: document.getElementById('f-stat3-label').value }
  ];
  syncStateToJsonEditor();
  renderLivePreview();
}

window.switchDataInputMode = function(mode) {
  const formContainer = document.getElementById('data-form-container');
  const jsonContainer = document.getElementById('data-json-container');
  const btnForm = document.getElementById('btn-mode-form');
  const btnJson = document.getElementById('btn-mode-json');

  if (mode === 'form') {
    formContainer.style.display = 'block';
    jsonContainer.style.display = 'none';
    btnForm.classList.add('active');
    btnJson.classList.remove('active');
    syncStateToForm();
  } else {
    formContainer.style.display = 'none';
    jsonContainer.style.display = 'flex';
    btnForm.classList.remove('active');
    btnJson.classList.add('active');
    syncStateToJsonEditor();
  }
};

function syncStateToForm() {
  document.getElementById('f-nombre').value = state.business.nombre || '';
  document.getElementById('f-nicho').value = state.business.nicho || 'LocalBusiness';
  document.getElementById('f-ciudad').value = state.business.ciudad || '';
  document.getElementById('f-eslogan').value = state.business.eslogan || '';
  document.getElementById('f-whatsapp').value = state.business.whatsapp || '';
  document.getElementById('f-telefono').value = state.business.telefono || '';
  document.getElementById('f-whatsapp-msg').value = state.business.whatsappMsg || '';
  document.getElementById('f-direccion').value = state.business.direccion || '';
  document.getElementById('f-maps-url').value = state.business.mapsUrl || '';
  document.getElementById('f-horario').value = state.business.horario || '';

  if (state.business.stats && state.business.stats.length >= 3) {
    document.getElementById('f-stat1-num').value = state.business.stats[0].num;
    document.getElementById('f-stat1-label').value = state.business.stats[0].label;
    document.getElementById('f-stat2-num').value = state.business.stats[1].num;
    document.getElementById('f-stat2-label').value = state.business.stats[1].label;
    document.getElementById('f-stat3-num').value = state.business.stats[2].num;
    document.getElementById('f-stat3-label').value = state.business.stats[2].label;
  }

  renderServicesFormList();
  syncStateToJsonEditor();
}

function syncStateToJsonEditor() {
  document.getElementById('json-editor').value = JSON.stringify(state.business, null, 2);
}

// Services Form Manager
function initServicesList() {
  document.getElementById('btn-add-service').addEventListener('click', () => {
    state.business.servicios.push({
      nombre: 'Nuevo Servicio Exclusivo',
      precio: '$100.000 COP',
      desc: 'Descripción detallada del procedimiento o atención personalizada.',
      icono: 'fa-gem'
    });
    renderServicesFormList();
    renderLivePreview();
  });
}

function renderServicesFormList() {
  const container = document.getElementById('services-list');
  container.innerHTML = '';

  state.business.servicios.forEach((svc, index) => {
    const item = document.createElement('div');
    item.className = 'service-card-item';
    item.innerHTML = `
      <div class="svc-row-top">
        <input type="text" class="svc-name-input" value="${escapeHtml(svc.nombre)}" placeholder="Nombre del Servicio">
        <input type="text" class="svc-price-input" value="${escapeHtml(svc.precio)}" placeholder="Precio">
        <button type="button" class="btn-del-svc" title="Eliminar"><i class="fa-solid fa-trash"></i></button>
      </div>
      <input type="text" class="svc-desc-input" value="${escapeHtml(svc.desc || '')}" placeholder="Breve descripción">
    `;

    const nameInp = item.querySelector('.svc-name-input');
    const priceInp = item.querySelector('.svc-price-input');
    const descInp = item.querySelector('.svc-desc-input');
    const delBtn = item.querySelector('.btn-del-svc');

    nameInp.addEventListener('input', (e) => {
      state.business.servicios[index].nombre = e.target.value;
      syncStateToJsonEditor();
      renderLivePreview();
    });

    priceInp.addEventListener('input', (e) => {
      state.business.servicios[index].precio = e.target.value;
      syncStateToJsonEditor();
      renderLivePreview();
    });

    descInp.addEventListener('input', (e) => {
      state.business.servicios[index].desc = e.target.value;
      syncStateToJsonEditor();
      renderLivePreview();
    });

    delBtn.addEventListener('click', () => {
      state.business.servicios.splice(index, 1);
      renderServicesFormList();
      syncStateToJsonEditor();
      renderLivePreview();
    });

    container.appendChild(item);
  });
}

// Preset Loader
window.loadBusinessPreset = function(key) {
  const p = PRESETS[key];
  if (!p) return;

  state.business = JSON.parse(JSON.stringify(p));
  if (p.palette) state.palette = { ...p.palette };
  if (p.vibe) state.vibe = p.vibe;
  if (p.headingFont) {
    state.headingFont = p.headingFont;
    document.getElementById('select-font-heading').value = p.headingFont;
  }

  // Switch to Workflow Tab
  document.querySelector('.mode-pill[data-tab="workflow"]').click();
  updateColorPickersUI();
  syncStateToForm();
  renderLivePreview();
  showToast(`Plantilla "${p.nombre}" cargada en el diseñador`);
};

// Split Resizer & View Modes
function initSplitResizer() {
  const gutter = document.getElementById('split-gutter');
  const refPane = document.getElementById('ref-pane');
  const container = document.getElementById('preview-container');

  let isDragging = false;

  gutter.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const containerRect = container.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;
    const percentage = (newWidth / containerRect.width) * 100;

    if (percentage > 15 && percentage < 85) {
      refPane.style.width = `${percentage}%`;
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });
}

function initToolbarControls() {
  // Split View Modes
  document.getElementById('btn-view-split').addEventListener('click', () => setSplitMode('split'));
  document.getElementById('btn-view-preview').addEventListener('click', () => setSplitMode('web'));
  document.getElementById('btn-view-ref').addEventListener('click', () => setSplitMode('ref'));

  // Device Switcher
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const dev = btn.getAttribute('data-device');
      state.deviceView = dev;
      const frameWrapper = document.getElementById('web-frame-wrapper');
      frameWrapper.className = `web-frame-wrapper device-${dev}`;
    });
  });

  // Refresh & Open External
  document.getElementById('btn-refresh-preview').addEventListener('click', () => {
    renderLivePreview();
    showToast('Vista previa actualizada');
  });

  document.getElementById('btn-open-external').addEventListener('click', () => {
    const html = generateExclusiveLandingHTML();
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  });

  // Zoom Controls
  let zoom = 100;
  const zoomImg = document.getElementById('ref-live-view-img');
  const zoomText = document.getElementById('zoom-level');

  document.getElementById('btn-zoom-in').addEventListener('click', () => {
    if (zoom < 300) zoom += 25;
    applyZoom();
  });
  document.getElementById('btn-zoom-out').addEventListener('click', () => {
    if (zoom > 50) zoom -= 25;
    applyZoom();
  });
  document.getElementById('btn-zoom-reset').addEventListener('click', () => {
    zoom = 100;
    applyZoom();
  });

  function applyZoom() {
    zoomImg.style.transform = `scale(${zoom / 100})`;
    zoomText.innerText = `${zoom}%`;
  }
}

function setSplitMode(mode) {
  state.splitMode = mode;
  document.querySelectorAll('.split-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`btn-view-${mode === 'web' ? 'preview' : mode}`).classList.add('active');

  const refPane = document.getElementById('ref-pane');
  const webPane = document.getElementById('web-pane');
  const gutter = document.getElementById('split-gutter');

  if (mode === 'split') {
    refPane.style.display = 'flex';
    refPane.style.width = '40%';
    webPane.style.display = 'flex';
    gutter.style.display = 'flex';
  } else if (mode === 'web') {
    refPane.style.display = 'none';
    gutter.style.display = 'none';
    webPane.style.display = 'flex';
  } else if (mode === 'ref') {
    refPane.style.display = 'flex';
    refPane.style.width = '100%';
    gutter.style.display = 'none';
    webPane.style.display = 'none';
  }
}

// ==========================================================================
// EXCLUSIVE LANDING PAGE HTML GENERATOR
// ==========================================================================
function generateExclusiveLandingHTML() {
  const b = state.business;
  const p = state.palette;
  const font = state.headingFont;
  const waLink = `https://wa.me/${b.whatsapp}?text=${encodeURIComponent(b.whatsappMsg)}`;

  // JSON-LD Schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": b.nicho || "LocalBusiness",
    "name": b.nombre,
    "description": b.eslogan,
    "telephone": b.telefono || b.whatsapp,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": b.direccion,
      "addressLocality": b.ciudad,
      "addressCountry": "CO"
    },
    "openingHours": b.horario,
    "url": window.location.href,
    "priceRange": "$$"
  };

  const servicesHtml = b.servicios.map((svc, i) => `
    <div class="luxury-card">
      <div class="card-glow-border"></div>
      <div class="card-inner">
        <div class="card-icon-box">
          <i class="fa-solid ${svc.icono || 'fa-wand-magic-sparkles'}"></i>
        </div>
        <div class="card-header-flex">
          <h3 class="card-title">${escapeHtml(svc.nombre)}</h3>
          <span class="card-price">${escapeHtml(svc.precio)}</span>
        </div>
        <p class="card-desc">${escapeHtml(svc.desc)}</p>
        <a href="${waLink}" target="_blank" class="card-action-btn">
          <span>Apartar Cita</span> <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `).join('');

  const statsHtml = b.stats.map(st => `
    <div class="stat-pill">
      <div class="stat-num">${escapeHtml(st.num)}</div>
      <div class="stat-label">${escapeHtml(st.label)}</div>
    </div>
  `).join('');

  const testimonialsHtml = (b.testimonios || []).map(t => `
    <div class="testi-card">
      <div class="stars-row">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
      </div>
      <p class="testi-text">"${escapeHtml(t.texto)}"</p>
      <div class="testi-author">
        <div class="author-avatar">${escapeHtml(t.nombre.charAt(0))}</div>
        <div class="author-info">
          <strong>${escapeHtml(t.nombre)}</strong>
          <small>${escapeHtml(t.cargo)}</small>
        </div>
      </div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(b.nombre)} | ${escapeHtml(b.ciudad)}</title>
  <meta name="description" content="${escapeHtml(b.eslogan)} - Contacto directo vía WhatsApp y ubicación en ${escapeHtml(b.ciudad)}.">
  
  <!-- OpenGraph Metadata -->
  <meta property="og:title" content="${escapeHtml(b.nombre)} | ${escapeHtml(b.ciudad)}">
  <meta property="og:description" content="${escapeHtml(b.eslogan)}">
  <meta property="og:type" content="website">

  <!-- SEO Local Schema.org JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(schemaJson, null, 2)}
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <style>
    :root {
      --primary: ${p.primary};
      --primary-glow: ${p.primary}44;
      --secondary: ${p.secondary};
      --bg: ${p.bg};
      --text: ${p.text};
      --card-bg: rgba(255, 255, 255, 0.03);
      --font-heading: ${font};
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', sans-serif;
      overflow-x: hidden;
      line-height: 1.6;
    }

    h1, h2, h3, .brand-name {
      font-family: var(--font-heading);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Ambient Glow Background */
    .ambient-glow {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
      filter: blur(80px);
      pointer-events: none;
      z-index: 0;
    }

    /* Header */
    header.site-header {
      position: sticky;
      top: 0;
      background: rgba(10, 14, 23, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      z-index: 100;
      padding: 16px 0;
    }
    .nav-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: #fff;
    }
    .logo-icon-gem {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--primary), #ffffff22);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-size: 18px;
      box-shadow: 0 4px 20px var(--primary-glow);
    }
    .brand-logo h2 {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .brand-logo small {
      display: block;
      font-size: 11px;
      color: rgba(255, 255, 255, 0.6);
    }
    .btn-nav-wa {
      background: var(--primary);
      color: #05070a;
      text-decoration: none;
      font-size: 13px;
      font-weight: 800;
      padding: 10px 20px;
      border-radius: 30px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 6px 24px var(--primary-glow);
      transition: transform 0.2s;
    }
    .btn-nav-wa:hover { transform: translateY(-2px); }

    /* Hero Section */
    .hero-section {
      position: relative;
      padding: 80px 0 60px;
      text-align: center;
    }
    .vip-badge-shimmer {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--primary);
      color: var(--primary);
      padding: 6px 18px;
      border-radius: 30px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 24px;
      box-shadow: 0 0 20px var(--primary-glow);
    }
    .hero-title {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 20px;
      color: #fff;
    }
    .hero-title .gradient-text {
      background: linear-gradient(135deg, #fff 30%, var(--primary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .hero-subtitle {
      font-size: 17px;
      color: rgba(255, 255, 255, 0.7);
      max-width: 720px;
      margin: 0 auto 36px;
    }
    .hero-cta-group {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }
    .btn-main-cta {
      background: linear-gradient(135deg, var(--primary), #ffffff);
      color: #090d16;
      text-decoration: none;
      font-size: 15px;
      font-weight: 800;
      padding: 16px 36px;
      border-radius: 30px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 10px 36px var(--primary-glow);
      transition: all 0.25s ease;
    }
    .btn-main-cta:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 16px 48px var(--primary-glow);
    }
    .btn-sec-cta {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #fff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 700;
      padding: 16px 28px;
      border-radius: 30px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      transition: background 0.2s;
    }
    .btn-sec-cta:hover { background: rgba(255, 255, 255, 0.12); }

    /* Stats Grid */
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 24px 32px;
      margin-bottom: 80px;
      backdrop-filter: blur(10px);
    }
    .stat-pill {
      text-align: center;
    }
    .stat-num {
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--primary);
      font-family: var(--font-heading);
      margin-bottom: 4px;
    }
    .stat-label {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 600;
    }

    /* Services Section */
    .section-title-wrap {
      text-align: center;
      margin-bottom: 50px;
    }
    .section-tag {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--primary);
      display: inline-block;
      margin-bottom: 10px;
    }
    .section-title {
      font-size: 2.2rem;
      font-weight: 800;
      color: #fff;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 28px;
      margin-bottom: 80px;
    }

    /* Exclusive 3D Glassmorphic Cards */
    .luxury-card {
      position: relative;
      background: rgba(18, 24, 38, 0.55);
      backdrop-filter: blur(12px);
      border-radius: 24px;
      padding: 32px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
      display: flex;
      flex-direction: column;
    }
    .luxury-card:hover {
      transform: translateY(-8px);
      border-color: var(--primary);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--primary-glow);
    }
    .card-icon-box {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary);
      font-size: 22px;
      margin-bottom: 24px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }
    .card-header-flex {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }
    .card-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #fff;
    }
    .card-price {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--primary);
      white-space: nowrap;
    }
    .card-desc {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.65);
      margin-bottom: 24px;
      flex: 1;
    }
    .card-action-btn {
      color: #fff;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      transition: color 0.2s, gap 0.2s;
    }
    .card-action-btn:hover {
      color: var(--primary);
      gap: 12px;
    }

    /* Testimonials Section */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 80px;
    }
    .testi-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 28px;
    }
    .stars-row {
      color: #f59e0b;
      font-size: 14px;
      margin-bottom: 16px;
      display: flex;
      gap: 4px;
    }
    .testi-text {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.85);
      font-style: italic;
      margin-bottom: 20px;
    }
    .testi-author {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .author-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary);
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 16px;
    }
    .author-info strong { display: block; font-size: 14px; color: #fff; }
    .author-info small { display: block; font-size: 12px; color: rgba(255, 255, 255, 0.5); }

    /* Location & Map Section */
    .location-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      margin-bottom: 80px;
    }
    @media (max-width: 768px) {
      .location-card { grid-template-columns: 1fr; }
    }
    .loc-item {
      display: flex;
      gap: 16px;
      margin-bottom: 20px;
    }
    .loc-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }
    .loc-details strong { display: block; font-size: 14px; color: #fff; margin-bottom: 2px; }
    .loc-details p { font-size: 14px; color: rgba(255, 255, 255, 0.7); }

    /* Footer */
    footer.site-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 40px 0;
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      font-size: 13px;
    }

    /* Floating WhatsApp Button */
    .wa-floating-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
      color: #fff;
      text-decoration: none;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
      z-index: 1000;
      transition: transform 0.25s ease;
      animation: waPulse 2s infinite;
    }
    .wa-floating-btn:hover {
      transform: scale(1.1);
    }
    @keyframes waPulse {
      0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
      70% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
      100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
    }
  </style>
</head>
<body>

  <div class="ambient-glow"></div>

  <!-- Sticky Header -->
  <header class="site-header">
    <div class="container nav-wrap">
      <a href="#" class="brand-logo">
        <div class="logo-icon-gem"><i class="fa-solid fa-crown"></i></div>
        <div>
          <h2>${escapeHtml(b.nombre)}</h2>
          <small><i class="fa-solid fa-location-dot"></i> ${escapeHtml(b.ciudad)}</small>
        </div>
      </a>
      <a href="${waLink}" target="_blank" class="btn-nav-wa">
        <i class="fa-brands fa-whatsapp"></i> <span>WhatsApp Directo</span>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="container">
      <div class="vip-badge-shimmer">
        <i class="fa-solid fa-sparkles"></i> SERVICIO EXCLUSIVO & ATENCIÓN PERSONALIZADA
      </div>
      <h1 class="hero-title">
        ${escapeHtml(b.nombre)}<br>
        <span class="gradient-text">${escapeHtml(b.ciudad)}</span>
      </h1>
      <p class="hero-subtitle">
        ${escapeHtml(b.eslogan)}
      </p>

      <div class="hero-cta-group">
        <a href="${waLink}" target="_blank" class="btn-main-cta">
          <i class="fa-brands fa-whatsapp"></i> <span>Solicitar Cita / Información</span>
        </a>
        <a href="${escapeHtml(b.mapsUrl)}" target="_blank" class="btn-sec-cta">
          <i class="fa-solid fa-map-location-dot"></i> <span>Ver Ubicación</span>
        </a>
      </div>

      <!-- Stats Bar -->
      <div class="stats-container">
        ${statsHtml}
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="services-section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-tag">CATÁLOGO DE SERVICIOS</span>
        <h2 class="section-title">Experiencias & Tratamientos de Autor</h2>
      </div>

      <div class="services-grid">
        ${servicesHtml}
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="testimonials-section">
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-tag">RESEÑAS VERIFICADAS</span>
        <h2 class="section-title">La Opinión de Nuestros Clientes</h2>
      </div>

      <div class="testimonials-grid">
        ${testimonialsHtml}
      </div>
    </div>
  </section>

  <!-- Location Card -->
  <section class="location-section">
    <div class="container">
      <div class="location-card">
        <div>
          <span class="section-tag">CONTACTO & VISITA</span>
          <h2 style="font-size: 1.8rem; margin-bottom: 24px; color:#fff;">Estamos Listos Para Atenderte</h2>

          <div class="loc-item">
            <div class="loc-icon"><i class="fa-solid fa-location-dot"></i></div>
            <div class="loc-details">
              <strong>Dirección en ${escapeHtml(b.ciudad)}:</strong>
              <p>${escapeHtml(b.direccion)}</p>
            </div>
          </div>

          <div class="loc-item">
            <div class="loc-icon"><i class="fa-solid fa-clock"></i></div>
            <div class="loc-details">
              <strong>Horario de Atención:</strong>
              <p>${escapeHtml(b.horario)}</p>
            </div>
          </div>

          <div class="loc-item">
            <div class="loc-icon"><i class="fa-solid fa-phone"></i></div>
            <div class="loc-details">
              <strong>Teléfono / Línea Directa:</strong>
              <p>${escapeHtml(b.telefono || b.whatsapp)}</p>
            </div>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.4); border-radius: 16px; padding: 24px; border: 1px solid rgba(255,255,255,0.06); text-align: center;">
          <i class="fa-solid fa-map-marked-alt" style="font-size: 48px; color: var(--primary); margin-bottom: 16px;"></i>
          <h3 style="font-size: 1.2rem; color: #fff; margin-bottom: 8px;">¿Cómo llegar a nuestra sede?</h3>
          <p style="font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 20px;">Abre tu aplicación de mapas preferida y navega directamente.</p>
          <a href="${escapeHtml(b.mapsUrl)}" target="_blank" class="btn-main-cta" style="width: 100%; justify-content: center;">
            <i class="fa-solid fa-diamond-turn-right"></i> Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p>© ${new Date().getFullYear()} ${escapeHtml(b.nombre)}. Todos los derechos reservados.</p>
      <p style="margin-top: 6px; font-size: 11px;">Sitio Web Standalone optimizado para SEO Local & Conversión en WhatsApp.</p>
    </div>
  </footer>

  <!-- Floating WhatsApp Action -->
  <a href="${waLink}" target="_blank" class="wa-floating-btn" title="Contactar por WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
  </a>

</body>
</html>`;
}

function renderLivePreview() {
  const iframe = document.getElementById('preview-iframe');
  if (!iframe) return;
  const html = generateExclusiveLandingHTML();
  iframe.srcdoc = html;

  updateContextCodeDisplay();
}

// ==========================================================================
// AI CONTEXT TRIANGLE & CODE EXPORTER
// ==========================================================================
function initContextTriangle() {
  document.querySelectorAll('.tri-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tri-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTriFile = btn.getAttribute('data-target');
      updateContextCodeDisplay();
    });
  });

  const copyBtn = document.getElementById('btn-copy-tri-code');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.getElementById('tri-code-display').innerText;
      navigator.clipboard.writeText(code).then(() => {
        showToast('Código copiado al portapapeles');
      });
    });
  }

  const dlBtn = document.getElementById('btn-download-tri-file');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      downloadCurrentTriFile();
    });
  }
}

function updateContextCodeDisplay() {
  const codeEl = document.getElementById('tri-code-display');
  const nameTag = document.getElementById('current-tri-file');
  if (!codeEl || !nameTag) return;
  const target = state.activeTriFile;

  if (target === 'tri-datos') {
    nameTag.innerText = 'DATOS_NEGOCIO.json';
    codeEl.innerText = JSON.stringify(state.business, null, 2);
  } else if (target === 'tri-ficha') {
    nameTag.innerText = 'FICHA_DISENO.md';
    codeEl.innerText = generateFichaDisenoMD();
  } else if (target === 'tri-agents') {
    nameTag.innerText = 'AGENTS.md';
    codeEl.innerText = generateAgentsMD();
  } else if (target === 'tri-html') {
    nameTag.innerText = 'index_standalone.html';
    codeEl.innerText = generateExclusiveLandingHTML();
  }
}

function generateFichaDisenoMD() {
  const b = state.business;
  const p = state.palette;
  return `# Ficha de Diseño: ${b.nombre}

## 🎨 Paleta de Colores Exclusiva
- **Color Primario (Acento VIP)**: \`${p.primary}\` (Botones de acción, badges, detalles y números de estadísticas).
- **Color Secundario**: \`${p.secondary}\` (Contenedores, bordes sutiles y tarjetas).
- **Color de Fondo Principal**: \`${p.bg}\` (Modo oscuro / Canvas principal con efecto de ambient glow).
- **Color de Textos**: \`${p.text}\` (Tipografía principal de alto contraste y legibilidad).

## 🔤 Tipografía
- **Títulos y Encabezados (H1, H2, H3)**: ${state.headingFont} (Google Fonts).
- **Cuerpo y Párrafos**: \`'Plus Jakarta Sans', sans-serif\`.

## 💎 Reglas de Componentes UI
1. **Glassmorphism & Depth**: Tarjetas con \`backdrop-filter: blur(12px)\`, bordes perimetrales sutiles y micro-animaciones al hacer hover.
2. **Iconografía No Genérica**: Íconos contextuales con contenedores geométricos, sombras de luz perimetral y estilos acordes al rubro.
3. **Conversión Focalizada**: Botones de WhatsApp con mensaje pre-configurado y pulsación magnética de luz.
`;
}

function generateAgentsMD() {
  const b = state.business;
  return `# Guía del Proyecto para Inteligencia Artificial: ${b.nombre}

Bienvenido agente de IA. Este proyecto contiene la landing page exclusiva y optimizada para SEO Local de **${b.nombre}** en **${b.ciudad}**.

## 📁 Estructura del Triángulo de Contexto IA
1. **\`DATOS_NEGOCIO.json\`**: Fuente única de verdad con teléfonos, WhatsApp, horarios, dirección y catálogo de servicios.
2. **\`FICHA_DISENO.md\`**: Manual de marca con paletas HEX, tipografías y reglas de estilo visual.
3. **\`AGENTS.md\`**: Este archivo de instrucciones para continuidad autónoma.

## 🏆 Reglas Obligatorias para Cualquier Modificación
- **100% Standalone**: Mantén siempre todo el CSS embebido en \`<style>\` e imágenes en Base64 o SVG si se agregan nuevas subpáginas.
- **SEO Local Schema.org**: Mantén el marcado JSON-LD con \`@type: "${b.nicho}"\`.
- **Iconografía Exclusiva**: No uses iconos o botones genéricos; mantén la estética de alta gama con sombras perimetrales y badges VIP.
`;
}

function downloadCurrentTriFile() {
  let content = '';
  let filename = '';
  const target = state.activeTriFile;

  if (target === 'tri-datos') {
    content = JSON.stringify(state.business, null, 2);
    filename = 'DATOS_NEGOCIO.json';
  } else if (target === 'tri-ficha') {
    content = generateFichaDisenoMD();
    filename = 'FICHA_DISENO.md';
  } else if (target === 'tri-agents') {
    content = generateAgentsMD();
    filename = 'AGENTS.md';
  } else if (target === 'tri-html') {
    content = generateExclusiveLandingHTML();
    filename = `${state.business.nombre.toLowerCase().replace(/\s+/g, '_')}_standalone.html`;
  }

  downloadFile(filename, content);
}

function downloadFile(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

// Modal & Export Actions
function initModals() {
  const exportBtn = document.getElementById('btn-export-code');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      openModal('modal-export');
      prepareModalContent();
    });
  }

  const promptBtn = document.getElementById('btn-copy-prompt');
  if (promptBtn) {
    promptBtn.addEventListener('click', () => {
      copyAIPrompt();
    });
  }

  const modalPromptBtn = document.getElementById('btn-copy-modal-prompt');
  if (modalPromptBtn) {
    modalPromptBtn.addEventListener('click', () => {
      copyAIPrompt();
    });
  }

  // Single download buttons in modal
  document.getElementById('btn-dl-html')?.addEventListener('click', () => {
    downloadFile('index_standalone.html', generateExclusiveLandingHTML());
  });
  document.getElementById('btn-dl-json')?.addEventListener('click', () => {
    downloadFile('DATOS_NEGOCIO.json', JSON.stringify(state.business, null, 2));
  });
  document.getElementById('btn-dl-ficha')?.addEventListener('click', () => {
    downloadFile('FICHA_DISENO.md', generateFichaDisenoMD());
  });
  document.getElementById('btn-dl-agents')?.addEventListener('click', () => {
    downloadFile('AGENTS.md', generateAgentsMD());
  });
}

function prepareModalContent() {
  const prompt = generateAIPromptText();
  const el = document.getElementById('ai-prompt-text');
  if (el) el.value = prompt;
}

function generateAIPromptText() {
  const b = state.business;
  const p = state.palette;
  return `Construye una landing page exclusiva y no genérica para el negocio "${b.nombre}" ubicado en ${b.ciudad}.
- Nicho: ${b.nicho}
- Paleta: Primario (${p.primary}), Secundario (${p.secondary}), Fondo (${p.bg}), Texto (${p.text})
- Tipografía: ${state.headingFont}
- WhatsApp de conversión: ${b.whatsapp}
- Genera el Triángulo de Contexto IA (DATOS_NEGOCIO.json, FICHA_DISENO.md, AGENTS.md) y el archivo index.html Standalone con marcado Schema.org JSON-LD de SEO Local y OpenGraph.`;
}

function copyAIPrompt() {
  const prompt = generateAIPromptText();
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('Prompt estructurado copiado para la IA');
  });
}

window.openModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'flex';
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
};

// Utilities
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles" style="color:var(--gold-primary)"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
