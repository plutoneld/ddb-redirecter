/* Links to be shown in the floating menu */
var links = [
	'<a href="https://www.dndbeyond.com">HOME</a>',
	'<a href="https://www.dndbeyond.com/search">SEARCH</a>',
	'',
	'RULES',
	'<a href="https://www.dndbeyond.com/compendium/rules/phb">PHB</a>',
	'<a href="https://www.dndbeyond.com/compendium/rules/dmg">DMG</a>',
	'<a href="https://www.dndbeyond.com/compendium/rules/mm">MM</a>',
	'<a href="https://www.dndbeyond.com/compendium/rules/scag">SCAG</a>',
	'<a href="https://www.dndbeyond.com/compendium/rules/xgte">XGtE</a>',
	'',
	'ADVENTURES',
	'<a href="https://www.dndbeyond.com/compendium/adventures/lmop">LMoP</a>',
	'<a href="https://www.dndbeyond.com/compendium/adventures/hotdq">HotDQ</a>',

	//DON'T TOUCH THE ROW BELOW, IT'S USED TO TOGGLE THE USER BUTTONS
	"<a style=\"font-size:0.75em;\" onclick=\"if(document.getElementsByClassName('site-interactions-group-user')[0].style.display != 'block'){document.getElementsByClassName('site-interactions-group-user')[0].style.display ='block'} else {document.getElementsByClassName('site-interactions-group-user')[0].style.display ='none'}\"><br/>Show User Menu</a>"
];



/* Insert link to Font used in floating menu*/
var fontLink = document.createElement("LINK");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css?family=Fredericka+the+Great";
document.getElementsByTagName("head")[0].appendChild(fontLink);

/* Create the floating menu and insert into document */
var electronFloatingMenu = document.createElement("DIV");
electronFloatingMenu.className = "electron-floating-menu";
electronFloatingMenu.innerHTML = links.join("<br/>");

document.body.appendChild(electronFloatingMenu);

electronFloatingMenu.onmouseenter = function(){document.getElementsByClassName("electron-floating-menu")[0].style.opacity = "1.0";};
electronFloatingMenu.onmouseleave = function(){document.getElementsByClassName("electron-floating-menu")[0].style.opacity = "0.0";};


/* Restore top row (logo, search box etc) and menus when not in a compendium */
if (document.URL.indexOf("compendium") == -1) {
	document.getElementsByClassName("site-bar")[0].style.display = "block"; /* Top row */
	document.getElementsByTagName("nav")[0].style.display = "block"; /* Menus */
}