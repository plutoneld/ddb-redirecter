//URL: www.dndbeyond.com/sources

/*
	Toggle different elements by pressing the keys below:
	S = Site bar at the top
	M = Site Menus
	F = Footer

	T = Sidebar Menu
	B = Breadcrumbs in Compendiums
	D = Dark mode

	R = Reading mode
*/

//Set session storage variables to control show/hide for elements between page changes
if (sessionStorage.sitebar === null)
	sessionStorage.sitebar = "no";
if (sessionStorage.menus === null)
	sessionStorage.menus = "no";
if (sessionStorage.breadcrumbs === null)
	sessionStorage.breadcrumbs = "no";
if (sessionStorage.footer === null)
	sessionStorage.footer = "no";
if (sessionStorage.darkmode === null)
	sessionStorage.darkmode = "no";
if (sessionStorage.sidebar === null)
	sessionStorage.sidebar = "no";
if (sessionStorage.readingmode === null)
	sessionStorage.readingmode = "no";
	
//Window size variable, used to control CSS media rules
var x = window.matchMedia("screen and (max-width: 1023px)");

// Check if breadcrumbs are available on current page and set state
var breadcrumbsOnPage = false;
if (typeof document.getElementsByClassName("b-breadcrumb")[0] !== 'undefined') {
	breadcrumbsOnPage = true;
} 

// Set states
setStates();

/* Add key press listener to the document */
document.addEventListener("keypress", toggleElems);

setTimeout(function(){
	document.body.style.display = "block";
}, 500);

/* Toogle function executed on key press event */
function toggleElems(myKeyEvent){
	switch(myKeyEvent.key) {
		case "b":
		case "B":
			breadcrumbs(true);
			break;
		case "s":
		case "S":
			siteBar(true);
			break;
		case "m":
		case "M":
			megaMenus(true);
			break;
		case "f":
		case "F":
			footer(true);
			break;
		case "d":
		case "D":
			darkMode(true);
			break;
		case "t":
		case "T":
			sideBar(true);
			break;
		case "r":
		case "R":
			readingMode(true);
			break;
		case "h":
		case "H":
			alert("R = Toggle Reading mode (hide/show all)\n* Site options\nS: Toggle Site bar at the top\nM: Toogle Site Menu\nF: Toggle Footer\n* Compendium options\nB: Toggle Breadcrumbs\nT: Toggle Sidebar Menu\nD: Toggle dark mode");
			break;
	}
}

function setStates() {
	darkMode(false);
	siteBar(false);
	footer(false);
	megaMenus(false);
	breadcrumbs(false);
	sideBar(false);
}

function readingMode(toggle) {
	if (toggle)
		if (sessionStorage.readingmode == "no")
			sessionStorage.readingmode = "yes";
		else
			sessionStorage.readingmode = "no";

	if (sessionStorage.readingmode == "yes") {
		sessionStorage.sitebar = "no";
		sessionStorage.menus = "no";
		sessionStorage.breadcrumbs = "no";
		sessionStorage.footer = "no";
		sessionStorage.darkmode = "no";
		sessionStorage.sidebar = "no";
	} else {
		sessionStorage.sitebar = "yes";
		sessionStorage.menus = "yes";
		sessionStorage.breadcrumbs = "yes";
		sessionStorage.footer = "yes";
		sessionStorage.darkmode = "no";
		sessionStorage.sidebar = "yes";
	}

	setStates();
}

function sideBar(toggle) {
	if (toggle)
		if (sessionStorage.sidebar == "no")
			sessionStorage.sidebar= "yes";
		else
			sessionStorage.sidebar = "no";

	if (sessionStorage.sidebar == "yes") {
		document.getElementsByClassName("sidebar-menu")[0].style.display = "block";
	} else {
		document.getElementsByClassName("sidebar-menu")[0].style.display = "none";
	}
}

function breadcrumbs(toggle) {
	if (toggle)
		if (sessionStorage.breadcrumbs == "no")
			sessionStorage.breadcrumbs = "yes";
		else
			sessionStorage.breadcrumbs = "no";	
			
	if (breadcrumbsOnPage)
		if (sessionStorage.breadcrumbs == "yes") {
			document.getElementsByClassName("b-breadcrumb")[0].style.display = "block";
		} else {
			document.getElementsByClassName("b-breadcrumb")[0].style.display = "none";
		}
}

