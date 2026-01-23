<script setup>
import { ref, computed } from 'vue';

import iconUtn from '/src/assets/utn-icon.svg';
import iconAgro from '/src/assets/agro-icon.svg';
import iconCertificado from '/src/assets/certificate-icon.svg';

const educacion = ref([
  { 
    id: 1,
    fecha: '2024 - 2025', 
    title: 'Técnicatura Universitaria en Programación', 
    institucion: 'UTN San Rafael',
    descripcion: 'Formación especializada en desarrollo y análisis de sistemas informáticos, programación avanzada, bases de datos, y operación de computadoras. Enfoque práctico en tecnologías modernas.',
    enlace: 'https://www.utn.edu.ar/',
    icono: iconUtn,
    materias: ['Arquitectura y Sistemas Operativos', 'Matemática', '	Organización Empresarial', 'Programación', 'Base de Datos'],
    estado: 'En curso',
    destacado: ['Capacitación técnica especializada', 'Proyectos prácticos en equipo', 'Metodologías de desarrollo']
  },
  { 
    id: 2,
    fecha: '2018 - 2023', 
    title: 'Técnicatura Agropecuaria', 
    institucion: 'Antonio Di Benedetto 4-043',
    descripcion: 'Formación técnica especializada en producción agropecuaria con énfasis en frutales y hortalizas. Desarrollo de habilidades técnicas, de gestión y resolución de problemas.',
    enlace: 'https://dti.mendoza.edu.ar/gem/ingreso/publico/escuela/1031/3',
    icono: iconAgro,
    materias: ['Producción Vegetal', 'Enología', 'Producción Animal', 'Suelos y Riego'],
    estado: 'Completado',
    destacado: ['Formación técnica integral', 'Trabajo en entornos productivos', 'Desarrollo de proyectos prácticos']
  }
]);

const certificaciones = ref([
  {
    id: 1,
    titulo: 'Introducción a la Programación',
    institucion: 'UTN',
    fecha: '2024',
    enlace: '#'
  },
  {
    id: 2,
    titulo: 'Git y GitHub para Desarrolladores',
    institucion: 'Platzi',
    fecha: '2024',
    enlace: '#'
  }
]);

const habilidadesDesarrolladas = ref([
  { categoria: 'Técnicas', items: ['Resolución de problemas', 'Pensamiento algorítmico', 'Análisis de sistemas', 'Gestión de proyectos'] },
  { categoria: 'Blandas', items: ['Trabajo en equipo', 'Adaptabilidad', 'Aprendizaje continuo', 'Comunicación efectiva'] }
]);

// Computed para determinar el estado visual
const obtenerEstadoClase = (estado) => {
  return estado === 'En curso' ? 'en-curso' : 'completado';
};

// Animación para los elementos
const animarElemento = (elemento) => {
  elemento.style.opacity = '1';
  elemento.style.transform = 'translateY(0)';
};
</script>

