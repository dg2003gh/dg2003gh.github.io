class Translator {
  constructor(lng, tagAttr) {
    this._lng = lng;
    this._tagAttr = tagAttr;
  }

  translate() {
    let xrhFile = new XMLHttpRequest();
    //load content data
    xrhFile.open("GET", "/assets/translations/" + this._lng + ".json", true);
    xrhFile.onload = (e) => {
      if (xrhFile.readyState === 4) {
        if (xrhFile.status === 200 || xrhFile.status == 0) {
          let LngObject = JSON.parse(xrhFile.responseText);
          const allDom = document.getElementsByTagName("*");
          for (let i = 0; i < allDom.length; i++) {
            let elem = allDom[i];
            let key = elem.getAttribute(this._tagAttr);
            if (key != null) {
              elem.innerHTML = LngObject[key];
            }
          }
        } else {
          console.error(xrhFile.statusText);
        }
      }
      xrhFile.onerror = (e) => {
        console.error(xrhFile.statusText);
      };
    };
    xrhFile.send(null);
  }
}
