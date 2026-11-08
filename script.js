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

// Rebuild the About avatar area so an old or duplicated broken image cannot remain.
const aboutProfile = document.querySelector('.about-profile');
if (aboutProfile) {
  const kicker = aboutProfile.querySelector('.section-kicker');
  aboutProfile.querySelectorAll('img, .about-avatar').forEach(avatar => avatar.remove());
  const avatar = document.createElement('img');
  avatar.src = 'assets/avatar.png';
  avatar.alt = 'Maya_Evans avatar';
  avatar.className = 'about-avatar';
  if (kicker) kicker.insertAdjacentElement('afterend', avatar);
  else aboutProfile.appendChild(avatar);
}
