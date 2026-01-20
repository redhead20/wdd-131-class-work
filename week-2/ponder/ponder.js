// ===== DOM Selection =====
const dropdown = document.getElementById("webdevlist");

const sections = {
  html: document.getElementById("html-section"),
  css: document.getElementById("css-section"),
  js: document.getElementById("js-section")
};

// ===== Hide all sections initially =====
Object.values(sections).forEach(section => {
  section.style.display = "none";
});

// ===== DOM Manipulation =====
dropdown.addEventListener("change", () => {
  // Hide everything
  Object.values(sections).forEach(section => {
    section.style.display = "none";
  });

  // Show selected section
  const choice = dropdown.value;
  if (sections[choice]) {
    sections[choice].style.display = "block";
  }
});
