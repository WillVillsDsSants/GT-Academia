(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) document.body.classList.add('reduced');

  /* ---- fotos: se alguma falhar, remove e a cena em gradiente assume ---- */
  document.querySelectorAll('img.ph').forEach(function (img) {
    img.addEventListener('error', function () { img.remove(); });
  });

  /* ---- véu de abertura ---- */
  var veil = document.getElementById('veil');
  window.addEventListener('load', function () {
    setTimeout(function () { veil.classList.add('done'); }, reduced ? 0 : 1300);
  });
  setTimeout(function () { veil.classList.add('done'); }, 2600); /* segurança */

  /* ---- nav ganha fundo após o scroll ---- */
  var nav = document.getElementById('nav');
  function onScrollNav() { nav.classList.toggle('scrolled', window.scrollY > 100); }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---- reveals ao entrar em viewport ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* ---- parallax sutil nas fotos marcadas com data-plx ---- */
  var plxImgs = Array.prototype.slice.call(document.querySelectorAll('.ph[data-plx]'));
  var plxRaf = null;
  function plxTick() {
    plxRaf = null;
    var vh = window.innerHeight;
    plxImgs.forEach(function (img) {
      var rect = img.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      var center = rect.top + rect.height / 2 - vh / 2;
      var ty = center * -0.06;
      img.style.transform = 'translateY(' + ty.toFixed(1) + 'px) scale(1.14)';
    });
  }
  function onPlx() { if (!plxRaf && !reduced) plxRaf = requestAnimationFrame(plxTick); }
  if (plxImgs.length && !reduced) {
    window.addEventListener('scroll', onPlx, { passive: true });
    window.addEventListener('resize', onPlx);
    onPlx();
  }

  /* ---- experiência: linha da jornada se preenche com o scroll ---- */
  var journey = document.getElementById('journey');
  var jProgress = document.getElementById('j-progress');
  function onJourney() {
    if (!journey || !jProgress) return;
    var rect = journey.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height - vh * 0.4;
    var passed = (vh * 0.7) - rect.top;
    var p = Math.min(Math.max(passed / total, 0), 1);
    jProgress.style.height = (p * 100).toFixed(2) + '%';
  }
  if (journey && !reduced) {
    window.addEventListener('scroll', onJourney, { passive: true });
    window.addEventListener('resize', onJourney);
    onJourney();
  } else if (journey) {
    jProgress.style.height = '100%';
  }

  /* ---- práticas: carrossel com setas prev/next ---- */
  var pTrack = document.getElementById('p-track');
  var pPrev = document.getElementById('p-prev');
  var pNext = document.getElementById('p-next');
  if (pTrack) {
    function cardStep() {
      var card = pTrack.querySelector('.p-card');
      return card ? card.getBoundingClientRect().width + 10 : 320;
    }
    pPrev.addEventListener('click', function () {
      pTrack.scrollBy({ left: -cardStep(), behavior: reduced ? 'auto' : 'smooth' });
    });
    pNext.addEventListener('click', function () {
      pTrack.scrollBy({ left: cardStep(), behavior: reduced ? 'auto' : 'smooth' });
    });
    function updateArrows() {
      var overflow = pTrack.scrollWidth - pTrack.clientWidth;
      var none = overflow <= 4;
      pPrev.hidden = none || pTrack.scrollLeft <= 4;
      pNext.hidden = none || pTrack.scrollLeft >= overflow - 4;
    }
    pTrack.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }

  /* ---- galeria: scroll vertical → deslocamento horizontal ---- */
  var gwrap = document.getElementById('galeria-wrap');
  var strip = document.getElementById('galeria-strip');
  function sizeGallery() {
    if (document.body.classList.contains('reduced')) return;
    var overflow = strip.scrollWidth - window.innerWidth;
    gwrap.style.height = (window.innerHeight + Math.max(overflow, 0)) + 'px';
  }
  var gx = 0, gtarget = 0, raf = null;
  function galleryTick() {
    gx += (gtarget - gx) * 0.09;
    strip.style.transform = 'translateX(' + (-gx) + 'px)';
    if (Math.abs(gtarget - gx) > 0.5) { raf = requestAnimationFrame(galleryTick); } else { raf = null; }
  }
  function onScrollGallery() {
    if (document.body.classList.contains('reduced')) return;
    var rect = gwrap.getBoundingClientRect();
    var overflow = strip.scrollWidth - window.innerWidth;
    if (overflow <= 0) return;
    var travel = gwrap.offsetHeight - window.innerHeight;
    var progress = Math.min(Math.max(-rect.top / travel, 0), 1);
    gtarget = progress * overflow;
    if (!raf) raf = requestAnimationFrame(galleryTick);
  }
  window.addEventListener('scroll', onScrollGallery, { passive: true });
  window.addEventListener('resize', sizeGallery);
  sizeGallery();

  /* ---- depoimentos: rotação com pausa no hover ---- */
  var slides = document.querySelectorAll('#t-quote .t-slide');
  var ports = document.querySelectorAll('#t-portrait .scene');
  var dots = document.querySelectorAll('#t-dots button');
  var tIdx = 0, tTimer = null;
  function showT(i) {
    tIdx = i;
    slides.forEach(function (s, j) { s.classList.toggle('show', j === i); });
    ports.forEach(function (p, j) { p.classList.toggle('show', j === i); });
    dots.forEach(function (d, j) { d.classList.toggle('active', j === i); });
  }
  function startT() {
    if (reduced) return;
    stopT();
    tTimer = setInterval(function () { showT((tIdx + 1) % slides.length); }, 9000);
  }
  function stopT() { if (tTimer) clearInterval(tTimer); tTimer = null; }
  dots.forEach(function (d, i) {
    d.addEventListener('click', function () { showT(i); startT(); });
  });
  var tSection = document.getElementById('depoimentos');
  tSection.addEventListener('mouseenter', stopT);
  tSection.addEventListener('mouseleave', startT);
  startT();

  /* ---- formulário de visita ---- */
  var openBtn = document.getElementById('open-form');
  var formWrap = document.getElementById('form-wrap');
  var confirmMsg = document.getElementById('form-confirm');
  openBtn.addEventListener('click', function () {
    formWrap.classList.add('open');
    openBtn.style.display = 'none';
    setTimeout(function () { document.getElementById('f-nome').focus(); }, 400);
  });
  document.querySelectorAll('.chip').forEach(function (c) {
    c.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (x) { x.classList.remove('sel'); });
      c.classList.add('sel');
    });
  });
  formWrap.addEventListener('submit', function (ev) {
    ev.preventDefault();
    formWrap.classList.remove('open');
    setTimeout(function () { confirmMsg.classList.add('show'); }, 500);
  });
})();
