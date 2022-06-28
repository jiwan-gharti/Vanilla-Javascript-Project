

const btns = document.querySelectorAll('.question-btn'); 

btns.forEach(function(btn){
	btn.addEventListener("click",function(){
		// console.log(btn.parentElement.parentElement);
		const question = btn.parentElement.parentElement;

		btns.forEach(function(item){
			
			if(item !== btn){
				console.log(item);
				item.parentElement.parentElement.classList.remove('show-text');
			}
		});

		question.classList.toggle('show-text');
	});
});





