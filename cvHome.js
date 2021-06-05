let textBonjour = "Bonjour, Djaoued enchanté.";
let textDeveloppeur = "Développeur web full-stack senior."
let textDevenir = "en devenir."
let requete1 = document.querySelector('#requete1');
let requete2 = document.querySelector('#requete2');
let requete = document.querySelector('.requete');


let tableauBonjour = textBonjour.split("");
let tableauDeveloppeur = textDeveloppeur.split("");
let tableauDevenir = textDevenir.split("");

let bonjour = document.querySelector('.bonjour');
let developpeur = document.querySelector('.developpeur');
let tempsinterval;
let flag = 0;

function interval(){
    if(tableauBonjour.length > 0){
        bonjour.innerHTML += tableauBonjour.shift();//shift recupere le 1er element du tableau et le retire du tableau. donc quand on ajoute tableau.shift , on ajoute le 1er element que shift a retirer

    }else if(tableauBonjour.length == 0 && tableauDeveloppeur.length > 0){
        developpeur.innerHTML += tableauDeveloppeur.shift();
    }else if(textDeveloppeur !== "Développeur web "){
        var r = textDeveloppeur.slice(0, -1);
        textDeveloppeur= r ;
        developpeur.innerHTML = r;
        flag ++;
    }else if(flag===18 && tableauDevenir.length>0){
        developpeur.innerHTML += tableauDevenir.shift();
    }else if(tableauDevenir.length ==0){
        requete.style.opacity = "1";

    }
        
        
    else{
        clearTimeout(tempsinterval);
    }
    tempsinterval = setTimeout('interval()', 70);
}
interval();



(function () {
    "use strict";
    
    // define variables
    var items = document.querySelectorAll(".timeline li");
    
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }
    
    function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
        }
    }
    }
    
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
    })();

    // var cvbutton = document.querySelector('.cvbutton');
    // cvbutton.addEventListener('click', function(){
    //     window.open('')
    // })