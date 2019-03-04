//URL: www.dndbeyond.com/profile/*/characters/

function widthMediaQuery(x) {
	if (x.matches) { // If media query matches
		document.getElementsByClassName("body-rpgcharacter-sheet")[0].style.backgroundPosition = "center 116px";
	} else if (window.matchMedia("(min-width: 1024px)").matches) {
		document.getElementsByClassName("body-rpgcharacter-sheet")[0].style.backgroundPosition = "center 94px";
	} else if (window.matchMedia("(min-width: 768px)").matches) {
		document.getElementsByClassName("body-rpgcharacter-sheet")[0].style.backgroundPosition = "center 94px";
		window.setTimeout(function() {
			document.getElementById("site-main").style.paddingTop = "0px";
		}, 2000);
	} else if (window.matchMedia("(max-width: 767px)").matches) {
		window.setTimeout(function() {
			alert("hej");
			document.getElementsByClassName("ct-character-sheet-mobile__header")[0].style.top = "0px";
			document.getElementById("site-main").style.paddingTop = "0px";
		}, 2000);	
	}
}
	
var x = window.matchMedia("(min-width: 1200px)");
widthMediaQuery(x);
x.addListener(widthMediaQuery);
