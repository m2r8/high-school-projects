function oblicz(){
    let ludzie = document.getElementById("goscie").value;
    let cena = 0;
    let poprawinki = document.getElementById('poprawiny');
    if (poprawinki.checked){
        cena = (ludzie * 100) * 1.3;
        document.getElementById("wynik").innerHTML = "Koszt twojego wesela to " + cena + " złotych";
    }else{
        cena = ludzie * 100;
        document.getElementById("wynik").innerHTML = "Koszt twojego wesela to " + cena + " złotych";
    }
}
