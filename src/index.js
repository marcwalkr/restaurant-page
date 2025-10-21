import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./styles.css";

const content = document.querySelector("#content");
const navigation = document.querySelector("#navigation");
const home = navigation.querySelector("#home");
const menu = navigation.querySelector("#menu");
const contact = navigation.querySelector("#contact");

const selectTab = (tab) => {
  tab.classList.add("header__nav-link--selected");
}

const deselectTabs = () => {
  home.classList.remove("header__nav-link--selected");
  menu.classList.remove("header__nav-link--selected");
  contact.classList.remove("header__nav-link--selected");
}

const tabSelected = (tab) => {
  return tab.classList.contains("header__nav-link--selected");
}

const clearContent = () => {
  content.textContent = "";
}

navigation.addEventListener("click", (event) => {
  const tab = event.target.closest("button");
  if (!tab || tabSelected(tab)) return;

  deselectTabs();
  selectTab(tab);
  clearContent();

  switch (tab.id) {
    case "home":
      loadHome();
      break;
    case "menu":
      loadMenu();
      break;
    case "contact":
      loadContact();
      break;
  }
});

selectTab(home);
loadHome();