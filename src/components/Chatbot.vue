<script setup>
import { ref, onMounted } from 'vue';

// Importar utilidades de seguridad
import { 
  sanitizeInput, 
  checkRateLimit, 
  detectBot, 
  logSecurityEvent,
  enforceHTTPS 
} from '../utils/security.js';

// Forzar HTTPS en producción
enforceHTTPS();

// Import SVG icons
import ChatIcon from './icons/ChatIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';
import BotIcon from './icons/BotIcon.vue';
import SendIcon from './icons/SendIcon.vue';
import SectionsIcon from './icons/SectionsIcon.vue';
import EducationIcon from './icons/EducationIcon.vue';
import ProjectsIcon from './icons/ProjectsIcon.vue';
import SkillsIcon from './icons/SkillsIcon.vue';
import ContactIcon from './icons/ContactIcon.vue';
import HomeIcon from './icons/HomeIcon.vue';
import BackIcon from './icons/BackIcon.vue';
import EmailIcon from './icons/EmailIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import TargetIcon from './icons/TargetIcon.vue';
import LinkIcon from './icons/LinkIcon.vue';
import CodeIcon from './icons/CodeIcon.vue';
import UserIcon from './icons/UserIcon.vue';

// Estados del chatbot
const isOpen = ref(false);
const messages = ref([]);
const userInput = ref('');
const isLoading = ref(false);

// Mensaje inicial
const initialMessage = {
  id: 1,
  text: "¡Hola! Soy el asistente de Ezequiel. ¿En qué puedo ayudarte hoy?",
  sender: 'bot',
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  options: [
    { text: "Ver secciones del portafolio", action: "sections", icon: SectionsIcon },
    { text: "Conocer a Ezequiel", action: "about", icon: UserIcon },
    // { text: "Ver experiencia", action: "experience", icon: CodeIcon },
    { text: "Ver proyectos", action: "projects", icon: ProjectsIcon },
    { text: "Ver habilidades", action: "skills", icon: SkillsIcon },
    { text: "Contacto", action: "contact", icon: ContactIcon }
  ]
};

