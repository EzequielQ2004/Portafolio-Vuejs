<script setup>
import img1 from '/src/components/icons/js.svg';
import img2 from '/src/components/icons/python.svg';
import img3 from '/src/components/icons/html-css.svg';
import img4 from '/src/components/icons/java.svg';
import img5 from '/src/components/icons/sql.svg';
import img6 from '/src/components/icons/react.svg';
import img7 from '/src/components/icons/vue.svg';
import img8 from '/src/components/icons/node.svg';
import img9 from '/src/components/icons/django.svg';
import img10 from '/src/components/icons/bootstrap.svg';
import img11 from '/src/components/icons/git.svg';
import img12 from '/src/components/icons/docker.svg';
import img13 from '/src/components/icons/cypress.svg';
import img14 from '/src/components/icons/figma.svg';
import img15 from '/src/components/icons/visual.svg';
import img16 from '/src/components/icons/mongo.svg';
import img17 from '/src/components/icons/mysql.svg';
import img18 from '/src/components/icons/postgres.svg';
import img19 from '/src/components/icons/arg.svg';
import img20 from '/src/components/icons/eeuu.svg';
import { ref } from 'vue';

const habilidades = ref([
    {
        id: 1, nombre: 'Lenguajes de Programación', habilidades: [
            { id: 1, nombre: 'JavaScript', nivel: 'Avanzado', icono: img1 },
            { id: 2, nombre: 'Python', nivel: 'Intermedio', icono: img2 },
            { id: 3, nombre: 'HTML/CSS', nivel: 'Avanzado', icono: img3 },
            { id: 4, nombre: 'Java', nivel: 'Intermedio', icono: img4 },
            { id: 5, nombre: 'SQL', nivel: 'Intermedio', icono: img5 }
        ]
    },
    {
        id: 2, nombre: 'Frameworks y Librerías', habilidades: [
            { id: 1, nombre: 'React.js', nivel: 'Avanzado', icono: img6 },
            { id: 2, nombre: 'Vue.js', nivel: 'Intermedio', icono: img7 },
            { id: 3, nombre: 'Node.js', nivel: 'Avanzado', icono: img8 },
            { id: 4, nombre: 'Django', nivel: 'Intermedio', icono: img9 },
            { id: 5, nombre: 'Bootstrap', nivel: 'Avanzado', icono: img10 }
        ]
    },
    {
        id: 3, nombre: 'Herramientas y Software', habilidades: [
            { id: 1, nombre: 'Git', nivel: 'Avanzado', icono: img11 },
            { id: 2, nombre: 'Docker', nivel: 'Intermedio', icono: img12 },
            { id: 3, nombre: 'Cypress', nivel: 'Intermedio', icono: img13 },
            { id: 4, nombre: 'Figma', nivel: 'Intermedio', icono: img14 },
            { id: 5, nombre: 'Visual Studio Code', nivel: 'Avanzado', icono: img15 }
        ]
    },
    {
        id: 4, nombre: 'Bases de Datos', habilidades: [
            { id: 1, nombre: 'MongoDB', nivel: 'Avanzado', icono: img16 },
            { id: 2, nombre: 'MySQL', nivel: 'Intermedio', icono: img17 },
            { id: 3, nombre: 'PostgreSQL', nivel: 'Intermedio', icono: img18 }
        ]
    },
    {
        id: 5, nombre: 'Idiomas', habilidades: [
            { id: 1, nombre: 'Español', nivel: 'Nativo', icono: img19 },
            { id: 2, nombre: 'Inglés', nivel: 'Avanzado (C1)', icono: img20 }
        ]
    }
]);
</script>

<template>
    <div class="skills-contenedor">
        <div v-for="habilidad in habilidades" :key="habilidad.id" class="skills-categoria">
            <h3>{{ habilidad.nombre }}</h3>
            <ul class="skills">
                <li v-for="habilidad in habilidad.habilidades" :key="habilidad.id" class="skill">
                    <img :src="habilidad.icono" :alt="habilidad.nombre">
                    <span>{{ habilidad.nombre }}: {{ habilidad.nivel }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.skills-contenedor {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(270deg, #0D0D3B, #3A0D5E, #210D6E, #0D1A56);
    background-size: 800% 800%;
    animation: gradientAnimation 15s ease infinite;
    color: white;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.skills-categoria {
    margin-bottom: 2rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 800px;
}

.skills-categoria h3 {
    font-size: 1.8em;
    font-weight: bold;
    color: #E0E0FF;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    padding: 1rem;
}

.skill {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease, background-color 0.3s ease;
    max-width: 200px;
    width: 100%;
    text-align: center;
    cursor: pointer;
}

.skill:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.3);
}

.skill img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.skill span {
    color: #F0F0FF;
    font-size: 1em;
    font-weight: bold;
}

@media (max-width: 768px) {
    .skills {
        flex-direction: column;
    }
}
</style>