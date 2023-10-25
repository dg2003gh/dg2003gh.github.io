const dropdowns = document.querySelectorAll("dropdown");
dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector("ul");
  const dropdownOptions = dropdownMenu.querySelectorAll("li");
  dropdown.onclick = () => {
    if (
      dropdownMenu.style.transform.includes("scale(0)") ||
      dropdownMenu.style.transform == ""
    ) {
      dropdownMenu.style.transform = "scale(1)";
    } else {
      dropdownMenu.style.transform = "scale(0)";
    }
  };

  dropdown.onblur = () => {
    dropdownMenu.style.transform = "scale(0)";
  };

  /*   dropdownOptions.onclick = (clickedOption) => {
    dropdown.innerHTML += clickedOption.innerHTML;
  }; */
});
