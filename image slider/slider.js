

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slide = document.querySelectorAll(".slide");
const slideContainer = document.querySelector(".slide-container");

const items = document.querySelectorAll(".item");

const slidewidth = slide[0].clientWidth;
var index = 0

slideContainer.insertAdjacentHTML("afterbegin",slide[slide.length - 1].outerHTML);
slideContainer.insertAdjacentHTML("beforeend",slide[0].outerHTML)

slideContainer.style.transform = `translate(${-slidewidth}px)`;		

nextBtn.addEventListener("click",() =>{
	slideContainer.style.transition = `all .5s ease-in-out`;
	index ++;
	slideContainer.style.transform = `translateX(${-slidewidth * (index + 1)}px)`;

	items.forEach((item) => item.classList.remove("active"));

	if(index > slide.length - 1){
	setTimeout(()=>{
		index = 0;
		slideContainer.style.transform = `translateX(${-slidewidth})`;
		items[index].classList.add("active");
		slideContainer.style.transition = "none";
	}, 300);
	}else{
		items[index].classList.add("active");
	}
});

prevBtn.addEventListener("click",() =>{
	slideContainer.style.transition = `all .5s ease-in-out`;
	index--;
	slideContainer.style.transform = `translateX(${-slidewidth * (index + 1)}px)`;

	items.forEach((item) => item.classList.remove("active"));

	if(index < 0){
	setTimeout(()=>{ 
		index = slide.length - 1;
		slideContainer.style.transform = `translateX(${-slidewidth * (index + 1)}px)`;
		items[index].classList.add("active");
		slideContainer.style.transition = "none";
	},300);
	}else{
		items[index].classList.add("active");
	}

});

items.forEach((item, i) =>{
	item.addEventListener("click",()=>{
		slideContainer.style.transition = `all .5s ease-in-out`;
		items.forEach((item) => item.classList.remove("active"));
		item.classList.add("active");

		index = i;
		slideContainer.style.transform = `translate(${-slidewidth * (index + 1)}px)`;
	});
});