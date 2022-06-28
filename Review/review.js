const reviews = [
	{
		'id':1,
		'name':'Ganga',
		'job': 'Banker',
		'img': 'E:/vanilla javascripts project/Review/1.jpg',
		'text':'GeoDjango intends to be a world-class geographic Web framework. Its goal is to make it as easy as possible to build GIS Web applications and harness the power of spatially enabled data'
	},
	{
		'id':2,
		'name':'Gadesh',
		'job': 'Army',
		'img': 'E:/vanilla javascripts project/Review/3.jpg',
		'text':'How-to guides are recipes. They guide you through the steps involved in addressing key problems and use-cases. They are more advanced than tutorials and assume some knowledge of how Django works'
	},
	{
		'id':3,
		'name':'Laxmi',
		'job': 'Teacher',
		'img': 'E:/vanilla javascripts project/Review/2.png',
		'text':'Reference guides contain technical reference for APIs and other aspects of Django’s machinery. They describe how it works and how to use it but assume that you have a basic understanding of key concepts.f spatially enabled data'
	},
	{
		'id':4,
		'name':'Sandesh',
		'job': 'Student',
		'img': 'E:/vanilla javascripts project/Review/4.png',
		'text':'GeoDjango intends to be a world-class geographic Web framework. Its goal is to make it as easy as possible to build GIS Web applications and harness the power of spatially enabled data'
	}
]

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

console.log('here');
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
	showPerson(currentItem);
});

function showPerson(person){
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

nextBtn.addEventListener('click',function(){
	currentItem += 1;
	if(currentItem > reviews.length - 1){
		currentItem = 0;
	}
	showPerson(currentItem)

});
prevBtn.addEventListener('click',function(){
	currentItem -= 1;
	if(currentItem < 0){
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem)

});
randomBtn.addEventListener('click',function(){
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem)

});