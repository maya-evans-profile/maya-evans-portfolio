// Небольшое появление блоков при прокрутке
const cards = document.querySelectorAll('.work-card, .project-card, .connect-box, .contact-note');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  cards.forEach(card => observer.observe(card));
} else {
  cards.forEach(card => card.classList.add('visible'));
}

// Показываем аватар под заголовком About Me.
const aboutKicker = document.querySelector('#about .section-kicker');
if (aboutKicker) {
  const avatar = document.createElement('img');
  avatar.className = 'about-avatar';
  avatar.src = 'assets/maya-avatar.jpg';
  avatar.alt = 'Аватар Maya_Evans';
  aboutKicker.insertAdjacentElement('afterend', avatar);
}
