const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* Replace these placeholders with your real details before sharing publicly. */
const CONTACT_EMAIL = 'YOUR_EMAIL@example.com';
const INSTAGRAM_HANDLE = 'YOUR_HANDLE';
const emailLink = document.getElementById('email-link');
const instagramLink = document.getElementById('instagram-link');

if (emailLink) {
  if (CONTACT_EMAIL !== 'YOUR_EMAIL@example.com') {
    emailLink.href = `mailto:${CONTACT_EMAIL}`;
  } else {
    emailLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Add your professional email in script.js before publishing.');
    });
  }
}
if (instagramLink) {
  if (INSTAGRAM_HANDLE !== 'YOUR_HANDLE') {
    instagramLink.href = `https://instagram.com/${INSTAGRAM_HANDLE}`;
  } else {
    instagramLink.addEventListener('click', (event) => {
      event.preventDefault();
      alert('Add your Instagram username in script.js before publishing.');
    });
  }
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
