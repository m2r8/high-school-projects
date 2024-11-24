//kolor tła
let t_white = document.querySelector('#W'); //button white
let t_lightgreen = document.querySelector('#G'); //button lightgreen
let t_lightseagreen = document.querySelector('#SG'); //button lightseagreen

t_white.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = "white";
});
t_lightgreen.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = "#b6f59f";
});
t_lightseagreen.addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = "#53cfc6";
});


//kolor czcionki
let czcionka = document.querySelector('.czcionka'); //select
czcionka.addEventListener('change', function() {
    
    let kolor = document.querySelector('.czcionka').value;
    if(kolor == "White") {
        document.querySelector('#tekst').style.color = "white";
    }
    else if(kolor == "Red") {
        document.querySelector('#tekst').style.color = "red";
    }
    else if (kolor == "Black") {
        document.querySelector('#tekst').style.color = "black";
    }
});  


//rozmiar czcionki
let rozmiar = document.querySelector('#rozmiar'); //input
let tekst = document.querySelector('#tekst');    // paragraf
rozmiar.addEventListener('keypress', function(event) {
let px = document.querySelector("#rozmiar").value;
    if(event.key == "Enter") {

        tekst.style.fontSize = px+"px";
    }
});


//styl listy 
let kwadrat = document.querySelector("#kwadrat"); //radio kwadrat
let okrag = document.querySelector("#okrag"); //radio okrąg
let l_ul = document.querySelector("#lista-ul"); //ul
let lista = document.querySelector("#lista"); //div z lista
kwadrat.addEventListener('click', function() {
    if(kwadrat.checked == true) {
        l_ul.style.listStyleType = "square";
    }
});
okrag.addEventListener('click', function(){
    if (okrag.checked == true) {
        l_ul.style.listStyleType = "circle";
    }
});


//naglowek
let check = document.querySelector("#check");
check.addEventListener('change',function(){
    if (check.checked == true){
        document.querySelector('h2').style.textDecoration = "underline";
    }
    else{
        document.querySelector('h2').style.textDecoration = "none";
    }
});


//zdjecie
let foto = document.querySelector('#foto'); //zdjecie
let zdjecie = document.querySelector('#zdjecie'); //div ze zdjeciem
foto.addEventListener('mouseover',function() {
    foto.style.width = "90%";
});
foto.addEventListener('mouseout', function() {
    foto.style.width = "60%";
});