const dropDownMenu = document.querySelector(".dropdown-menu");
const overLayer = document.querySelector(".overlay");
const navBtn = document.querySelector(".btn");

navBtn.addEventListener("click", () =>{
    dropDownMenu.classList.add("dropdown-open");
    overLayer.classList.add("overlay-open");
});