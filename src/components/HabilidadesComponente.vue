<script setup>
import { ref, computed } from 'vue';

import img1 from '/src/components/icons/js.svg';
import img2 from '/src/components/icons/python.svg';
import img3 from '/src/components/icons/html-css.svg';
import img4 from '/src/components/icons/java.svg';
import img5 from '/src/components/icons/sql.svg';
import img6 from '/src/components/icons/react.svg';
import img7 from '/src/components/icons/vue.svg';
import img8 from '/src/components/icons/node.svg';
import img11 from '/src/components/icons/git.svg';
import img12 from '/src/components/icons/docker.svg';
import img14 from '/src/components/icons/figma.svg';
import img15 from '/src/components/icons/visual.svg';
import img16 from '/src/components/icons/mongo.svg';
import img17 from '/src/components/icons/mysql.svg';
import img18 from '/src/components/icons/postgres.svg';
import img19 from '/src/components/icons/arg.svg';
import img20 from '/src/components/icons/eeuu.svg';

const habilidades = ref([
    {
        id: 1, 
        nombre: 'Lenguajes de Programación', 
        icono: '💻',
        habilidades: [
            { id: 1, nombre: 'JavaScript', nivel: 70, icono: img1, experiencia: 'Desarrollo web, proyectos universitarios' },
            { id: 2, nombre: 'Python', nivel: 40, icono: img2, experiencia: 'Lógica de programación, scripts básicos' },
            { id: 3, nombre: 'HTML/CSS', nivel: 80, icono: img3, experiencia: 'Maquetación web, diseño responsive' },
            { id: 4, nombre: 'Java', nivel: 65, icono: img4, experiencia: 'Proyectos universitarios, programación OOP' },
            { id: 5, nombre: 'SQL', nivel: 60, icono: img5, experiencia: 'Consultas, diseño de bases de datos' }
        ]
    },
    {
        id: 2, 
        nombre: 'Frameworks y Librerías', 
        icono: '⚙️',
        habilidades: [
            { id: 1, nombre: 'React.js', nivel: 65, icono: img6, experiencia: 'Componentes, hooks, estado' },
            { id: 2, nombre: 'Vue.js', nivel: 75, icono: img7, experiencia: 'Composition API, componentes, este portafolio' },
            { id: 3, nombre: 'Node.js', nivel: 55, icono: img8, experiencia: 'Backend básico, APIs REST' },
        ]
    },
    {
        id: 3, 
        nombre: 'Herramientas y Software', 
        icono: '🛠️',
        habilidades: [
            { id: 1, nombre: 'Git', nivel: 75, icono: img11, experiencia: 'Control de versiones, trabajo colaborativo' },
            { id: 2, nombre: 'Docker', nivel: 30, icono: img12, experiencia: 'Conceptos básicos, contenedores' },
            { id: 4, nombre: 'Figma', nivel: 40, icono: img14, experiencia: 'Prototipado básico, diseño UI' },
            { id: 5, nombre: 'Visual Studio Code', nivel: 85, icono: img15, experiencia: 'Editor principal, extensions' }
        ]
    },
    {
        id: 4, 
        nombre: 'Bases de Datos', 
        icono: '🗄️',
        habilidades: [
            { id: 1, nombre: 'MongoDB', nivel: 45, icono: img16, experiencia: 'NoSQL, documentos JSON' },
            { id: 2, nombre: 'MySQL', nivel: 65, icono: img17, experiencia: 'Proyectos universitarios, relaciones' },
            { id: 3, nombre: 'PostgreSQL', nivel: 70, icono: img18, experiencia: 'Consultas avanzadas, transacciones' }
        ]
    },
    {
        id: 5, 
        nombre: 'Idiomas', 
        icono: '🌍',
        habilidades: [
            { id: 1, nombre: 'Español', nivel: 100, icono: img19, experiencia: 'Lengua materna' },
            { id: 2, nombre: 'Inglés', nivel: 30, icono: img20, experiencia: 'Lectura técnica básica' }
        ]
    }
]);

