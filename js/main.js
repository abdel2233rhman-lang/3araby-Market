/* ===== العربي ماركت — Main Init ===== */
import { renderProducts, renderOffers } from './products.js';
import { initCartEvents } from './cart.js';
import {
  initLoader, initTyping, initHeroFloats, initCountUp, initCursor,
  initScroll, initMobileMenu, initParticles, initParallax, initMagnetic,
  initRipple, init3DTilt, initReveal, initFilters
} from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initTyping();
  initHeroFloats();
  initCountUp();
  initCursor();
  initScroll();
  initMobileMenu();
  initParticles();
  initParallax();
  initMagnetic();
  initRipple();
  init3DTilt();

  renderProducts();
  renderOffers();
  initFilters();

  initCartEvents();
  initReveal();
});
