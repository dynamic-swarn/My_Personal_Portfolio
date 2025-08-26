
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Optional: close menu when clicking a link (mobile)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  