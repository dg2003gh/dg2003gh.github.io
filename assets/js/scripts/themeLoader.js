const themeDropdowns = document.querySelectorAll(".js-theme-dropdown");

function chooseTheme(theme) {
  const options = document.querySelectorAll(".js-theme-dropdown option");

  switch (theme) {
    case "Cappuccino":
      document.body.classList.remove("cioccolato-theme", "high-contrast-theme");
      break;
    case "Cioccolato":
      document.body.classList.add("cioccolato-theme");
      document.body.classList.remove("high-contrast-theme");
      break;
    case "High-contrast":
      document.body.classList.add("high-contrast-theme");
      document.body.classList.remove("cioccolato-theme");
      break;
  }

  options.forEach((option) => {
    option.value == theme
      ? (option.selected = true)
      : (option.selected = false);
  });
}

function loadTheme() {
  const getTheme = JSON.parse(localStorage.getItem("theme"));

  if (getTheme == "" || getTheme == null) return;

  chooseTheme(getTheme);
}

themeDropdowns.forEach((themeDropdown) => {
  themeDropdown.addEventListener("click", () => {
    chooseTheme(themeDropdown.value);
    localStorage.setItem("theme", JSON.stringify(themeDropdown.value));
  });
});

loadTheme();
