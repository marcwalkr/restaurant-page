import { createCard, createTitle, createParagraph, createImage } from "./domUtils.js";

import lemonPancakesImage from "./images/lemon_ricotta_pancakes.png";
import roastedChickenImage from "./images/roasted_chicken.png";
import burgerAndFriesImage from "./images/burger_and_fries.png";

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

export default function loadHome() {
  const content = document.querySelector("#content");
  
  const homeTitleCard = createCard();
  const homeTitle = createTitle("large", "The Willow Table");
  homeTitleCard.appendChild(homeTitle);
  content.appendChild(homeTitleCard);

  const aboutCard = createCard();
  const aboutTitle = createTitle("medium", "Rooted in Community");
  const aboutParagraph = createParagraph(
    "What began as a small neighborhood café has grown into a community hub where friends and family come to share " +
    "meals and memories. We partner with local farms and purveyors to ensure that every dish celebrates the best " +
    "our region has to offer. Whether you're here for Sunday brunch or a cozy dinner, The Willow Table is your " +
    "place to slow down and savor."
  );
  aboutCard.appendChild(aboutTitle);
  aboutCard.appendChild(aboutParagraph);
  content.appendChild(aboutCard);

  const foodImageContainer = document.createElement("section");
  foodImageContainer.classList.add("food-images");
  const lemonPancakes = createImage(lemonPancakesImage, "Lemon pancakes topped with ricotta and berry compote");
  const roastedChicken = createImage(roastedChickenImage, "Roasted chicken with mashed potatoes and green beans");
  const burgerAndFries = createImage(burgerAndFriesImage, "Hamburger with a side of french fries");
  foodImageContainer.appendChild(lemonPancakes);
  foodImageContainer.appendChild(roastedChicken);
  foodImageContainer.appendChild(burgerAndFries);
  content.appendChild(foodImageContainer);

  const reviewCard = createCard();
  const reviewTitle = createTitle("medium", "What Our Guests Say");
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
  reviewCard.appendChild(reviewTitle);
  reviewCard.appendChild(review1);
  reviewCard.appendChild(review2);
  reviewCard.appendChild(review3);
  content.appendChild(reviewCard);
}