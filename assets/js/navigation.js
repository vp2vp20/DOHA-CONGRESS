document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('nav-menu-open');
    });

    // Close menu when focus moves away (accessibility hygiene)
    document.addEventListener('focusin', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-menu-open');
      }
    });
  }
});
