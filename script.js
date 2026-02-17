document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  let lang = 'ar';
  const body = document.body;
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const langBtns = [document.getElementById('langToggle'), document.getElementById('langToggleMobile')];
  const themeBtns = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')];

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
  }, { passive: true });

  // Mobile menu
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });

  // Language toggle
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      lang = lang === 'ar' ? 'en' : 'ar';
      html.lang = lang;
      html.dir = lang === 'ar' ? 'rtl' : 'ltr';
      langBtns.forEach(b => b.textContent = lang === 'ar' ? 'English' : 'عربي');
      document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
      });
    });
  });

  // Theme toggle
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      body.classList.toggle('light');
      themeBtns.forEach(b => b.textContent = body.classList.contains('light') ? '🌙' : '☀️');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
    });
  });

  // Active nav state
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a, .mobile-menu a');
  const observerOptions = { root: null, threshold: 0.5, rootMargin: '0px' };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, observerOptions);
  sections.forEach(section => observer.observe(section));

  // Section reveal animations
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section').forEach(section => revealObserver.observe(section));

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  console.log('%cPortfolio refactored by senior UI/UX architect — Professional, minimal, and ready for production', 'color:#14b8a6; font-size:14px; font-weight:600;');
});