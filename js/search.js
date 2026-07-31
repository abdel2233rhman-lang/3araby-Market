/* ==========================================================================
   LUXE — search.js
   Product search, category filter, price filter, and sorting.
   Reads from the toolbar inputs and re-renders the product grid.
   ========================================================================== */

(function () {
  'use strict';

  const LUXE = window.LUXE;

  let currentSearch = '';
  let currentCategory = 'all';
  let currentPrice = 'all';
  let currentSort = 'default';

  /* ---------- Apply all filters + sort ---------- */
  function applyFilters() {
    let list = LUXE.products.slice();

    /* Search by name */
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q));
    }

    /* Category filter */
    if (currentCategory !== 'all') {
      list = list.filter(p => p.category === currentCategory);
    }

    /* Price filter */
    if (currentPrice !== 'all') {
      const [min, max] = currentPrice.split('-').map(Number);
      list = list.filter(p => p.price >= min && p.price <= max);
    }

    /* Sort */
    switch (currentSort) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
      case 'name':       list.sort((a, b) => a.name.localeCompare(b.name)); break;
    }

    /* Show/hide empty message */
    const empty = document.getElementById('productsEmpty');
    if (empty) empty.hidden = list.length > 0;

    LUXE.renderProducts(list);

    /* Re-trigger reveal animation on new cards */
    requestAnimationFrame(() => {
      document.querySelectorAll('#productsGrid .product-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s, transform 0.5s';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 60);
      });
    });
  }

  /* ---------- Init ---------- */
  function init() {
    const search = document.getElementById('searchInput');
    const catFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortSelect = document.getElementById('sortSelect');

    if (search) {
      let timer;
      search.addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          currentSearch = e.target.value.trim();
          applyFilters();
        }, 250);
      });
    }
    if (catFilter) catFilter.addEventListener('change', (e) => { currentCategory = e.target.value; applyFilters(); });
    if (priceFilter) priceFilter.addEventListener('change', (e) => { currentPrice = e.target.value; applyFilters(); });
    if (sortSelect) sortSelect.addEventListener('change', (e) => { currentSort = e.target.value; applyFilters(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
