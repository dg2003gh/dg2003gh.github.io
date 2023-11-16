const boardSwitches = document.querySelectorAll(".c-text-board__switch");

boardSwitches.forEach((boardSwitch) => {
  boardSwitch.onclick = () => {
    const boardTextContainer = document.querySelectorAll(
      ".c-text-board__text-container .c-text-board__text"
    );
    const switchContainer = document.getElementById("c-text-board__switches");
    if (
      switchContainer.style.getPropertyValue("--js-translateX") == "0px" ||
      switchContainer.style.getPropertyValue("--js-translateX") == ""
    ) {
      switchContainer.style.setProperty("--js-translateX", "100% 0px");
    } else {
      switchContainer.style.setProperty("--js-translateX", "0px");
    }

    boardTextContainer.forEach((text) => {
      if (text.style.translate == "0px" || text.style.translate == "") {
        text.style.translate = "-100% 0px";
      } else {
        text.style.translate = "0px";
      }
    });
  };
});
