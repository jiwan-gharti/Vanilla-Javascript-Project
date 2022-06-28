console.log('bang bang');

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links-container');

toggle.addEventListener('click', function(){
	links.classList.toggle('toggle');
});

const date = document.getElementById("date");
date.textContent = new Date().getFullYear();