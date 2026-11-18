/* Vídeo do cérebro na hero: pausa fora da tela/aba escondida; com "reduzir movimento" fica só a imagem */
(function () {
  var v = document.getElementById('cerebro-video');
  if (!v) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); return; }
  var hero = document.querySelector('.hero'), onScreen = true;
  function sync() {
    if (document.hidden || !onScreen) { v.pause(); } else { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  }
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { onScreen = e[0].isIntersecting; sync(); }).observe(hero);
  }
  document.addEventListener('visibilitychange', sync);
})();
