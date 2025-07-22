const input = document.getElementById("category");
const section = document.getElementById("input-section");

const placeholders = [
  "fantasy",
  "horror",
  "science",
  "adventure",
  "autobiography",
];
let index = 0;
let intervalId = null;

export function handleScroll() {
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100 && !intervalId) {
    intervalId = setInterval(() => {
      input.placeholder = placeholders[index];
      index = (index + 1) % placeholders.length;
    }, 1500);
  } else if (sectionTop >= windowHeight - 100) {
    clearInterval(intervalId);
    intervalId = null;
    index = 0;
    input.placeholder = "";
  }
}



const sectionImg = document.querySelector('#message');
const notificationImage = document.querySelector('.notification-image');
const baseImage = document.querySelector('.base-image');

let imgIntervalId = null;
let isVisible = false;

export function imgMessageScroll() {
  const sectionImgTop = sectionImg.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionImgTop < windowHeight - 100 && !imgIntervalId) {
    imgIntervalId = setInterval(() => {
      if (isVisible) {
        notificationImage.style.opacity = "0";
        baseImage.style.opacity = "1";
      } else {
        notificationImage.style.opacity = "1";
        baseImage.style.opacity = "0";
      }
      isVisible = !isVisible;
    }, 2000);
  } else if (sectionImgTop >= windowHeight - 100) {
    clearInterval(imgIntervalId);
    imgIntervalId = null;
    isVisible = false;
    notificationImage.style.opacity = "0";
    baseImage.style.opacity = "1";
  }
}
