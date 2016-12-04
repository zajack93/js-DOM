"use strict";

var div = document.getElementById("parSecond");  //odwolujemy sie do diva i w cudzyslowie podajemy nazwe ID
console.log(div);

var linkiPoTag = document.getElementsByTagName("a");
console.log(linkiPoTag);

var linkiPoKlasie = document.getElementsByClassName("link");
console.log(linkiPoKlasie);

var drugiLink = linkiPoKlasie[1];
console.log(drugiLink);

for ( var i=0; i<linkiPoKlasie.length; i++) {
	console.log(linkiPoKlasie[i] + "to jest link: " + (i+1));
}

//jak mozna odnajdywac elementy
//za pomoca indentyfiatora elementu - metoda getElementByID 
//za pomoca  klasy - getElementByClassName
//za pomoca tagu elementu  -getEkementByTagName
//za pomoca  seketora CSS  - 