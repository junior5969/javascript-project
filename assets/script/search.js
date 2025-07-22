
import { showSection, showElement, hiddenElement, displayLoader } from "./style";
import { showLoader, hiddenLoader } from "./loader";

export function setupSearch() {
  const sectionBooks = document.querySelector("#show-books");
  const button = document.querySelector(".search-button");

  button.addEventListener("click", () => {
    search();
  });

  async function search() {
      showLoader();
    const input = document.querySelector("#category");
    const category = input.value.trim().toLowerCase();

    if (!category) {
      alert("Inserisci una categoria prima di cercare.");
      return;
    }

    const { default: axios } = await import("axios");
    const { default: _ } = await import("lodash");

    const url = `https://openlibrary.org/subjects/${category}.json`;

    try {
      const response = await axios.get(url);
      const json = response.data;

      if (!_.get(json, "works.length", 0)) {
        alert("Nessun libro trovato per questa categoria.");
        hiddenElement(sectionBooks);
        return;
      }

      showSection(sectionBooks);
      sectionBooks.innerHTML = ""; // pulisci i risultati precedenti

      json.works.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const titleElement = document.createElement("p");
        titleElement.classList.add("book-title");
        titleElement.textContent = book.title;

        const authorDiv = document.createElement("div");
        authorDiv.classList.add("book-authors");

        if (_.get(book, "authors.length", 0)) {
          book.authors.forEach((author) => {
            const authorElement = document.createElement("p");
            authorElement.textContent = `Autore: ${author.name}`;
            authorElement.classList.add("author-name");
            authorDiv.appendChild(authorElement);
          });
        } else {
          const authorElement = document.createElement("p");
          authorElement.textContent = "Autore non disponibile";
          authorDiv.appendChild(authorElement);
        }

        const descriptionButton = document.createElement("button");
        descriptionButton.classList.add("description-btn");
        descriptionButton.textContent = "Descrizione";

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("book-description");

        const descriptionElement = document.createElement("p");
        descriptionDiv.appendChild(descriptionElement);

        descriptionButton.addEventListener("click", async () => {
         if (descriptionDiv.style.display === "block") {
            hiddenElement(descriptionDiv);
            return;
          }

          showLoader();

          try {
            const secondUrl = `https://openlibrary.org${book.key}.json`;
            const secondResponse = await axios.get(secondUrl);
            const secondJson = secondResponse.data;

            let descriptionText = "Descrizione non disponibile";

            if (secondJson.description) {
              if (typeof secondJson.description === "string") {
                descriptionText = secondJson.description;
              } else if (secondJson.description.value) {
                descriptionText = secondJson.description.value;
              }
            }

            descriptionElement.textContent = `Descrizione: ${descriptionText}`;
            showElement(descriptionDiv);
          } catch (error) {
            console.error("Errore nel recupero della descrizione:", error);
            descriptionElement.textContent =
              "Errore durante il recupero della descrizione.";
            showElement(descriptionDiv);
          }finally {
    hiddenLoader(); 
  }
        });

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorDiv);
        bookCard.appendChild(descriptionButton);
        bookCard.appendChild(descriptionDiv);
        sectionBooks.appendChild(bookCard);
      });
    } catch (error) {
      console.error("Errore durante il fetch dei libri:", error);
      alert("Si è verificato un errore nel recupero dei dati.");
         hiddenElement(sectionBooks);
  } finally {
    hiddenLoader();
  }
    }
  }

