<script setup>
import { ref } from 'vue';

import proyectoCapybara from '/src/assets/capybara-films.gif';
import proyectoCapyGaming from '/src/assets/capygaming.png';
import proyectoPractica from '/src/assets/proyectos-practica.png';
import proyectoPortfolio from '/src/assets/portfolio.png';

const misProyectos = ref([
    {
        id: 1,
        src: proyectoCapybara,
        titulo: "Capybara Films",
        subtitulo: "Sistema de Gestión para Videoclub",
        descripcion: "Sistema completo para gestión de alquiler y venta de películas desarrollado como proyecto universitario en equipo. Incluye módulos de inventario, clientes, ventas y reportes.",
        anio: "2024",
        tecnologias: ['Python', 'Flask', 'PostgreSQL', 'Git'],
        proyectoLink: "https://github.com/PowerSystem2024/CapybaraFilms_ProyectoTercerSemestre",
        githubLink: "https://github.com/PowerSystem2024/CapybaraFilms_ProyectoTercerSemestre/blob/main/CapybaraFilms/main.py",
        caracteristicas: ['Gestión de inventario', 'Sistema de ventas', 'Reportes automáticos', 'Interfaz gráfica']
    },
    {
        id: 2,
        src: proyectoCapyGaming,
        titulo: "CapyGaming",
        subtitulo: "E-commerce Gamer",
        descripcion: "Plataforma de comercio electrónico especializada en productos gamers. Desarrollado colaborativamente aplicando metodologías ágiles y control de versiones.",
        anio: "2025",
        tecnologias: ['HTML/CSS', 'JavaScript', 'GitHub', 'Vue', 'Node', 'Express', 'PostgreSQL', 'Metodologías Ágiles'],
        proyectoLink: "https://capygaming-frontend-uffp.onrender.com/",
        githubLink: "https://github.com/PowerSystem2024/CapyGaming-CarpinchosProgramando",
        caracteristicas: ['Carrito de compras', 'Catálogo de productos', 'Diseño responsive', 'Trabajo en equipo']
    },
    {
        id: 3,
        src: proyectoPractica,
        titulo: "Proyectos de Práctica",
        subtitulo: "Repositorio de Ejercicios",
        descripcion: "Colección de ejercicios y proyectos personales para practicar lógica de programación y diferentes tecnologías. Incluye soluciones a problemas algorítmicos y pequeñas aplicaciones.",
        anio: "2023-2024",
        tecnologias: ['Java', 'Python', 'JavaScript', 'Algoritmos'],
        proyectoLink: "https://github.com/EzequielQ2004/Proyectos",
        githubLink: "https://github.com/EzequielQ2004/Proyectos/blob/main/Proyectos%20Intermedios/Python/JuegoDelAhorcadoPy/juegoDelAhorcado/juegoDelAhorcado.py",
        caracteristicas: ['Ejercicios de lógica', 'Proyectos pequeños', 'Múltiples lenguajes', 'Aprendizaje autodidacta']
    },
    {
        id: 4,
        src: proyectoPortfolio,
        titulo: "Portafolio Web Personal",
        subtitulo: "Sitio Web Profesional",
        descripcion: "Portafolio web desarrollado con Vue.js para mostrar mis proyectos, habilidades y experiencia. Diseño moderno, responsive y optimizado para SEO.",
        anio: "2024",
        tecnologias: ['Vue.js', 'CSS3', 'JavaScript', 'Netlify'],
        proyectoLink: "https://ezequielquiroz-portafolio.netlify.app/",
        githubLink: "https://github.com/EzequielQ2004/Portafolio-Vuejs",
        caracteristicas: ['Diseño responsive', 'Animaciones CSS', 'Vue.js Components', 'Despliegue en Netlify']
    }
]);

const filtros = ref(['Todos', 'Java', 'Web', 'Universidad', 'Personal']);
const filtroActivo = ref('Todos');

function filtrarProyectos(tecnologia) {
    filtroActivo.value = tecnologia;
}

const proyectosFiltrados = ref([]);

// Computed property para filtrar proyectos
import { computed } from 'vue';

