(function () {
  document.documentElement.classList.add('js');

  // Header: estilo al hacer scroll
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Menú móvil
  var toggle = document.querySelector('[data-menu-toggle]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('menu-open')) toggle.click();
    });
  }

  // Animación de aparición
  var revealAll = function (root) {
    var items = (root || document).querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 80 + 'ms';
      io.observe(el);
    });
  };
  revealAll();

  // En el editor de temas: mostrar todo al instante al recargar secciones
  document.addEventListener('shopify:section:load', function (e) {
    e.target.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  });

  // Página de producto: actualizar precio al cambiar variante
  var select = document.querySelector('[data-variant-select]');
  var price = document.querySelector('[data-price]');
  if (select && price) {
    select.addEventListener('change', function () {
      var opt = select.options[select.selectedIndex];
      if (opt && opt.dataset.price) price.textContent = opt.dataset.price;
      var url = new URL(window.location.href);
      url.searchParams.set('variant', select.value);
      window.history.replaceState({}, '', url.toString());
    });
  }
})();
