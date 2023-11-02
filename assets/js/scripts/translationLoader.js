import Translator from "../classes/Translator.js";

const languageDropdowns = document.querySelectorAll(".js-header__languages");

function setTranslation(lng) {
  const translator = new Translator(
    lng,
    "translate-key",
    true,
    "#c-typed-word"
  );
  translator.translate();
  localStorage.setItem("language", JSON.stringify(lng));
}

function loadTranslation() {
  const getLng = JSON.parse(localStorage.getItem("language"));

  if (getLng == null || getLng == "") {
    const getLng = navigator.language || navigator.userLanguage;
    setTranslation(getLng);
  } else {
    setTranslation(getLng);
  }

  languageDropdowns.forEach((languageDropdown) => {
    languageDropdown.addEventListener("change", () => {
      window.location.reload(); //temp fix
      setTranslation(languageDropdown.value);
    });
    languageDropdown.value = getLng;
  });
}

loadTranslation();
