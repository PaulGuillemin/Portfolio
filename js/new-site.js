(() => {
  const header = document.querySelector('#site-header');
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  if (!menuToggle || !navMenu) return;
  const closeMenu = () => { navMenu.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); };
  menuToggle.addEventListener('click', () => { const isOpen = navMenu.classList.toggle('is-open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); });
  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => { if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(); });
})();