function megaMenus(toggle) {
	if (toggle)
		if (sessionStorage.menus == "no")
			sessionStorage.menus = "yes";
		else
			sessionStorage.menus = "no";
			
	if (sessionStorage.menus == "yes")
		document.getElementById("mega-menu-target").style.display = "block";
	else
		document.getElementById("mega-menu-target").style.display = "none";
}

function footer(toggle) {
	if (toggle)
		if (sessionStorage.footer == "no")
			sessionStorage.footer = "yes";
		else
			sessionStorage.footer = "no";
			
	if (sessionStorage.footer == "yes")
		document.getElementsByClassName("ddb-footer")[0].style.display = "flex";
	else
		document.getElementsByClassName("ddb-footer")[0].style.display = "none";
}

function siteBar(toggle) {
	if (toggle)
		if (sessionStorage.sitebar == "no")
			sessionStorage.sitebar= "yes";
		else
			sessionStorage.sitebar = "no";

	if (sessionStorage.sitebar == "yes") {
		document.getElementsByClassName("site-bar")[0].style.display = "block";
		if (x.matches) {
			document.getElementsByTagName("header")[0].style.display = "block";
			document.getElementById("site-main").style.paddingTop = "47px";
		}
	} else {
		document.getElementsByClassName("site-bar")[0].style.display = "none";
		changeMobileMenuFunction(x);
	}
}

function darkMode(toggle) {
	if (toggle)
		if (sessionStorage.darkmode == "no")
			sessionStorage.darkmode = "yes";
		else
			sessionStorage.darkmode = "no";
			
	if (sessionStorage.darkmode == "yes") {
		document.getElementsByTagName("body")[0].style.backgroundColor = "black";
		document.getElementById("site-main").style.backgroundColor = "black";
		document.getElementById("content").style.color = "grey";
		var headers = document.getElementById("content").querySelectorAll("h1, h2, h3, h4");
		var numHeaders = headers.length;
		for (var i=0; i < numHeaders; i++) {
			headers[i].style.color = "grey";
		}
	} else {
		document.getElementById("site-main").style.backgroundColor = "";
		document.getElementById("content").style.color = "black";
		var headers = document.getElementById("content").querySelectorAll("h1, h2, h3, h4");
		var numHeaders = headers.length;
		for (var i=0; i < numHeaders; i++) {
			headers[i].style.color = "black";
		}
	}
}

function miniToC() {
	var cur_url = window.location.pathname;
	var path_pieces = cur_url.split('/');
	var search_for_headings = '';
	var link_headings = '';
	
	//Check to see if where on a ToC
	if (path_pieces.length == 3) {
		sessionStorage.minitoc = '';
		
		switch (path_pieces[2]) {
			case 'phb':
			case 'dmg':
			case 'scag':
			case 'vgtm':
				search_for_headings = "h2";
				break;
			case 'basic-rules':
			case 'mm':
			case 'ggtr':
			case 'mtof':
			case 'wgte':
				search_for_headings = "h4";
				break;
			default:
				search_for_headings = "h3";
				break;
		}
		
		link_headings = document.getElementsByTagName(search_for_headings);
		
		for (var i = 0; i < link_headings.length;i++) {
			var link = link_headings[i].getElementsByTagName("a");
			if (link.length > 0)
				sessionStorage.minitoc = sessionStorage.minitoc + '<a href="' + link[0].href + '">' + link[0].innerHTML + '</a>';
		}
	} else if (path_pieces.length > 3 && typeof(sessionStorage.minitoc) !== 'undefined') {
		document.getElementById("footer-push").innerHTML = '<div class="dropdown"><button class="dropbtn">mini ToC</button><div class="dropdown-content">' + sessionStorage.minitoc + '</div></div>';
	}
}

/* Change top padding when responsive design active */
function changeMobileMenuFunction(x) {
		if (x.matches) { // If media query matches
			if (document.getElementsByClassName("site-bar")[0].style.display == "none") {
				window.setTimeout(function() {
					document.getElementById("site-main").style.paddingTop = "0px";
					document.getElementsByTagName("header")[0].style.display = "none";
				}, 2000);
			}
		}
}

changeMobileMenuFunction(x);
x.addListener(changeMobileMenuFunction);
miniToC();