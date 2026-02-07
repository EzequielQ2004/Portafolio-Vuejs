<script setup>
import linkedin from '/src/assets/linkedin_icon.svg';
import github from '/src/assets/github_icon.svg';
import cv from '/src/assets/cv_resume_icon.svg';
import fotoPerfil from '/src/assets/foto_perfil.jpg';

const title = 'Ezequiel Quiroz';
const subtitle = 'Desarrollador Web & Técnico en Programación';
const descripcion = 'Técnico Universitario en Programación - UTN';
const residencia = '📍 San Rafael, Mendoza, Argentina';
const presentacion = '¡Hola! Bienvenido a mi portafolio. Soy un apasionado del desarrollo web y móvil, siempre en busca de mejorar mis habilidades y colaborar en proyectos innovadores.';
const redesSociales = [
  { id: 1, name: 'LinkedIn', src: linkedin, url: 'https://www.linkedin.com/in/ezequielquiroz/' },
  { id: 2, name: 'GitHub', src: github, url: 'https://github.com/EzequielQ2004' },
  { id: 3, name: 'Currículum', src: cv, url: '/src/assets/cv.pdf' },
];
const telefono = '+54 2604-005223';
</script>

<template>
  <div class="datos-personales-container">
    <div class="contenido-wrapper">
      <!-- Foto de perfil -->
      <div class="foto-perfil-section">
        <!-- Aquí va tu imagen de perfil -->
        <img 
          :src="fotoPerfil" 
          alt="Foto de Ezequiel Quiroz"
          class="foto-perfil"
        />
      </div>

      <!-- Textos e información -->
      <div class="info-section">
        <div class="info-content">
          <h1 class="title">{{ title }}</h1>
          <h2 class="subtitle">{{ subtitle }}</h2>
          <p class="descripcion">{{ descripcion }}</p>
          <p class="presentacion">{{ presentacion }}</p>

          <ul class="redes-sociales">
            <li v-for="red in redesSociales" :key="red.id">
              <a :href="red.url" target="_blank" rel="noopener noreferrer">
                <img class="icon-redsocial" :src="red.src" width="30" :alt="red.name" :title="red.name">
              </a>
            </li>
          </ul>

          <p class="contacto">
            <strong>📞 Teléfono:</strong> {{ telefono }}
          </p>
          <p class="residencia">{{ residencia }}</p>
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
</style>