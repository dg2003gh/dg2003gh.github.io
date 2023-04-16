document.querySelector(
  "#copyright"
).innerHTML = `DG2003&copy;${new Date().getFullYear()}`;

function loadTranslate(lng, tagAttr) {
  let translate = new Translator();

  translate.init(tagAttr, lng);
  translate.process();
}
