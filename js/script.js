function dropWorld() {
	hideDropdownContents("woldDropdown");
	dropdown = document.getElementById("woldDropdown");
	toggleVisibility(dropdown);
}

function dropPractical() {
	hideDropdownContents("practicalDropdown");
	dropdown = document.getElementById("practicalDropdown");
	toggleVisibility(dropdown);
}

function dropReg() {
	hideDropdownContents("regDropdown");
	dropdown = document.getElementById("regDropdown");
	toggleVisibility(dropdown);
}

function dropEvent() {
	hideDropdownContents("eventDropdown");
	dropdown = document.getElementById("eventDropdown");
	toggleVisibility(dropdown);
}

function hideDropdownContents(name) {
	var drops = document.getElementsByClassName("dropdown-content");
	
	var idx;
	for (idx = 0; idx < drops.length; idx++) {
		if(drops[idx].id !== name) {
			drops[idx].style.display = 'none';
		}
	}
}

function showMenu() {
	var menu = document.getElementsByClassName("innertube")[0];
	toggleVisibility(menu);
}

function toggleVisibility(x) {
	console.debug(x.style.display);
	if (x.style.display === 'block') {
        x.style.display = 'none';
    } else if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
    }
}

window.onclick = function(event) {
  if (event.target.className !== 'dropbtn') {

	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.style.display !== 'none') {
		openDropdown.style.display = 'none';
	  }
	}
  }
}

//TODO: WHY does it not toggle correctly for the first click on page??
//this terrible hack makes it work. For now.
window.onload = function() {
	hideDropdownContents("thisIdDoesNotExist");
	
	var menu = document.getElementsByClassName("innertube")[0];
}