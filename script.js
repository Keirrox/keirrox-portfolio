const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

// PERSONALISE THESE TWO VALUES BEFORE PUBLISHING.
const CONTACT_EMAIL = 'YOUR_EMAIL@example.com';
const INSTAGRAM_HANDLE = 'YOUR_HANDLE';
const emailLink = document.getElementById('email-link');
const instagramLink = document.getElementById('instagram-link');
emailLink.href = `mailto:${CONTACT_EMAIL}`;
instagramLink.href = `https://instagram.com/${INSTAGRAM_HANDLE}`;