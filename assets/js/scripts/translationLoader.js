import Translator from "../classes/Translator.js";

const languageDropdowns = document.querySelectorAll(".js-header__languages");

function setTranslation(lng) {
  const options = document.querySelectorAll(".js-header__languages option");
  const translator = new Translator(lng, "translate-key", true, "#c-typedWord");
  translator.translate();
  localStorage.setItem("Language", JSON.stringify(lng));

  options.forEach((option) => {
    option.value == lng ? (option.selected = true) : (option.selected = false);
  });
}

function loadTranslation() {
  const getLng = JSON.parse(localStorage.getItem("Language"));

  if (getLng == null || getLng == "") {
    const userLang = navigator.language || navigator.userLanguage;
    console.log(userLang);
    setTranslation(userLang);
  } else {
    setTranslation(getLng);
  }
}

languageDropdowns.forEach((languageDropdown) => {
  languageDropdown.addEventListener("click", () => {
    setTranslation(languageDropdown.value);
  });
});

loadTranslation();
