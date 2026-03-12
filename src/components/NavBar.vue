<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled, 'navbar-mobile': isMobile }">
    <div class="navbar-container">
      <!-- Logo/Marca -->
      <div class="navbar-brand" @click="scrollToTop">
        <div class="brand-logo">
          <span class="logo-symbol">&lt;/&gt;</span>
        </div>
        <span class="brand-name">Ezequiel Quiroz</span>
      </div>

      <!-- Menú Hamburguesa (Mobile) -->
      <button 
        class="navbar-toggle" 
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navegación Principal -->
      <div class="navbar-menu" :class="{ 'active': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="nav in navegacion" :key="nav.id" class="nav-item">
            <a 
              @click.prevent="handleNavClick(nav.enlace)" 
              :class="{ 'active': activeSection === nav.enlace }"
              class="nav-link"
            >
              <span class="nav-icon" v-html="nav.iconSvg"></span>
              <span class="nav-text">{{ nav.nombre }}</span>
              <span class="nav-indicator"></span>
            </a>
          </li>
        </ul>

        <!-- Botones de acción -->
        <div class="navbar-actions">
          <a 
            href="https://wa.me/542604005223" 
            target="_blank"
            rel="noopener noreferrer"
            class="action-button whatsapp-button"
            title="Contactar por WhatsApp"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="button-icon">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.413-3.488c-6.627 0-12.005 5.378-12.005 12.005 0 2.125.556 4.19 1.611 6.008l-1.713 6.252 6.391-1.676a11.952 11.952 0 005.716 1.456h.005c6.626 0 12.004-5.378 12.004-12.004a11.938 11.938 0 00-3.496-8.453"/>
            </svg>
            <span class="button-text">WhatsApp</span>
          </a>
          
          <a 
            href="https://github.com/EzequielQ2004" 
            target="_blank" 
            class="action-button github-button"
            title="Ver mi GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="button-icon">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span class="button-text">GitHub</span>
          </a>
        </div>
      </div>

      <!-- Indicador de sección activa -->
      <!-- <div class="active-indicator" :style="activeIndicatorStyle"></div> -->
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// SVG icons (Heroicons simplified)
const svgIcons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-9z"/></svg>`,
  academic: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.423A12.083 12.083 0 0118 18.152M12 14l-6.16-3.423A12.083 12.083 0 006 18.152"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 21l-2-2l1-7l7-7l7 7l1 7l-2 2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7v4h4"/></svg>`,
  bolt: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  contact: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};

// Lista de elementos de navegación con SVG
const navegacion = ref([
  { id: 1, nombre: "Inicio", enlace: "#inicio", iconSvg: svgIcons.home },
  { id: 2, nombre: "Educación", enlace: "#educacion", iconSvg: svgIcons.academic },
  // { id: 3, nombre: "Experiencia", enlace: "#experiencia", iconSvg: svgIcons.briefcase },
  { id: 4, nombre: "Proyectos", enlace: "#proyectos", iconSvg: svgIcons.rocket },
  { id: 5, nombre: "Habilidades", enlace: "#habilidades", iconSvg: svgIcons.bolt },
  { id: 6, nombre: "Contacto", enlace: "#contacto", iconSvg: svgIcons.contact }
]);

// Estados reactivos
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isMobile = ref(false);
const activeSection = ref("#inicio");

// Función para el desplazamiento suave
function smoothScroll(target) {
  const element = document.querySelector(target);
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

// Manejar clic en navegación
function handleNavClick(target) {
  smoothScroll(target);
  activeSection.value = target;
  isMenuOpen.value = false; // Cerrar menú en mobile
  
  // Actualizar URL sin recargar
  history.pushState(null, '', target);
}

// Scroll al inicio
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  activeSection.value = "#inicio";
  history.pushState(null, '', window.location.pathname);
}

// Toggle menú móvil
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  
  // Prevenir scroll cuando el menú está abierto
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

// Detectar sección activa al hacer scroll
function getSectionName(sectionId) {
  const names = {
    'inicio': 'Inicio',
    'educacion': 'Educación',
    // 'experiencia': 'Experiencia',
    'proyectos': 'Proyectos',
    'habilidades': 'Habilidades',
    'contacto': 'Contacto'
    // 'intereses': 'Intereses'
  };
  return names[sectionId] || sectionId;
}

function updateActiveSection() {
  const sections = navegacion.value.map(nav => nav.enlace.slice(1));
  const scrollPosition = window.scrollY + 100;

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSection.value = `#${sectionId}`;
        break;
      }
    }
  }

  // Detectar scroll
  isScrolled.value = window.scrollY > 50;
  
  // Detectar tamaño de pantalla
  isMobile.value = window.innerWidth < 992;
}

