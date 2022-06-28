const btns = document.querySelectorAll(".btn");

btns.forEach((btn), =>{
	btn.addEventListener("click", ()=>{
	btn.classList.add("active");

	});
});