// Opciones predefinidas 
const options = {
  sections: {
    text: "El portafolio tiene estas secciones:",
    options: [
      { text: "Inicio - Datos personales", action: "scroll:inicio", icon: HomeIcon },
      { text: "Educación - Formación académica", action: "scroll:educacion", icon: EducationIcon },
      // { text: "Experiencia - Trayectoria profesional", action: "scroll:experiencia", icon: CodeIcon },
      { text: "Proyectos - Trabajos realizados", action: "scroll:proyectos", icon: ProjectsIcon },
      { text: "Habilidades - Conocimientos técnicos", action: "scroll:habilidades", icon: SkillsIcon },
      // { text: "Intereses - Pasiones personales", action: "scroll:intereses", icon: HeartIcon },
      { text: "Volver al menú", action: "menu", icon: BackIcon }
    ]
  },
  about: {
    text: "Ezequiel es un desarrollador web en formación apasionado por la tecnología. Tiene formación técnica en agropecuaria y actualmente estudia programación en la UTN. Es proactivo, con rápido aprendizaje y excelente trabajo en equipo.",
    options: [
      { text: "Información de contacto", action: "contact", icon: ContactIcon },
      { text: "Formación académica", action: "education", icon: EducationIcon },
      // { text: "Experiencia profesional", action: "experience", icon: CodeIcon },
      { text: "Volver al menú principal", action: "menu", icon: BackIcon }
    ]
  },
  experience: {
    text: "Ezequiel tiene experiencia como desarrollador backend en Ferretería San Francisco (pasantía remota) y varios proyectos universitarios colaborativos. Actualmente busca su primera oportunidad profesional como desarrollador junior.",
    options: [
      { text: "Ver proyectos específicos", action: "projects", icon: CodeIcon },
      { text: "Ver formación", action: "education", icon: EducationIcon },
      { text: "Volver al menú", action: "menu", icon: BackIcon }
    ]
  },
  skills: {
    text: "Habilidades técnicas: JavaScript, Vue.js, React, HTML/CSS, Java, Python, Git, MySQL. Habilidades personales: Aprendizaje rápido, trabajo en equipo, adaptabilidad, resolución de problemas.",
    options: [
      { text: "Ver proyectos con estas habilidades", action: "projects", icon: CodeIcon },
      { text: "Cómo aprendió estas skills", action: "education", icon: EducationIcon },
      { text: "Menú principal", action: "menu", icon: BackIcon }
    ]
  },
  education: {
    text: "Educación:\n• UTN San Rafael - Tecnicatura en Programación (2024-2025)\n• Escuela Agropecuaria Antonio Di Benedetto - Técnico Agropecuario (2018-2023)",
    options: [
      { text: "Proyectos universitarios", action: "projects", icon: TargetIcon },
      { text: "Experiencia práctica", action: "experience", icon: CodeIcon },
      { text: "Menú principal", action: "menu", icon: BackIcon }
    ]
  },
  contact: {
    text: "Contacto:\n• Email: quirozarielezequiel@gmail.com\n• Teléfono: +54 2604-005223\n• LinkedIn: linkedin.com/in/ezequielquiroz\n• GitHub: github.com/EzequielQ2004\n• Portafolio: ezequielquiroz-portafolio.netlify.app",
    options: [
      { text: "Copiar email", action: "copy:email", icon: EmailIcon },
      { text: "Ir a GitHub", action: "link:github", icon: GithubIcon },
      { text: "Ir a LinkedIn", action: "link:linkedin", icon: ContactIcon },
      { text: "Menú principal", action: "menu", icon: BackIcon }
    ]
  },

  menu: {
    text: "Menú principal: ¿En qué puedo ayudarte?",
    options: initialMessage.options
  },
  projects: {
    text: "Proyectos destacados:\n\n• CapyGaming - E-commerce de productos gamers (HTML/CSS/JS)\n• Ferreteria San Francisco Web- Sitio para una ferreteria desarrollado con React\n• Juego del Impostor - Juego interactivo desarrollado con JavaScript",
    options: [
      { text: "Ver sección de proyectos", action: "scroll:proyectos", icon: TargetIcon },
      { text: "Ir a GitHub (ver código)", action: "link:github", icon: GithubIcon },
      { text: "Ver formación relacionada", action: "education", icon: EducationIcon },
      { text: "Volver al menú", action: "menu", icon: BackIcon }
    ]
  }
};

// Inicializar chatbot
onMounted(() => {
  messages.value = [initialMessage];
  
  // Verificar si ya mostró el saludo hoy
  const lastGreeting = localStorage.getItem('chatbotLastGreeting');
  const today = new Date().toDateString();
  
  if (lastGreeting !== today) {
    setTimeout(() => {
      isOpen.value = true;
    }, 3000);
    localStorage.setItem('chatbotLastGreeting', today);
  }
});

// FUNCIÓN CORREGIDA PARA MANEJAR OPCIONES
function handleOption(option) {
  console.log('Botón presionado:', option.text, 'Acción:', option.action);
  
  const [action, value] = option.action.split(':');
  
  switch(action) {
    case 'scroll':
      scrollToSection(value);
      addBotMessage(`Perfecto, te llevo a la sección de ${getSectionName(value)}...`);
      setTimeout(() => {
        if (value !== 'inicio') {
          addBotMessage(`Aquí estamos en ${getSectionName(value)}. ¿Te gustaría saber más sobre algo específico de esta sección?`, [
            { text: `📖 Más sobre ${getSectionName(value)}`, action: `details:${value}` },
            { text: "🏠 Volver al menú principal", action: "menu" }
          ]);
        }
      }, 1000);
      break;
      
    case 'link':
      openLink(value);
      addBotMessage(`Abriendo ${value === 'github' ? 'GitHub' : 'LinkedIn'} en una nueva pestaña...`);
      break;
      
    case 'copy':
      copyToClipboard(value);
      break;
      
    case 'details':
      showDetails(value);
      break;
      
    default:
      // ESTE ES EL CAMBIO CLAVE:
      if (option.action === 'menu') {
        // Mostrar menú principal
        addBotMessage(initialMessage.text, initialMessage.options);
      } else if (options[option.action]) {
        // Mostrar opción específica
        addBotMessage(options[option.action].text, options[option.action].options);
      } else {
        // Opción no reconocida
        addBotMessage("Disculpa, esa opción no está disponible. ¿Prefieres elegir del menú principal?", initialMessage.options);
      }
  }
}

