import { createCard, createTitle, appendTitleCard, createParagraph, createImage } from "./domUtils.js";

import chickenImage from "./images/roasted_chicken.png";
import salmonImage from "./images/salmon.png";
import porkChopImage from "./images/pork_chop.png";
import burgerImage from "./images/burger_and_fries.png";
import pancakesImage from "./images/lemon_ricotta_pancakes.png";
import breakfastPlateImage from "./images/breakfast_plate.png";
import avocadoToastImage from "./images/avocado_toast.png";
import chickenAndWafflesImage from "./images/chicken_and_waffles.png";
import lemonadeImage from "./images/lemonade.png";
import teaImage from "./images/iced_herbal_tea.png";
import coffeeImage from "./images/cold_brew_coffee.png";
import waterImage from "./images/sparkling_water.png";

const appendMenuCard = (name, price, description, imgPath, altText, parent) => {
  const card = createCard();

  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const namePriceContainer = document.createElement("div");
  namePriceContainer.classList.add("menu-item__name-price");

  const nameElement = createTitle("small", name);
  namePriceContainer.appendChild(nameElement);

  const priceElement = createParagraph(price);
  namePriceContainer.appendChild(priceElement);

  menuItem.appendChild(namePriceContainer);

  const descriptionElement = createParagraph(description);
  descriptionElement.classList.add("menu-item__description");
  menuItem.appendChild(descriptionElement);

  const imgElement = createImage(imgPath, altText);
  imgElement.classList.add("menu-item__image");
  menuItem.appendChild(imgElement);

  card.appendChild(menuItem);
  parent.appendChild(card);
}

export default function loadMenu() {
  const content = document.querySelector("#content");

  appendTitleCard("large", "Menu", content);
  appendTitleCard("medium", "Entrées", content);

  appendMenuCard(
    "Herb-Roasted Chicken", 
    "$18", 
    "Half chicken roasted with rosemary jus, served with mashed potatoes and green beans",
    chickenImage,
    "Roasted chicken with mashed potatoes and green beans",
    content
  );

  appendMenuCard(
    "Seared Atlantic Salmon",
    "$18",
    "Pan-seared and finished with a lemon-dill cream sauce, served with roasted potatoes and asparagus.",
    salmonImage,
    "Salmon with a cream sauce, roasted potatoes, and asparagus",
    content
  );

  appendMenuCard(
    "Maple Glazed Pork Chop",
    "$20",
    "Thick-cut chop topped with apple chutney and paired with sweet potato mash.",
    porkChopImage,
    "Pork chop with apple chutney and mashed sweet potatoes",
    content
  );

  appendMenuCard(
    "The Willow Burger",
    "$16",
    "Grass-fed beef with cheddar, caramelized onions, lettuce, tomato, and garlic aioli on a brioche bun.",
    burgerImage,
    "Hamburger with a side of french fries",
    content
  );

  appendTitleCard("medium", "Brunch Favorites", content);

  appendMenuCard(
    "Lemon Ricotta Pancakes",
    "$13",
    "Fluffy and light, topped with whipped ricotta, lemon zest, and seasonal berry compote.",
    pancakesImage,
    "Lemon pancakes topped with ricotta and berry compote",
    content
  );

  appendMenuCard(
    "Country Breakfast Plate",
    "$15",
    "Two cage-free eggs any style, applewood smoked bacon or sausage, roasted breakfast potatoes, " + 
    "and toasted sourdough.",
    breakfastPlateImage,
    "Sunny side up eggs, bacon, roasted potatoes, and toast",
    content
  );

  appendMenuCard(
    "Avocado Toast",
    "$12",
    "Artisan multigrain bread topped with smashed avocado, cherry tomatoes, radish, microgreens, " + 
    "and olive oil drizzle.",
    avocadoToastImage,
    "Toast with avocado, cherry tomatoes, radish, microgreens and olive oil",
    content
  );

  appendMenuCard(
    "Maple-Glazed Chicken & Waffles",
    "$16",
    "Crispy fried chicken on buttermilk waffles with maple butter and powdered sugar.",
    chickenAndWafflesImage,
    "Two waffles topped with two boneless fried chicken fillets, butter and maple syrup",
    content
  );

  appendTitleCard("medium", "Drinks", content);

  appendMenuCard(
    "Fresh Lemonade",
    "$4",
    "Hand-pressed lemons, pure cane sugar, and a touch of mint.",
    lemonadeImage,
    "Lemonade in a glass with ice, a lemon slice, and mint",
    content
  );

  appendMenuCard(
    "Iced Herbal Tea",
    "$3.50",
    "Naturally caffeine-free blend of chamomile, hibiscus, and citrus.",
    teaImage,
    "Herbal tea in a glass with ice, lemon slices, and mint",
    content
  );

  appendMenuCard(
    "Cold Brew Coffee",
    "$4",
    "Smooth, slow-steeped coffee served over ice.",
    coffeeImage,
    "Coffee in a glass with ice",
    content
  );

  appendMenuCard(
    "Sparkling Water",
    "$3",
    "Refreshing and crisp, served chilled with a lemon twist.",
    waterImage,
    "Sparkling water in a glass with ice, garnished with a lemon peel",
    content
  );
}