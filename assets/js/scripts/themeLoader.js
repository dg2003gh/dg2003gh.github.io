function switchTheme(theme_name) {
  if (theme_name === "Cappuccino") {
    document.body.classList.remove("cioccolato-theme");
    document.body.classList.remove("high-contrast-theme");
  }
  if (theme_name === "Cioccolato") {
    document.body.classList.add("cioccolato-theme");
    document.body.classList.remove("high-contrast-theme");
  }
  if (theme_name === "High-contrast") {
    document.body.classList.add("high-contrast-theme");
    document.body.classList.remove("cioccolato-theme");
  }

  localStorage.setItem("theme", JSON.stringify(theme_name));
}

function loadTheme() {
  let getTheme = JSON.parse(localStorage.getItem("theme"));
  if (getTheme === "Cioccolato") {
    document.body.classList.add("cioccolato-theme");
    document.body.classList.remove("high-contrast-theme");
  }
  if (getTheme === "High-contrast") {
    document.body.classList.add("high-contrast-theme");
    document.body.classList.remove("cioccolato-theme");
  }
}

loadTheme();