// Funciones auxiliares
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function getSectionName(sectionId) {
  const names = {
    'inicio': 'Inicio',
    'educacion': 'Educación',
    // 'experiencia': 'Experiencia',
    'proyectos': 'Proyectos',
    'habilidades': 'Habilidades',
    // 'intereses': 'Intereses'
  };
  return names[sectionId] || sectionId;
}

function openLink(type) {
  const links = {
    'github': 'https://github.com/EzequielQ2004',
    'linkedin': 'https://www.linkedin.com/in/ezequielquiroz/'
  };
  
  if (links[type]) {
    window.open(links[type], '_blank');
  }
}

function copyToClipboard(type) {
  const texts = {
    'email': 'quirozarielezequiel@gmail.com'
  };
  
  if (texts[type]) {
    navigator.clipboard.writeText(texts[type]).then(() => {
      addBotMessage('✅ ¡Email copiado al portapapeles! Ahora puedes pegarlo donde necesites.');
    }).catch(err => {
      addBotMessage('⚠️ No se pudo copiar el email. Intenta manualmente: quirozarielezequiel@gmail.com');
    });
  }
}

function showDetails(section) {
  const details = {
    'educacion': '📚 Educación detallada:\n\nUTN San Rafael (2024-2025):\n• Algoritmos y estructuras de datos\n• Programación orientada a objetos\n• Bases de datos y SQL\n• Desarrollo web frontend/backend\n\nEscuela Técnica (2018-2023):\n• Desarrollo de habilidades analíticas\n• Trabajo en equipo en proyectos prácticos\n• Gestión y resolución de problemas',
    'experiencia': '💼 Experiencia detallada:\n\nFerretería San Francisco (Pasantía):\n• Desarrollo de funcionalidades backend\n• Trabajo colaborativo con equipo remoto\n• Implementación de soluciones técnicas\n\nProyectos Universitarios:\n• Metodologías ágiles (Scrum)\n• Control de versiones con Git\n• Desarrollo de software completo',
    'proyectos': '🚀 Proyectos detallados:\n\n1. Capybara Films:\n   - Sistema de gestión para videoclub\n   - Tecnologías: Java, Swing, MySQL\n   - Trabajo en equipo universitario\n\n2. CapyGaming:\n   - E-commerce para productos gamers\n   - Frontend: HTML, CSS, JavaScript\n   - Diseño responsive y funcional\n\n3. Portafolio Web:\n   - Sitio personal desarrollado en Vue.js\n   - Diseño moderno y responsive\n   - Implementación de chatbot',
    'habilidades': '⚡ Habilidades detalladas:\n\nFrontend:\n• JavaScript (Intermedio)\n• Vue.js (Intermedio-Avanzado)\n• HTML5/CSS3 (Avanzado)\n• React (Básico-Intermedio)\n\nBackend:\n• Java (Intermedio)\n• Python (Básico)\n• Node.js (Básico)\n\nBases de Datos:\n• MySQL (Intermedio)\n• PostgreSQL (Básico)\n• MongoDB (Básico)\n\nHerramientas:\n• Git/GitHub (Intermedio)\n• VS Code (Avanzado)',
    // 'intereses': '❤️ Intereses personales:\n\n• 🏋️‍♂️ Entrenamiento físico en casa\n   - Calistenia y ejercicios con peso\n   - Disciplina y constancia\n\n• 📚 Lectura y aprendizaje\n   - Artículos científicos y tecnológicos\n   - Libros de desarrollo personal\n\n• 🎵 Música y entretenimiento\n   - Variedad de géneros musicales\n   - Películas y series inspiradoras\n\n• 🔧 Exploración tecnológica\n   - Nuevas herramientas de desarrollo\n   - Videojuegos que desafían la lógica'
  };
  
  if (details[section]) {
    addBotMessage(details[section], [
      { text: `📍 Ir a ${getSectionName(section)}`, action: `scroll:${section}` },
      { text: "🏠 Menú principal", action: "menu" }
    ]);
  }
}

