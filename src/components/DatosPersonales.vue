<script setup>
import linkedin from '/src/assets/linkedin_icon.svg';
import instagram from '/src/assets/instagram_icon.svg';
import github from '/src/assets/github_icon.svg';
import cv from '/src/assets/cv_resume_icon.svg';

const title = 'Ezequiel Quiroz';
const subtitle = 'Desarrollador Web & Técnico en Programación';
const descripcion = 'Técnico Universitario en Programación - UTN';
const residencia = '📍 San Rafael, Mendoza, Argentina';
const presentacion = '¡Hola! Bienvenido a mi portafolio. Soy un apasionado del desarrollo web y móvil, siempre en busca de mejorar mis habilidades y colaborar en proyectos innovadores.';
const redesSociales = [
  { id: 1, name: 'LinkedIn', src: linkedin, url: 'https://www.linkedin.com/in/ezequiel-quiroz-50b298300/' },
  { id: 2, name: 'Instagram', src: instagram, url: 'https://www.instagram.com/ezequiel.qroz/' },
  { id: 3, name: 'GitHub', src: github, url: 'https://github.com/ezequielquiroz' },
  { id: 4, name: 'Currículum', src: cv, url: '/assets/cv.pdf' },
];
const telefono = '+54 2604-005223';
</script>

<template>
<section class="datos-personales">
  <div class="card">
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
</section>
</template>

<style scoped>
.datos-personales {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.card {
  background: linear-gradient(135deg, #1e2a38, #2c3e50);
  color: #f5f5f5;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 400px;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.subtitle {
  font-size: 1.3rem;
  color: #9caebf;
  margin-bottom: 1rem;
}

.descripcion {
  font-size: 1rem;
  font-weight: 600;
  color: #d0e3f1;
  margin-bottom: 1rem;
}

.presentacion {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #b0c4de;
}

.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.icon-redsocial {
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-redsocial:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5);
}

.contacto {
  font-size: 1rem;
  font-weight: 600;
  color: #a1c3d1;
  margin-bottom: 0.5rem;
}

.residencia {
  font-size: 1rem;
  color: #9caebf;
  font-weight: 500;
}
</style>