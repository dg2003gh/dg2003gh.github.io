function hideHeader() {
  const expandButton = document.querySelector(".js-header__expand-mode");
  const header = document.querySelector(".js-header");
  let getTopValue = window
    .getComputedStyle(header, null)
    .getPropertyValue("top");

  if (getTopValue == "5px") {
    header.style =
      "top: -45px; padding-bottom: 21px; background: var(--clr-hide-header)";
    expandButton.classList.add("ri-arrow-drop-down-line");
    expandButton.classList.remove("ri-arrow-drop-up-line");
    expandButton.style = "position: absolute;top: 40px;";
    expandButton.title = "Show header";
  } else {
    header.style = "";
    expandButton.classList.add("ri-arrow-drop-up-line");
    expandButton.classList.remove("ri-arrow-drop-down-line");
    expandButton.style = "";
    expandButton.title = "hide header";
  }
}
