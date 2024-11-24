function appi () { // glowna funkcja
   //przyciski
const button = document.querySelector('#button');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
//losowa liczba
let randomN = RandomInt();
let randomN2 = RandomInt();
kostkasuma = 0;
randomN = randomN / 1;
randomN2 = randomN / 1;
kostkasuma = randomN + randomN2;

console.log(kostka1);
console.log(kostka2);
// dane z inputow
var game1 = Gamer1();
var game2 = Gamer2();
// obrazeczki
if(button.disabled == true && button2.disabled == true) {
if(kostkasuma == 2) {
   document.getElementById('result1').innerHTML = "<img src='kostka1.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka1.png'>";
} else if (kostkasuma == 3) {
   document.getElementById('result1').innerHTML = "<img src='kostka2.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka1.png'>";
}  
else if (kostkasuma == 4) {
   document.getElementById('result1').innerHTML = "<img src='kostka3.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka1.png'>";
}  
else if (kostkasuma == 5) {
   document.getElementById('result1').innerHTML = "<img src='kostka4.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka1.png'>";
}  
else if (kostkasuma == 6) {
   document.getElementById('result1').innerHTML = "<img src='kostka5.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka1.png'>";
}  
else if (kostkasuma == 7) {
   document.getElementById('result1').innerHTML = "<img src='kostka6.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka1.png'>";
}  
else if (kostkasuma == 8) {
   document.getElementById('result1').innerHTML = "<img src='kostka6.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka2.png'>";
}  
else if (kostkasuma == 9) {
   document.getElementById('result1').innerHTML = "<img src='kostka6.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka3.png'>";
}  
else if (kostkasuma == 10) {
   document.getElementById('result1').innerHTML = "<img src='kostka6.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka4.png'>";
}  
else if (kostkasuma == 11) {
   document.getElementById('result1').innerHTML = "<img src='kostka6.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka5.png'>";
}  
else if (kostkasuma == 12) {
   document.getElementById('result1').innerHTML = "<img src='kostka6.png'>";
   document.getElementById('result2').innerHTML = "<img src='kostka6.png'>";
}  


   
   

document.getElementById("wynikk").innerHTML = "Wypada liczba: "+kostkasuma;
}



console.log("losowa liczba " + kostkasuma);
// obliczenia
result1 = kostkasuma - game1; 
result2 = kostkasuma - game2;

absoluteResult1 = Math.abs(result1); // absolutny wynik resulta1
absoluteResult2 = Math.abs(result2); // absolutny wynik resulta2

console.log("wynik gracza1 - randomowa " + absoluteResult1);
console.log("wynik gracza2 - randomowa " + absoluteResult2);


// skrypt ktory nie pozwala kliknac wykonaj rzut przed wpisaniem liczb
if(button.disabled == true && button2.disabled == true) {
  
          
   // kto kiedy wygrywa
   if(absoluteResult1 < absoluteResult2) {         
       console.log("wygrywa gracz1");
       document.getElementById("win").innerHTML = "Wygrał Gracz 1!"
   }
   else if (absoluteResult1 > absoluteResult2) {
       document.getElementById("win").innerHTML = "Wygrał Gracz 2!"
      
   
   } else {
       console.log("remis");
       document.getElementById("win").innerHTML = "Remis!"
   }

   }
  
}
// gracze/losowa liczba
function RandomInt(randomNumber) {
   var  randomNumber = Math.floor(Math.random() *6) + 1;
   return randomNumber;
}
function Gamer1(numberOfGamer1) {
   var numberOfGamer1 = document.getElementById("gracz1").value;
   return numberOfGamer1;
}
function Gamer2(numberOfGamer2) {
   var numberOfGamer2 = document.getElementById("gracz2").value;
   return numberOfGamer2;
   
}
function disableButton() {
   const button = document.querySelector('#button'); 
   button.disabled = true;
   var numberOfGamer1 = document.getElementById("gracz1").value;
  
}

function przycisk2() {
 const button = document.querySelector('#button2');
 const button2 = document.querySelector('#button2'); 
 const button3 = document.querySelector('#button3'); 
 button.disabled = true;
 if(button.disabled == true && button2.disabled == true) {
    button3.disabled = false;
 }

}
function disableButton(){
 let gracz1 = document.getElementById("gracz1").value;
 if(gracz1!=""&&gracz1<=12&&gracz1>=2){
     document.getElementById("button").disabled=true;
     gracz1 = gracz1 / 1;
     document.getElementById("gracz1").disabled=true;
 }
 
}
function przycisk2(){
 let gracz2 = document.getElementById("gracz2").value;
 if(gracz2!=""&&gracz2<=12&&gracz2>=2)
 {
     document.getElementById("button2").disabled=true;
     gracz2 = gracz2 / 1;
     document.getElementById("gracz2").disabled=true;
 }   
}

