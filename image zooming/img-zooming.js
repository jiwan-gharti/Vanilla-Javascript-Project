console.log('bang bang');

var container = document.querySelector('.container');
var image = document.querySelector('.image');

container.onmousemove = function(event){
	console.log(container.offsetLeft)
	clientX = event.clientX - container.offsetLeft;
	clientY = event.clientY - container.offsetTop;

	imageWidth = container.offsetWidth;
	imageHeight = container.offsetHeight;

	clientX = clientX / imageWidth * 100
	clientY = clientY / imageHeight * 100
	// console.log(clientX,clientY)
	image.style.transform = "translate(-" + clientX +"%,-" + clientY +"%) scale(2)"
}
container.onmouseleave = function(){
	image.style.transform = "translate(0%,0%) scale(1)"
}
