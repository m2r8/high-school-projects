let produkt = document.getElementById("produkt");
let lista = document.getElementById("lista");
let usun = document.getElementById("usun");
let tab = [];
let oblicz = function(krecha){
  if(krecha.key === "Enter" && produkt.value) {
    tab.push(produkt.value);
    produkt.value = "";
    lista.innerHTML = "";
    tab.forEach(function(_, index){
      let dodaj = document.createElement("li");
      dodaj.classList.add(`tab2${index}`);
      dodaj.classList.add("del");
      dodaj.textContent = tab[index].toLowerCase();
      lista.appendChild(dodaj);
    });
  }
};
let usun2 = function(){
  if(tab.length > 0) {
    document.querySelector(`.tab2${tab.length - 1}`).remove();
    tab.pop();
  }
};
let skresl = function(krecha){
  if(krecha.target.classList.contains("del") && !krecha.target.classList.contains("line")){
    krecha.target.classList.add("line");
  }else if(krecha.target.classList.contains("del") && krecha.target.classList.contains("line")){
    krecha.target.classList.remove("line");
  }
};
lista.addEventListener("click", skresl);
usun.addEventListener("click", usun2);
document.addEventListener("keydown", oblicz);