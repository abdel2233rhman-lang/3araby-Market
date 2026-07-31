/* ==========================================================================
   LUXE — animation.js
   Scroll reveal (IntersectionObserver), number counters, card tilt,
   gallery lightbox, reviews auto-slider, and countdown timer.
   ========================================================================== */

(function () {
  'use strict';

  const LUXE = window.LUXE;

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll('.reveal, .stagger');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('reveal--visible', 'stagger--visible'));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible', 'stagger--visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => obs.observe(el));
  }

  /* ---------- Number counter animation ---------- */
  function animateCounter(el) {
    const target = Number(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      /* ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(eased * target);
      el.textContent = val.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    const nums = document.querySelectorAll('.stat__num');
    if (!('IntersectionObserver' in window)) {
      nums.forEach(n => { n.textContent = n.dataset.target.toLocaleString(); });
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    nums.forEach(n => obs.observe(n));
  }

  /* ---------- Card tilt effect ---------- */
  function initTilt() {
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotX = ((y - cy) / cy) * -6;
        const rotY = ((x - cx) / cx) * 6;
        card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* Re-bind tilt after products re-render */
  // LUXE.initTilt = initTilt;
  // const origRender = LUXE.renderProducts;
  // LUXE.renderProducts = function (list) {
  //   origRender.call(LUXE, list);
  //   initTilt();
  // };

  /* ---------- Gallery lightbox ---------- */
  function initGallery() {
    const grid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbClose = document.getElementById('lightboxClose');
    if (!grid || !lightbox) return;

    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery__item');
      if (!item) return;
      const img = item.querySelector('img');
      if (!img) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    function closeLightbox() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });
  }

  /* ---------- Reviews auto-slider ---------- */
  function initReviewsSlider() {
    const slider = document.getElementById('reviewsSlider');
    const dotsWrap = document.getElementById('reviewsDots');
    if (!slider || !dotsWrap) return;
    let current = 0;
    const slides = () => slider.querySelectorAll('.review-slide');
    const dots = () => dotsWrap.querySelectorAll('.reviews__dot');

    function go(n) {
      slides().forEach((s, i) => s.classList.toggle('active', i === n));
      dots().forEach((d, i) => d.classList.toggle('active', i === n));
      current = n;
    }

    dotsWrap.addEventListener('click', (e) => {
      const dot = e.target.closest('.reviews__dot');
      if (!dot) return;
      go(Number(dot.dataset.index));
    });

    /* Auto-advance every 5s */
    setInterval(() => {
      const next = (current + 1) % slides().length;
      go(next);
    }, 5000);
  }

  /* ---------- Countdown timer ---------- */
  function initCountdown() {
    const daysEl = document.getElementById('cdDays');
    const hoursEl = document.getElementById('cdHours');
    const minsEl = document.getElementById('cdMins');
    const secsEl = document.getElementById('cdSecs');
    if (!daysEl) return;

    /* Target: 3 days from first load, persisted in localStorage */
    let target = Number(localStorage.getItem('luxe_countdown'));
    if (!target || target < Date.now()) {
      target = Date.now() + 3 * 24 * 60 * 60 * 1000;
      localStorage.setItem('luxe_countdown', target);
    }

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) {
        /* Reset for another 3 days */
        target = Date.now() + 3 * 24 * 60 * 60 * 1000;
        localStorage.setItem('luxe_countdown', target);
      }
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
      const m = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
      const s = Math.max(0, Math.floor((diff / 1000) % 60));
      daysEl.textContent = pad(d);
      hoursEl.textContent = pad(h);
      minsEl.textContent = pad(m);
      secsEl.textContent = pad(s);
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Scroll progress bar ---------- */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress__bar');
    if (!bar) return;
    function update() {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      bar.style.width = (scrolled * 100) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ---------- Light parallax on hero background ---------- */
  function initParallax() {
    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `scale(1.1) translateY(${y * 0.4}px)`;
      }
    }, { passive: true });
  }

  /* ---------- Image zoom on scroll (subtle scale based on viewport) ---------- */
  function initZoomOnScroll() {
    const imgs = document.querySelectorAll('.zoom-on-scroll img');
    if (!imgs.length || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.transform = 'scale(1)';
          obs.unobserve(img);
        }
      });
    }, { threshold: 0.2 });
    imgs.forEach(img => { img.style.transform = 'scale(1.08)'; obs.observe(img); });
  }

  /* ---------- Init all ---------- */
  function init() {
    initReveal();
    initCounters();
    initTilt();
    initGallery();
    initReviewsSlider();
    initCountdown();
    initScrollProgress();
    initParallax();
    initZoomOnScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
