function setTranslation(lng) {
  let translator = new Translator(lng, "translation-key");
  translator.translate();
  console.log(`Website language changed to ${lng} `);
  localStorage.setItem("Language", JSON.stringify(lng));
}

function loadTranslation() {
  const getLanguage = JSON.parse(localStorage.getItem("Language"));
  setTranslation(getLanguage, "translation-key");
  console.log(`${getLanguage} translation  Loaded!`);
}

loadTranslation();