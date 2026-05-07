<script setup>
import { useI18n } from '../utils/i18n.js';

const { locale, setLocale } = useI18n();

function toggleLang() {
  setLocale(locale.value === 'es' ? 'en' : 'es');
}
</script>

<template>
  <button 
    class="lang-toggle" 
    @click="toggleLang" 
    :title="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
    :aria-label="locale === 'es' ? 'Switch to English' : 'Cambiar a Español'"
  >
    <span class="lang-flag">{{ locale === 'es' ? '🇺🇸' : '🇪🇸' }}</span>
    <span class="lang-code">{{ locale === 'es' ? 'EN' : 'ES' }}</span>
  </button>
</template>

<style scoped>
.lang-toggle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #a5d8ff;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.lang-toggle:hover {
  background: rgba(77, 171, 247, 0.15);
  border-color: rgba(77, 171, 247, 0.3);
  transform: translateY(-2px);
}

.lang-flag {
  font-size: 1.1rem;
  line-height: 1;
}

.lang-code {
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

@media (max-width: 480px) {
  .lang-code {
    display: none;
  }
}
</style>
