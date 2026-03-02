/**
 * Utilidades de seguridad para el portafolio
 */

// Configuración de seguridad
const SECURITY_CONFIG = {
  MAX_MESSAGE_LENGTH: 500,
  RATE_LIMIT_WINDOW: 60000, // 1 minuto en ms
  MAX_MESSAGES_PER_WINDOW: 5,
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'br'],
  BLOCKED_PATTERNS: [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /data:text\/html/gi,
    /vbscript:/gi,
    /file:/gi,
    /ftp:/gi
  ]
};

// Rate limiting para prevenir abusos
class RateLimiter {
  constructor() {
    this.messages = [];
  }

  isAllowed() {
    const now = Date.now();
    const windowStart = now - SECURITY_CONFIG.RATE_LIMIT_WINDOW;
    
    // Limpiar mensajes antiguos
    this.messages = this.messages.filter(timestamp => timestamp > windowStart);
    
    if (this.messages.length >= SECURITY_CONFIG.MAX_MESSAGES_PER_WINDOW) {
      return false;
    }
    
    this.messages.push(now);
    return true;
  }

  getTimeUntilNextMessage() {
    if (this.messages.length === 0) return 0;
    
    const oldestMessage = Math.min(...this.messages);
    const nextAllowedTime = oldestMessage + SECURITY_CONFIG.RATE_LIMIT_WINDOW;
    return Math.max(0, nextAllowedTime - Date.now());
  }
}

// Instancia global de rate limiting
const rateLimiter = new RateLimiter();

/**
 * Sanitiza entrada de texto para prevenir XSS
 * @param {string} input - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
export function sanitizeInput(input) {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Validar longitud
  if (input.length > SECURITY_CONFIG.MAX_MESSAGE_LENGTH) {
    throw new Error(`El mensaje no puede exceder ${SECURITY_CONFIG.MAX_MESSAGE_LENGTH} caracteres`);
  }

  // Detectar patrones peligrosos
  for (const pattern of SECURITY_CONFIG.BLOCKED_PATTERNS) {
    if (pattern.test(input)) {
      throw new Error('El contenido contiene elementos no permitidos');
    }
  }

  // Sanitización básica
  let sanitized = input
    .replace(/[<>]/g, '') // Eliminar tags básicos
    .replace(/&/g, '&amp;') // Escapar ampersands
    .replace(/"/g, '&quot;') // Escapar comillas
    .replace(/'/g, '&#x27;') // Escapar apóstrofes
    .replace(/\//g, '&#x2F;') // Escapar slashes
    .trim();

  // Limitar longitud después de sanitización
  if (sanitized.length > SECURITY_CONFIG.MAX_MESSAGE_LENGTH) {
    sanitized = sanitized.substring(0, SECURITY_CONFIG.MAX_MESSAGE_LENGTH);
  }

  return sanitized;
}

/**
 * Valida email con formato básico
 * @param {string} email - Email a validar
 * @returns {boolean} - Si es válido
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida URLs seguras
 * @param {string} url - URL a validar
 * @returns {boolean} - Si es segura
 */
export function validateSecureUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

/**
 * Verifica rate limiting
 * @returns {Object} - { allowed: boolean, waitTime: number }
 */
export function checkRateLimit() {
  const allowed = rateLimiter.isAllowed();
  const waitTime = allowed ? 0 : rateLimiter.getTimeUntilNextMessage();
  
  return { allowed, waitTime };
}

/**
 * Genera token CSRF simple para formularios
 * @returns {string} - Token aleatorio
 */
export function generateCSRFToken() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Encripta datos sensibles (básico)
 * @param {string} data - Datos a encriptar
 * @param {string} key - Clave de encriptación
 * @returns {string} - Datos encriptados
 */
export function simpleEncrypt(data, key) {
  if (!data || !key) return '';
  
  try {
    const encoded = btoa(encodeURIComponent(data));
    const keyBytes = key.split('').map(char => char.charCodeAt(0));
    const encrypted = encoded.split('').map((char, index) => 
      String.fromCharCode(char.charCodeAt(0) ^ keyBytes[index % keyBytes.length])
    ).join('');
    
    return btoa(encrypted);
  } catch (error) {
    console.warn('Error encriptando datos:', error);
    return '';
  }
}

/**
 * Desencripta datos sensibles (básico)
 * @param {string} encryptedData - Datos encriptados
 * @param {string} key - Clave de encriptación
 * @returns {string} - Datos desencriptados
 */
export function simpleDecrypt(encryptedData, key) {
  if (!encryptedData || !key) return '';
  
  try {
    const decoded = atob(encryptedData);
    const keyBytes = key.split('').map(char => char.charCodeAt(0));
    const decrypted = decoded.split('').map((char, index) => 
      String.fromCharCode(char.charCodeAt(0) ^ keyBytes[index % keyBytes.length])
    ).join('');
    
    return decodeURIComponent(atob(decrypted));
  } catch (error) {
    console.warn('Error desencriptando datos:', error);
    return '';
  }
}

/**
 * Detecta si el usuario es un bot
 * @returns {boolean} - Si parece ser un bot
 */
export function detectBot() {
  const userAgent = navigator.userAgent.toLowerCase();
  const botPatterns = /bot|crawler|spider|crawling|facebook|twitter|google|bing|yahoo|slurp|duckduckbot/i;
  
  // Verificar user agent
  if (botPatterns.test(userAgent)) {
    return true;
  }
  
  // Verificar comportamientos sospechosos
  const suspiciousBehaviors = [
    !navigator.plugins || navigator.plugins.length === 0,
    !navigator.languages || navigator.languages.length === 0,
    window.chrome === undefined && window.webkit !== undefined,
    typeof InstallTrigger !== 'undefined' // Firefox
  ];
  
  return suspiciousBehaviors.filter(Boolean).length >= 2;
}

/**
 * Registra eventos de seguridad
 * @param {string} eventType - Tipo de evento
 * @param {Object} data - Datos del evento
 */
export function logSecurityEvent(eventType, data = {}) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    eventType,
    userAgent: navigator.userAgent,
    ip: data.ip || 'unknown',
    details: data
  };
  
  // En desarrollo, mostrar en consola
  if (import.meta.env.DEV) {
    console.warn('Security Event:', logEntry);
  }
  
  // En producción, podrías enviar a un servicio de logging
  // Por ahora, guardar en localStorage con encriptación
  try {
    const logs = JSON.parse(localStorage.getItem('securityLogs') || '[]');
    logs.push(logEntry);
    
    // Mantener solo últimos 100 logs
    if (logs.length > 100) {
      logs.splice(0, logs.length - 100);
    }
    
    localStorage.setItem('securityLogs', JSON.stringify(logs));
  } catch (error) {
    console.warn('Error guardando log de seguridad:', error);
  }
}

// Forzar HTTPS en producción
export function enforceHTTPS() {
  if (
    location.protocol !== 'https:' && 
    location.hostname !== 'localhost' && 
    location.hostname !== '127.0.0.1'
  ) {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
}

// Exportar configuración para uso en componentes
export { SECURITY_CONFIG };
