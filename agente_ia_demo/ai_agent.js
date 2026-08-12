/**
 * AGENTE DE IA DEMOSTRACIÓN - MAKLOZ TECH & MIOWEKIDS
 * Lógica Conversacional de IA para Atención a Padres de Familia en Guarderías de Colombia
 */

document.addEventListener('DOMContentLoaded', () => {
  const chatStream = document.getElementById('chatStream');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const suggestionChips = document.getElementById('suggestionChips');

  // Lead Appointment State
  let leadData = {
    nombrePadre: '',
    edadNino: '',
    nivelDeseado: '',
    fechaVisita: ''
  };

  // Knowledge Base of AI Agent (MioWeKids Core Intelligence)
  const knowledgeBase = [
    {
      keywords: ['cupo', 'cupos', 'inscripci', 'matri', 'vacante', 'edad', 'años', 'meses', 'admision'],
      response: `✨ ¡Hola! Claro que sí, con mucho gusto te brindo información de cupos. 🎒

En nuestro Jardín tenemos admisiones abiertas para los siguientes niveles:
• **Sala Cuna & Estimulación**: 0 a 12 meses (Cupos disponibles)
• **Párvulos & Caminadores**: 1 a 3 años (Últimos 3 cupos)
• **Prejardín & Jardín**: 3 a 5 años (Cupos disponibles)

¿Para cuántos años o meses buscas el cupo de tu pequeño/a?`
    },
    {
      keywords: ['precio', 'costo', 'valor', 'cuanto', 'mensualidad', 'pension', 'tarif', 'pagar'],
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
      keywords: ['reporte', 'miowekids', 'boletin', 'como esta', 'hijo', 'mateo', 'sofia', 'comer', 'almuerzo', 'siesta', 'asistencia'],
      response: `📊 **[Integración MioWeKids - Reporte en Tiempo Real]**

☀️ **Reporte Diario de hoy para el alumno Mateo Silva**:
• **Entrada**: 7:15 AM (Puntual 🟢)
• **Almuerzo**: Consumió el 100% de su minuta (Crema de verduras, pechuga y fruta fresca) 🍎
• **Siesta**: 1:00 PM - 2:30 PM (Descansó muy bien 💤)
• **Actividad del día**: Pintura de dedos & Lectura de cuentos 🎨
• **Estado de Ánimo**: Muy feliz y participativo.

*Este reporte se envía automáticamente a los padres a través de nuestra plataforma **MioWeKids**.*`
    },
    {
      keywords: ['horario', 'hora', 'abren', 'cierran', 'dias', 'sabado'],
      response: `⏰ **Nuestros Horarios de Atención**:
• **Lunes a Viernes**: 6:30 AM a 5:30 PM (Jornada Completa y Media Jornada).
• **Atención de Coordinación**: 8:00 AM a 4:00 PM.

📍 **Ubicación**: Zona central con fácil acceso y parqueo seguro.`
    },
    {
      keywords: ['comida', 'almuerz', 'nutri', 'alimenta', 'menu', 'minuta'],
      response: `🍎 **Nutrición Balanceada & Saludable**:

Todas nuestras minutas alimenticias son diseñadas por una **Nutricionista Infantil**:
• Almuerzo caliente recién preparado.
• 2 Refrigerios saludables (fruta fresca, lácteos y cereales integrales).
• Opción especial para niños con alergias o requerimientos médicos.`
    }
  ];

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

    // Random AI response delay between 1.0s and 1.6s for natural feel
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

  // Match intent algorithm
  function generateAIAnswer(userText) {
    const textLower = userText.toLowerCase();

    // Check if user is giving name/appointment details
    if (textLower.includes('mañana') || textLower.includes('tarde') || textLower.includes('cita') || textLower.includes('agendar')) {
      triggerLeadModal();
    }

    for (const item of knowledgeBase) {
      for (const kw of item.keywords) {
        if (textLower.includes(kw)) {
          return item.response;
        }
      }
    }

    // Default Fallback Response
    return `🤖 ¡Hola! Gracias por comunicarte con el Jardín Infantil. 

Soy la **Asistente Virtual de IA (impulsada por Makloz Tech & MioWeKids)**. Puedo ayudarte con:
1. 🎒 **Información de Cupos & Edades**
2. 💰 **Tarifas de Mensualidad 2026**
3. 📅 **Agendamiento de Visitas Guiadas**
4. 📊 **Demostración de Reporte Diario de Alumnos**

¿Sobre cuál de estos temas te gustaría saber más?`;
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

  // Event Listeners
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

  // Close Lead Modal
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
