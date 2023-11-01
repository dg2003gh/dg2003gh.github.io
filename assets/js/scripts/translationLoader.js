import Translator from "../classes/Translator.js";

const languageDropdowns = document.querySelectorAll(".js-header__languages");

function setTranslation(lng) {
  const translator = new Translator(lng, "translate-key", true, "#c-typedWord");
  translator.translate();
  localStorage.setItem("Language", JSON.stringify(lng));
}

function loadTranslation() {
  const getLng = JSON.parse(localStorage.getItem("Language"));
  const options = document.querySelectorAll(".js-header__languages option");

  options.forEach((option) => {
    option.value == getLng
      ? (option.selected = true)
      : (option.selected = false);
  });

  setTranslation(getLng);
}

languageDropdowns.forEach((languageDropdown) => {
  languageDropdown.addEventListener("click", () => {
    setTranslation(languageDropdown.value);
  });
});

loadTranslation();
