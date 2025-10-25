import { createCard, createTitle, appendTitleCard, createParagraph, createImage } from "./domUtils.js";

import willowIcon from "./images/weeping-willow.png";
import lemonPancakesImage from "./images/lemon_ricotta_pancakes.png";
import roastedChickenImage from "./images/roasted_chicken.png";
import burgerAndFriesImage from "./images/burger_and_fries.png";

const appendParagraphCard = (title, paragraph, parent) => {
  const card = createCard();
  const titleElement = createTitle("medium", title);
  const paragraphElement = createParagraph(paragraph);
  card.appendChild(titleElement);
  card.appendChild(paragraphElement)
  parent.appendChild(card);
}

const appendFoodImages = (parent, ...images) => {
  const container = document.createElement("section");
  container.classList.add("food-images");
  images.forEach((img) => container.appendChild(img));
  parent.appendChild(container);
}

const createReview = (review, attribution) => {
  const container = document.createElement("div");

  const reviewParagraph = createParagraph(review);
  reviewParagraph.classList.add("card__review");

  const attributionParagraph = createParagraph(attribution);
  attributionParagraph.classList.add("card__attribution");

  container.appendChild(reviewParagraph);
  container.appendChild(attributionParagraph);

  return container;
}

const appendReviewCard = (title, parent, ...reviews) => {
  const card = createCard();
  const titleElement = createTitle("medium", title);
  card.appendChild(titleElement);
  reviews.forEach((review) => card.appendChild(review));
  parent.appendChild(card);
}

export default function loadHome() {
  const content = document.querySelector("#content");

  const topContainer = document.createElement("div");
  topContainer.classList.add("home__top-container");

  const willowImg1 = createImage(willowIcon, "Weeping willow icon");
  const willowImg2 = createImage(willowIcon, "Weeping willow icon");

  topContainer.appendChild(willowImg1);
  appendTitleCard("large", "The Willow Table", topContainer);
  topContainer.appendChild(willowImg2);
  content.appendChild(topContainer);

  appendParagraphCard(
    "Rooted in Community",
    "What began as a small neighborhood café has grown into a community hub where friends and family come to share " +
    "meals and memories. We partner with local farms and purveyors to ensure that every dish celebrates the best " +
    "our region has to offer. Whether you're here for Sunday brunch or a cozy dinner, The Willow Table is your " +
    "place to slow down and savor.",
    content
  );

  const lemonPancakes = createImage(lemonPancakesImage, "Lemon pancakes topped with ricotta and berry compote");
  const roastedChicken = createImage(roastedChickenImage, "Roasted chicken with mashed potatoes and green beans");
  const burgerAndFries = createImage(burgerAndFriesImage, "Hamburger with a side of french fries");
  appendFoodImages(content, lemonPancakes, roastedChicken, burgerAndFries);

  const review1 = createReview(
    "\"Every visit feels like coming home. " + 
    "The food is simple but beautifully done — you can tell they care about every ingredient.\"",
    "– Sarah L., Google Reviews"
  );
  const review2 = createReview(
    "\"Their brunch is out of this world! The lemon ricotta pancakes are easily the best I've ever had. " + 
    "Worth the weekend wait.\"",
    "– David R., Yelp"
  );
  const review3 = createReview(
    "\"I had my anniversary dinner here and it couldn't have been more special. " + 
    "The ambiance is beautiful and the staff went above and beyond.\"",
    "– Natalie K., Facebook"
  );

  appendReviewCard("What Our Guests Say", content, review1, review2, review3);
}