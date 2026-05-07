export function useAnalytics() {
  const enabled = import.meta.env.VITE_ENABLE_ANALYTICS === 'true';
  if (!enabled) return;

  const provider = import.meta.env.VITE_ANALYTICS_PROVIDER || 'plausible';
  const domain = import.meta.env.VITE_PORTFOLIO_URL
    ? new URL(import.meta.env.VITE_PORTFOLIO_URL).hostname
    : 'ezequielquiroz-portafolio.netlify.app';

  if (provider === 'plausible') {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = domain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }

  if (provider === 'ga4') {
    const gaId = import.meta.env.VITE_GA4_ID;
    if (!gaId) {
      console.warn('GA4 enabled but VITE_GA4_ID not set');
      return;
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId);
  }
}
