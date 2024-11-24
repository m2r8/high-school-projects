function czcionka() {
    var font = document.getElementById("font").value;
    var napis = document.getElementById("napis");

    napis.style.fontSize = font + "px";
}
function kolor () {
 var napis = document.getElementById("napis");
 var select =  document.getElementById("select").value;
  if (select == "C") {
      napis.style.color = "black";
    } else if (select == "B") {
        napis.style.color = "white"
    } else {
        napis.style.color = "#7ec9e0";
    }
}
function KolorTla() {
var main = document.getElementById("main");
var kolor = document.getElementById("kolorTla1").value;
if (kolor == "Roz") {
    main.style.backgroundColor = "#fc6df3";
} else if (kolor == "Cze") {
    main.style.backgroundColor = "#fc6d7b";

} else {
    main.style.backgroundColor = "#9d6dfc";
}

}
function Verdana () {
    var main = document.getElementById("main");
    main.style.fontFamily = "Verdana";
}
function Times () {
    var main = document.getElementById("main");
    main.style.fontFamily = "Times New Roman";
}
function przez () {
    var main = document.getElementById("main");
    var checkBox = document.getElementById("przez");
    if (checkBox.checked == true) {
        main.style.opacity = "0";
    } else {
        main.style.opacity = "1";
    }
}