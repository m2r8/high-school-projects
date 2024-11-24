const minutes = document.getElementById("minuta");
const seconds = document.getElementById("sekunda");
const button = document.getElementById("start");

let seconds2 = 0;
let minutes2 = 0;

button.addEventListener("click", function() {
    minutes2 = minutes.value / 1;
    seconds2 = seconds.value / 1;
        if(seconds2 > 0 && seconds2 <= 59 &&minutes2 > -1) {
            minutes.disabled = true;
            seconds.disabled = true;
            button.disabled = true;
            button.style.cursor = "not-allowed";
            display();

            const time = function() {
                if(seconds2 > 0) {
                    seconds2--;
                    display();
                } else if (minutes2 > 0 ) {
                    seconds2 = 59;
                    minutes2--;
                    wyswietl();
                } else if (minutes2 == 0&&seconds2 == 0) {
                    clearInterval(interwal);
                    end();
                }
            };
            const interwal = setInterval(time, 1000);
        } 
    });

    const end = function () {
        minutes.disabled = false;
        seconds.disabled = false;
        button.disabled = false;
        minutes.value = `${minutes2 > 9 ? minutes2: "0" + minutes2}`;
        seconds.value = `${seconds2 > 9 ? seconds2 : "0" + seconds2}`;
        button.style.cursor = "default";
        var audio = new Audio('win.wav');
        audio.play();   
    
    }

const display = function() {
    minutes.value = `${minutes2 > 9 ? minutes2 : "0" + minutes2}`;
    seconds.value = `${seconds2 > 9 ? seconds2 : "0" + seconds2}`;
}