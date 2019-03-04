//URL: www.dndbeyond.com/sources

/*
	Compendium Menu is toggled by pressing the M key.
	
	If you want to disable it entirely, change the below 'true' to 'false'
*/
	document.addEventListener("keypress", toggleBreadCrumbs);
	document.getElementsByClassName("b-breadcrumb")[0].style.display = "none";

	function toggleBreadCrumbs(myKeyEvent){
		if (myKeyEvent.key == "b" || myKeyEvent.key == "B") {
			if (document.getElementsByClassName("b-breadcrumb")[0].style.display == "none")
				document.getElementsByClassName("b-breadcrumb")[0].style.display = "block";
			else
				document.getElementsByClassName("b-breadcrumb")[0].style.display = "none";
		}
	}

	/* Change top padding when responsive design active */
	function changePaddingFunction(x) {
			if (x.matches) { // If media query matches
				window.setTimeout(function() {
					document.getElementById("site-main").style.paddingTop = "0px";
				}, 1000);
			}
	}
	
	var x = window.matchMedia("screen and (max-width: 1023px)");
	changePaddingFunction(x);
	x.addListener(changePaddingFunction);
