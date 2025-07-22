import "../css/style.css";
import { setupMenuToggle } from "./navbar.js";
import { setupSearch } from "./search.js";
import { hiddenLoader } from "./loader.js";
import { zoomHover, zoomCard } from "./style.js";
import {handleScroll} from "./placeholder.js";

document.addEventListener("DOMContentLoaded", () => {

   window.addEventListener("scroll", handleScroll);
   
  const buttons = document.querySelectorAll("button");
  const circleCards = document.querySelectorAll("i.circle-card");

  hiddenLoader();
  setupMenuToggle();
  setupSearch();

  zoomCard(circleCards);
  zoomHover(buttons);
});


