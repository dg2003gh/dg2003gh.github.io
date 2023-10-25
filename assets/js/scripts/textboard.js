const boardSwitches = document.querySelectorAll(".c-textBoard__switch");

boardSwitches.forEach((boardSwitch, switchIndex) => {
  boardSwitch.onclick = () => {
    const boardTextContainer = document.querySelectorAll(
      ".c-textBoard__text-container .c-textBoard__text"
    );
    const switchContainer = document.getElementById("c-textBoard__switches");
    if (switchContainer.style.getPropertyValue("--js-right") == "0") {
      switchContainer.style.setProperty("--js-right", "auto");
      switchContainer.style.setProperty("--js-left", "0");
    } else {
      switchContainer.style.setProperty("--js-right", "0");
      switchContainer.style.setProperty("--js-left", "auto");
    }

    boardTextContainer.forEach((text, textIndex) => {
      if (text.style.transform.includes("100")) {
        text.style = `
        transform: translateX(-100%);
        `;
      } else {
        text.style = `
        transform: translateX(100%);
        `;
      }
    });
  };
});
