<script setup>
import { onMounted, nextTick } from 'vue';
import linkedin from '/src/assets/linkedin_icon.svg';
import github from '/src/assets/github_icon.svg';
import cv from '/src/assets/cv_resume_icon.svg';
import fotoPerfil from '/src/assets/foto_perfil.jpg';
import cvPdf from '/src/assets/cv.pdf';

const title = 'Ezequiel Quiroz';
const subtitle = 'Desarrollador Web & Técnico en Programación';
const descripcion = 'Técnico Universitario en Programación - UTN';
const residencia = '📍 San Rafael, Mendoza, Argentina';
const presentacion = '¡Hola! Bienvenido a mi portafolio. Soy un apasionado del desarrollo web y móvil, siempre en busca de mejorar mis habilidades y colaborar en proyectos innovadores.';
const redesSociales = [
  { id: 1, name: 'LinkedIn', src: linkedin, url: 'https://www.linkedin.com/in/ezequielquiroz/' },
  { id: 2, name: 'GitHub', src: github, url: 'https://github.com/EzequielQ2004' },
  { id: 3, name: 'Currículum', src: cv, url: cvPdf, download: true, filename: 'CV-Ezequiel-Quiroz.pdf' },
];
const telefono = '+54 2604-005223';

// Animación de entrada
onMounted(() => {
  // Esperar a que el DOM esté completamente renderizado
  nextTick(() => {
    // Iniciar animaciones inmediatamente cuando el componente esté visible
    setTimeout(() => {
      const container = document.querySelector('.datos-personales-container');
      if (container) {
        container.classList.add('animate');
      }
      
      // Animar elementos con delays
      const elements = document.querySelectorAll('.animate-element');
      elements.forEach((element) => {
        const delay = element.getAttribute('data-delay') || '0';
        setTimeout(() => {
          element.classList.add('animate');
        }, parseInt(delay));
      });
    }, 100); // Reducir el delay inicial
  });
});
</script>

<template>
  <div class="datos-personales-container animate-in">
    <div class="contenido-wrapper">
      <!-- Foto de perfil -->
      <div class="foto-perfil-section animate-element" data-delay="0">
        <!-- Aquí va tu imagen de perfil -->
        <img 
          :src="fotoPerfil" 
          alt="Foto de Ezequiel Quiroz"
          class="foto-perfil"
        />
      </div>

      <!-- Textos e información -->
      <div class="info-section animate-element" data-delay="200">
        <div class="info-content">
          <h1 class="title animate-element" data-delay="300">{{ title }}</h1>
          <h2 class="subtitle animate-element" data-delay="400">{{ subtitle }}</h2>
          <p class="descripcion animate-element" data-delay="500">{{ descripcion }}</p>
          <p class="presentacion animate-element" data-delay="600">{{ presentacion }}</p>

          <ul class="redes-sociales animate-element" data-delay="700">
            <li v-for="red in redesSociales" :key="red.id" class="animate-element" :data-delay="800 + (red.id * 100)">
              <a
                :href="red.url"
                :target="red.download ? null : '_blank'"
                :rel="red.download ? null : 'noopener noreferrer'"
                :download="red.download ? red.filename : null"
              >
                <img class="icon-redsocial" :src="red.src" width="30" :alt="red.name" :title="red.name">
              </a>
            </li>
          </ul>

          <p class="contacto animate-element" data-delay="1100">
            <strong> Teléfono:</strong> {{ telefono }}
          </p>
          <p class="residencia animate-element" data-delay="1200">{{ residencia }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.datos-personales-container {
  width: 100%;
  background: #0f172a; /* Sin background especial */
}

.contenido-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
}

/* Foto de perfil */
.foto-perfil-section {
  flex: 0 0 300px; /* Ancho fijo for desktop */
  display: flex;
  justify-content: center;
}

.foto-perfil {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 4px solid rgba(79, 70, 229, 0.5);
}

