<script setup>
import { ref } from 'vue';

const intereses = ref([
    {
        id: 1,
        icono: '💪',
        titulo: 'Entrenamiento Físico',
        descripcion: 'Realizo ejercicio regularmente en casa, combinando calistenia y entrenamiento con pesas caseras. Me ayuda a mantener disciplina, salud y energía para enfrentar los desafíos diarios.',
        categoria: 'Salud',
        color: '#ef4444'
    },
    {
        id: 2,
        icono: '📚',
        titulo: 'Lectura y Aprendizaje',
        descripcion: 'Apasionado por la lectura de libros y artículos sobre ciencia, tecnología, historia y geografía. Siempre busco expandir mis conocimientos y entender mejor el mundo que me rodea.',
        categoria: 'Conocimiento',
        color: '#3b82f6'
    },
    {
        id: 3,
        icono: '🎵',
        titulo: 'Música y Entretenimiento',
        descripcion: 'Disfruto explorando nuevos géneros musicales y viendo películas/series que me inspiran. La música me ayuda a concentrarme y el cine me brinda nuevas perspectivas.',
        categoria: 'Entretenimiento',
        color: '#8b5cf6'
    },
    {
        id: 4,
        icono: '💻',
        titulo: 'Exploración Tecnológica',
        descripcion: 'Me interesa probar nuevas tecnologías, herramientas de desarrollo y metodologías de programación. Me gusta aprender y aplicar nuevas habilidades para enfrentar desafíos tecnológicos.',
        categoria: 'Tecnología',
        color: '#10b981'
    }
]);

const interesesPrincipales = ref([
    'Mantenerse activo y saludable',
    'Aprendizaje continuo',
    'Equilibrio vida-trabajo',
    'Desarrollo personal'
]);
</script>

<template>
    <section class="intereses-section" id="intereses">
        <div class="container">
            <!-- Header -->
            <div class="section-header">
                <h2 class="section-title">Mis Intereses</h2>
                <p class="section-subtitle">Pasiones y actividades que dan balance a mi vida profesional</p>
            </div>

            <!-- Intereses Grid -->
            <div class="intereses-grid">
                <div 
                    v-for="interes in intereses" 
                    :key="interes.id"
                    class="interes-card"
                    :style="{ '--card-color': interes.color }"
                >
                    <div class="interes-header">
                        <div class="interes-icono" :style="{ backgroundColor: interes.color }">
                            {{ interes.icono }}
                        </div>
                        <div class="interes-titulo-container">
                            <h3 class="interes-titulo">{{ interes.titulo }}</h3>
                            <span class="interes-categoria">{{ interes.categoria }}</span>
                        </div>
                    </div>
                    
                    <div class="interes-body">
                        <p class="interes-descripcion">{{ interes.descripcion }}</p>
                        
                        <div class="interes-detalles">
                            <div class="detalle-item" v-if="interes.categoria === 'Salud'">
                                <span class="detalle-icon">🏋️</span>
                                <span>Calistenia & Mancuernas</span>
                            </div>
                            <div class="detalle-item" v-if="interes.categoria === 'Conocimiento'">
                                <span class="detalle-icon">📖</span>
                                <span>Libros & Artículos Científicos</span>
                            </div>
                            <div class="detalle-item" v-if="interes.categoria === 'Entretenimiento'">
                                <span class="detalle-icon">🎬</span>
                                <span>Películas & Series</span>
                            </div>
                            <div class="detalle-item" v-if="interes.categoria === 'Tecnología'">
                                <span class="detalle-icon">🔧</span>
                                <span>Herramientas de Desarrollo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Intereses Principales -->
            <!-- <div class="principales-section"> -->
                <!-- <div class="principales-header">
                    <h3 class="principales-titulo">Lo que más valoro</h3>
                    <p class="principales-subtitulo">Principios que guían mi día a día</p>
                </div> -->
                
                <!-- <div class="principales-grid">
                    <div 
                        v-for="(principal, index) in interesesPrincipales" 
                        :key="index"
                        class="principal-item"
                        :style="{ '--item-index': index }"
                    >
                        <div class="principal-icon">
                            {{ index === 0 ? '💪' : index === 1 ? '📚' : index === 2 ? '⚖️' : '🌟' }}
                        </div>
                        <span class="principal-text">{{ principal }}</span>
                    </div>
                </div> -->
            <!-- </div> -->

            <!-- Beneficios -->
            <!-- <div class="beneficios-section">
                <h3 class="beneficios-titulo">¿Cómo estos intereses mejoran mi trabajo?</h3>
                <div class="beneficios-grid">
                    <div class="beneficio-card">
                        <div class="beneficio-icon">🧠</div>
                        <h4>Mente Sana</h4>
                        <p>El ejercicio físico mejora mi concentración y reduce el estrés, permitiéndome programar con mayor claridad.</p>
                    </div>
                    <div class="beneficio-card">
                        <div class="beneficio-icon">💡</div>
                        <h4>Creatividad</h4>
                        <p>La lectura y el cine estimulan mi creatividad, ayudándome a encontrar soluciones innovadoras a problemas técnicos.</p>
                    </div>
                    <div class="beneficio-card">
                        <div class="beneficio-icon">⚡</div>
                        <h4>Energía</h4>
                        <p>Mantener hábitos saludables me da la energía necesaria para proyectos desafiantes y largas sesiones de código.</p>
                    </div>
                    <div class="beneficio-card">
                        <div class="beneficio-icon">🔄</div>
                        <h4>Equilibrio</h4>
                        <p>Buscar balance entre trabajo y vida personal me ayuda a evitar el burnout y mantener la pasión por programar.</p>
                    </div>
                </div>
            </div> -->

            <!-- Quote -->
            <div class="quote-section">
                <div class="quote-content">
                    <span class="quote-icon">❝</span>
                    <p class="quote-text">Creo que el éxito en el desarrollo de software viene no solo del código que escribimos, sino también del equilibrio que mantenemos fuera de la pantalla.</p>
                    <span class="quote-author">- Ezequiel Quiroz</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.intereses-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
    position: relative;
    overflow: hidden;
}