// Manejar envío de mensajes con seguridad
function sendMessage() {
  if (!userInput.value.trim()) return;
  
  // Detectar bots
  if (detectBot()) {
    logSecurityEvent('bot_detected', { 
      userAgent: navigator.userAgent,
      input: userInput.value.substring(0, 50) 
    });
    addBotMessage('Por favor, completa la verificación para continuar.');
    return;
  }
  
  // Verificar rate limiting
  const rateLimit = checkRateLimit();
  if (!rateLimit.allowed) {
    const waitMinutes = Math.ceil(rateLimit.waitTime / 60000);
    addBotMessage(`Por seguridad, espera ${waitMinutes} minuto(s) antes de enviar otro mensaje.`);
    return;
  }
  
  try {
    // Sanitizar entrada
    const sanitizedInput = sanitizeInput(userInput.value);
    
    // Registrar evento de seguridad
    logSecurityEvent('message_sent', { 
      length: sanitizedInput.length,
      timestamp: new Date().toISOString()
    });
    
    addMessage(sanitizedInput, 'user');
    processUserInput(sanitizedInput);
    userInput.value = '';
  } catch (error) {
    logSecurityEvent('input_validation_failed', { 
      error: error.message,
      input: userInput.value.substring(0, 50)
    });
    
    addBotMessage('Por favor, evita usar caracteres especiales o contenido no permitido. Intenta de nuevo.');
  }
}

function processUserInput(input) {
  isLoading.value = true;
  
  setTimeout(() => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hola') || lowerInput.includes('hi') || lowerInput.includes('buenas')) {
      addBotMessage('¡Hola! Me alegra saludarte. ¿En qué puedo ayudarte hoy?', initialMessage.options);
    }
    else if (lowerInput.includes('proyecto') || lowerInput.includes('trabajo') || lowerInput.includes('portfolio')) {
      handleOption({ action: 'projects' });
    }
    else if (lowerInput.includes('habilidad') || lowerInput.includes('skill') || lowerInput.includes('tecnología')) {
      handleOption({ action: 'skills' });
    }
    else if (lowerInput.includes('contacto') || lowerInput.includes('email') || lowerInput.includes('correo')) {
      handleOption({ action: 'contact' });
    }
    else if (lowerInput.includes('educación') || lowerInput.includes('estudio') || lowerInput.includes('formación')) {
      handleOption({ action: 'education' });
    }
    else if (lowerInput.includes('experiencia') || lowerInput.includes('trabajo') || lowerInput.includes('laboral')) {
      handleOption({ action: 'experience' });
    }
    else if (lowerInput.includes('quien') || lowerInput.includes('eres') || lowerInput.includes('sobre ti')) {
      handleOption({ action: 'about' });
    }
    else if (lowerInput.includes('menú') || lowerInput.includes('opciones') || lowerInput.includes('ayuda')) {
      handleOption({ action: 'menu' });
    }
    else {
      addBotMessage('Interesante pregunta. ¿Podrías ser más específico o prefieres elegir una de estas opciones?', initialMessage.options);
    }
    
    isLoading.value = false;
  }, 800);
}

