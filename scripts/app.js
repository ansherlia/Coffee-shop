const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const productBtn = document.querySelector("#productShow");
const subMenuOpenBtn = document.querySelector(".subMenu-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navClose = document.querySelector(".nav-close");
const openCart = document.querySelector(".open-cart");
const cart = document.querySelector(".cart");
const closeBtn = document.querySelector(".close-btn-cart");
navOpenBtn.addEventListener("click", () => {
  nav.classList.remove("-right-64");
  nav.classList.add("right-0");
  overlay.classList.add("overlay-visible");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("right-0");
  nav.classList.add("-right-64");
  overlay.classList.remove("overlay-visible");
});

subMenuOpenBtn.addEventListener("click", () => {
  subMenuOpenBtn.parentElement.classList.toggle("text-orange-300");
  submenu.classList.toggle("flex");
});
toggleThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
// overlay.addEventListener("click", () => {
//   nav.classList.add("right-0");
//   nav.classList.remove("-right-64");
//   // overlay.classList.remove("overlay-visible");
// });

openCart.addEventListener("click", () => {
  cart.classList.remove("-left-64");
  cart.classList.add("left-0");
  overlay.classList.add("overlay-visible");
});
closeBtn.addEventListener("click", () => {
  cart.classList.add("-left-64");
  cart.classList.remove("left-0");
  overlay.classList.remove("overlay-visible");
});
