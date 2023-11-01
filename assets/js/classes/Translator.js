export default class Translator {
  constructor(lng, tagAttr, typedOn, typedContainer) {
    this.lng = lng;
    this.tagAttr = tagAttr;
    this.typedContainer = typedContainer;
    this.typedOn = typedOn;
  }

  translate() {
    if (this.lng == null || this.lng == "") return;

    fetch("./assets/translations/" + this.lng + ".json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error("File not found!");
      })
      .then((language) => {
        document.documentElement.lang = this.lng;
        const allDom = document.getElementsByTagName("*");
        for (let index = 0; index < allDom.length; index++) {
          const elem = allDom[index];
          const key = elem.getAttribute(this.tagAttr);
          if (key != null) {
            elem.innerHTML = language[key];
          }
        }
        if (this.typedOn == true && language.typedStrings != null) {
          new Typed(this.typedContainer, {
            strings: language.typedStrings,
            loop: true,
            typeSpeed: 200,
            backSpeed: 200,
          });
        }
      })
      .catch((error) => console.error(error));
  }
}
