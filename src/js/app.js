AOS.init({once:true});

let menuicon = document.querySelector(".menu-icon");
let menulist = document.querySelector(".menu-list1");
let line2 = document.querySelector(".line2");
let line1 = document.querySelector(".line1");
let line3 = document.querySelector(".line3");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("-right-full");
    menulist.classList.toggle("right-0");
    menuicon.classList.toggle("active-icon1");
    line2.classList.toggle("hidden");
    line1.classList.toggle("bg-[#F36A3E]");
    line1.classList.toggle("bg-black");
    line3.classList.toggle("bg-[#F36A3E]");
    line3.classList.toggle("bg-black");
});