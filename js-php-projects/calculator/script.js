function clearScreen() {
    document.getElementById("result").value = "";
   }

   function display(value) {
    document.getElementById("result").value += value;
   }
   
   function calculate() {
    var w = document.getElementById("result").value; 
    var o = eval(w);
    document.getElementById("result").value = o;
   }
