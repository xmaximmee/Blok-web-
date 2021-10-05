
// code voor hamburgermenu
// code van codepen uit de les
var deButton = document.querySelector("header>ul:first-of-type li:first-of-type button");

deButton.addEventListener("click", doeFormNeerEnOp); /* als je op de button klikt wordt de functie "doFormNeerEnOp uitgevoerd*/

function doeFormNeerEnOp(){ 
    var hetFormulier = document.querySelector("header nav");
    hetFormulier.classList.toggle("toonForm"); /* aan de nav wordt de class toonform toegevoegd*/ 


    var Hamburgerimg = document.querySelector("header>ul:first-of-type li:first-of-type button img");
    if(Hamburgerimg.getAttribute("src") == "images/menu.svg"){ /* als scr gelijk is aan images/menu.svg wordt de code uitgevoerd*/
       Hamburgerimg.src = "images/cancel.png"; /* als de bovenste regel klopt dat wordt de img het cencel icoontje*/
    }
    else if(Hamburgerimg.getAttribute("src") == "images/cancel.png"){
        Hamburgerimg.src = "images/menu.svg";
    }
}

////


var kaching = new Audio('kaching.mp3');
var product = document.querySelectorAll("section.productenlijst ul li a");

product.forEach(function(elem) {
   elem.addEventListener("click", function() {
        kaching.play();
   });
});


   