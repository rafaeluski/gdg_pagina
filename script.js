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
document.querySelector("#check").addEventListener("click",function(){
	let bulb = document.querySelector("#light");
	if(this.checked)
		bulb.classList.add("on");
	else
		bulb.classList.remove("on");
});



