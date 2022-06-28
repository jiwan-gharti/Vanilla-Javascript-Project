let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item){
	item.addEventListener("click", function(){
		console.log(item.classList);
		let styles = item.classList;
		if(styles.contains('decrease')){
			count -= 1;
		}
		if(styles.contains('reset')){
			count = 0;
		}
		if(styles.contains('increase')){
			count += 1;
		}
		if(count < 0){
			value.style.color = "red";
		}
		if(count === 0){
			value.style.color = "black";
		}
		if(count > 0){
			value.style.color = "green";
		}
		value.textContent = count;
	});
	
});
	

