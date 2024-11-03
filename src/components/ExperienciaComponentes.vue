<script setup>
import icono1 from '/src/assets/electronic-sales.svg';
import icono2 from '/src/assets/speed.svg';
import icono3 from '/src/assets/security.svg';
import icono4 from '/src/assets/interface.svg';
import icono5 from '/src/assets/automation.svg';
import icono6 from '/src/assets/data.svg';
import icono7 from '/src/assets/cloud.svg';

import { ref } from 'vue';

const titulo = 'Desarrollador Full Stack';
const fecha = 'Enero 2022 - Julio 2024';

const experiencias = ref([
    { id: 1, src: icono1, parrafo: 'Lideré un equipo de 5 desarrolladores en la creación de una plataforma de comercio electrónico, logrando un aumento del 35% en ventas el primer año.' },
    { id: 2, src: icono2, parrafo: 'Desarrollé aplicaciones optimizadas con Node.js, React y MongoDB, reduciendo el tiempo de carga de páginas en un 50%.' },
    { id: 3, src: icono3, parrafo: 'Implementé soluciones de autenticación y autorización, mejorando la seguridad del sitio web y disminuyendo accesos no autorizados en un 20%.' },
    { id: 4, src: icono4, parrafo: 'Colaboré con diseñadores UX/UI para interfaces más intuitivas, aumentando la satisfacción del cliente en un 15%.' },
    { id: 5, src: icono5, parrafo: 'Automatización de despliegue continuo con Jenkins y Docker, logrando una reducción de los tiempos de despliegue en un 40%.' },
    { id: 6, src: icono6, parrafo: 'Diseñé modelos de análisis de datos que ayudaron a identificar tendencias de usuario, optimizando decisiones de negocio en tiempo real.' },
    { id: 7, src: icono7, parrafo: 'Migré sistemas locales a la nube con AWS, logrando una disponibilidad del 99.9% y reduciendo costos operativos en un 25%.' }
]);
</script>

<template>
    <div class="card">
        <h3 class="titulo">{{ titulo.toLocaleUpperCase() }}</h3>
        <p class="fecha">{{ fecha }}</p>
        <ul class="listado">
            <li class="item" v-for="experiencia in experiencias" :key="experiencia.id">
                <img class="imagen-svg" :src="experiencia.src" width="40" :alt="experiencia.parrafo">
                <p class="texto-experiencia">{{ experiencia.parrafo }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #1a2733;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
    max-width: 600px;
    margin: auto;
}

.titulo {
    font-size: 2rem;
    font-weight: bold;
    color: #ff7f50;
    margin-bottom: 0.5rem;
}

.fecha {
    font-size: 1.2rem;
    color: #d2b48c;
    margin-bottom: 1.5rem;
}

.listado {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.item {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    background-color: #253646;
    border-radius: 10px;
    transition: transform 0.2s;
}

.item:hover {
    transform: scale(1.05);
    background-color: #2d4559;
}

.imagen-svg {
    width: 45px;
    height: 45px;
}

.texto-experiencia {
    font-size: 1rem;
    color: #e0e0e0;
}
</style>