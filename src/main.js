const mobileMenu = document.querySelector(".header-mobiletabletlateral-menu");
const openButton = document.getElementById("open");
openButton.addEventListener("click", function () {
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.opacity = 1;
});
const closeButton = document.getElementById("close");
closeButton.addEventListener("click", function () {
  mobileMenu.style.visibility = "hidden";
  mobileMenu.style.opacity = 0;
});
