<script setup>
import NavBar from './components/NavBar.vue';
import DatosPersonales from './components/DatosPersonales.vue';
import Educacion from './components/EducacionComponente.vue';
import ExperienciaComponentes from './components/ExperienciaComponentes.vue';
import ProyectosComponente from './components/ProyectosComponente.vue';
import HabilidadesComponente from './components/HabilidadesComponente.vue';
import InteresesComponente from './components/InteresesComponente.vue';
</script>

<template>
  <header id="top">
    <NavBar />
    <DatosPersonales />
  </header>
  <main>
    <section id="educacion"><h2>Educación - Cursos</h2>
      <Educacion />
    </section>
    <section id="experiencia"><h2>Experiencia</h2>
      <ExperienciaComponentes />
    </section>
    <section id="proyectos"><h2>Proyectos</h2>
      <ProyectosComponente />
    </section>
    <section id="habilidades"><h2>Habilidades</h2>
      <HabilidadesComponente />
    </section>
    <section id="intereses"><h2>Intereses</h2>
      <InteresesComponente />
    </section>
  </main>
  <footer>
    <a href="#top">⬆ Volver al Inicio</a>
    <p>© 2024 Ezequiel Quiroz - Portafolio web</p>
  </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro para contraste */
    color: var(--vt-c-white-soft); /* Color de texto */
    font-size: 1.3rem;
    border-top: 3px solid #2a1772; /* Línea de separación en la parte superior */
}

footer a {
    color: #180570; /* Color del enlace */
    text-decoration: none;
    margin-bottom: 1rem; /* Espaciado entre enlace y párrafo */
    font-weight: bold; /* Enfatizar el enlace */
    transition: color 0.3s ease; /* Transición suave al pasar el mouse */
}

footer a:hover {
    color: #7519df; /* Cambiar color del enlace en hover */
}

footer p {
    text-align: center;
    margin: 0; /* Eliminar margen */
    opacity: 0.8; /* Ligeramente transparente */
}
</style>