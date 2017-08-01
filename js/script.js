function dropWorld() {
	hideDropdownContents();
	document.getElementById("woldDropdown").classList.toggle("show");
}

function dropPractical() {
	hideDropdownContents();
	document.getElementById("practicalDropdown").classList.toggle("show");
}

function dropReg() {
	hideDropdownContents();
	document.getElementById("regDropdown").classList.toggle("show");
}

function dropEvent() {
	hideDropdownContents();
	document.getElementById("eventDropdown").classList.toggle("show");
}

function hideDropdownContents() {
	var drops = document.getElementsByClassName("dropdown-content");
	var idx;
	for (idx = 0; idx < drops.length; idx++) {
		drops[idx].classList.remove('show');
	}
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  }
	}
  }
}