let menu = document.jquerySelector('#menu-bars');
let navbar = document.jquerySelector('.navbar');

menu.onclick = () =>{
	menu.classList.toogle('fa-times');
	menu.classList.toogle('active');
}
window.onscroll = () =>{
	menu.classList.remove('fa-times');
	menu.classList.remove('active');
}
document.jquerySelector('#search-icon').onclick = () =>{
	document.jquerySelector('#search-icon').classList.onclick = ()=>{

	}
}
var swiper = new swiper (".homeslider",{
	spaceBetween: 30,
	centeredSlides: true,
	autplay:{
		delay: 7500,
		disableOnInteraction: false,
	},
	pagination:{
		el: ".swiper-pagination",
		clickable: true,
	},
	loop: true,
	
});



