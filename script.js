var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementById("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	/*Create li element and set the attribute onclick that calls the function "addClass"*/
	/*addclass is a function that toggles the class "done" - - see below*/
	var li = document.createElement("li");
	li.setAttribute('onClick', 'addClass(this)');	

	/*Add an anchor tag to make the li clickable*/
	var anchorTag = document.createElement("a");
	anchorTag.appendChild(document.createTextNode(input.value));
	anchorTag.setAttribute('href','#');
	li.appendChild(anchorTag);

	/*add a button beside li with onclick attribute that calls a function
	 to delete the particular li on an event when it gets clicked*/
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.setAttribute("onClick", "deleteLi(this)")
	li.appendChild(button);

	/*Add it under the parent unorderd list */
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

/* removes the parent element of the button which is li */
function deleteLi(event) {
	event.parentElement.remove();
}

/* toggle the class done -- it strikethrough*/
function addClass(event){
	event.classList.toggle('done')
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

