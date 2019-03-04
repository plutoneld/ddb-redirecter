//URL: www.dndbeyond.com/campaigns

function widthMediaQuery(x) {
	if (x.matches) { // If media query matches
		document.getElementById("site-main").style.paddingTop = "0px";
	} else if (window.matchMedia("(min-width: 1024px)").matches) {
		document.getElementById("site-main").style.paddingTop = "0px";
	} else if (window.matchMedia("(min-width: 768px)").matches) {
		window.setTimeout(function() {
			document.getElementById("site-main").style.paddingTop = "0px";
		}, 1000);
	} else if (window.matchMedia("(max-width: 767px)").matches) {
		window.setTimeout(function() {
			document.getElementById("site-main").style.paddingTop = "0px";
		}, 1000);	
	}
}
	
var x = window.matchMedia("(min-width: 1200px)");
widthMediaQuery(x);
x.addListener(widthMediaQuery);
