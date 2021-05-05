const nav = document.querySelector(".elements__item:last-child");
const dropdown = document.querySelector(".navigation__dropdown");

nav.addEventListener("mouseover" , () => dropdown.style.display = "block");

dropdown.addEventListener("mouseout" , () => dropdown.style.display = "none");



