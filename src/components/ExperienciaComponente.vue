<script setup>
import { ref } from 'vue';

import iconoPasantia from '/src/assets/work.svg';
import iconoUniversidad from '/src/assets/university.svg';
import iconoProyecto from '/src/assets/project.svg';
import iconoSkills from '/src/assets/skills.svg';
import iconoGithub from '/src/assets/github.svg';

const titulo = 'Experiencia en Desarrollo';
const fecha = '2024 - Presente';

const experiencias = ref([
    { 
        id: 1, 
        src: iconoPasantia, 
        titulo: 'Desarrollador Backend - Ferretería San Francisco',
        subtitulo: 'Pasantía Remota',
        parrafo: 'Desarrollo de funcionalidades backend para el sitio web de Ferretería San Francisco. Participación activa en el equipo de desarrollo implementando soluciones técnicas y colaborando en el ciclo completo de desarrollo de software.',
        tecnologias: ['Backend', 'Git', 'CSS', 'JavaScript', 'HTML', 'Docker', 'Trabajo en equipo', 'Metodologías ágiles'],
        enlace: 'https://github.com/Ferreteria-San-Francisco/ferreteria-san-francisco-web'
    },
    { 
        id: 2, 
        src: iconoUniversidad, 
        titulo: 'Tecnicatura Universitaria en Programación',
        subtitulo: 'UTN San Rafael (2024-2025)',
        parrafo: 'Formación académica en desarrollo de software incluyendo: Algoritmos, Estructuras de Datos, Programación Orientada a Objetos, Bases de Datos, Desarrollo Web, y mejores prácticas de programación.',
        tecnologias: ['Java', 'Python', 'JavaScript', 'Bases de Datos', 'Lógica de Programación']
    },
    { 
        id: 3, 
        src: iconoProyecto, 
        titulo: 'Proyecto Universitario: Capybara Films',
        subtitulo: 'Sistema de Gestión',
        parrafo: 'Desarrollo en equipo de un sistema de gestión para empresa ficticia de alquiler y venta de películas. Aplicación de conceptos de desarrollo de software, trabajo colaborativo y control de versiones.',
        tecnologias: ['Python', 'Git/GitHub', 'Trabajo en equipo', 'Metodología Scrum'],
        enlace: 'https://github.com/PowerSystem2024/CapybaraFilms_ProyectoTercerSemestre'
    },
    { 
        id: 4, 
        src: iconoProyecto, 
        titulo: 'Proyecto Universitario: CapyGaming',
        subtitlo: 'E-commerce Gamer',
        parrafo: 'Desarrollo colaborativo de plataforma e-commerce para productos gamers. Implementación de funcionalidades de carrito de compras, gestión de productos y sistema de usuarios.',
        tecnologias: ['Desarrollo Web', 'E-commerce', 'GitHub', 'Vue', 'JavaScript', 'Trabajo colaborativo'],
        enlace: 'https://github.com/PowerSystem2024/CapyGaming-CarpinchosProgramando'
    },
    { 
        id: 5, 
        src: iconoSkills, 
        titulo: 'Habilidades Técnicas',
        subtitulo: 'Conocimientos en Programación',
        parrafo: 'Desarrollo de habilidades en diversos lenguajes y tecnologías a través de proyectos académicos y práctica autodidacta.',
        tecnologias: [
            'Java (Intermedio)', 
            'Python (Básico)', 
            'JavaScript (Básico)', 
            'Git/GitHub', 
            'HTML/CSS', 
            'Manejo de Datos', 
            'Lógica de Programación'
        ]
    }
]);

const habilidadesBlandas = ref([
    'Aprendizaje rápido',
    'Adaptabilidad',
    'Compromiso',
    'Responsabilidad',
    'Trabajo en equipo',
    'Creatividad',
    'Comunicación efectiva'
]);
</script>

<template>
    <div class="card">
        <h3 class="titulo">{{ titulo.toLocaleUpperCase() }}</h3>
        <p class="fecha">{{ fecha }}</p>
        
        <div class="experiencias-container">
            <ul class="listado">
                <li class="item" v-for="experiencia in experiencias" :key="experiencia.id">
                    <div class="icono-titulo">
                        <img class="imagen-svg" :src="experiencia.src" width="40" :alt="experiencia.titulo">
                        <div class="titulo-container">
                            <h4 class="titulo-experiencia">{{ experiencia.titulo }}</h4>
                            <p class="subtitulo-experiencia">{{ experiencia.subtitulo }}</p>
                        </div>
                    </div>
                    
                    <p class="texto-experiencia">{{ experiencia.parrafo }}</p>
                    
                    <div class="tecnologias-container" v-if="experiencia.tecnologias && experiencia.tecnologias.length > 0">
                        <span class="tecnologia-tag" v-for="(tech, index) in experiencia.tecnologias" :key="index">
                            {{ tech }}
                        </span>
                    </div>
                    
                    <a v-if="experiencia.enlace" :href="experiencia.enlace" target="_blank" rel="noopener noreferrer" class="enlace-proyecto">
                        🔗 Ver proyecto en GitHub
                    </a>
                </li>
            </ul>
            
            <div class="habilidades-section">
                <h4 class="subtitulo">Habilidades Personales</h4>
                <div class="habilidades-container">
                    <span class="habilidad-item" v-for="(habilidad, index) in habilidadesBlandas" :key="index">
                        ✅ {{ habilidad }}
                    </span>
                </div>
            </div>
            
            <div class="cta-section">
                <p class="cta-text">¿Interesado en colaborar o conocerme mejor?</p>
                <div class="cta-buttons">
                    <a href="https://github.com/EzequielQ2004" target="_blank" class="cta-button github">
                        <img src="/src/assets/github.svg" width="20" alt="GitHub"> Ver GitHub
                    </a>
                    <a href="https://ezequielquiroz-portafolio.netlify.app/" target="_blank" class="cta-button portfolio">
                        🌐 Ver Portafolio
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background: linear-gradient(135deg, #1a2733, #15202b);
    border-radius: 15px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.6);
    max-width: 900px;
    margin: auto;
    transition: transform 0.3s ease;
    border: 1px solid #2d3748;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.7);
}

