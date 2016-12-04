"use strict";

//eventy - zdarzenia, ktore uzytkownik wyowluje podczas odwiedzania strony
//js posiada gotowy zestaw predefiniowanych zdarzeń 
//korzystajac z eventu musimy! miec pewnosc czy elementy są załadowane: 

//document.addEventListener("DOMContentLoaded", function()) {} -niech wszystko sie zaladuje a potem sa wykonywane zdarzenia,jesli dodajemu skrypty na koncu dokumentu nie jest to potrzene gdyz wszystko sie wczyta

//click - gdy obiekt zostal klikniety
//dbclick - podwojne klikniecie
//mouseover - gdy kursor znalaz sie na obiekcie
//mouseout - gdy zjechac z obiektu 
//keydown - gdy klawisz zostanie wcisniety
//keyup - klawisz puszczony 

//obsluga: aby zdarzenie bylo dostepne nalezy go zarejestrowac
//bezposrednio w HTML
//np <a href="#" onclick="alert('click')"> kilknij </a>
//DOM HTML document.getElementById("link").onclick="showText";
//za pomoca AddEventListener()
//np. document.getElementById("link").addEventListener("click", showText);

function showText(e) {
	console.log("click");
	alert("kilknieto kolejny link");
	e.preventDefault();  //nic sie nie wykonuje
}

var secondLink = document.getElementById("parFirst").children[1];
secondLink.onclick = showText;

var thirdLink = document.getElementById("parFirst").children[2].addEventListener("click", showText);


var sizeHeader = document.getElementById("main-header");
sizeHeader.onmouseover =changeSize;  //przedrostkiem on wywolujemy zdarzenie, natmiast w ifie jest nazwa samego zdarzenia
sizeHeader.onmouseout = changeSize;

function changeSize(e)	{    //pseudoobiekt ktory powstaje w momencie wykonania zdarzenia, ten pseudoobiekt przekazujemy jako dzialanie funkcji
	//najczesciej uzywane jako e.preventDefault oraz e.stopPropagation 
	//console.log(typeof e.type); sprawdzam jaki typ zmiennej
	if (e.type == "mouseover") {
		sizeHeader.style.color="red";
	}else {
		sizeHeader.style.color="inherit";
	}
}

//propaginacja(?)

document.getElementsByTagName("header")[0].onclick = klikHeader;

function klikHeader () {
	alert("siema nie kliknales w Header");
}

document.getElementsByTagName("h1")[0].onclick = klikH1;

function klikH1 (e) {
	e.stopPropagation();  //zatrzymanie paginacji z header, i wyswietli sie tylko alert z klikH1, gdyz propagination zatrzymuje nadrzędne 								zdarzenie
	alert("siema nie kliknales w h1");
}

