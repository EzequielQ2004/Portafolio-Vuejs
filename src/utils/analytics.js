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
}
