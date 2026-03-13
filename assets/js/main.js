(function(){
  const btn = document.querySelector('[data-hamburger]');
  const menu = document.querySelector('[data-mobile-menu]');
  if(!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const expanded = menu.classList.contains('open');
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
    });
  });
})();
