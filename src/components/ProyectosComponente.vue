<script setup>
import proyecto1 from '/src/assets/restaurant.png';
import proyecto2 from '/src/assets/e-learning.png';
import proyecto3 from '/src/assets/blog.png';
import proyecto4 from '/src/assets/restaurant.png';

import { ref } from 'vue';

// Definición de proyectos con información detallada
const misProyectos = ref([
    {
        id: 1,
        src: proyecto1,
        titulo: "Aplicación de Reservas para Restaurantes",
        descripcion: "Aplicación móvil en Flutter que facilita la reserva de mesas en restaurantes locales, ofreciendo una experiencia de usuario intuitiva y funcional.",
        anio: "2023",
        projectoLink: "https://www.google.com.ar",
        githubLink: "https://github.com/usuario/proyecto"
    },
    {
        id: 2,
        src: proyecto2,
        titulo: "Plataforma de Educación en Línea",
        descripcion: "Sistema de e-learning desarrollado con Django y React, con funcionalidades avanzadas para gestionar cursos, usuarios y contenido educativo.",
        anio: "2022",
        projectoLink: "https://www.google.com.ar",
        githubLink: "https://github.com/usuario/proyecto"
    },
    {
        id: 3,
        src: proyecto3,
        titulo: "Blog Personal Integrado con CMS",
        descripcion: "Blog personal creado en WordPress, con un sistema de gestión de contenido personalizado que permite una experiencia de publicación sencilla y eficaz.",
        anio: "2022",
        projectoLink: "https://www.google.com.ar",
        githubLink: "https://github.com/usuario/proyecto"
    },
    {
        id: 4,
        src: proyecto4,
        titulo: "Aplicación de Reservas para Restaurantes",
        descripcion: "Aplicación móvil en Flutter que facilita la reserva de mesas en restaurantes locales, ofreciendo una experiencia de usuario intuitiva y funcional.",
        anio: "2023",
        projectoLink: "https://www.google.com.ar",
        githubLink: "https://github.com/usuario/proyecto"
    },
]);
</script>

<template>
    <div class="galeria">
        <li class="proyecto" v-for="proyecto in misProyectos" :key="proyecto.id">
            <img :src="proyecto.src" :alt="proyecto.titulo" />
            <div class="proyecto-info">
                <h3>{{ proyecto.titulo }} <span>({{ proyecto.anio }})</span></h3>
                <p>{{ proyecto.descripcion }}</p>
                <div class="proyecto-links">
                    <a :href="proyecto.projectoLink" class="btn-ver-mas" target="_blank" rel="noopener noreferrer">Explorar Proyecto</a>
                    <a :href="proyecto.githubLink" class="github-link" target="_blank" rel="noopener noreferrer">Ver Código en GitHub</a>
                </div>
            </div>
        </li>
    </div>
</template>

<style scoped>
.galeria {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    background: linear-gradient(-45deg, #0D0D0D, #35233f, #35195a, #33086b);
    background-size: 400% 400%;
    animation: gradient 20s ease infinite;
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.proyecto {
    display: flex;
    flex-direction: column;
    border: 2px solid #444;
    border-radius: 8px;
    overflow: hidden;
    background-color: #1E1E1E;
    max-width: 250px;
    flex: 1 1 300px;
    color: #eaeaea;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
}
.proyecto:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

.proyecto img {
    width: 100%;
    height: auto;
    display: block;
}

.proyecto-info {
    padding: 15px;
    text-align: center;
}

.proyecto-info h3 {
    margin: 10px 0;
    font-size: 1.3em;
    color: #e0e0e0;
}

.proyecto-info h3 span {
    font-size: 0.8em;
    color: #bbbbbb;
}

.proyecto-info p {
    margin: 10px 0;
    font-size: 1em;
    color: #c0c0c0;
}

.proyecto-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.proyecto-links .btn-ver-mas {
    background-color: #4A90E2;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}

.proyecto-links .btn-ver-mas:hover {
    background-color: #357ABD;
}

.proyecto-links .github-link {
    color: #bbb;
    font-size: 0.9em;
    text-decoration: none;
}

.proyecto-links .github-link:hover {
    text-decoration: underline;
}
</style>