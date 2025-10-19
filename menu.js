const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay-menu");
const closeBtn = document.querySelector(".close-btn");
burger.addEventListener("click", () => {
  overlay.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});