const filtros = ref(['Todos', 'Frontend', 'Backend', 'Herramientas', 'Idiomas']);
const filtroActivo = ref('Todos');
const habilidadSeleccionada = ref(null);

// Filtrar habilidades por categoría
function filtrarHabilidades(categoria) {
    filtroActivo.value = categoria;
}

// Mostrar detalles de habilidad
function mostrarDetalles(habilidad) {
    habilidadSeleccionada.value = habilidad;
}

// Cerrar detalles
function cerrarDetalles() {
    habilidadSeleccionada.value = null;
}

// Obtener habilidades filtradas
const habilidadesFiltradas = computed(() => {
    if (filtroActivo.value === 'Todos') {
        return habilidades.value;
    }
    
    const categoriasMap = {
        'Frontend': [1, 2], // Lenguajes y Frameworks
        'Backend': [1, 4], // Lenguajes y Bases de Datos
        'Herramientas': [3],
        'Idiomas': [5]
    };
    
    const categoriasIds = categoriasMap[filtroActivo.value] || [];
    return habilidades.value.filter(cat => categoriasIds.includes(cat.id));
});

// Obtener nivel como texto
function obtenerNivelTexto(nivel) {
    if (nivel >= 80) return 'Avanzado';
    if (nivel >= 60) return 'Intermedio';
    if (nivel >= 40) return 'Básico-Intermedio';
    return 'Básico';
}

// Obtener color según nivel
function obtenerColorNivel(nivel) {
    if (nivel >= 80) return '#10b981'; // Verde
    if (nivel >= 60) return '#3b82f6'; // Azul
    if (nivel >= 40) return '#f59e0b'; // Amarillo
    return '#ef4444'; // Rojo
}
</script>

