var myMenuOrder =  [
	"Sources",
	"Game Rules",
	"Creations",
	"Tools",
	"Marketplace",
	"Forums",
	"Media"
	];

/*******************************
 *  Don't touch the code below! 
 *******************************/

/* This is the original menu order */
var menuSortingHelper = [
	"Creations",
	"Game Rules",
	"Sources",
	"Tools",
	"Marketplace",
	"Media",
	"Forums"
	];

//Get the UL tag of the menu bar
var documentMenu = document.getElementsByClassName("mm-navbar__menu-list")[0];

//Check the desired position and recreate the menu with the new order
var item;
for (item in myMenuOrder) {
	var menuItem = myMenuOrder[item];
	var index = menuSortingHelper.indexOf(menuItem);
	
	if (index != -1) {
		menuSortingHelper.splice(index, 1);
		menuSortingHelper.push(menuItem);
		
		documentMenu.appendChild(documentMenu.childNodes[index]);
	}
}