import loadHome from "./home.js";
import "./styles.css";

const navigation = document.querySelector("#navigation");
const home = navigation.querySelector("#home");
const menu = navigation.querySelector("#menu");
const contact = navigation.querySelector("#contact");

const deselectTabs = () => {
  home.classList.remove("header__nav-link--selected");
  menu.classList.remove("header__nav-link--selected");
  contact.classList.remove("header__nav-link--selected");
}

navigation.addEventListener("click", (event) => {
  const button = event.target.closest("li");
  if (!button) return;

  deselectTabs();
  button.classList.add("header__nav-link--selected");
});

loadHome();