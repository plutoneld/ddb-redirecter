if (true) {
	/* Create the floating menu div*/
	var myFloatingMenu = document.createElement("DIV");
	myFloatingMenu.className = "myFloatingMenu";

	/* Check if ToC is created */
	if (sessionStorage.my_menu) {
		myFloatingMenu.innerHTML = sessionStorage.my_menu;
	} else {
		sessionStorage.my_menu = "";
		sessionStorage.menuTocList = "false";

		var toc = "";
		/* Create 'View introduction' menu element */
		var intro = document.getElementsByClassName("compendium-toc-blockquote")[0].getElementsByTagName("a")[1];
		sessionStorage.my_menu = '<div class="myIntroButton"><a style="color:#47D18C;" href="' + intro.href + '">' + intro.innerText + '</a></div>';

		/* Copy ToC from document. There's two different types of ToCs:
		compendium-toc-list as used on PHB and DMG etc
		compendium-toc-full-text as used on MM, LMoP, XGtE etc*/
		toc = document.getElementsByClassName("compendium-toc-list")[0];
		
		if (typeof toc === "undefined" || toc.length == 0) {
			sessionStorage.menuTocList = "false";
			toc = document.getElementsByClassName("compendium-toc-full-text")[0];
			/* Number of child items and how many columns are used: 
			MM = 57 => 5
			Basic = 39 => 4
			HotDQ = 20 => 3
			XGtE = 5 => 3
			LMoP = 15 => 3
			*/
			if (toc.childElementCount < 25)
				sessionStorage.numColumns = "3";
			else if (toc.childElementCount < 45) 
				sessionStorage.numColumns = "4";
			else	
				sessionStorage.numColumns = "5";

		} else {
			sessionStorage.menuTocList = "true";
		}

		sessionStorage.my_menu += toc.innerHTML;
		
		myFloatingMenu.innerHTML = sessionStorage.my_menu;
	}

	/* The two different ToCs use different CSS */
	if (sessionStorage.menuTocList == "true") {
		myFloatingMenu.style.display = "none";
		myFloatingMenu.style.flexWrap = "wrap";
		myFloatingMenu.style.columnCount = "auto";
	} else {
		myFloatingMenu.style.display = "none";
		myFloatingMenu.style.flex = "1 1 0%";
		myFloatingMenu.style.columnCount = sessionStorage.numColumns;
	}

	/* Add the floating menu to the document and hide/show with the M key */
	document.body.appendChild(myFloatingMenu);
	document.addEventListener("keypress", showMenuFunction);

	function showMenuFunction(myKeyEvent){
		if (myKeyEvent.key == "m" || myKeyEvent.key == "M") {
			var display = document.getElementsByClassName("myFloatingMenu")[0].style.display;
			if (display == "none") {
				if (sessionStorage.menuTocList == "true") 
					document.getElementsByClassName("myFloatingMenu")[0].style.display = "flex";
				else
					document.getElementsByClassName("myFloatingMenu")[0].style.display = "inline";
			} else
				document.getElementsByClassName("myFloatingMenu")[0].style.display = "none";
		}
	}

	/* Change number of columns when window is smaller */
	function changeColumnsFunction(x) {
		if (sessionStorage.menuTocList == "false")
			if (x.matches) { // If media query matches
				myFloatingMenu.style.columnCount = sessionStorage.numColumns;
			} else {
				myFloatingMenu.style.columnCount = sessionStorage.numColumns - 1;
			}
	}
	
	var x = window.matchMedia("(min-width: 800px)")
	changeColumnsFunction(x)
	x.addListener(changeColumnsFunction)
}