<template>
  <section class="educacion-section" id="educacion">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <h2 class="section-title">Mi Formación Académica</h2>
        <p class="section-subtitle">Una trayectoria de aprendizaje constante y desarrollo profesional</p>
      </div>

      <!-- Timeline Principal -->
      <div class="timeline-container">
        <div class="timeline-line"></div>
        
        <div 
          v-for="(item, index) in educacion" 
          :key="item.id"
          class="timeline-item"
          :class="{ 'timeline-item-right': index % 2 === 0 }"
          :style="{ '--item-index': index }"
        >
          <div class="timeline-marker">
            <div class="marker-circle" :class="obtenerEstadoClase(item.estado)">
              <img :src="item.icono" :alt="item.institucion" class="marker-icon">
            </div>
            <span class="timeline-date">{{ item.fecha }}</span>
          </div>

          <div class="timeline-content">
            <div class="educacion-card">
              <div class="educacion-header">
                <div class="educacion-titulo-container">
                  <h3 class="educacion-titulo">{{ item.title }}</h3>
                  <span class="educacion-estado" :class="obtenerEstadoClase(item.estado)">
                    {{ item.estado }}
                  </span>
                </div>
                <p class="educacion-institucion">{{ item.institucion }}</p>
              </div>

              <div class="educacion-body">
                <p class="educacion-descripcion">{{ item.descripcion }}</p>
                
                <div class="educacion-detalles">
                  <div class="materias-container">
                    <h4>Materias Destacadas:</h4>
                    <div class="materias-grid">
                      <span 
                        v-for="(materia, idx) in item.materias" 
                        :key="idx"
                        class="materia-tag"
                      >
                        {{ materia }}
                      </span>
                    </div>
                  </div>

                  <div class="destacado-container">
                    <h4>Puntos Clave:</h4>
                    <ul class="destacado-list">
                      <li v-for="(punto, idx) in item.destacado" :key="idx">
                        <span class="check-icon">✓</span>
                        {{ punto }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="educacion-footer">
                <a 
                  :href="item.enlace" 
                  class="btn-institucion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="btn-icon">🌐</span>
                  Visitar Institución
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de Habilidades Desarrolladas -->
      <!-- <div class="habilidades-section">
        <h3 class="habilidades-titulo">Habilidades Desarrolladas</h3>
        <div class="habilidades-grid">
          <div 
            v-for="habilidad in habilidadesDesarrolladas" 
            :key="habilidad.categoria"
            class="habilidad-categoria"
          >
            <h4 class="categoria-titulo">{{ habilidad.categoria }}</h4>
            <ul class="habilidad-list">
              <li v-for="(item, idx) in habilidad.items" :key="idx">
                <span class="habilidad-icon">🎯</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div> -->

      <!-- Certificaciones -->
      <!-- <div class="certificaciones-section" v-if="certificaciones.length > 0">
        <div class="certificaciones-header">
          <h3 class="certificaciones-titulo">Certificaciones Complementarias</h3>
          <p class="certificaciones-subtitulo">Cursos y especializaciones adicionales</p>
        </div>
        
        <div class="certificaciones-grid">
          <div 
            v-for="cert in certificaciones" 
            :key="cert.id"
            class="certificacion-card"
          >
            <div class="certificacion-icon">
              <img :src="iconCertificado" alt="Certificado">
            </div>
            <div class="certificacion-content">
              <h4>{{ cert.titulo }}</h4>
              <p class="certificacion-institucion">{{ cert.institucion }}</p>
              <span class="certificacion-fecha">{{ cert.fecha }}</span>
            </div>
            <a 
              :href="cert.enlace" 
              class="certificacion-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Certificado
            </a>
          </div>
        </div>
      </div> -->

      <!-- Call to Action -->
      <div class="educacion-cta">
        <p class="cta-text">¿Interesado en mi formación o experiencia académica?</p>
        <div class="cta-buttons">
          <a 
            href="https://www.linkedin.com/in/ezequielquiroz/" 
            class="btn-cta linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="cta-icon">👨‍💼</span>
            Conectar en LinkedIn
          </a>
          <a 
            href="/src/assets/cv.pdf" 
            class="btn-cta cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="cta-icon">📄</span>
            Ver Currículum Completo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.educacion-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
}

