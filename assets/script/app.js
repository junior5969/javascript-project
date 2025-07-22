import "../css/style.css";
import { setupMenuToggle } from "./navbar.js";
import { setupSearch } from "./search.js";
import { hiddenLoader } from "./loader.js";
import { zoomHover, zoomCard } from "./style.js";
import { handleScroll, imgMessageScroll } from "./placeholder.js";
import { scrollAnimations } from "./scroll.js";


document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", imgMessageScroll);

  const buttons = document.querySelectorAll("button");
  const circleCards = document.querySelectorAll("i.circle-card");

  hiddenLoader();
  setupMenuToggle();
  setupSearch();

  scrollAnimations();

  zoomCard(circleCards);
  zoomHover(buttons);
});
