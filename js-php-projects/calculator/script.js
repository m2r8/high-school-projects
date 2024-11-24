function clearScreen() {
    document.getElementById("result").value = "";
   }
 /*  getElemendById łapie to co mam w () 
    .value to parametr, który nadaje wartość tego co mam po =
 */
   function display(value) {
    document.getElementById("result").value += value;
   }
/*  display(value)
    .value += value chodzi o to że jak mam jakąś wartość to dodaje kolejną wartość
*/
   
   function calculate() {
    var w = document.getElementById("result").value; 
    var o = eval(w);
    document.getElementById("result").value = o;
   }
/* var w - robimy zmienna z tego co wpiszemy w ten nasz kalkulator
   var o liczy tą zmienną w
   funckja eval jest to funckja która oblicza w;
   konwertuje stringa na dzialane mateyczmryna czyli np zapisane 5+5 na realne działanie, którr ma się wykonać
   var o wyswietla wynik funkcji eval
*/
