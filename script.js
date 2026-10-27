// Dynamic Year Injection
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Light / Dark Theme Toggle
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

// Interactive Contact Button
const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('Thank you for reaching out! Contact form coming soon.');
  });
}

// Search Navigation
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

if (searchForm && searchInput) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    const sections = Array.from(document.querySelectorAll('section'));
    const match = sections.find((section) =>
      section.textContent.toLowerCase().includes(query)
    );

    if (match) {
      match.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Settings Dropdown Menu
const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');

function closeSettings() {
  if (!settingsMenu || !settingsBtn) return;
  settingsMenu.classList.remove('open');
  settingsBtn.setAttribute('aria-expanded', 'false');
}

if (settingsBtn && settingsMenu) {
  settingsBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = settingsMenu.classList.toggle('open');
    settingsBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!settingsMenu.contains(event.target)) closeSettings();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeSettings();
  });
}

// Re-triggering Ultra-Smooth Scroll Observer
document.addEventListener('DOMContentLoaded', () => {
  const popElements = document.querySelectorAll('section, .card, .achievement');

  popElements.forEach((el) => el.classList.add('pop-up'));

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  };

  const popObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  popElements.forEach((el) => popObserver.observe(el));
});