.titulo {
    font-size: 2rem;
    font-weight: 800;
    color: #4dabf7;
    margin-bottom: 0.5rem;
    text-align: center;
    letter-spacing: 1px;
}

.fecha {
    font-size: 1.1rem;
    color: #74c0fc;
    margin-bottom: 2.5rem;
    text-align: center;
    font-weight: 500;
    background: rgba(116, 192, 252, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
}

.experiencias-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.listado {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    padding: 0;
}

.item {
    display: flex;
    flex-direction: column;
    padding: 1.8rem;
    gap: 1.2rem;
    background: linear-gradient(145deg, #253646, #1e2c3a);
    border-radius: 12px;
    border-left: 5px solid #4dabf7;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4dabf7, #339af0);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.item:hover {
    background: linear-gradient(145deg, #2d4559, #253646);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: translateX(5px);
}

.item:hover::before {
    opacity: 1;
}

.icono-titulo {
    display: flex;
    align-items: flex-start;
    gap: 1.2rem;
}

.imagen-svg {
    width: 48px;
    height: 48px;
    padding: 8px;
    background: rgba(77, 171, 247, 0.1);
    border-radius: 10px;
    filter: brightness(0) saturate(100%) invert(67%) sepia(52%) saturate(636%) hue-rotate(177deg) brightness(94%) contrast(91%);
}

.titulo-container {
    flex: 1;
}

.titulo-experiencia {
    font-size: 1.3rem;
    font-weight: 700;
    color: #e3f2fd;
    margin: 0 0 0.3rem 0;
    line-height: 1.4;
}

.subtitulo-experiencia {
    font-size: 1rem;
    color: #90cdf4;
    margin: 0;
    font-weight: 500;
}

.texto-experiencia {
    font-size: 1.05rem;
    color: #cbd5e0;
    line-height: 1.7;
    margin: 0;
    padding-left: 4rem;
}

.tecnologias-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 0.5rem;
    padding-left: 4rem;
}

.tecnologia-tag {
    background: rgba(77, 171, 247, 0.15);
    color: #90cdf4;
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid rgba(77, 171, 247, 0.3);
    transition: all 0.3s ease;
}

.tecnologia-tag:hover {
    background: rgba(77, 171, 247, 0.3);
    transform: translateY(-2px);
}

.enlace-proyecto {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #63b3ed;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.5rem 1rem;
    background: rgba(99, 179, 237, 0.1);
    border-radius: 8px;
    margin-left: 4rem;
    transition: all 0.3s ease;
    width: fit-content;
}

.enlace-proyecto:hover {
    background: rgba(99, 179, 237, 0.2);
    color: #90cdf4;
    text-decoration: underline;
}

.habilidades-section {
    background: linear-gradient(145deg, #253646, #1e2c3a);
    padding: 1.8rem;
    border-radius: 12px;
    border-left: 5px solid #40c057;
}

.subtitulo {
    font-size: 1.4rem;
    font-weight: 700;
    color: #69db7c;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.habilidades-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.habilidad-item {
    background: rgba(64, 192, 87, 0.15);
    color: #a9e7b3;
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid rgba(64, 192, 87, 0.3);
}

.habilidad-item:hover {
    background: rgba(64, 192, 87, 0.25);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cta-section {
    background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(30, 64, 175, 0.1));
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    border: 2px dashed #4d7cfe;
}

.cta-text {
    font-size: 1.2rem;
    color: #a5b4fc;
    margin-bottom: 1.5rem;
    font-weight: 600;
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.cta-button.github {
    background: linear-gradient(135deg, #24292e, #0d1117);
    color: white;
    border: 2px solid #30363d;
}

.cta-button.portfolio {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
    border: 2px solid #818cf8;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.cta-button.github:hover {
    background: linear-gradient(135deg, #0d1117, #24292e);
}

.cta-button.portfolio:hover {
    background: linear-gradient(135deg, #4f46e5, #4338ca);
}

/* Responsive */
@media (max-width: 768px) {
    .card {
        padding: 1.5rem;
        max-width: 100%;
    }
    
    .texto-experiencia,
    .tecnologias-container,
    .enlace-proyecto {
        padding-left: 0;
        margin-left: 0;
    }
    
    .icono-titulo {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .imagen-svg {
        align-self: center;
    }
    
    .cta-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-button {
        width: 100%;
        justify-content: center;
    }
}
</style>