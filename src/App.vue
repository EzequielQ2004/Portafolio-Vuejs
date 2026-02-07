<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from './components/NavBar.vue';
import DatosPersonales from './components/DatosPersonales.vue';
import Educacion from './components/EducacionComponente.vue';
import ExperienciaComponente from './components/ExperienciaComponente.vue';
import ProyectosComponente from './components/ProyectosComponente.vue';
import HabilidadesComponente from './components/HabilidadesComponente.vue';
import InteresesComponente from './components/InteresesComponente.vue';
import Chatbot from './components/Chatbot.vue';
// import ContactoComponente from './components/ContactoComponente.vue';

// Estado para mostrar/ocultar botón de volver arriba
const showScrollTop = ref(false);

// Manejar scroll para mostrar/ocultar botón
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500;
};

// Scroll suave al top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Observador de intersección para animaciones
let observer;

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Configurar Intersection Observer para animaciones
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observar todas las secciones
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="app-container">
    <!-- Navegación -->
    <NavBar />

    <Chatbot />
    
    <!-- Header Principal -->
    <header class="main-header" id="inicio">
      <DatosPersonales />
    </header>

    <!-- Contenido Principal -->
    <main class="main-content">
      <!-- Sección de Educación -->
      <section 
        id="educacion" 
        class="content-section"
        data-section="educacion"
      >
        <div class="section-container">
          <div class="section-header">
            <div class="section-decorator">
              <span class="decorator-line"></span>
              <h2 class="section-title">
                <span class="title-icon">🎓</span>
                Educación
              </h2>
              <span class="decorator-line"></span>
            </div>
            <p class="section-subtitle">Mi formación académica y trayectoria de aprendizaje</p>
          </div>
          <Educacion />
        </div>
      </section>

      <!-- Sección de Experiencia -->
      <section 
        id="experiencia" 
        class="content-section"
        data-section="experiencia"
      >
        <div class="section-container">
          <div class="section-header">
            <div class="section-decorator">
              <span class="decorator-line"></span>
              <h2 class="section-title">
                <span class="title-icon">💼</span>
                Experiencia
              </h2>
              <span class="decorator-line"></span>
            </div>
            <p class="section-subtitle">Mi recorrido profesional y proyectos destacados</p>
          </div>
          <ExperienciaComponente />
        </div>
      </section>

      <!-- Sección de Proyectos -->
      <section 
        id="proyectos" 
        class="content-section"
        data-section="proyectos"
      >
        <div class="section-container">
          <div class="section-header">
            <div class="section-decorator">
              <span class="decorator-line"></span>
              <h2 class="section-title">
                <span class="title-icon">🚀</span>
                Proyectos
              </h2>
              <span class="decorator-line"></span>
            </div>
            <p class="section-subtitle">Trabajos y desarrollos que reflejan mis habilidades</p>
          </div>
          <ProyectosComponente />
        </div>
      </section>

      <!-- Sección de Habilidades -->
      <section 
        id="habilidades" 
        class="content-section"
        data-section="habilidades"
      >
        <div class="section-container">
          <div class="section-header">
            <div class="section-decorator">
              <span class="decorator-line"></span>
              <h2 class="section-title">
                <span class="title-icon">⚡</span>
                Habilidades
              </h2>
              <span class="decorator-line"></span>
            </div>
            <p class="section-subtitle">Conocimientos técnicos y herramientas que domino</p>
          </div>
          <HabilidadesComponente />
        </div>
      </section>

      <!-- Sección de Intereses -->
      <section 
        id="intereses" 
        class="content-section"
        data-section="intereses"
      >
        <div class="section-container">
          <div class="section-header">
            <div class="section-decorator">
              <span class="decorator-line"></span>
              <h2 class="section-title">
                <span class="title-icon">❤️</span>
                Intereses
              </h2>
              <span class="decorator-line"></span>
            </div>
            <p class="section-subtitle">Pasiones que dan balance a mi vida profesional</p>
          </div>
          <InteresesComponente />
        </div>
      </section>

      <!-- Sección de Contacto -->
      <!-- <section 
        id="contacto" 
        class="content-section"
        data-section="contacto"
      >
        <div class="section-container">
          <div class="section-header">
            <div class="section-decorator">
              <span class="decorator-line"></span>
              <h2 class="section-title">
                <span class="title-icon">📧</span>
                Contacto
              </h2>
              <span class="decorator-line"></span>
            </div>
            <p class="section-subtitle">¿Listo para colaborar? Hablemos</p>
          </div>
          <ContactoComponente v-if="false" /> 
          <div class="contacto-placeholder">
            <p>¿Interesado en trabajar juntos o conocerme mejor?</p>
            <div class="contacto-actions">
              <a 
                href="https://www.linkedin.com/in/ezequielquiroz/" 
                class="btn-contacto linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="btn-icon">👨‍💼</span>
                LinkedIn
              </a>
              <a 
                href="mailto:quirozarielezequiel@gmail.com" 
                class="btn-contacto email"
              >
                <span class="btn-icon">📧</span>
                Email
              </a>
              <a 
                href="https://github.com/EzequielQ2004" 
                class="btn-contacto github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="btn-icon">🐙</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section> -->
    </main>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-info">
            <div class="footer-brand">
              <span class="brand-logo">&lt;/&gt;</span>
              <span class="brand-name">Ezequiel Quiroz</span>
            </div>
            <p class="footer-tagline">Desarrollador Web & Técnico en Programación</p>
            <p class="footer-location">📍 San Rafael, Mendoza, Argentina</p>
          </div>

          <div class="footer-links">
            <div class="links-column">
              <h4>Navegación</h4>
              <ul>
                <li><a href="#inicio" @click.prevent="scrollToTop">Inicio</a></li>
                <li><a href="#educacion">Educación</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#intereses">Intereses</a></li>
              </ul>
            </div>
            <div class="links-column">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:quirozarielezequiel@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/ezequielquiroz/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/EzequielQ2004" target="_blank">GitHub</a></li>
                <li><a href="https://ezequielquiroz-portafolio.netlify.app/" target="_blank">Portafolio</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-newsletter">
            <h4>¿Interesado en colaborar?</h4>
            <p>No dudes en contactarme para proyectos o oportunidades.</p>
            <a 
              href="mailto:quirozarielezequiel@gmail.com" 
              class="btn-cta-footer"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            © 2024 Ezequiel Quiroz. Todos los derechos reservados.
          </p>
          <div class="footer-social">
            <a 
              href="https://www.linkedin.com/in/ezequielquiroz/" 
              target="_blank"
              class="social-icon"
              title="LinkedIn"
            >
              👨‍💼
            </a>
            <a 
              href="https://github.com/EzequielQ2004" 
              target="_blank"
              class="social-icon"
              title="GitHub"
            >
              🐙
            </a>
            <a 
              href="mailto:quirozarielezequiel@gmail.com" 
              class="social-icon"
              title="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Botón de volver arriba -->
    <button 
      v-if="showScrollTop" 
      @click="scrollToTop"
      class="scroll-top-btn"
      aria-label="Volver arriba"
    >
      <span class="arrow-up">↑</span>
    </button>

    <!-- Progress bar -->
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
  </div>
  
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0f172a;
  position: relative;
}

