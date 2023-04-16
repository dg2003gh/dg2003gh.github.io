function switchTheme(theme_name = str) {
  const themeButton = document.querySelector(".js-header__theme-mode");

  if (theme_name === "Cioccolato") {
    document.body.classList.add("cioccolato-theme");
  }
  if (theme_name === "Cappuccino") {
    document.body.classList.remove("cioccolato-theme");
  }

  localStorage.setItem("theme", JSON.stringify(theme_name));

  console.log(theme_name);
}

function loadTheme() {
  const themeButton = document.querySelector(".js-header__theme-mode");
  let getTheme = JSON.parse(localStorage.getItem("theme"));
  if (getTheme === "Cioccolato") {
    document.body.classList.add("cioccolato-theme");
  } else return;
}

loadTheme();
