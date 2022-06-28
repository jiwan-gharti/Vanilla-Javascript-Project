


const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


toggleBtn.addEventListener('click',function(){
	console.log(links.classList);
	console.log(links.classList.contains('random'));
	// if(links.classList.contains('show-links')){
	// 	links.classList.remove('show-links');
	// }else{
	// 	links.classList.add('show-links');
	// }
	// or
	links.classList.toggle('show-links')
});