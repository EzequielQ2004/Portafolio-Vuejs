<script setup>
import { ref } from 'vue';

const fechaColor = ref([
  { color: '#41516c' },
  { color: '#FBCA3E' }
]);

const educacion = ref([
  { fecha: '2024 - 2025', title: 'Técnicatura Universitaria en Programación', descripcion: 'Capacitación en desarrollo y análisis de sistemas informáticos, programación avanzada y operación de computadoras.', enlace: 'https://www.utn.edu.ar/' },
  { fecha: '2018 - 2023', title: 'Técnicatura Agropecuaria', descripcion: 'Estudios en escuela tecnica agropecuaria especializada en frutales y hortalizas, Antonio Di Benedetto 4-043', enlace: 'https://dti.mendoza.edu.ar/gem/ingreso/publico/escuela/1031/3' }
]);
</script>

<template>
  <section class="educacion-timeline">
    <ul>
      <li v-for="(item, index) in educacion" :key="index" :style="{ '--fecha-color': fechaColor[index].color }">
        <div class="fecha">{{ item.fecha }}</div>
        <h3 class="title">{{ item.title }}</h3>
        <div class="descripcion">{{ item.descripcion }}</div>
        <a class="enlace" :href="item.enlace" target="_blank" rel="noopener noreferrer">Saber más</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* Colores actualizados para un portafolio oscuro */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

/* Variables de color para el tema oscuro */
body {
  --color: rgba(240, 240, 240); /* Color de texto claro */
  --bgColor: rgba(20, 20, 20); /* Color de fondo oscuro */
  min-height: 100vh;
  display: grid;
  align-content: center;
  gap: 2rem;
  padding: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--color);
  background: var(--bgColor);
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* Línea vertical actualizada */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgba(100, 100, 100); /* Color gris para mayor contraste */
  border-radius: calc(var(--line-w) / 2);
}

/* Estilo para cada ítem de la lista */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* Fecha actualizada para destacar */
ul li .fecha {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);
  text-align: center;
  background-color: var(--fecha-color); /* Utiliza los colores específicos */
  color: var(--color); /* Texto claro sobre el fondo oscuro */
  font-size: 1.25rem;
  font-weight: 700;
  display: grid;
  place-content: center;
  position: relative;
  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* Círculo de conexión con la línea */
ul li .fecha::after {
  content: "";
  position: absolute;
  width: 1rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.3rem solid var(--fecha-color);
  border-radius: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* Fondo oscuro con sombra más clara en el título y descripción */
ul li .title,
ul li .descripcion {
  background: rgba(30, 30, 30); /* Fondo gris oscuro */
  color: var(--color); /* Texto claro */
  padding-inline: 1.5rem;
}

ul li .title::before,
ul li .descripcion::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
</style>