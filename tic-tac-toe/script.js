//zmienne
const otherPlayer = document.querySelector('#otherPlayer'); //PvP
const PC = document.querySelector('#PC'); //vs PC
const cells = document.querySelectorAll(".cell"); //divy
const statusText = document.querySelector("#statusText"); //kolejka
const restartBtn = document.querySelector("#restartBtn"); //Play again
const wyswietlanieCiastkaX = document.querySelector("#wyswietlanieCiastkaX");
const wyswietlanieCiastkaO = document.querySelector("#wyswietlanieCiastkaO");
const wyswietlanieCiastkaXpc = document.querySelector("#wyswietlanieCiastkaXpc");
const wyswietlanieCiastkaOpc = document.querySelector("#wyswietlanieCiastkaOpc");
let pcMode = false; //gracz vs PC czy PvP
let pctryb = false; //gracz vs PC czy PvP
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""]; //tablica w której beda sie znajdowac X i O
let currentPlayer = "X";
let running = false; //zmienna ktora definiuje czy program działa (od niego zalezy czy mozna wstawiac)
PC.disabled = true; //wykonywala sie nie ta funkcja

otherPlayer.addEventListener('click',initializeGame);
PC.addEventListener('click',PCinitializeGame);


function initializeGame(){
    pctryb = false; //oznacza, że jest PvP
    pcMode = false; //oznacza, że jest PvP
    otherPlayer.disabled = true;
    PC.disabled = true;

    cells.forEach(cell => cell.addEventListener("click", cellClicked)); //dla każdej komórki wykonac
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true; //żeby można było wstawiać; jeśli program nie jest odpalony to nie można kliknąć
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex"); 
    if(options[cellIndex] != "" || !running){  //jesli ta tablica jest wypełniona X/O lub jeśli nie jest odpalone to nic nie rób
        return;
    }
    
    updateCell(this, cellIndex);
    randomCell(pcMode);
    checkWinner();  
}

function updateCell(cell, index){ 
    options[index] = currentPlayer; //wstawia X i O do divów [do tab]
    cell.textContent = currentPlayer; //wyświetla, który gracz jest obecnie [do divow]
}

function updateCellPC(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false; //domyślnie false

    for(let i = 0; i < winConditions.length; i++){ //wpisuje X i O do tab i spr czy któraś tab wygrała
        const condition = winConditions[i]; 
        const cellA = options[condition[0]]; //1 liczba z warunku
        const cellB = options[condition[1]]; //2 liczba z warunku
        const cellC = options[condition[2]]; //3 liczba z warunku

        if(cellA == "" || cellB == "" || cellC == ""){ //jeśli puste - wykonuj dalej
            continue;
        }
        if(cellA == cellB && cellB == cellC){ //sprawcza, czy zgadzają się warunki z tej poszczególnej tab
            roundWon = true;
            break;
        }
    }

    if(roundWon){ //jeśli jest true
        statusText.textContent = `${currentPlayer} wins!`;
        otherPlayer.disabled = true;
        PC.disabled = true;
        running = false;
        pcMode = true;
        
        if(!pctryb){ //kiedy PvP
            setCookie("wynik" + currentPlayer);
        }else{
            setCookie("wynik" + currentPlayer + "PC");
        }
        wyswietlanieCiasteczek();
    }
    else if(!options.includes("")){ //remis; jesli nie ma gdzie co wpisać, a nikt nie wygrał
        statusText.textContent = `Draw!`;
        running = false;
        otherPlayer.disabled = true;
        PC.disabled = true;  
    }else{
        changePlayer();
    }
}

function restartGame(){
    PC.disabled = false;
    otherPlayer.disabled = false;
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = ``;
    cells.forEach(cell => cell.textContent = "");  
}

function PCinitializeGame() {
    pcMode = true; //oznacza że vs PC
    cells.forEach(cell => cell.addEventListener("click", PCcellClicked)); //dla każdej komórki wykonac
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
    pctryb = true; 
}

function PCcellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){ //jesli ta tablica jest wypełniona X/O lub jeśli nie jest odpalone to nic nie rób
       return; 
    } 
   if(pcMode = true) {
        PCupdateCell(this, cellIndex);
        checkWinner();
        randomCell();
   }else if(pcMode = false){
        PCupdateCell(this, cellIndex);
        checkWinner();
        PCupdateCell2(this,cellIndex);
        checkWinner();
   }
}

function PCupdateCell(cell, index){
    options[index] = currentPlayer; //wstawia X i O do divów
    cell.textContent = currentPlayer; //wyświetla, który gracz jest obecnie
}

