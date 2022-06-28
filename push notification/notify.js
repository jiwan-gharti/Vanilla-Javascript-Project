
var btn = document.querySelector(".btn");
var icon = document.querySelector(".fa-comment");

btn.onclick = () =>{
	var add = Number(icon.getAttribute('count-value') || 0);
	add = add + 1
	icon.setAttribute("count-value", add)
	console.log('bang bang')
	icon.classList.add('add-counts');
}