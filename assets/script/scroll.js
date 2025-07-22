
export function scrollAnimations(selector = ".fade-in", animationClass = "visible") {
  const observer = new IntersectionObserver((entries, observerRef) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observerRef.unobserve(entry.target); // disattiva dopo la prima animazione
      }
    });
  }, {
    threshold: 0.1, // quando il 10% dell'elemento è visibile
  });

  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}