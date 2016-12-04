//do tworzenia nowych wezlow slua metody: doument.createElement(typ) - tworzy element  
//document.createTextNode(tekst) - tworzy tekst
//document.createAttribute(nazwa) - tworzy atrybut
//document.createComment(tekst) - tworzy komentarz

//var btn = document.createElement("button");

//wlasciwosc nodeType - zwraca 1,2,3,8,9 - czyli zwraca element html np 1
//po stworzeniu wezlow musimy dodac je do DOM 
//mozna to zrobic za pomoca wezlow :
//appendChild(nazwa nowego wezla) - dodaje wezel jako ostatnie dziecko
//insertBefore(nowyWezel, istniejacyWezel)- dodaje wezel przed innym dzieckiem danego wezla
//replaceChild(nowy, istniejacy)
//setAttributeNode(nowyAtrybut) - dodaje atrybut wezla
//setAtribute(nowyAtrybut, treśćAtrybutu)

"use strict"; 

var istniejacyWezel = document.getElementById("parFirst").children[2];
console.log(istniejacyWezel);

var newElement = document.createElement("p");
var newElementContent = document.createTextNode("To jest nowy paragraf");

newElement.appendChild(newElementContent); //do nowego elementu dodajemy wezel ktory doda mu trsci, ktora podalismy w nEC, ten element tu jest ale 												nie ma wlasciwosci content domyslnie

document.getElementById("parFirst").replaceChild(newElement, istniejacyWezel);

//var dodajEnter = document.getElementsByClassName("link");
//var newElementEnter = document.createElement("br");
//
//
//dodajEnter.insertAfter(newElementEnter, dodajEnter);



var allLinks = document.querySelectorAll("a");
//pobieramy sobie tablice ze wszystkimi linkami

//lub   var allLinks = document.getElementsByClassName("a"); 

for (var i=0; i<allLinks.length; i++) {
	var br = document.createElement("br");
	allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
	allLinks[i].removeAttribute("class");
}

//removeChild(wezel) -usuwa dziecko 
//removeAttribute(nazwaAtrybutu) - usuwa atrybut