.educacion-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
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
  background: linear-gradient(135deg, #10b981, #34d399);
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

/* Timeline */
.timeline-container {
  position: relative;
  padding: 2rem 0;
  margin-bottom: 4rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #10b981, transparent);
  border-radius: 2px;
}

.timeline-item {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: calc(var(--item-index, 0) * 0.2s);
}

.timeline-item-right {
  flex-direction: row;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
}

.marker-circle {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #0f172a;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
  transition: all 0.3s ease;
}

.marker-circle.en-curso {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
}

.marker-circle.completado {
  background: linear-gradient(135deg, #10b981, #059669);
}

.marker-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(16, 185, 129, 0.6);
}

.marker-icon {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}

.timeline-date {
  margin-top: 0.8rem;
  padding: 0.4rem 1.2rem;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.timeline-content {
  width: calc(50% - 60px);
  margin-top: 100px;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: auto;
  padding-right: 3rem;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-right: auto;
  padding-left: 3rem;
}

/* Educación Card */
.educacion-card {
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.educacion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #10b981, #34d399);
}

.educacion-card:hover {
  transform: translateY(-5px);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.educacion-header {
  margin-bottom: 1.5rem;
}

.educacion-titulo-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.educacion-titulo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f1f5f9;
  margin: 0;
  flex: 1;
}

.educacion-estado {
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 1rem;
}

.educacion-estado.en-curso {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.educacion-estado.completado {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.educacion-institucion {
  color: #94a3b8;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.educacion-body {
  margin-bottom: 1.5rem;
}

.educacion-descripcion {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.educacion-detalles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.materias-container h4,
.destacado-container h4 {
  color: #10b981;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.materias-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.materia-tag {
  background: rgba(16, 185, 129, 0.1);
  color: #34d399;
  padding: 0.4rem 0.9rem;
  border-radius: 12px;
  font-size: 0.85rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.destacado-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.destacado-list li {
  color: #cbd5e1;
  padding: 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.check-icon {
  color: #10b981;
  font-weight: bold;
}

.educacion-footer {
  text-align: right;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-institucion {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.btn-institucion:hover {
  background: rgba(16, 185, 129, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(16, 185, 129, 0.2);
}

/* Habilidades Desarrolladas */
.habilidades-section {
  background: rgba(16, 185, 129, 0.05);
  padding: 3rem;
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.habilidades-titulo {
  font-size: 1.8rem;
  color: #f1f5f9;
  margin-bottom: 2rem;
  text-align: center;
}

.habilidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.habilidad-categoria {
  background: rgba(30, 41, 59, 0.5);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.categoria-titulo {
  color: #10b981;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.habilidad-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.habilidad-list li {
  color: #cbd5e1;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.habilidad-icon {
  color: #10b981;
}

/* Certificaciones */
.certificaciones-section {
  margin-bottom: 4rem;
}

.certificaciones-header {
  text-align: center;
  margin-bottom: 2rem;
}

.certificaciones-titulo {
  font-size: 1.8rem;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
}

.certificaciones-subtitulo {
  color: #94a3b8;
  font-size: 1.1rem;
}

.certificaciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.certificacion-card {
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid rgba(16, 185, 129, 0.2);
  transition: all 0.3s ease;
}

.certificacion-card:hover {
  transform: translateY(-3px);
  border-color: rgba(16, 185, 129, 0.4);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.certificacion-icon {
  width: 50px;
  height: 50px;
  background: rgba(16, 185, 129, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.certificacion-icon img {
  width: 100%;
  height: 100%;
  filter: brightness(0) saturate(100%) invert(69%) sepia(43%) saturate(505%) hue-rotate(101deg) brightness(94%) contrast(87%);
}

.certificacion-content {
  flex: 1;
}

.certificacion-content h4 {
  color: #f1f5f9;
  margin: 0 0 0.3rem 0;
  font-size: 1.1rem;
}

.certificacion-institucion {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
}

.certificacion-fecha {
  color: #10b981;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
}

.certificacion-link {
  color: #10b981;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.certificacion-link:hover {
  background: rgba(16, 185, 129, 0.1);
}

/* Call to Action */
.educacion-cta {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.05));
  border-radius: 20px;
  border: 2px dashed rgba(16, 185, 129, 0.3);
}

.cta-text {
  color: #f1f5f9;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-cta.linkedin {
  background: linear-gradient(135deg, #0a66c2, #004182);
  color: white;
  border: none;
}

.btn-cta.cv {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.btn-cta.linkedin:hover {
  background: linear-gradient(135deg, #004182, #0a66c2);
}

.btn-cta.cv:hover {
  background: linear-gradient(135deg, #7c3aed, #6d28d9);
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

/* Responsive */
@media (max-width: 992px) {
  .timeline-line {
    left: 40px;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .timeline-marker {
    position: relative;
    left: 0;
    transform: none;
    flex-direction: row;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }
  
  .timeline-date {
    margin-top: 0;
  }
  
  .timeline-content {
    width: 100%;
    margin: 0;
    padding: 0 !important;
  }
  
  .educacion-detalles {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-cta {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .educacion-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .educacion-detalles {
    grid-template-columns: 1fr;
  }
  
  .habilidades-grid {
    grid-template-columns: 1fr;
  }
  
  .certificaciones-grid {
    grid-template-columns: 1fr;
  }
  
  .educacion-cta {
    padding: 2rem 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .educacion-card {
    padding: 1.5rem;
  }
  
  .materias-grid {
    flex-direction: column;
  }
  
  .timeline-marker {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>