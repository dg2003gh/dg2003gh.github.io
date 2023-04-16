function switchTheme() {
  const themeButton = document.querySelector(".js-header__theme-mode");
  let theme;

  if (themeButton.textContent == "dark_mode") {
    themeButton.innerHTML = "light_mode";
    theme = "dark";
  } else {
    themeButton.innerHTML = "dark_mode";
    theme = '"light';
  }
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", JSON.stringify(theme));
}

function hideHeader() {
  const expandButton = document.querySelector(".js-header__expand-mode");
  const header = document.querySelector(".js-header");
  let getTopValue = window
    .getComputedStyle(header, null)
    .getPropertyValue("top");

  if (getTopValue == "5px") {
    header.style =
      "top: -45px; padding-bottom: 21px; background: var(--clr-hide-header)";
    expandButton.innerHTML = "expand_more";
    expandButton.style = "position: absolute;top: 42px;";
    expandButton.title = "Show header";
  } else {
    header.style = "";
    expandButton.innerHTML = "expand_less";
    expandButton.style = "";
    expandButton.title = "hide header";
  }
}
