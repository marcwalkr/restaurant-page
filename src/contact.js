import { createCard, createTitle, appendTitleCard, createParagraph } from "./domUtils.js";

const appendAddressCard = (title, addressLine1, addressLine2, parent) => {
  const card = createCard();
  const titleElement = createTitle("medium", title);
  card.appendChild(titleElement);

  const addressContainer = document.createElement("div");
  const addressParagraph1 = createParagraph(addressLine1);
  const addressParagraph2 = createParagraph(addressLine2);
  addressContainer.appendChild(addressParagraph1);
  addressContainer.appendChild(addressParagraph2);

  card.appendChild(addressContainer);
  parent.appendChild(card);
}

const createLink = (url, text) => {
  const link = document.createElement("a");
  link.classList.add("card__link");
  link.href = url;
  link.textContent = text;
  return link;
}

const createInfoGrid = () => {
  const grid = document.createElement("div");
  grid.classList.add("card__info-grid");
  return grid;
}

const appendContactCard = (parent, title, phoneNumber, email, ...socialMedia) => {
  const card = createCard();
  const titleElement = createTitle("medium", title);
  card.appendChild(titleElement);

  const phoneContainer = document.createElement("div");
  const phoneTitle = createTitle("small", "Phone");
  const phoneNumberElement = createParagraph(phoneNumber);
  phoneContainer.appendChild(phoneTitle);
  phoneContainer.appendChild(phoneNumberElement);
  card.appendChild(phoneContainer);

  const emailContainer = document.createElement("div");
  const emailTitle = createTitle("small", "Email");
  const emailElement = createParagraph(email);
  emailContainer.appendChild(emailTitle);
  emailContainer.appendChild(emailElement);
  card.appendChild(emailContainer);

  const socialMediaContainer = document.createElement("div");
  const socialMediaTitle = createTitle("small", "Social Media");
  socialMediaContainer.appendChild(socialMediaTitle);

  const socialMediaGrid = createInfoGrid();

  socialMedia.forEach((obj) => {
    const platform = createParagraph(obj.platform);
    const link = createLink("#", obj.handle);
    socialMediaGrid.appendChild(platform);
    socialMediaGrid.appendChild(link);
  });

  socialMediaContainer.appendChild(socialMediaGrid);

  card.appendChild(socialMediaContainer);
  parent.appendChild(card);
}

const appendInfoGridCard = (parent, title, ...infoItems) => {
  const card = createCard();
  const titleElement = createTitle("medium", title);
  card.appendChild(titleElement);

  const infoGrid = createInfoGrid();

  infoItems.forEach((item) => {
    const paragraph = createParagraph(item);
    infoGrid.appendChild(paragraph);
  });

  card.appendChild(infoGrid);
  parent.appendChild(card);
}

export default function loadContact() {
  const content = document.querySelector("#content");

  appendTitleCard("large", "Let's Stay in Touch", content);
  appendAddressCard("Address", "123 Willow Street", "Brookhaven, OR 97210", content);
  appendContactCard(
    content, 
    "Contact Information", 
    "(555) 867-2042", 
    "hello@willowtable.com",
    { platform: "Instagram", handle: "@TheWillowTable" },
    { platform: "Facebook", handle: "The Willow Table" },
    { platform: "TikTok", handle: "@WillowTableEats" }
  );

  appendInfoGridCard(
    content,
    "Hours",
    "Mon–Thu",
    "11am – 9pm",
    "Fri–Sat",
    "11am – 10pm",
    "Sun",
    "9am – 3pm (Brunch Only)"
  );
}