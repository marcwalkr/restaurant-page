export function createCard() {
  const section = document.createElement("section");
  section.classList.add("card");
  return section;
}

export function createTitle(size, text) {
  let heading;
  if (size === "large") {
    heading = document.createElement("h1");
    heading.classList.add("card__title--large");
  } else if (size === "medium") {
    heading = document.createElement("h2");
    heading.classList.add("card__title--medium");
  } else {
    heading = document.createElement("h3");
    heading.classList.add("card__title--small");
  }

  heading.classList.add("card__title");
  heading.textContent = text;

  return heading;
}

export function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("card__paragraph");
  paragraph.textContent = text;
  return paragraph;
}

export function createImage(path, altText) {
  const img = document.createElement("img");
  img.src = path;
  img.alt = altText;
  return img;
}