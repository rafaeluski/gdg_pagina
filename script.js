let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toogle('fa-times');
    navbar.classList.toogle('active');
}
var swiper = new swiper (".home-slider",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
},
pagination:{
el: ".swiper-pagination",
clickable: true,
},
loop:true,
}); 
$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
});