// Funciones para manejar mensajes
function addMessage(text, sender) {
  messages.value.push({
    id: messages.value.length + 1,
    text: text,
    sender: sender,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  
  setTimeout(() => {
    scrollToBottom();
  }, 100);
}

function addBotMessage(text, botOptions = null) {
  const message = {
    id: messages.value.length + 1,
    text: text,
    sender: 'bot',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  
  if (botOptions) {
    message.options = botOptions;
  }
  
  messages.value.push(message);
  
  setTimeout(() => {
    scrollToBottom();
  }, 100);
}

function scrollToBottom() {
  const container = document.querySelector('.messages-container');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// FUNCIÓN PARA ABRIR/CERRAR
function toggleChat() {
  isOpen.value = !isOpen.value;
  
  if (isOpen.value) {
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

function autoResize(event) {
  const textarea = event.target;
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}
</script>

<template>
  <!-- Botón flotante del chatbot -->
  <button 
    class="chat-button"
    @click="toggleChat"
    :class="{ 'chat-button-active': isOpen }"
    aria-label="Abrir chatbot"
  >
    <ChatIcon v-if="!isOpen" class="chat-icon" />
    <CloseIcon v-else class="chat-icon" />
  </button>

  <!-- Ventana del chat -->
  <div v-if="isOpen" class="chat-window">
    <!-- Header del chat -->
    <div class="chat-header">
      <div class="chat-title">
        <BotIcon class="chatbot-avatar" />
        <div class="chatbot-info">
          <h3>Asistente de Ezequiel</h3>
          <p>En línea · Listo para ayudar</p>
        </div>
      </div>
      <button class="close-chat" @click="toggleChat" aria-label="Cerrar chat">
        <CloseIcon />
      </button>
    </div>

    <!-- Área de mensajes -->
    <div class="messages-container">
      <div 
        v-for="message in messages" 
        :key="message.id"
        class="message"
        :class="`message-${message.sender}`"
      >
        <div class="message-content">
          <div class="message-text">{{ message.text }}</div>
          <div class="message-timestamp">{{ message.timestamp }}</div>
          
          <!-- Opciones del bot -->
          <div v-if="message.options && message.sender === 'bot'" class="message-options">
            <button
              v-for="(option, index) in message.options"
              :key="index"
              @click="handleOption(option)"
              class="option-button"
            >
              <component :is="option.icon" v-if="option.icon" class="option-icon" />
              {{ option.text }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Indicador de carga -->
      <div v-if="isLoading" class="message message-bot">
        <div class="message-content">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Área de entrada -->
    <div class="chat-input-container">
      <div class="quick-actions">
        <button @click="handleOption({ action: 'sections' })" class="quick-action">
          <SectionsIcon class="quick-icon" />
          Secciones
        </button>
        <button @click="handleOption({ action: 'contact' })" class="quick-action">
          <ContactIcon class="quick-icon" />
          Contacto
        </button>
        <button @click="handleOption({ action: 'projects' })" class="quick-action">
          <ProjectsIcon class="quick-icon" />
          Proyectos
        </button>
        <button @click="handleOption({ action: 'menu' })" class="quick-action">
          <HomeIcon class="quick-icon" />
          Menú
        </button>
      </div>
      
      <div class="input-wrapper">
        <textarea
          v-model="userInput"
          @keydown="handleKeyPress"
          @input="autoResize"
          placeholder="Escribe tu pregunta aquí..."
          class="chat-input"
          rows="1"
        ></textarea>
        <button 
          @click="sendMessage" 
          class="send-button"
          :disabled="!userInput.trim() || isLoading"
          aria-label="Enviar mensaje"
        >
          <SendIcon class="send-icon" />
        </button>
      </div>
      
      <p class="input-hint">
        Presiona Enter para enviar · Shift+Enter para nueva línea
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Ventana del chat */
.chat-window {
  position: fixed;
  bottom: 5.5rem;
  right: 2rem;
  width: 380px;
  height: 600px;
  max-height: calc(100vh - 120px); /* Evita que se corte en pantallas pequeñas */
  top: auto; /* Asegurar que está basado en bottom */
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  z-index: 10002; /* Higher than navbar */
  border: 1px solid rgba(79, 70, 229, 0.3);
  overflow: hidden;
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Botón flotante */
.chat-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9998; /* Menor que chat-window */
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
}

.chat-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(79, 70, 229, 0.6);
}

.chat-button-active {
  transform: rotate(90deg);
}

.chat-button-active:hover {
  transform: rotate(90deg) scale(1.1);
}

/* Header del chat */
.chat-header {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.chat-title {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.chatbot-avatar {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chatbot-info h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.chatbot-info p {
  margin: 0;
  font-size: 0.8rem;
  opacity: 0.9;
}

.close-chat {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.close-chat:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Área de mensajes */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;
}

.messages-container::-webkit-scrollbar {
  width: 6px;
}

.messages-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.messages-container::-webkit-scrollbar-thumb {
  background: rgba(79, 70, 229, 0.5);
  border-radius: 3px;
}

/* Mensajes */
.message {
  max-width: 85%;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.message-user {
  align-self: flex-end;
}

.message-bot {
  align-self: flex-start;
}

.message-content {
  padding: 1rem;
  border-radius: 15px;
  position: relative;
}

.message-user .message-content {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  border-bottom-right-radius: 5px;
}

.message-bot .message-content {
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  border-bottom-left-radius: 5px;
}

.message-text {
  white-space: pre-line;
  line-height: 1.5;
}

.message-timestamp {
  font-size: 0.7rem;
  opacity: 0.7;
  margin-top: 0.5rem;
  text-align: right;
}

/* Opciones del bot */
.message-options {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.option-button {
  background: rgba(79, 70, 229, 0.2);
  border: 1px solid rgba(79, 70, 229, 0.4);
  color: #a5b4fc;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.option-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.option-button:hover {
  background: rgba(79, 70, 229, 0.3);
  transform: translateX(5px);
}

/* Indicador de typing */
.typing-indicator {
  display: flex;
  gap: 4px;
  padding: 1rem;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: #a5b4fc;
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.6; }
  40% { transform: scale(1); opacity: 1; }
}

/* Área de entrada */
.chat-input-container {
  padding: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 23, 42, 0.8);
}

.quick-actions {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.quick-action {
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.3);
  color: #a5b4fc;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.quick-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.quick-action:hover {
  background: rgba(79, 70, 229, 0.2);
}

.input-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.chat-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: white;
  font-family: inherit;
  font-size: 0.95rem;
  resize: none;
  min-height: 20px;
  max-height: 100px;
  transition: border 0.3s ease;
  overflow-y: auto;
}

.chat-input:focus {
  outline: none;
  border-color: rgba(79, 70, 229, 0.5);
}

.chat-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.send-button {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border: none;
  border-radius: 12px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-button:not(:disabled):hover {
  transform: scale(1.05);
}

.send-icon {
  width: 18px;
  height: 18px;
  color: white;
}

.input-hint {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
  text-align: center;
}

/* SVG icons */
.svg-icon {
  width: 16px;
  height: 16px;
  fill: #a5b4fc;
  transition: fill 0.3s ease;
}

.svg-icon:hover {
  fill: white;
}

/* Para notebooks/pantallas medianas */
@media (max-width: 1366px) {
  .chat-window {
    width: 350px;
    height: 550px;
    bottom: 5rem;
    right: 1.5rem;
    max-height: calc(100vh - 100px);
  }
}

/* Para pantallas pequeñas */
@media (max-width: 768px) {
  .chat-window {
    width: calc(100vw - 3rem);
    height: calc(100vh - 150px);
    max-height: 500px;
    right: 1.5rem;
    bottom: 5rem;
    top: auto;
  }
}

@media (max-width: 480px) {
  .chat-window {
    width: calc(100vw - 2rem);
    height: calc(100vh - 120px);
    right: 1rem;
    bottom: 4.5rem;
  }
}
</style>