const boardSwitches = document.querySelectorAll(".c-textBoard__switch");

boardSwitches.forEach((boardSwitch) => {
  boardSwitch.onclick = () => {
    const boardTextContainer = document.querySelectorAll(
      ".c-textBoard__text-container .c-textBoard__text"
    );
    const switchContainer = document.getElementById("c-textBoard__switches");
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
