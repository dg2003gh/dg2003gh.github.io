const themeDropdowns = document.querySelectorAll(".js-theme-dropdown");

const availableThemes = [
  "nuovo-moderno-theme",
  "cioccolato-theme",
  "high-contrast-theme",
  "cappuccino-theme",
];

function chooseTheme(theme) {
  availableThemes.forEach((themeOption) =>
    document.body.classList.remove(themeOption),
  );

  document.body.classList.add(theme);
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
