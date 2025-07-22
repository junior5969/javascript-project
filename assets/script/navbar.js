export function setupMenuToggle() {
  const navbar = document.querySelector(".nav-list");
  const toggleBtn = document.querySelector(".menu-toggle");
  const closeBtn = document.querySelector(".menu-close");

  function toggleMenu(show) {
    navbar.classList.toggle("hidden", !show);
    closeBtn.classList.toggle("hidden", !show);
    toggleBtn.classList.toggle("hidden", show);
  }

  toggleBtn.addEventListener("click", () => toggleMenu(true));
  closeBtn.addEventListener("click", () => toggleMenu(false));
}
