AOS.init({ once: true });

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


$('.img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    dots: true,
    infinite: false,
    arrows: false,
});

$('.slider-sec2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 1000,
    dots: true,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-sec7').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    prevArrow: "prev1",
    nextArrow: "next1",
    dots: true,
    infinite: true,
});