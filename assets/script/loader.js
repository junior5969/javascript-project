
import { displayLoader } from './style.js';

export function showLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.remove("hidden-loader");
  displayLoader(loader);
}

export function hiddenLoader() {
  const loader = document.querySelector("#loader-overlay");
  loader.classList.add("hidden-loader");
  loader.removeAttribute("style");
}