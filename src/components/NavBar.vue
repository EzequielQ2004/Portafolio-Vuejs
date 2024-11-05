<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <ul class="nav-list">
        <li v-for="nav in nevegacion" :key="nav.id" class="nav-item">
          <a @click.prevent="smoothScroll(nav.enlace)">{{ nav.nombre }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Lista de elementos de navegación
const nevegacion = ref([
    { id: 1, nombre: "Educación", enlace: "#educacion" },
    { id: 2, nombre: "Experiencia", enlace: "#experiencia" },
    { id: 3, nombre: "Proyectos", enlace: "#proyectos" },
    { id: 4, nombre: "Habilidades", enlace: "#habilidades" },
    { id: 5, nombre: "Intereses", enlace: "#intereses" }
]);

// Función para el desplazamiento suave
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.navbar {
  background-color: #4a4e69;
  color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-menu {
  width: 100%;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item a {
  color: #f2e9e4;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item a:hover {
  background-color: #9a8c98;
  color: #22223b;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .nav-list {
    flex-direction: column;
    align-items: center;
  }
  .nav-item {
    margin: 0.5rem 0;
  }
}
</style>