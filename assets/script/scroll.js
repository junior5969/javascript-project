
export function scrollAnimations(selector = ".fade-in", animationClass = "visible") {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
      } else {
        entry.target.classList.remove(animationClass);
      }
    });
  }, {
    threshold: 0.3,
  });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}
