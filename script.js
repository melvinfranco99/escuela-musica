// Menú móvil
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => nav.classList.toggle('nav--open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('nav--open'))
);

// Sombra en la barra al hacer scroll
const onScroll = () => nav.classList.toggle('nav--scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Animación de aparición
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Formulario (demo, sin backend)
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  document.getElementById('formOk').hidden = false;
});

document.getElementById('year').textContent = new Date().getFullYear();
