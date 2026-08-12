/**
 * AGENTE DE IA DEMOSTRACIÓN - MAKLOZ TECH & MIOWEKIDS
 * Lógica Conversacional de IA para Atención a Padres de Familia en Guarderías de Colombia
 * Soporta Modo Estándar (Sin MioWeKids) y Modo Avanzado (Con MioWeKids)
 */

document.addEventListener('DOMContentLoaded', () => {
  const chatStream = document.getElementById('chatStream');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const suggestionChips = document.getElementById('suggestionChips');

  // Mode Selection State ('standard' vs 'miowekids')
  let currentAiMode = 'standard';

  const modeStdBtn = document.getElementById('modeStdBtn');
  const modeFullBtn = document.getElementById('modeFullBtn');

  if (modeStdBtn && modeFullBtn) {
    modeStdBtn.addEventListener('click', () => {
      currentAiMode = 'standard';
      modeStdBtn.classList.add('active');
      modeFullBtn.classList.remove('active');
      notifyModeChange('Agente IA Estándar (Sin MioWeKids)');
    });

    modeFullBtn.addEventListener('click', () => {
      currentAiMode = 'miowekids';
      modeFullBtn.classList.add('active');
      modeStdBtn.classList.remove('active');
      notifyModeChange('Agente IA + MioWeKids (Conectado al Sistema)');
    });
  }

  function notifyModeChange(modeName) {
    const systemNoticeHTML = `
      <div class="msg-row received" style="align-self: center; max-width: 90%;">
        <div class="msg-bubble" style="background-color: #0f172a; color: #f97316; border: 1px solid #334155; text-align: center; font-size: 12px; font-weight: 600;">
          <i class="fa-solid fa-arrows-rotate"></i> Modo de Agente IA cambiado a: <strong>${modeName}</strong>
        </div>
      </div>
    `;
    chatStream.insertAdjacentHTML('beforeend', systemNoticeHTML);
    scrollToBottom();
  }

  // Text normalization to strip accents (cuánto -> cuanto, pensión -> pension)
  function normalizeText(str) {
    return (str || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  // Base Knowledge Base (Commercial / Admissions)
  const commercialKnowledge = [
    {
      keywords: ['cupo', 'cupos', 'inscripci', 'matri', 'vacante', 'edad', 'anos', 'meses', 'admision'],
      response: `✨ ¡Hola! Claro que sí, con mucho gusto te brindo información de cupos. 🎒

En nuestro Jardín tenemos admisiones abiertas para los siguientes niveles:
• **Sala Cuna & Estimulación**: 0 a 12 meses (Cupos disponibles)
• **Párvulos & Caminadores**: 1 a 3 años (Últimos 3 cupos)
• **Prejardín & Jardín**: 3 a 5 años (Cupos disponibles)

¿Para cuántos años o meses buscas el cupo de tu pequeño/a?`
    },
    {
      keywords: ['precio', 'precios', 'costo', 'costos', 'valor', 'valores', 'cuanto', 'cuanta', 'mensualidad', 'mensualidades', 'pension', 'pensiones', 'tarif', 'tarifa', 'tarifas', 'pagar', 'cuesta', 'cobran', 'dinero'],
      response: `💰 **Nuestras Tarifas & Planes 2026**:

1. **Jornada Completa** (6:30 AM - 5:30 PM): Incluye alimentación completa (almuerzo + 2 refrigerios supervisados por nutricionista).
2. **Media Jornada** (7:30 AM - 12:30 PM): Incluye refrigerio am.

Ofrecemos una tarifa muy competitiva con educación en valores y docentes licenciadas. 

¿Te gustaría que agendemos una **visita guiada presencial** sin compromiso para conocer las instalaciones y entregarte el folleto tarifario detallado?`
    },
    {
      keywords: ['visita', 'agendar', 'conocer', 'cita', 'ir', 'sede', 'instalacion', 'donde'],
      response: `🏫 ¡Excelente idea! Será un gusto recibirte en nuestra sede.

Para agendar tu **Visita Guiada VIP**, por favor indícame:
1. Tu nombre completo
2. Nombre y edad de tu hijo/a
3. ¿Prefieres visitarnos en la mañana (9:00 AM) o en la tarde (3:00 PM)?`
    },
    {
      keywords: ['horario', 'hora', 'abren', 'cierran', 'dias', 'sabado'],
      response: `⏰ **Nuestros Horarios de Atención**:
• **Lunes a Viernes**: 6:30 AM a 5:30 PM (Jornada Completa y Media Jornada).
• **Atención de Coordinación**: 8:00 AM a 4:00 PM.

📍 **Ubicación**: Zona central con fácil acceso y parqueo seguro.`
    }
  ];

  // Specific Student / Operational Queries
  const studentKeywords = ['reporte', 'como esta', 'mateo', 'sofia', 'comer', 'almuerzo', 'siesta', 'asistencia', 'boletin', 'minuta'];

  // Helper: Append User Message
  function appendUserMessage(text) {
    const timeStr = getCurrentTime();
    const msgHTML = `
      <div class="msg-row sent">
        <div class="msg-bubble">
          ${escapeHTML(text)}
          <div class="msg-meta">
            <span>${timeStr}</span>
            <span class="ticks"><i class="fa-solid fa-check-double"></i></span>
          </div>
        </div>
      </div>
    `;
    chatStream.insertAdjacentHTML('beforeend', msgHTML);
    scrollToBottom();
  }

  // Helper: Append AI Message with typing simulation
  function processAIResponse(userText) {
    showTypingIndicator();

    const delay = Math.floor(Math.random() * 600) + 1000;

    setTimeout(() => {
      removeTypingIndicator();

      const aiReply = generateAIAnswer(userText);
      const timeStr = getCurrentTime();

      const msgHTML = `
        <div class="msg-row received">
          <div class="msg-bubble">
            ${formatMarkdown(aiReply)}
            <div class="msg-meta">
              <span>${timeStr}</span>
            </div>
          </div>
        </div>
      `;

      chatStream.insertAdjacentHTML('beforeend', msgHTML);
      scrollToBottom();
    }, delay);
  }

  // Match intent algorithm with Normalized Accents & Mode Checking
  function generateAIAnswer(userText) {
    const textNorm = normalizeText(userText);

    // 1. First Check Tarifas & Mensualidades directly for high priority
    const tariffItem = commercialKnowledge.find(item => item.keywords.includes('mensualidades') || item.keywords.includes('pension'));
    if (tariffItem && tariffItem.keywords.some(kw => textNorm.includes(normalizeText(kw)))) {
      return tariffItem.response;
    }

    // 2. Check if user is asking about student/daily report
    const isStudentQuery = studentKeywords.some(kw => textNorm.includes(normalizeText(kw)));

    if (isStudentQuery) {
      if (currentAiMode === 'standard') {
        // Standard Mode (Without MioWeKids) fallback explanation
        return `🔒 **Respuesta del Agente IA Estándar (Sin MioWeKids)**:

Las consultas sobre *reporte diario, alimentación, siesta y asistencia de alumnos matriculados* corresponden al módulo operativo de **MioWeKids**.

Actualmente estás probando el **Agente IA Estándar (Comercial & Admisiones)**, el cual se encarga de:
• 🎒 Brindar información de cupos por edad
• 💰 Tarifas y pensiones
• 📅 Agendar visitas guiadas presenciales

💡 *Para probar la consulta de reportes de alumnos en tiempo real, cambia al modo **"Agente IA + MioWeKids"** en el panel lateral.*`;
      } else {
        // MioWeKids Connected Mode
        return `📊 **[Conectado a la Base de Datos MioWeKids]**

☀️ **Reporte en Tiempo Real de hoy para el alumno Mateo Silva**:
• **Entrada**: 7:15 AM (Puntual 🟢)
• **Almuerzo**: Consumió el 100% de su minuta (Crema de verduras, pechuga y fruta fresca) 🍎
• **Siesta**: 1:00 PM - 2:30 PM (Descansó muy bien 💤)
• **Actividad del día**: Pintura de dedos & Lectura de cuentos 🎨
• **Estado de Ánimo**: Muy feliz y participativo.

*Este reporte lo genera automáticamente el sistema **MioWeKids** para los padres de familia.*`;
      }
    }

    // 3. Check general commercial intents
    for (const item of commercialKnowledge) {
      for (const kw of item.keywords) {
        if (textNorm.includes(normalizeText(kw))) {
          return item.response;
        }
      }
    }

    // 4. Check if user is giving name/appointment details
    if (textNorm.includes('manana') || textNorm.includes('tarde') || textNorm.includes('cita') || textNorm.includes('agendar')) {
      triggerLeadModal();
    }

    // Default Fallback Response
    if (currentAiMode === 'standard') {
      return `🤖 ¡Hola! Soy la **Asistente Virtual IA de Admisiones (Makloz Tech - Modo Estándar)**. 

Puedo brindarte información sobre:
1. 🎒 **Cupos disponibles por edad**
2. 💰 **Tarifas y mensualidades 2026**
3. 📅 **Agendamiento de visitas guiadas presenciales**

¿En qué te puedo colaborar hoy?`;
    } else {
      return `🤖 ¡Hola! Soy la **Asistente Virtual IA Avanzada (Makloz Tech & MioWeKids)**.

Puedo ayudarte con:
1. 🎒 **Admisiones & Cupos nuevos**
2. 💰 **Tarifas & Mensualidades**
3. 📊 **Reporte diario en tiempo real de alumnos matriculados**
4. 🍎 **Minuta de alimentación del día**

¿Sobre qué tema deseas consultar?`;
    }
  }

  // Show Typing Indicator
  function showTypingIndicator() {
    const typingHTML = `
      <div class="msg-row received" id="typingIndicator">
        <div class="typing-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    chatStream.insertAdjacentHTML('beforeend', typingHTML);
    scrollToBottom();
  }

  // Remove Typing Indicator
  function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }

  // Send Action Trigger
  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    chatInput.value = '';
    processAIResponse(text);
  }

  sendBtn.addEventListener('click', handleSend);

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  });

  // Suggestion Chips Click Handler
  suggestionChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip-btn');
    if (chip) {
      const text = chip.getAttribute('data-msg') || chip.innerText;
      appendUserMessage(text);
      processAIResponse(text);
    }
  });

  // Sidebar Presets Handler
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = btn.getAttribute('data-prompt');
      if (prompt) {
        appendUserMessage(prompt);
        processAIResponse(prompt);
      }
    });
  });

  // Trigger Lead Capture Modal simulation
  function triggerLeadModal() {
    const modal = document.getElementById('leadModal');
    if (modal) {
      setTimeout(() => {
        modal.classList.add('active');
      }, 2000);
    }
  }

  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      document.getElementById('leadModal').classList.remove('active');
    });
  }

  // Utilities
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  function formatMarkdown(text) {
    let formatted = escapeHTML(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
  }

  function scrollToBottom() {
    chatStream.scrollTop = chatStream.scrollHeight;
  }
});
