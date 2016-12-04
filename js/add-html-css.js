"use strict"; 

//innerHTML - mozna w wybranym elemencie pobrac lub ustawic kod html ktory on zawiera 
//document.getElemendById("jakiesID").inner.HTML = "tekst do elementu";
//innerText 
//className - zmieniac lub podmieniac nazwy klas

var mainHeader = document.getElementById("main-header");

mainHeader.innerHTML = "Treść nagłówka";

//document.getElementById(id).attribute = nowaWartosc;


var link = document.getElementsByClassName("link")[0];

link.href= "http://akademia108.pl";

link.className = "nowa-klasa";

//zmiana styli  document.getElementByID(id).style.wlasnoscCSS = nowaWartosc;
//

mainHeader.style.color="#56ff36";