<template>
    <section class="habilidades-section" id="habilidades">
        <div class="container">
            <!-- Header -->
            <div class="section-header">
                <h2 class="section-title">Mis Habilidades</h2>
                <p class="section-subtitle">Conocimientos técnicos y herramientas que domino</p>
            </div>

            <!-- Filtros -->
            <div class="filtros-container">
                <button 
                    v-for="filtro in filtros" 
                    :key="filtro"
                    @click="filtrarHabilidades(filtro)"
                    :class="{ 'active': filtroActivo === filtro }"
                    class="filtro-btn"
                >
                    {{ filtro }}
                </button>
            </div>

            <!-- Categorías de Habilidades -->
            <div class="categorias-grid">
                <div 
                    v-for="categoria in habilidadesFiltradas" 
                    :key="categoria.id"
                    class="categoria-card"
                    :style="{ '--categoria-color': obtenerColorNivel(75) }"
                >
                    <div class="categoria-header">
                        <span class="categoria-icon">{{ categoria.icono }}</span>
                        <h3 class="categoria-titulo">{{ categoria.nombre }}</h3>
                    </div>
                    
                    <div class="habilidades-lista">
                        <div 
                            v-for="habilidad in categoria.habilidades" 
                            :key="habilidad.id"
                            class="habilidad-item"
                            @click="mostrarDetalles(habilidad)"
                            :title="`Click para más detalles sobre ${habilidad.nombre}`"
                        >
                            <div class="habilidad-icono">
                                <img :src="habilidad.icono" :alt="habilidad.nombre" loading="lazy">
                            </div>
                            
                            <div class="habilidad-info">
                                <div class="habilidad-nombre-container">
                                    <span class="habilidad-nombre">{{ habilidad.nombre }}</span>
                                    <span class="habilidad-nivel-texto">{{ obtenerNivelTexto(habilidad.nivel) }}</span>
                                </div>
                                
                                <div class="habilidad-bar-container">
                                    <div 
                                        class="habilidad-bar" 
                                        :style="{ 
                                            width: `${habilidad.nivel}%`,
                                            backgroundColor: obtenerColorNivel(habilidad.nivel)
                                        }"
                                    >
                                        <span class="habilidad-nivel-porcentaje">{{ habilidad.nivel }}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de Detalles -->
            <div v-if="habilidadSeleccionada" class="modal-overlay" @click.self="cerrarDetalles">
                <div class="modal-content">
                    <button class="modal-close" @click="cerrarDetalles">×</button>
                    
                    <div class="modal-header">
                        <div class="modal-icon">
                            <img :src="habilidadSeleccionada.icono" :alt="habilidadSeleccionada.nombre">
                        </div>
                        <div class="modal-titulo-container">
                            <h3 class="modal-titulo">{{ habilidadSeleccionada.nombre }}</h3>
                            <div class="modal-nivel-container">
                                <span 
                                    class="modal-nivel-badge"
                                    :style="{ backgroundColor: obtenerColorNivel(habilidadSeleccionada.nivel) }"
                                >
                                    {{ obtenerNivelTexto(habilidadSeleccionada.nivel) }}
                                </span>
                                <span class="modal-nivel-porcentaje">{{ habilidadSeleccionada.nivel }}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-body">
                        <div class="modal-experiencia">
                            <h4>Experiencia:</h4>
                            <p>{{ habilidadSeleccionada.experiencia }}</p>
                        </div>
                        
                        <div class="modal-progreso">
                            <h4>Nivel de Dominio:</h4>
                            <div class="progreso-bar">
                                <div 
                                    class="progreso-fill"
                                    :style="{ 
                                        width: `${habilidadSeleccionada.nivel}%`,
                                        backgroundColor: obtenerColorNivel(habilidadSeleccionada.nivel)
                                    }"
                                ></div>
                            </div>
                            <div class="progreso-labels">
                                <span>Principiante</span>
                                <span>Intermedio</span>
                                <span>Avanzado</span>
                                <span>Experto</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="btn-cerrar" @click="cerrarDetalles">Cerrar</button>
                    </div>
                </div>
            </div>

            <!-- Estadísticas -->
            <div class="estadisticas-habilidades">
                <div class="estadistica-item">
                    <div class="estadistica-icon">📚</div>
                    <div class="estadistica-info">
                        <span class="estadistica-numero">{{ habilidades.reduce((acc, cat) => acc + cat.habilidades.length, 0) }}+</span>
                        <span class="estadistica-texto">Habilidades</span>
                    </div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-icon">🎯</div>
                    <div class="estadistica-info">
                        <span class="estadistica-numero">{{ habilidadesFiltradas.length }}</span>
                        <span class="estadistica-texto">Categorías</span>
                    </div>
                </div>
                <div class="estadistica-item">
                    <div class="estadistica-icon">📈</div>
                    <div class="estadistica-info">
                        <span class="estadistica-numero">75%</span>
                        <span class="estadistica-texto">Promedio</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.habilidades-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    position: relative;
    overflow: hidden;
}

.habilidades-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* Header */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-title {
    font-size: 2.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #8b5cf6, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Filtros */
.filtros-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    padding: 1.5rem;
    background: rgba(30, 41, 59, 0.6);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.filtro-btn {
    padding: 0.8rem 1.8rem;
    border: 2px solid rgba(139, 92, 246, 0.3);
    background: transparent;
    color: #a78bfa;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1rem;
    position: relative;
    overflow: hidden;
}

.filtro-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.filtro-btn:hover {
    border-color: #8b5cf6;
    color: #ffffff;
    transform: translateY(-2px);
}

.filtro-btn:hover::before {
    width: 300px;
    height: 300px;
}

.filtro-btn.active {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border-color: transparent;
    color: white;
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
}

/* Grid de Categorías */
.categorias-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.categoria-card {
    background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(139, 92, 246, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.categoria-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--categoria-color), transparent);
}

