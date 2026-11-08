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
