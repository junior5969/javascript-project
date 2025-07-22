import "../css/style.css";
import { setupMenuToggle } from "./navbar.js";
import { setupSearch } from "./search.js";
import { hiddenLoader } from "./loader.js";
import { addHoverEffect} from "./style.js";
import { handleScroll, imgMessageScroll } from "./placeholder.js";
import { scrollAnimations } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {

addHoverEffect(document.querySelectorAll("button"));
addHoverEffect(document.querySelectorAll("i.circle-card"), 1.1);
addHoverEffect(document.querySelectorAll(".nav-link"), 1.05);

  hiddenLoader();
  setupMenuToggle();
  setupSearch();
  scrollAnimations();

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();       // Gestione placeholder dinamico
        imgMessageScroll();   // Gestione immagini notifica
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll);

});
