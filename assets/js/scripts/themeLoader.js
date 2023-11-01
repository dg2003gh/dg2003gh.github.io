const themeDropdowns = document.querySelectorAll(".js-theme-dropdown");

function chooseTheme(theme) {
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
}

function loadTheme() {
  const getTheme = JSON.parse(localStorage.getItem("theme"));
  const options = document.querySelectorAll(".js-theme-dropdown option");

  if (getTheme == "" || getTheme == null) return;

  options.forEach((option) => {
    option.value == getTheme
      ? (option.selected = true)
      : (option.selected = false);
  });

  chooseTheme(getTheme);
}

themeDropdowns.forEach((themeDropdown) => {
  themeDropdown.addEventListener("click", () => {
    chooseTheme(themeDropdown.value);
    localStorage.setItem("theme", JSON.stringify(themeDropdown.value));
  });
});

loadTheme();
