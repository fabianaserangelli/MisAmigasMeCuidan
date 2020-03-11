function openPage(pageName,elmnt,color) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "";
	}
	document.getElementById(pageName).style.display = "block";
	elmnt.style.backgroundColor = color;
}

function myFunction() {
	$('#id-card').prepend(
		`<div class="column">
			<div class="card">
	  			<h3>Tarjeta</h3>
	  				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  		</div>
	  	</div>`);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();