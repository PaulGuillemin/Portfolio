(() => {
  const header = document.querySelector('#site-header');
  const menuToggle = document.querySelector('#menu-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  if (menuToggle && navMenu) {
    const closeMenu = () => { navMenu.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); };
    menuToggle.addEventListener('click', () => { const isOpen = navMenu.classList.toggle('is-open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); });
    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', event => { if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(); });
  }

  const projectSection = document.querySelector('[data-projects]');
  if (!projectSection) return;
  const filterButtons = [...projectSection.querySelectorAll('[data-filter]')];
  const projectCards = [...projectSection.querySelectorAll('.project-card[data-type]')];
  const filterStatus = projectSection.querySelector('.project-filter-status');
  const isFrench = document.documentElement.lang === 'fr';
  const updateProjectFilter = filter => {
    let visibleCount = 0;
    projectCards.forEach(card => {
      const visible = filter === 'all' || (filter === 'featured' ? card.dataset.featured === 'true' : card.dataset.type === filter);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filterButtons.forEach(button => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (filterStatus) {
      const noun = isFrench ? 'projet' : 'project';
      const verb = isFrench ? 'affiché' : 'displayed';
      filterStatus.textContent = `${visibleCount} ${noun}${visibleCount > 1 ? 's' : ''} ${verb}${visibleCount > 1 && isFrench ? 's' : ''}`;
    }
  };
  filterButtons.forEach(button => button.addEventListener('click', () => updateProjectFilter(button.dataset.filter)));
  updateProjectFilter('featured');
})();