const proyectosMostrados = computed(() => {
    if (filtroActivo.value === 'Todos') {
        return misProyectos.value;
    }
    
    return misProyectos.value.filter(proyecto => {
        // Mapear filtros a tecnologías específicas
        const mapFiltros = {
            'Java': ['Java', 'Swing', 'MySQL'],
            'Web': ['HTML/CSS', 'JavaScript', 'Vue.js'],
            'Universidad': proyecto.titulo.includes('Capy') || proyecto.subtitulo.includes('Universidad'),
            'Personal': proyecto.titulo.includes('Portafolio') || proyecto.titulo.includes('Práctica')
        };
        
        if (typeof mapFiltros[filtroActivo.value] === 'boolean') {
            return mapFiltros[filtroActivo.value];
        }
        
        return proyecto.tecnologias.some(tech => 
            mapFiltros[filtroActivo.value].includes(tech)
        );
    });
});
</script>

<template>
    <section class="proyectos-section" id="proyectos">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Mis Proyectos</h2>
                <p class="section-subtitle">Una muestra de mi trabajo y aprendizaje en desarrollo de software</p>
            </div>

            <!-- Filtros -->
            <div class="filtros-container">
                <button 
                    v-for="filtro in filtros" 
                    :key="filtro"
                    @click="filtrarProyectos(filtro)"
                    :class="{ 'active': filtroActivo === filtro }"
                    class="filtro-btn"
                >
                    {{ filtro }}
                </button>
            </div>

            <!-- Galería de Proyectos -->
            <div class="galeria">
                <div 
                    class="proyecto-card" 
                    v-for="proyecto in proyectosMostrados" 
                    :key="proyecto.id"
                    :data-tecnologias="proyecto.tecnologias.join(',')"
                >
                    <div class="proyecto-imagen-container">
                        <div class="proyecto-badge">{{ proyecto.anio }}</div>
                        <img 
                            :src="proyecto.src" 
                            :alt="proyecto.titulo" 
                            class="proyecto-imagen"
                            loading="lazy"
                        />
                        <div class="proyecto-overlay">
                            <div class="tecnologias-tags">
                                <span 
                                    v-for="(tech, index) in proyecto.tecnologias" 
                                    :key="index"
                                    class="tecnologia-tag"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="proyecto-content">
                        <div class="proyecto-header">
                            <h3 class="proyecto-titulo">{{ proyecto.titulo }}</h3>
                            <p class="proyecto-subtitulo">{{ proyecto.subtitulo }}</p>
                        </div>
                        
                        <p class="proyecto-descripcion">{{ proyecto.descripcion }}</p>
                        
                        <div class="proyecto-caracteristicas">
                            <h4>Características:</h4>
                            <ul>
                                <li v-for="(caracteristica, index) in proyecto.caracteristicas" :key="index">
                                    {{ caracteristica }}
                                </li>
                            </ul>
                        </div>
                        
                        <div class="proyecto-actions">
                            <a 
                                :href="proyecto.proyectoLink" 
                                class="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span class="btn-icon">🔍</span>
                                Ver Proyecto
                            </a>
                            <a 
                                :href="proyecto.githubLink" 
                                class="btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span class="btn-icon"><img src="/src/assets/github_icon.svg" width="16" alt="GitHub"></span>
                                Código Fuente
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Estadísticas -->
            <div class="estadisticas">
                <div class="estadistica-item">
                    <span class="estadistica-numero">{{ misProyectos.length }}+</span>
                    <span class="estadistica-texto">Proyectos Completados</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">4+</span>
                    <span class="estadistica-texto">Tecnologías</span>
                </div>
                <div class="estadistica-item">
                    <span class="estadistica-numero">100%</span>
                    <span class="estadistica-texto">En GitHub</span>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="cta-proyectos">
                <p>¿Interesado en ver más proyectos o colaborar?</p>
                <a 
                    href="https://github.com/EzequielQ2004" 
                    class="btn-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span class="cta-icon">🚀</span>
                    Explorar Mi GitHub
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.proyectos-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #0a192f 0%, #0d1b2a 100%);
    position: relative;
    overflow: hidden;
}

.proyectos-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #4dabf7, transparent);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title {
    font-size: 2.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #4dabf7, #a5d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #90cdf4;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Filtros */
