import "../css/style.css"; 

export function showSection(section) {
  section.style.display = "flex";
  section.style.flexDirection = "column";
  section.style.alignItems = "center";
  section.style.justifyContent = "center";
  section.innerHTML = "";
}

export function showElement(element) {
  element.style.display = "block";
}

export function hiddenElement(element) {
  element.style.display = "none";
}

export function displayLoader(element) {
  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.textAlign = "center";
  element.style.gap = "2rem";
}

export function zoomHover (elements) {
elements.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
      event.target.style.transform = "scale(1.1)";
      event.target.style.transition = "transform 0.3s ease";
    });
  });


  elements.forEach((element) => {
    element.addEventListener("mouseleave", (event) => {
      event.target.style.transform = "scale(1)";
    });
  });
}  


export function zoomCard (elements) {
      elements.forEach((element) => {
    element.style.cursor = "pointer";

    element.addEventListener("mouseenter", (event) => {
      event.currentTarget.style.transform = "scale(1.1)";
      event.currentTarget.style.transition = "transform 0.3s ease";
    });

    element.addEventListener("mouseleave", (event) => {
      event.currentTarget.style.transform = "scale(1)";
    });
  });
}
