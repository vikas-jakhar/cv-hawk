let menuicon = document.querySelector(".menu-icon");
let menulist = document.querySelector(".menu-list1");

menuicon.addEventListener("click", function () {
    menuicon.classList.toggle("active-icon1");
    menulist.classList.toggle("show-list");
});