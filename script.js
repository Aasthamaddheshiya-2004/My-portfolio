// Mobile Menu Toggle
const menu = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form placeholder
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for your message! I’ll get back to you soon.');
});
