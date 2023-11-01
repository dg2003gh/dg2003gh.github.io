const expandButton = document.querySelector(".js-header__expand-mode");
const header = document.querySelector(".js-header");
const menu = document.getElementById("c-header__menu");
const mobileButton = document.getElementById("c-header__mobile-button");

function headerHide() {
  header.style =
    "top: -45px; padding-bottom: 3vh; background: var(--clr-hide-header)";
  expandButton.classList.replace(
    "ri-arrow-drop-up-line",
    "ri-arrow-drop-down-line"
  );
  expandButton.style = "position: absolute; bottom: -4vh;";
  expandButton.title = "Show header";
}

function headerShow() {
  header.style = "";
  expandButton.classList.replace(
    "ri-arrow-drop-down-line",
    "ri-arrow-drop-up-line"
  );
  expandButton.style = "";
  expandButton.title = "hide header";
}

expandButton.onclick = () => {
  let getTopValue = window
    .getComputedStyle(header, null)
    .getPropertyValue("top");

  getTopValue == "5px" ? headerHide() : headerShow();
};

mobileButton.onclick = () => {
  menu.classList.add("u-header__menu-open");
  document.body.style.overflow = "hidden";
};

menu.addEventListener("click", () => {
  menu.classList.remove("u-header__menu-open");
  document.body.style.overflow = "";
});