// Estilo para el indicador activo
const activeIndicatorStyle = computed(() => {
  if (!isMobile.value) {
    const activeIndex = navegacion.value.findIndex(nav => nav.enlace === activeSection.value);
    if (activeIndex !== -1) {
      return {
        width: 'calc(100% / 6)',
        transform: `translateX(${activeIndex * 100}%)`
      };
    }
  }
  return {};
});

// Event listeners
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  window.addEventListener('resize', updateActiveSection);
  updateActiveSection(); // Inicializar

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (isMenuOpen.value && !e.target.closest('.navbar-container')) {
      isMenuOpen.value = false;
      document.body.style.overflow = '';
    }
  });

  // Manejar navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      toggleMenu();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
  window.removeEventListener('resize', updateActiveSection);
  document.body.style.overflow = '';
});
</script>

<style scoped>

/* icon styling */
.nav-icon svg {
    width: 1.2rem;
    height: 1.2rem;
    stroke-width: 2;
    display: inline-block;
    vertical-align: middle;
    color: currentColor;
}


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10001; /* Increased to be above chatbot */
  background: rgba(26, 39, 51, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.8rem 0;
}

.navbar-scrolled {
  background: rgba(16, 23, 31, 0.98);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* Brand/Logo */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  background: rgba(77, 171, 247, 0.1);
}

.brand-logo {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #4dabf7, #339af0);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4dabf7, #a5d8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hamburger Menu */
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 2px;
  background: #a5d8ff;
  margin: 5px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.navbar-toggle[aria-expanded="true"] .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.navbar-toggle[aria-expanded="true"] .hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar-toggle[aria-expanded="true"] .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Navigation Menu */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
}

.nav-list {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #cbd5e0;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.nav-link:hover {
  background: rgba(77, 171, 247, 0.1);
  color: #a5d8ff;
  transform: translateY(-2px);
}

.nav-link.active {
  background: rgba(77, 171, 247, 0.15);
  color: #4dabf7;
}

.nav-link.active .nav-indicator {
  opacity: 1;
  transform: scaleX(1);
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-text {
  font-size: 0.95rem;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 3px;
  background: linear-gradient(90deg, #4dabf7, #339af0);
  border-radius: 3px 3px 0 0;
  opacity: 0;
  transition: all 0.3s ease;
}

/* Action Buttons */
.navbar-actions {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.github-button {
  background: rgba(36, 41, 46, 0.8);
  color: white;
  border: 1px solid #30363d;
}

.github-button:hover {
  background: #24292e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
}

.whatsapp-button {
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  border: none;
}

.whatsapp-button:hover {
  background: linear-gradient(135deg, #128c7e, #075e54);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.contact-button {
  background: linear-gradient(135deg, #4dabf7, #339af0);
  color: white;
  border: none;
}

.contact-button:hover {
  background: linear-gradient(135deg, #339af0, #1c7ed6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(51, 154, 240, 0.3);
}

.button-icon {
  font-size: 1rem;
}

/* Active Indicator */
.active-indicator {
  position: absolute;
  bottom: -0.8rem;
  height: 3px;
  background: linear-gradient(90deg, #4dabf7, #339af0);
  border-radius: 3px 3px 0 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.8;
}

/* Mobile Styles */
@media (max-width: 992px) {
  .navbar-container {
    padding: 0 1.5rem;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(16, 23, 31, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 2rem;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-list {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }

  .nav-link {
    justify-content: flex-start;
    padding: 1rem 1.5rem;
    width: 100%;
  }

  .navbar-actions {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }

  .action-button {
    justify-content: center;
    width: 100%;
  }

  .active-indicator {
    display: none;
  }

  .navbar-mobile .navbar-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .brand-name {
    display: none;
  }

  .button-text {
    display: none;
  }

  .action-button {
    padding: 0.8rem;
    justify-content: center;
  }

  .action-button .button-icon {
    margin: 0;
  }
}

/* Animaciones */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-item {
  animation: slideIn 0.3s ease forwards;
  animation-delay: calc(var(--item-index, 0) * 0.05s);
}
</style>