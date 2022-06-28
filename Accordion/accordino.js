console.log("in js")


const btns = document.querySelectorAll(".accordino-header");
const acc_contents = document.querySelectorAll(".accordino-body");

btns.forEach((btn) =>{
	btn.addEventListener("click",(e) => {
		acc_contents.forEach((acc) =>{
			if(e.target.nextElementSibling !== acc && acc.classList.contains("active")){
				acc.classList.remove("active");
				btns.forEach((btn) => btn.classList.remove("active"))
			}
		});

		console.log(btn)
		btn.classList.toggle("active");
		const pannel = btn.nextElementSibling;
		pannel.classList.toggle("active")



	});
});

window.onclick = (e) =>{
	if(!e.target.matches(".accordino-header")){
		acc_contents.forEach((acc) => acc.classList.remove("active"))
		btns.forEach((btn) => btn.classList.remove("active"))
	}
}