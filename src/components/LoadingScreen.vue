<template>
  <div class="loading-screen" :class="{ 'fade-out': isFadeOut }">
    <div class="loading-container">
      <!-- Logo/Brand -->
      <div class="loading-brand">
        <div class="brand-logo">
          <span class="logo-symbol">&lt;/&gt;</span>
        </div>
        <span class="brand-name">Ezequiel Quiroz</span>
      </div>

      <!-- Loading Animation -->
      <div class="loading-animation">
        <div class="loading-dots">
          <div class="dot" v-for="i in 3" :key="i"></div>
        </div>
        <div class="loading-text">Cargando...</div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isFadeOut = ref(false);
const progress = ref(0);

onMounted(() => {
  // Simulate loading progress
  const interval = setInterval(() => {
    if (progress.value < 90) {
      progress.value += Math.random() * 15;
    } else {
      clearInterval(interval);
      // Complete loading after a short delay
      setTimeout(() => {
        isFadeOut.value = true;
        // Emit event to parent when animation completes
        setTimeout(() => {
          const event = new CustomEvent('loading-complete');
          window.dispatchEvent(event);
        }, 500);
      }, 500);
    }
  }, 200);
});
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.loading-screen.fade-out {
  opacity: 0;
  pointer-events: none;
}

.loading-container {
  text-align: center;
  max-width: 400px;
  padding: 2rem;
}

.loading-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.brand-logo {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  animation: pulse 2s infinite;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4f46e5, #a5d8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.loading-animation {
  margin-bottom: 2rem;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-radius: 50%;
  animation: dot-bounce 1.4s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

.dot:nth-child(3) {
  animation-delay: 0;
}

.loading-text {
  font-size: 1.2rem;
  color: #94a3b8;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.progress-container {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  border-radius: 2px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 1.5s infinite;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
  }
}

@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .loading-container {
    padding: 1rem;
  }
  
  .brand-logo {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .brand-name {
    font-size: 1.5rem;
  }
  
  .loading-text {
    font-size: 1rem;
  }
  
  .dot {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .loading-brand {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .brand-name {
    font-size: 1.3rem;
  }
}
</style>
