//URL: www.dndbeyond.com/sources

/*
	Toggle different elements by pressing the keys below:
	S = Sitebar
	M = Menus
	B = Breadcrumbs in Compendiums
	F = Footer

*/

//Set session storage variables to control show/hide for elements between page changes
if (sessionStorage.getItem("sitebar") === null)
	sessionStorage.sitebar = "no";
if (sessionStorage.getItem("menus") === null)
	sessionStorage.menus = "no";
if (sessionStorage.getItem("breadcrumbs") === null)
	sessionStorage.breadcrumbs = "no";
if (sessionStorage.getItem("footer") === null)
	sessionStorage.footer = "no";
	
//Window size variable, used to control CSS media rules
var x = window.matchMedia("screen and (max-width: 1023px)");


// Check if breadcrumbs are available on current page and set state
var breadcrumbsOnPage = false;
if (!(typeof document.getElementsByClassName("b-breadcrumb")[0] === 'undefined')) {
	breadcrumbsOnPage = true;

	if (sessionStorage.breadcrumbs == "no")
		document.getElementsByClassName("b-breadcrumb")[0].style.display = "none";
	else
		document.getElementsByClassName("b-breadcrumb")[0].style.display = "block";
} 

// Set state of site bar
if (sessionStorage.sitebar == "no") {
	document.getElementsByClassName("site-bar")[0].style.display = "none";
	changeMobileMenuFunction(x);
} else {
	document.getElementsByClassName("site-bar")[0].style.display = "block";
	if (x.matches) {
		document.getElementsByTagName("header")[0].style.display = "block";
		document.getElementById("site-main").style.paddingTop = "47px";
	}
}

// Set state of footer
if (sessionStorage.footer == "no")
	document.getElementsByClassName("ddb-footer")[0].style.display = "none";
else
	document.getElementsByClassName("ddb-footer")[0].style.display = "flex";

// Set state of menus
if (sessionStorage.menus == "no")
	document.getElementById("mega-menu-target").style.display = "none";
else
	document.getElementById("mega-menu-target").style.display = "block";

/* Add key press listener to the document */
document.addEventListener("keypress", toggleMenus);
/* Toogle function executed on key press event */
function toggleMenus(myKeyEvent){
	switch(myKeyEvent.key) {
		// Breadcrumbs
		case "b":
		case "B":
			if (!breadcrumbsOnPage)
				break;
			
			if (document.getElementsByClassName("b-breadcrumb")[0].style.display == "none") {
				document.getElementsByClassName("b-breadcrumb")[0].style.display = "block";
				sessionStorage.breadcrumbs = "yes";
			} else {
				document.getElementsByClassName("b-breadcrumb")[0].style.display = "none";
				sessionStorage.breadcrumbs = "no";
			}
			break;
		// Site bar
		case "s":
		case "S":
			if (document.getElementsByClassName("site-bar")[0].style.display == "none") {
				document.getElementsByClassName("site-bar")[0].style.display = "block";
				sessionStorage.sitebar = "yes";
				//Mobile menus?
				if (x.matches) {
					document.getElementsByTagName("header")[0].style.display = "block";
					document.getElementById("site-main").style.paddingTop = "47px";
				}
					
			} else {
				document.getElementsByClassName("site-bar")[0].style.display = "none";
				sessionStorage.sitebar = "no";
				changeMobileMenuFunction(x);
			}
			break;
		// Mega menus
		case "m":
		case "M":
			if (document.getElementById("mega-menu-target").style.display == "none") {
				document.getElementById("mega-menu-target").style.display = "block";
				sessionStorage.menus = "yes";
			} else {
				document.getElementById("mega-menu-target").style.display = "none";
				sessionStorage.menus = "no";
			}
			break;
		// Footer
		case "f":
		case "F":
			if (document.getElementsByClassName("ddb-footer")[0].style.display == "none") {
				document.getElementsByClassName("ddb-footer")[0].style.display = "flex";
				sessionStorage.footer = "yes";
			} else {
				document.getElementsByClassName("ddb-footer")[0].style.display = "none";
				sessionStorage.footer = "no";
			}
			break;
		case "h":
		case "H":
			alert("S: Toggle Site bar\nM: Toogle Menu\nB: Toggle Breadcrumbs\nF: Toggle Footer");
			break;
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