.filtros-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-bottom: 3rem;
    padding: 1rem;
    background: rgba(26, 39, 51, 0.6);
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.filtro-btn {
    padding: 0.7rem 1.5rem;
    border: 2px solid rgba(77, 171, 247, 0.3);
    background: transparent;
    color: #a5d8ff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

.filtro-btn:hover {
    border-color: #4dabf7;
    background: rgba(77, 171, 247, 0.1);
    transform: translateY(-2px);
}

.filtro-btn.active {
    background: linear-gradient(135deg, #4dabf7, #339af0);
    border-color: transparent;
    color: white;
    box-shadow: 0 4px 12px rgba(77, 171, 247, 0.3);
}

/* Galería */
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.proyecto-card {
    background: linear-gradient(145deg, #1a2733, #15202b);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(77, 171, 247, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.proyecto-card:hover {
    transform: translateY(-10px);
    border-color: rgba(77, 171, 247, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.proyecto-imagen-container {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.proyecto-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, #4dabf7, #339af0);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
}

.proyecto-imagen {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.proyecto-card:hover .proyecto-imagen {
    transform: scale(1.05);
}

.proyecto-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(10, 25, 47, 0.9));
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.proyecto-card:hover .proyecto-overlay {
    opacity: 1;
}

.tecnologias-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.tecnologia-tag {
    background: rgba(77, 171, 247, 0.2);
    color: #90cdf4;
    padding: 0.3rem 0.7rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid rgba(77, 171, 247, 0.3);
}

/* Contenido del Proyecto */
.proyecto-content {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.proyecto-header {
    margin-bottom: 1rem;
}

.proyecto-titulo {
    font-size: 1.4rem;
    font-weight: 700;
    color: #e3f2fd;
    margin-bottom: 0.3rem;
    line-height: 1.3;
}

.proyecto-subtitulo {
    font-size: 0.95rem;
    color: #90cdf4;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.proyecto-descripcion {
    color: #cbd5e0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    flex-grow: 1;
}

.proyecto-caracteristicas {
    margin-bottom: 1.5rem;
}

.proyecto-caracteristicas h4 {
    color: #74c0fc;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.proyecto-caracteristicas ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.proyecto-caracteristicas li {
    color: #a5b4cb;
    font-size: 0.9rem;
    padding: 0.3rem 0;
    position: relative;
    padding-left: 1.2rem;
}

.proyecto-caracteristicas li::before {
    content: '▸';
    color: #4dabf7;
    position: absolute;
    left: 0;
}

/* Botones de acción */
.proyecto-actions {
    display: flex;
    gap: 0.8rem;
    margin-top: auto;
}

.btn-primary, .btn-secondary {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    text-align: center;
}

.btn-primary {
    background: linear-gradient(135deg, #4dabf7, #339af0);
    color: white;
    border: none;
}

.btn-primary:hover {
    background: linear-gradient(135deg, #339af0, #1c7ed6);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(51, 154, 240, 0.3);
}

.btn-secondary {
    background: rgba(36, 41, 46, 0.8);
    color: white;
    border: 1px solid #30363d;
}

.btn-secondary:hover {
    background: #24292e;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(36, 41, 46, 0.3);
}

.btn-icon img {
    vertical-align: middle;
}

/* Estadísticas */
.estadisticas {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 4rem 0;
    padding: 2rem;
    background: rgba(26, 39, 51, 0.5);
    border-radius: 15px;
    border: 1px solid rgba(77, 171, 247, 0.1);
}

.estadistica-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.estadistica-numero {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #4dabf7, #a5d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}

.estadistica-texto {
    color: #90cdf4;
    font-size: 0.95rem;
    margin-top: 0.5rem;
    font-weight: 500;
}

/* Call to Action */
.cta-proyectos {
    text-align: center;
    padding: 3rem;
    background: linear-gradient(135deg, rgba(77, 171, 247, 0.1), rgba(51, 154, 240, 0.05));
    border-radius: 15px;
    border: 2px dashed rgba(77, 171, 247, 0.3);
}

.cta-proyectos p {
    color: #a5d8ff;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
}

.btn-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(99, 102, 241, 0.3);
    background: linear-gradient(135deg, #4f46e5, #4338ca);
}

.cta-icon {
    font-size: 1.2rem;
}

/* Responsive */
@media (max-width: 768px) {
    .proyectos-section {
        padding: 3rem 1rem;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .galeria {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .estadisticas {
        flex-direction: column;
        gap: 2rem;
        padding: 1.5rem;
    }
    
    .proyecto-actions {
        flex-direction: column;
    }
    
    .filtros-container {
        padding: 0.8rem;
    }
    
    .filtro-btn {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .proyecto-content {
        padding: 1.2rem;
    }
    
    .btn-cta {
        width: 100%;
        justify-content: center;
    }
}

/* Animaciones */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.proyecto-card {
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: calc(var(--card-index, 0) * 0.1s);
    opacity: 0;
}
</style>