function PCupdateCell2(pcMode) { //PC losuje swoje ruchy i wpisuje do tablicy
    if(pcMode = true){
    let a = getRandomInt(8);
    let b = getRandomInt(8);
    
    if(document.getElementById(a).innerHTML != "")  { // jesli nie jest puste
        if(document.getElementById(a).innerHTML = "X") {  //jesli w div jest X [zajeta losowa liczba]
            options[b] = currentPlayer; //wpisuje obecnego gracza do tablicy
            document.getElementById(b).innerHTML = currentPlayer; //wpisuje do diva
        }
        if(document.getElementById(a).innerHTML = "O") {
            options[b] = currentPlayer;
            document.getElementById(b).innerHTML = currentPlayer;
        }
    }else { //wolna losowa liczba
        options[a] = currentPlayer;
        document.getElementById(a).innerHTML = currentPlayer;
    }
    }
}

function getRandomInt(max) { //losuje liczbę od 1 do 8
    return Math.floor(Math.random() * max);
}

function randomCell (pcMode) {  
    let a = getRandomInt(8);
    let b = getRandomInt(8);
    let c = getRandomInt(8);
    let d = getRandomInt(8);
    let e = getRandomInt(8);
    let f = getRandomInt(8);
    let g = getRandomInt(8);
    let h = getRandomInt(8);
    let i = getRandomInt(8);
    let j = getRandomInt(8);

    if(pcMode == true ) {  
        changePlayerPC();
            //"pętla" - jeśli wylosuje się już zapełniony div, to przejdź do następnego ifa i znowu losuj
            if(document.getElementById(a).innerHTML == "X" || document.getElementById(a).innerHTML == "O") {
                if(document.getElementById(b).innerHTML == "X" || document.getElementById(b).innerHTML == "O") {
                    if(document.getElementById(c).innerHTML == "X" || document.getElementById(c).innerHTML == "O") {
                        if(document.getElementById(d).innerHTML == "X" || document.getElementById(d).innerHTML == "O") {
                            if(document.getElementById(e).innerHTML == "X" || document.getElementById(e).innerHTML == "O") {
                               if(document.getElementById(f).innerHTML == "X" || document.getElementById(f).innerHTML == "O") {
                                if(document.getElementById(g).innerHTML == "X" || document.getElementById(f).innerHTML == "O") {
                                    if(document.getElementById(h).innerHTML == "X" || document.getElementById(h).innerHTML == "O") {
                                        if(document.getElementById(i).innerHTML == "X" || document.getElementById(i).innerHTML =="O") {
                                            options[j] = currentPlayer;
                                            document.getElementById(j).innerHTML = currentPlayer;
                                        } else {
                                        options[i] = currentPlayer;
                                        document.getElementById(i).innerHTML = currentPlayer;
                                        }
                                    } else {
                                    options[h] = currentPlayer;
                                    document.getElementById(h).innerHTML = currentPlayer;
                                    }
                                } else {
                                options[g] = currentPlayer;
                                document.getElementById(g).innerHTML = currentPlayer;
                                }
                               } else {
                                options[f] = currentPlayer;
                                document.getElementById(f).innerHTML = currentPlayer;
                               } 
                            } else {
                            options[e] = currentPlayer;
                            document.getElementById(e).innerHTML = currentPlayer;
                            }
                        } else {
                        options[d] = currentPlayer;
                        document.getElementById(d).innerHTML = currentPlayer;
                        }
                    } else {
                        options[c] = currentPlayer;
                        document.getElementById(c).innerHTML = currentPlayer;
                    }
                }
                else {
                options[b] = currentPlayer;
                document.getElementById(b).innerHTML = currentPlayer;
                }
            }else{
            options[a] = currentPlayer;
            document.getElementById(a).innerHTML = currentPlayer;
            }
        checkWinner();
        changePlayer(); 
    }else{
    }
}

function changePlayerPC(pcMode){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function setCookie(cname) {
    let XX = getCookie(cname); //nazwe ciasteczka
    XX++;
    if(!pctryb){ //jesli PvP
        document.cookie = cname + "=" + XX;
    }
    else if(cname == "wynikXPC"){
        document.cookie = cname + "=" + XX;
        document.cookie = "wynikOPC" + "=" + 0;
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';'); //split zwraca tablicę ciasteczek
    for(let i = 0; i < ca.length; i++) { //do momentu az dojdzie do konca ciasteczek
      let c = ca[i]; //pobiera dane ciasteczko z tab
      c = c.trim();
      if (c.indexOf(name) == 0) { 
        return c.substring(name.length, c.length);
      }
    }
    return "";
} 

function wyswietlanieCiasteczek() { 
    let X = getCookie("wynikX");
    let O = getCookie("wynikO");

    let xpc = getCookie("wynikXPC")
    let opc = getCookie("wynikOPC");

    wyswietlanieCiastkaX.innerHTML = "🍪 Wynik X: " + X;
    wyswietlanieCiastkaO.innerHTML = "🍪 Wynik O: " + O;

    wyswietlanieCiastkaXpc.innerHTML = "🍪 Wynik gracza: " + xpc;
    wyswietlanieCiastkaOpc.innerHTML = "🍪 Wynik PC: " + opc;
}