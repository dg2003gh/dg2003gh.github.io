import Translator from "../classes/Translator.js";

const languageOptions = document.querySelectorAll("#c-header__languages ul li");

function setTranslation(lng) {
  if (lng == null) return;

  const translator = new Translator(lng, "translate-key");
  translator.translate();
  localStorage.setItem("Language", JSON.stringify(lng));
}

function loadTranslation() {
  const getLanguage = JSON.parse(localStorage.getItem("Language"));
  setTranslation(getLanguage);
}

languageOptions.forEach((language, index) => {
  const selectedIndex = JSON.parse(localStorage.getItem("isThisSelected"));

  /*   index === selectedIndex
    ? (language.selected = true)
    : (language.selected = false); */

  language.addEventListener("click", () => {
    localStorage.setItem("isThisSelected", JSON.stringify(index));
    setTranslation(language.dataset.lng);
  });
});

loadTranslation();