.intereses-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #a78bfa, transparent);
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
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #a78bfa, #c4b5fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    font-size: 1.2rem;
    color: #d8b4fe;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Grid de Intereses */
.intereses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.interes-card {
    background: linear-gradient(145deg, rgba(30, 27, 75, 0.8), rgba(49, 46, 129, 0.9));
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(167, 139, 250, 0.2);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
}

.interes-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--card-color), transparent);
}

.interes-card:hover {
    transform: translateY(-10px);
    border-color: var(--card-color);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.interes-header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
}

.interes-icono {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    flex-shrink: 0;
    color: white;
}

.interes-titulo-container {
    flex: 1;
}

.interes-titulo {
    font-size: 1.4rem;
    font-weight: 700;
    color: #f1f5f9;
    margin: 0 0 0.3rem 0;
}

.interes-categoria {
    font-size: 0.85rem;
    color: var(--card-color);
    font-weight: 600;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
}

.interes-body {
    color: #cbd5e1;
}

.interes-descripcion {
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

.interes-detalles {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.detalle-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    font-size: 0.9rem;
}

.detalle-icon {
    font-size: 1.2rem;
}

/* Intereses Principales */
.principales-section {
    background: rgba(167, 139, 250, 0.1);
    padding: 3rem;
    border-radius: 20px;
    margin-bottom: 4rem;
    border: 1px solid rgba(167, 139, 250, 0.2);
}

.principales-header {
    text-align: center;
    margin-bottom: 2.5rem;
}

.principales-titulo {
    font-size: 1.8rem;
    color: #f1f5f9;
    margin-bottom: 0.5rem;
}

.principales-subtitulo {
    color: #c4b5fd;
    font-size: 1.1rem;
}

.principales-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.principal-item {
    background: linear-gradient(145deg, rgba(49, 46, 129, 0.5), rgba(30, 27, 75, 0.7));
    padding: 1.5rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 0.6s ease forwards;
    animation-delay: calc(var(--item-index, 0) * 0.1s);
}

.principal-item:hover {
    transform: translateY(-5px);
    background: linear-gradient(145deg, rgba(167, 139, 250, 0.2), rgba(196, 181, 253, 0.3));
}

.principal-icon {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
}

.principal-text {
    color: #f1f5f9;
    font-weight: 600;
    font-size: 1.1rem;
}

/* Beneficios */
.beneficios-section {
    margin-bottom: 4rem;
}

.beneficios-titulo {
    text-align: center;
    font-size: 1.8rem;
    color: #f1f5f9;
    margin-bottom: 2.5rem;
}

.beneficios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.beneficio-card {
    background: linear-gradient(145deg, rgba(30, 27, 75, 0.8), rgba(49, 46, 129, 0.9));
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    border: 1px solid rgba(167, 139, 250, 0.2);
    transition: all 0.3s ease;
}

.beneficio-card:hover {
    transform: translateY(-8px);
    border-color: rgba(167, 139, 250, 0.4);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.beneficio-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.beneficio-card h4 {
    color: #f1f5f9;
    font-size: 1.3rem;
    margin-bottom: 1rem;
}

.beneficio-card p {
    color: #cbd5e1;
    line-height: 1.6;
    font-size: 0.95rem;
}

/* Quote */
.quote-section {
    background: linear-gradient(135deg, rgba(167, 139, 250, 0.1), rgba(196, 181, 253, 0.05));
    padding: 3rem;
    border-radius: 20px;
    border: 2px dashed rgba(167, 139, 250, 0.3);
    text-align: center;
}

.quote-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.quote-icon {
    font-size: 4rem;
    color: #a78bfa;
    display: block;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.quote-text {
    font-size: 1.4rem;
    color: #f1f5f9;
    font-style: italic;
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.quote-author {
    color: #c4b5fd;
    font-weight: 600;
    font-size: 1.1rem;
}

/* Animaciones */
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 768px) {
    .intereses-section {
        padding: 2rem 1rem;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .intereses-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .principales-section {
        padding: 2rem;
    }
    
    .beneficios-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .quote-section {
        padding: 2rem 1rem;
    }
    
    .quote-text {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .section-title {
        font-size: 1.8rem;
    }
    
    .interes-card {
        padding: 1.5rem;
    }
    
    .interes-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .principales-grid {
        grid-template-columns: 1fr;
    }
}
</style>