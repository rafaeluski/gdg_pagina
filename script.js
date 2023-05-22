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
        delay: 500,
        disableOnInteraction: false,
},
pagination:{
el: ".swiper-pagination",
clickable: true,
},
loop:true,
}); 
$('ul.tabs li a:first').addClass('active'); 
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});

document.querySelector("#check").addEventListener("click",function(){
        let bulb = document.querySelector("#light");
        if(this.checked)
            bulb.classList.add("on");
        else
            bulb.classList.remove("on");
    });
