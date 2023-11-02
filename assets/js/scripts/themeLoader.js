const themeDropdowns = document.querySelectorAll(".js-theme-dropdown");

function chooseTheme(theme) {
  switch (theme) {
    case "Cioccolato":
      document.body.classList.add("cioccolato-theme");
      document.body.classList.remove("high-contrast-theme");
      break;
    case "High-contrast":
      document.body.classList.add("high-contrast-theme");
      document.body.classList.remove("cioccolato-theme");
      break;
    default:
      document.body.classList.remove("cioccolato-theme", "high-contrast-theme");
      break;
  }
}

function loadTheme() {
  const getTheme = JSON.parse(localStorage.getItem("theme"));

  chooseTheme(getTheme);

  themeDropdowns.forEach((themeDropdown) => {
    themeDropdown.addEventListener("change", () => {
      chooseTheme(themeDropdown.value);
      localStorage.setItem("theme", JSON.stringify(themeDropdown.value));
    });

    if (getTheme) {
      themeDropdown.value = getTheme;
    }
  });
}

loadTheme();
