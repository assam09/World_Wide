let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");
let menuBar = document.querySelector("#menu-bar");
let navbarMenu = document.querySelector(".navbar");
let videoBtn =document.querySelectorAll(".video-btn")

//create Function showbar
function showbar() {
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
}
//create Function showForm
function showform() {
    loginForm.classList.add("active")
}
function closeForm(){
    loginForm.classList.remove("active")
}
//create Function show menu
function showmenu() {
    menuBar.classList.toggle("fa-times")
    navbarMenu.classList.toggle("active")
}
//create Function Vidoe
videoBtn.forEach(slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let sc =slide.getAttribute("data-src");
        document.querySelector("#vidoe-slider").src = sc;
    })
});
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoPlay:{
        delay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
})
