
const colors = ["green","red","rgba(133,122,200)","#f15025"];

const hexs = [1,2,3,4,5,6,7,8,0,9,'A','B','C','D','E','F'];



const btn = document.getElementById('btn');
const color = document.querySelector(".color-value")

btn.addEventListener("click", function(){
	let hex = "#"
	for (let i = 0; i<6;i++){
		const randomNumber = getRandomNumber();
		hex += hexs[randomNumber];
	}

	

	// document.body.style.backgroundColor = colors[randomNumber];
	document.body.style.backgroundColor = hex;
	color.textContent = hex;
});

function getRandomNumber(){
	return Math.floor(Math.random() * hexs.length);
}
