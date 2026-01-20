const themeSelect = document.getElementById("theme-select");
const logo = document.getElementById("byui-logo");

// set default theme (optional)
applyTheme(themeSelect.value);

// run every time user changes dropdown
themeSelect.addEventListener("change", () => {
  applyTheme(themeSelect.value);
});

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    logo.src = "images/byui-logo-white.png";
    logo.alt = "BYU-Idaho logo (white)";
  } else {
    document.body.classList.remove("dark");
    logo.src = "images/byui-logo.png";
    logo.alt = "BYU-Idaho logo";
  }
}
