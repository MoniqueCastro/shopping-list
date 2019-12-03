var button = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var myNodelist = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");

// Create a "x" button and append it to each list item

for (i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on the "x" button to hide the current list item
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Adds a line through a list item when clicking on it 
ul.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
	    ev.target.classList.toggle('done');
	}
}, false);


// Adds new list item
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className = "close";
  	span.appendChild(txt);
  	li.appendChild(span);

  	for (i = 0; i < close.length; i++) {
    	close[i].onclick = function() {
      		var div = this.parentElement;
      		div.style.display = "none";
    	}
  	}
}

// Adds by click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		
	}
}

// Adds by keypress
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);