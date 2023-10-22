export default class Translator {
  constructor(lng, tagAttr) {
    this.lng = lng;
    this.tagAttr = tagAttr;
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
        const allDom = document.getElementsByTagName("*");
        for (let index = 0; index < allDom.length; index++) {
          const elem = allDom[index];
          const key = elem.getAttribute(this.tagAttr);
          if (key != null) {
            elem.innerHTML = language[key];
          }
        }
      })
      .catch((error) => console.error(error));
  }
}
