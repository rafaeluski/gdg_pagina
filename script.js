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


