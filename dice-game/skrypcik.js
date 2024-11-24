function roll(){
    let number1 = document.getElementById("cyfra1").value;
    let number2 = document.getElementById("cyfra2").value;
    if(document.getElementById("button1").disabled&&document.getElementById("button2").disabled)
    {
        if(number1!=""&&number2!=""){
            const kostki = document.querySelectorAll(".zdj");
            button = document.getElementById("roll");
            button.disabled=true; 
            let kostka1 = Math.floor(Math.random() *6) + 1;
            let kostka2 = Math.floor(Math.random() *6) + 1;
            kostkasuma = 0;
            kostka1 = kostka1 / 1;
            kostka2 = kostka2 / 1;
            kostkasuma = kostka1 + kostka2;
            console.log(kostka1);
            console.log(kostka2);
            document.getElementById("kosc1").style.backgroundImage ="url(kropka-"+kostka1+".jpg)";
            document.getElementById("kosc2").style.backgroundImage ="url(kropka-"+kostka2+".jpg)";
            document.getElementById("score").innerHTML = "Wypada liczba:"+kostkasuma;


             if(Math.abs(kostkasuma - number1) < Math.abs(kostkasuma - number2)){
                document.getElementById("wynik").innerHTML = "Wygrywa gracz 1";
            }else if(Math.abs(kostkasuma - number2) < Math.abs(kostkasuma - number1)){
                document.getElementById("wynik").innerHTML = "Wygrywa gracz 2";
            }else{
                document.getElementById("wynik").innerHTML = "Remis";
            } 
        }
    }
}