.foto-perfil:hover {
  transform: scale(1.05);
  box-shadow: 0 25px 50px rgba(79, 70, 229, 0.4);
  border-color: rgba(79, 70, 229, 0.8);
}

/* Sección de información */
.info-section {
  flex: 1;
  min-width: 0;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.descripcion {
  font-size: 1.1rem;
  color: #cbd5e1;
  margin: 0;
}

.presentacion {
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

.redes-sociales {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: center;
}

.redes-sociales li {
  margin: 0;
}

.redes-sociales a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(79, 70, 229, 0.15);
  border: 2px solid rgba(79, 70, 229, 0.3);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.redes-sociales a:hover {
  background: rgba(79, 70, 229, 0.3);
  border-color: rgba(79, 70, 229, 0.6);
  transform: translateY(-5px);
}

.icon-redsocial {
  width: 24px;
  height: 24px;
  filter: brightness(0.9);
  transition: filter 0.3s ease;
}

.redes-sociales a:hover .icon-redsocial {
  filter: brightness(1.2);
}

.contacto {
  font-size: 1rem;
  color: #cbd5e1;
  margin: 0;
}

.residencia {
  font-size: 1rem;
  color: #94a3b8;
  margin: 0;
}

/* Responsive - Pasar a layout vertical en tablets y móviles */
@media (max-width: 1024px) {
  .contenido-wrapper {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .foto-perfil-section {
    flex: 0 0 auto;
  }

  .foto-perfil {
    width: 240px;
    height: 240px;
  }

  .info-section {
    width: 100%;
  }

  .redes-sociales {
    justify-content: center;
  }

  .title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .datos-personales-container {
    padding-top: 1rem;
  }
  
  .contenido-wrapper {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .foto-perfil {
    width: 200px;
    height: 200px;
  }

  .title {
    font-size: 1.8rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .presentacion {
    font-size: 0.95rem;
  }

  .redes-sociales {
    gap: 1rem;
  }

  .redes-sociales a {
    width: 45px;
    height: 45px;
  }

  .icon-redsocial {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 480px) {
  .foto-perfil {
    width: 160px;
    height: 160px;
  }

  .title {
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .redes-sociales {
    gap: 0.8rem;
  }

  .redes-sociales a {
    width: 40px;
    height: 40px;
  }

  .icon-redsocial {
    width: 18px;
    height: 18px;
  }
}

/* Animaciones de entrada profesionales */
.animate-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-in.animate {
  opacity: 1;
  transform: translateY(0);
}

.animate-element {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-element.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Fallback: asegurar que el contenido sea visible después de 3 segundos */
@media (prefers-reduced-motion: no-preference) {
  .animate-in,
  .animate-element {
    animation: forceVisible 3s forwards;
  }
}

@keyframes forceVisible {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animaciones específicas para diferentes elementos */
.foto-perfil-section.animate-element {
  transition-delay: 0ms;
}

.foto-perfil-section.animate-element.animate {
  transform: translateY(0) scale(1);
}

.title.animate-element {
  transition-delay: 300ms;
}

.subtitle.animate-element {
  transition-delay: 400ms;
}

.descripcion.animate-element {
  transition-delay: 500ms;
}

.presentacion.animate-element {
  transition-delay: 600ms;
}

.redes-sociales.animate-element {
  transition-delay: 700ms;
}

.redes-sociales li.animate-element {
  transition-delay: calc(800ms + var(--item-index, 0) * 100ms);
}

.contacto.animate-element {
  transition-delay: 1100ms;
}

.residencia.animate-element {
  transition-delay: 1200ms;
}

/* Efecto de revelado para el texto */
.title.animate-element.animate,
.subtitle.animate-element.animate {
  animation: revealText 0.8s ease-out forwards;
}

@keyframes revealText {
  from {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

/* Efecto de entrada suave para la foto */
.foto-perfil-section.animate-element.animate {
  animation: photoEntrance 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes photoEntrance {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Efecto de entrada para los iconos sociales */
.redes-sociales li.animate-element.animate {
  animation: iconBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

@keyframes iconBounce {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
