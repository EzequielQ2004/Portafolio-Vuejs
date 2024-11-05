<script setup>
import { ref } from 'vue';
import FondoLava from './FondoLava.vue';

const intereses = ref([
    '💻 Desarrollo de Software Abierto: Contribuyo activamente en proyectos de GitHub, colaborando con desarrolladores para mejorar herramientas y librerías populares.',
    '🌄 Aventura al Aire Libre: Me encanta practicar senderismo y ciclismo de montaña, disfrutando de la naturaleza y manteniendo un equilibrio saludable entre el trabajo y la vida personal.',
    '🚀 Innovación Tecnológica: Apasionado por explorar nuevas tendencias como inteligencia artificial y desarrollo de aplicaciones móviles que transforman el mundo.',
    '📸 Fotografía Creativa: La fotografía es mi hobby favorito, lo que me permite mantener una perspectiva fresca y creativa en mi vida profesional y personal.'
]);
</script>

<template>
    <div class="intereses-contenedor">
        <FondoLava />
        <ul class="contenedor-lista">
            <li class="item" v-for="interes in intereses" :key="interes">
                {{ interes }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.intereses-contenedor {
    display: flex;
    position: relative;
    margin: 0 auto;
    max-width: 85%;
    padding: 2rem; /* Aumenté el padding para más espacio */
}

.contenedor-lista {
    list-style-type: none;
    padding: 1rem;
    margin-bottom: 0;
    color: var(--vt-c-white-soft);
    font-size: 1.5rem; /* Aumenté el tamaño de la fuente */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.item {
    margin-bottom: 1.5rem; /* Mayor espacio entre items */
    transition: transform 0.3s ease, color 0.3s ease; /* Efecto suave en hover */
}

.item:hover {
    transform: scale(1.05); /* Aumentar ligeramente el tamaño en hover */
    color: #ff5733; /* Cambiar color en hover */
}
</style>