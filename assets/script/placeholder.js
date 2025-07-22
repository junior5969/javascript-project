
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