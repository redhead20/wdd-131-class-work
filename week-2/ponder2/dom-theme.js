// Target the elements needed
const selectElem = document.querySelector("#theme-select");
const pageContent = document.querySelector("body");

// Run changeTheme whenever the user changes the dropdown
selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  const current = selectElem.value;

  if (current === "ocean") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
    pageContent.style.fontFamily = "Papyrus, fantasy";
  } else if (current === "forest") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
    pageContent.style.fontFamily = "Impact, sans-serif";
  } else if (current === "desert") {
    document.body.style.backgroundImage =
      "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
    pageContent.style.fontFamily = "'Big Caslon', serif";
  } else {
    // default
    document.body.style.backgroundImage = "none";
    pageContent.style.fontFamily = "Georgia, serif";
  }
}
