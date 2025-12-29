const testimonials = Array.from(document.querySelectorAll('.testimonial'));
const buttons = document.querySelectorAll('.slider-btn');
let activeIndex = 0;
let autoplayId;

function showTestimonial(index) {
  testimonials.forEach((item, idx) => {
    item.classList.toggle('active', idx === index);
  });
  activeIndex = index;
}

function next(step = 1) {
  if (!testimonials.length) return;
  const newIndex = (activeIndex + step + testimonials.length) % testimonials.length;
  showTestimonial(newIndex);
}

function startAutoplay() {
  if (!testimonials.length) return;
  stopAutoplay();
  autoplayId = setInterval(() => next(1), 5000);
}

function stopAutoplay() {
  if (autoplayId) clearInterval(autoplayId);
}

if (testimonials.length) {
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dir = btn.dataset.direction === 'next' ? 1 : -1;
      next(dir);
      startAutoplay();
    });
  });

  const slider = document.querySelector('.slider');
  slider?.addEventListener('mouseenter', stopAutoplay);
  slider?.addEventListener('mouseleave', startAutoplay);

  showTestimonial(0);
  startAutoplay();
}
