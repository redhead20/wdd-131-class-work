/* ===== Responsive Menu ===== */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("hide");
  menuBtn.classList.toggle("change");

  const isOpen = !nav.classList.contains("hide");
  menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

/* ===== Modal Viewer ===== */
const gallery = document.querySelector(".gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewer = document.getElementById("closeViewer");

gallery.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;

  // Best: use data-full if provided
  const fullSrc = img.dataset.full
    ? img.dataset.full
    : img.src.replace(/-sm(?=\.(jpg|jpeg|png|webp)$)/i, "-lg"); // fallback

  viewerImg.src = fullSrc;
  viewerImg.alt = img.alt || "Full size image";

  viewer.showModal();
});

// Close with X
closeViewer.addEventListener("click", () => {
  viewer.close();
});

// Close by clicking outside image (on the overlay)
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.close();
});

// Esc closes dialog by default, but this guarantees it
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && viewer.open) viewer.close();
});

// Optional cleanup
viewer.addEventListener("close", () => {
  viewerImg.src = "";
  viewerImg.alt = "";
});
