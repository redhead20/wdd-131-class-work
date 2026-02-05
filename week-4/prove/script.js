// responsive gallery + modal (WDD 131 ponder)

const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", (e) => {
  const thumb = e.target.closest("img");
  if (!thumb) return;

  const smallSrc = thumb.getAttribute("src");

  // Convert: images/name-sm.jpg -> images/name-full.jpg
  // (Safer: only replaces "-sm" right before the file extension)
  const fullSrc = smallSrc.replace(/-sm(?=\.(jpg|jpeg|png|webp)$)/i, "-full");

  // Helpful debug (optional)
  console.log("thumbnail:", smallSrc);
  console.log("modal img:", fullSrc);

  modalImage.src = fullSrc;
  modalImage.alt = thumb.alt;

  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

// Close if clicking outside the image (on the dark overlay)
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Esc closes the dialog automatically in most browsers, but this guarantees it
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.open) {
    modal.close();
  }
});

// Optional: clear image when closed (prevents flashing old image next open)
modal.addEventListener("close", () => {
  modalImage.src = "";
  modalImage.alt = "";
});
