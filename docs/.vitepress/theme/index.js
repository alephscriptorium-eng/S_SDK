import DefaultTheme from 'vitepress/theme';
import './custom.css';

/**
 * WP-I33: /ensayo/ es HTML estático en public/ (espejo TEST-SWARM/docs).
 * El router SPA de VitePress no lo conoce → click interno = 404.
 * Forzar navegación completa para esos href.
 */
function hardNavEnsayo() {
  if (typeof window === 'undefined') return;
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null;
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      const path = href.split(/[?#]/)[0];
      if (path === '/ensayo' || path === '/ensayo/' || path.startsWith('/ensayo/')) {
        e.preventDefault();
        window.location.assign(href);
      }
    },
    true
  );
}

export default {
  extends: DefaultTheme,
  enhanceApp() {
    hardNavEnsayo();
  }
};
