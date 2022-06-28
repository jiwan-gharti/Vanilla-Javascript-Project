
console.log('Bang Bang');

var scroll1 = window.pageYOffset;

window.onscroll = function(){	
	var scroll2 = window.pageYOffset;
	// console.log(scroll2)
	if(scroll1 > scroll2){
		document.querySelector("nav").style.top = "0";
	}else{
		document.querySelector("nav").style.top = "-100px";
	}
	scroll1 = scroll2;
}

window.onscroll = function(){
	let winscroll = document.documentElement.scrollTop;
	console.log("scroll top : ", winscroll)

	let totalHeight = document.documentElement.scrollHeight;
	console.log("total Height : ", totalHeight)

	let clientHeight = document.documentElement.clientHeight;
	console.log("Client Height : ", clientHeight)

	let innerHeight = window.innerHeight;
	console.log("Inner Height : ", innerHeight)


	var value = winscroll / (totalHeight - innerHeight) * 100


	document.querySelector('.scroll-bar').style.width = value + "%";	
}