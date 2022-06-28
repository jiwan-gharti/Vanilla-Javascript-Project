const btns = document.querySelectorAll(".btn");
// const tabContents = document.querySelectorAll(".tab-content")

btns.forEach((btn) =>{
	btn.addEventListener("click", ()=>{

	btns.forEach((btn)=> btn.classList.remove("active"))
	btn.classList.add("active");
	console.log(btn.dataset)

	// tabContents.forEach((tabContent) => tabContent.classList.remove("active"))

	// ---------------------------------------------------------------
	const tabContents = document.querySelectorAll(".tab-content")
	tabContents.forEach((tabContent) => tabContent.className = tabContent.className.replace("active",""))

	// -------------------------------------------------------------------

	document.querySelector(btn.dataset.targetTab).classList.add('active')

	});
});