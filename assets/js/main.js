function switchTheme() {
  const theme = document.querySelector(".js-header__theme-mode");

  theme.textContent == "dark_mode"
    ? (theme.innerHTML = "light_mode")
    : (theme.innerHTML = "dark_mode");
}
