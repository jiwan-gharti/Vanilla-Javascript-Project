console.log("bang bang pagination!!")

var ulList = document.querySelector(".list-items");
let totalPage = 20;
function pagination(totalPage, page){
	let beforePage = page - 1;
	let afterPage = page + 1;
	let liTag = [];
	let activeLi;
	if(page > 1){
		liTag += `<li class='prev btn' onclick = "pagination(totalPage, ${page - 1})"><span><i class="fa fa-angle-left" aria-hidden="true"></i> Prev</span></li>`;
	}
	for(let pageLength = beforePage; pageLength <= afterPage; pageLength++){
		if(pageLength == page){
			activeLi = 'active';
		}else{
			activeLi = '';
		}
		liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
	}

	if(beforePage)

	if(page < totalPage){
		console.log('for last')
		liTag += `<li class='next btn' onclick = "pagination(totalPage, ${page + 1})"><span>Next <i class="fa fa-angle-right" aria-hidden="true"></i></span></li>`;
	}
	ulList.innerHTML = liTag;
}

pagination(totalPage,5)