/* Header Principal */
.main-header {
  padding-top: 80px; /* Para compensar el navbar fijo */
}

/* Secciones */
.content-section {
  padding: 5rem 2rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.content-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-decorator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.decorator-line {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #4f46e5, transparent);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
}

.title-icon {
  font-size: 2rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Colores de fondo alternados para secciones */
.content-section:nth-child(odd) {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.content-section:nth-child(even) {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

/* Placeholder de Contacto */
.contacto-placeholder {
  text-align: center;
  padding: 3rem;
  background: rgba(79, 70, 229, 0.1);
  border-radius: 20px;
  border: 2px dashed rgba(79, 70, 229, 0.3);
}

.contacto-placeholder p {
  color: #e2e8f0;
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

.contacto-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn-contacto {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-contacto.linkedin {
  background: linear-gradient(135deg, #0a66c2, #004182);
  color: white;
}

.btn-contacto.email {
  background: linear-gradient(135deg, #ea580c, #c2410c);
  color: white;
}

.btn-contacto.github {
  background: linear-gradient(135deg, #24292e, #0d1117);
  color: white;
}

.btn-contacto:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

/* Footer */
.main-footer {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 2rem 2rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
}

.brand-logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #4f46e5;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #f1f5f9;
}

.footer-tagline {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
}

.footer-location {
  color: #64748b;
  font-size: 0.9rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.links-column h4 {
  color: #f1f5f9;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  font-weight: 600;
}

.links-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-column li {
  margin-bottom: 0.8rem;
}

.links-column a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  display: inline-block;
}

.links-column a:hover {
  color: #4f46e5;
  transform: translateX(5px);
}

.footer-newsletter {
  text-align: center;
}

.footer-newsletter h4 {
  color: #f1f5f9;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.footer-newsletter p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.btn-cta-footer {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.btn-cta-footer:hover {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  color: #64748b;
  font-size: 0.9rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: #94a3b8;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: rgba(79, 70, 229, 0.2);
  color: #4f46e5;
  transform: translateY(-3px);
}

/* Botón de volver arriba */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  opacity: 0;
  transform: translateY(20px);
}

.scroll-top-btn:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
}

.scroll-top-btn.show {
  opacity: 1;
  transform: translateY(0);
}

/* Progress bar */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1001;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  width: 0%;
  transition: width 0.3s ease;
}

/* Animaciones para scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .content-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .decorator-line {
    width: 40px;
  }
  
  .contacto-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-contacto {
    width: 100%;
    justify-content: center;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .decorator-line {
    display: none;
  }
  
  .section-decorator {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .scroll-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}
</style>