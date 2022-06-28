console.log('bang bang');

const inputBox = document.querySelector('.inputfield input');
const addBtn = document.querySelector('.inputfield i');
const todolist = document.querySelector('.todolist');
const pendingNo = document.querySelector('.pendingNo');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = () =>{
	let userData = inputBox.value;
	console.log(userData)
	if (userData.trim() != 0){
		addBtn.classList.add("active");
	}else{
		addBtn.classList.remove("active")
	}
}

showTasks();

addBtn.onclick = () =>{
	let userData = inputBox.value;
	let getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage == null){
		listArr = [];
	}else{
		listArr = JSON.parse(getLocalStorage);
	}
	listArr.push(userData);
	inputBox.value = '';
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTasks();
}

function showTasks(){
	let getLocalStorage = localStorage.getItem("New Todo");
	if (getLocalStorage == null){
		listArr = [];
	}else{
		listArr = JSON.parse(getLocalStorage);
	}
	let newLiTag = '';
	let len = listArr.length
	pendingNo.textContent = len;
	if(listArr.length > 0){
		deleteAllBtn.classList.add("active");
	}else{
		deleteAllBtn.classList.remove("active");
	}
	listArr.forEach((element, index) => {
		newLiTag += `<li>${element}<span onclick="removeItem(${index});"><i class="fa fa-trash-o" aria-hidden="true"></i></span></s></li>`;
	});
	todolist.innerHTML = newLiTag;

}

function removeItem(index){
	let getLocalStorage = localStorage.getItem('New Todo');
	listArr = JSON.parse(getLocalStorage);
	listArr.splice(index, 1);

	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
}

deleteAllBtn.onclick = () =>{
	listArr = [];
	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();

}