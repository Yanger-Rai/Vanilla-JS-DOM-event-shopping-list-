var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementById("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.setAttribute('onClick', 'addClass(this)');	

	var anchorTag = document.createElement("a");
	anchorTag.appendChild(document.createTextNode(input.value));
	anchorTag.setAttribute('href','#');
	li.appendChild(anchorTag);

	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.setAttribute("onClick", "deleteLi(this)")
	li.appendChild(button);

	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteLi(event) {
	event.parentElement.remove();
}

function addClass(e){
	e.classList.toggle('done')
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

