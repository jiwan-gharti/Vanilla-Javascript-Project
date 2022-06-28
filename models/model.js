const modelBtn = document.querySelector('.model-btn');
const closeBtn = document.querySelector('.close-btn');
const modelOverlay = document.querySelector('.model-overlay');
// const modelOverlay = document.querySelector('.close-btn');


modelBtn.addEventListener('click', function(){
	modelOverlay.classList.add("show-model");
});

closeBtn.addEventListener('click', function(){
	modelOverlay.classList.remove("show-model");
});