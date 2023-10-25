const themeOptions = document.querySelectorAll("#c-theme-dropdown ul li");

themeOptions.forEach((option) => {
  option.onclick = () => {
    switch (option.dataset.theme) {
      case "Cappuccino":
        document.body.classList.remove("cioccolato-theme");
        document.body.classList.remove("high-contrast-theme");
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
    console.log(option.dataset.theme);
    localStorage.setItem("theme", JSON.stringify(option.dataset.theme));
  };
});

function loadTheme() {
  let getTheme = JSON.parse(localStorage.getItem("theme"));
  if (getTheme === "Cioccolato") {
    document.body.classList.add("cioccolato-theme");
    document.body.classList.remove("high-contrast-theme");
  } else if (getTheme === "High-contrast") {
    document.body.classList.add("high-contrast-theme");
    document.body.classList.remove("cioccolato-theme");
  }
}

loadTheme();
