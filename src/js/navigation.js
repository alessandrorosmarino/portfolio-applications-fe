// Script to toggle the hidden bar
var burger = document.querySelector("header-burger");
var sidebar = document.querySelector("nav");

burger.addEventListener("click", function () {
  sidebar.classList.toggle("show-nav");
});
