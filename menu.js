const burger = document.querySelector(".burger");
const overlayMenu = document.querySelector(".overlay-menu");
const closeBtn = document.querySelector(".close-btn");

// Åbn/Luk overlay
burger.addEventListener("click", () => {
  overlayMenu.classList.add("active");
  overlayMenu.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // lås scroll
});

closeBtn.addEventListener("click", () => {
  overlayMenu.classList.remove("active");
  overlayMenu.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // frigiv scroll
});

// Luk på ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlayMenu.classList.contains("active")) {
    overlayMenu.classList.remove("active");
    overlayMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
});
