"use strict";

//jak mozna odnajdywac elementy
//za pomoca indentyfiatora elementu - metoda getElementByID 
//za pomoca  klasy - getElementByClassName
//za pomoca tagu elementu  -getEkementByTagName
//za pomoca  seketora CSS  - 

//relacja miedzy wezlami/nodami 
//rodzic |(parent)  -w stosunku do innego wezla
//rodzeństwem (sibiling) - dla innego wezla
//dzieckiem (child)  -w stosunku do innego wezla
//dzieki dom mozna dostac sie do kazego elementu Js

//.parentElement  lub .parentNode

//chcemy przupisac rodzica paragrafy
var paragraphParent = document.getElementsByTagName("p")[0].parentNode;  // getElementsByTagName - nie zwróci nam konkretnego obiektu tylko 																				element tablicy, wiec musimy sie odwołać do odpowiedniego elementu

console.log(paragraphParent);

//childNodes  -listuje wszystkie wezly potomne
//childNodes[nodenumber]
//children   - tylko jesli sa elementami htmlnas interesuje tylko html child, wiec children, ktory nam zwraca tablice i chcemy element 2 z tablicy wiec children[1];
//firstChild - pierwsze dziecko danego węzła
//lastChild - ostatnie dziecko danego węzla

//chcemy przypisac pierwszy element potomny

var secondChild = document.getElementById("parFirst").children[1];
console.log(secondChild);


//previousSibling - poprzedni  element tego wezla , ktory ma tego samego rodzica czyli jest to rodzenstwo dla tego paragrafu
//nextSibling  - nastepny element tego wezla , ktory ma tego samego rodzica czyli jest to rodzenstwo dla tego paragrafu

var sibling = document.getElementById("parFirst").children[0].nextElementSibling;
console.log(sibling);

//wlasciwosc nodeType - zwraca 1,2,3,8,9 - czyli zwraca element html np 1
