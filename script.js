const mobileNavBarEl = document.querySelectorAll(".mobile-nav__items");

const closeModalOverlay = () => {
  document.querySelector(".mobile-nav").classList.toggle("active");
  document.querySelector(".backdrop").classList.toggle("active");
};

const openModalOverlay = () => {
  setTimeout(function () {
    document.querySelector(".backdrop").classList.toggle("active");
    document.querySelector(".mobile-nav").classList.toggle("active");
  }, 200);
};

document
  .querySelector(".toggle-button")
  .addEventListener("click", openModalOverlay);

document
  .querySelector(".backdrop")
  .addEventListener("click", closeModalOverlay);

for (i = 0; i < mobileNavBarEl.length; i++) {
  mobileNavBarEl[i].addEventListener("click", closeModalOverlay);
}
