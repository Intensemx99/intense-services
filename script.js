(function () {
  var NUMBER = '5537998244086';

  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = 'https://wa.me/' + NUMBER + '?text=' + encodeURIComponent(a.getAttribute('data-wa'));
    a.target = '_blank';
    a.rel = 'noopener';
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  var fab = document.querySelector('.fab');
  var hero = document.querySelector('.hero');
  if (fab && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      fab.classList.toggle('on', !e[0].isIntersecting);
    }, { threshold: 0.1 }).observe(hero);
  } else if (fab) {
    fab.classList.add('on');
  }

  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.cards li, .step-list li, .faq details').forEach(function (el, i) {
      el.style.setProperty('--d', (i % 6) * 60 + 'ms');
      io.observe(el);
    });
  }
})();
