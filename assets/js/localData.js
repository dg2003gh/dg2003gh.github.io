function loadTheme() {
  const themeButton = document.querySelector(".js-header__theme-mode");
  let getTheme = JSON.parse(localStorage.getItem("theme"));
  if (getTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.innerHTML = "light_mode";
  } else return;
}

loadTheme();
