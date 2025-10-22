import { createCard, createTitle, createParagraph } from "./domUtils.js";

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

export default function loadContact() {
  const content = document.querySelector("#content");

  const titleCard = createCard();
  const contactTitle = createTitle("large", "Let's Stay in Touch");
  titleCard.appendChild(contactTitle);
  content.appendChild(titleCard);

  const addressCard = createCard();
  const addressTitle = createTitle("medium", "Address");
  addressCard.appendChild(addressTitle);

  const addressContainer = document.createElement("div");
  const addressLine1 = createParagraph("123 Willow Street");
  const addressLine2 = createParagraph("Brookhaven, OR 97210");
  addressContainer.appendChild(addressLine1);
  addressContainer.appendChild(addressLine2);

  addressCard.appendChild(addressContainer);
  content.appendChild(addressCard);

  const contactInfoCard = createCard();
  const contactInfoTitle = createTitle("medium", "Contact Information");
  contactInfoCard.appendChild(contactInfoTitle);

  const phoneContainer = document.createElement("div");
  const phoneTitle = createTitle("small", "Phone");
  const phoneNumber = createParagraph("(555) 867-2042");
  phoneContainer.appendChild(phoneTitle);
  phoneContainer.appendChild(phoneNumber);
  contactInfoCard.appendChild(phoneContainer);

  const emailContainer = document.createElement("div");
  const emailTitle = createTitle("small", "Email");
  const email = createParagraph("hello@willowtable.com");
  emailContainer.appendChild(emailTitle);
  emailContainer.appendChild(email);
  contactInfoCard.appendChild(emailContainer);

  const socialMediaContainer = document.createElement("div");
  const socialMediaTitle = createTitle("small", "Social Media");
  socialMediaContainer.appendChild(socialMediaTitle);

  const socialMediaGrid = createInfoGrid();

  const instagramParagraph = createParagraph("Instagram");
  const instagramLink = createLink("#", "@TheWillowTable");
  socialMediaGrid.appendChild(instagramParagraph);
  socialMediaGrid.appendChild(instagramLink);

  const facebookParagraph = createParagraph("Facebook");
  const facebookLink = createLink("#", "The Willow Table");
  socialMediaGrid.appendChild(facebookParagraph);
  socialMediaGrid.appendChild(facebookLink);

  const tiktokParagraph = createParagraph("TikTok");
  const tiktokLink = createLink("#", "@WillowTableEats");
  socialMediaGrid.appendChild(tiktokParagraph);
  socialMediaGrid.appendChild(tiktokLink);

  socialMediaContainer.appendChild(socialMediaGrid);

  contactInfoCard.appendChild(socialMediaContainer);
  content.appendChild(contactInfoCard);

  const hoursCard = createCard();
  const hoursTitle = createTitle("medium", "Hours");
  hoursCard.appendChild(hoursTitle);

  const hoursGrid = createInfoGrid();

  const days1 = createParagraph("Mon–Thu");
  const hours1 = createParagraph("11am – 9pm");
  hoursGrid.appendChild(days1);
  hoursGrid.appendChild(hours1);

  const days2 = createParagraph("Fri–Sat");
  const hours2 = createParagraph("11am – 10pm");
  hoursGrid.appendChild(days2);
  hoursGrid.appendChild(hours2);

  const days3 = createParagraph("Sun");
  const hours3 = createParagraph("9am – 3pm (Brunch Only)");
  hoursGrid.appendChild(days3);
  hoursGrid.appendChild(hours3);

  hoursCard.append(hoursGrid);
  content.appendChild(hoursCard);
}