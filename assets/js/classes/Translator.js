export default class Translator {
  constructor(
    lng,
    tagAttr,
    typedOn,
    typedContainer = null,
    typedOptions = {
      strings: [],
      loop: true,
      typeSpeed: 200,
      backSpeed: 200,
    }
  ) {
    this.lng = lng;
    this.tagAttr = tagAttr;
    this.typedContainer = typedContainer;
    this.typedOn = typedOn;
    this.typedOptions = typedOptions;
    this.typed;
  }

  translate() {
    if (this.lng == null || this.lng == "") return;

    const options = {
      headers: {
        "Accept-Encoding": "br",
      },
    };

    fetch("/assets/translations/" + this.lng + ".json", options)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("File not found!");
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

        if (
          this.typedOn == true &&
          language.typedStrings != null &&
          this.typedContainer != null
        ) {
          this.typedOptions.strings = language.typedStrings;
          this.typed = new Typed(this.typedContainer, this.typedOptions);
        }
      })
      .catch((error) => {
        this.lng = "en";
        this.translate();
        console.error(error + " get english translation...");
      });
  }
}