.categoria-card:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.categoria-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.categoria-icon {
    font-size: 2rem;
    background: rgba(139, 92, 246, 0.1);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
}

.categoria-titulo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #f1f5f9;
    margin: 0;
}

/* Lista de Habilidades */
.habilidades-lista {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.habilidad-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem;
    background: rgba(30, 41, 59, 0.5);
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.habilidad-item:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateX(8px);
}

.habilidad-icono {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
}

.habilidad-icono img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.habilidad-info {
    flex: 1;
}

.habilidad-nombre-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.habilidad-nombre {
    font-size: 1.1rem;
    font-weight: 600;
    color: #e2e8f0;
}

.habilidad-nivel-texto {
    font-size: 0.85rem;
    font-weight: 600;
    color: #94a3b8;
    background: rgba(148, 163, 184, 0.1);
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
}

.habilidad-bar-container {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.habilidad-bar {
    height: 100%;
    border-radius: 4px;
    position: relative;
    transition: width 1s ease-in-out;
}

.habilidad-nivel-porcentaje {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Modal de Detalles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background: linear-gradient(145deg, #1e293b, #0f172a);
    border-radius: 24px;
    padding: 2.5rem;
    max-width: 500px;
    width: 100%;
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
}

@keyframes slideUp {
    from { 
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }
    to { 
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border: none;
    color: #a78bfa;
    font-size: 1.8rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background: rgba(139, 92, 246, 0.2);
    color: white;
}

.modal-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.modal-icon {
    width: 80px;
    height: 80px;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
}

.modal-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.modal-titulo-container {
    flex: 1;
}

.modal-titulo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #f1f5f9;
    margin-bottom: 0.5rem;
}

.modal-nivel-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.modal-nivel-badge {
    padding: 0.4rem 1.2rem;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
}

.modal-nivel-porcentaje {
    font-size: 1.2rem;
    font-weight: 700;
    color: #a78bfa;
}

.modal-body {
    margin-bottom: 2rem;
}

.modal-experiencia {
    margin-bottom: 2rem;
}

.modal-experiencia h4 {
    color: #cbd5e1;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.modal-experiencia p {
    color: #94a3b8;
    line-height: 1.6;
    font-size: 1rem;
}

.modal-progreso h4 {
    color: #cbd5e1;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
}

.progreso-bar {
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.8rem;
}

.progreso-fill {
    height: 100%;
    border-radius: 5px;
    transition: width 1s ease-in-out;
}

.progreso-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #64748b;
}

.modal-footer {
    text-align: right;
}

.btn-cerrar {
    padding: 0.8rem 2rem;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: #a78bfa;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-cerrar:hover {
    background: rgba(139, 92, 246, 0.2);
    color: white;
}

/* Estadísticas */
.estadisticas-habilidades {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
}

.estadistica-item {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border-radius: 16px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    transition: all 0.3s ease;
}

.estadistica-item:hover {
    transform: translateY(-4px);
    background: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.3);
}

.estadistica-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
}

.estadistica-info {
    display: flex;
    flex-direction: column;
}

.estadistica-numero {
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #8b5cf6, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}

.estadistica-texto {
    color: #cbd5e1;
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 0.3rem;
}

/* Responsive */
@media (max-width: 768px) {
    .habilidades-section {
        padding: 3rem 1rem;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .categorias-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .filtros-container {
        padding: 1rem;
        gap: 0.8rem;
    }
    
    .filtro-btn {
        padding: 0.6rem 1.2rem;
        font-size: 0.9rem;
    }
    
    .categoria-card {
        padding: 1.5rem;
    }
    
    .modal-content {
        padding: 1.5rem;
        margin: 1rem;
    }
    
    .modal-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .estadisticas-habilidades {
        grid-template-columns: 1fr;
    }
    
    .habilidad-item {
        padding: 1rem;
    }
}
</style>