/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//richiesta all'utente condizione pari o dispari
var askBet = prompt("Scommetti pari o dispari");
//ciclo per verificare che stringa non sia vuota e che sia uguale a dispari o pari
while (
  (askBet !== "pari" &&
    askBet !== "dispari" &&
    askBet !== "Pari" &&
    askBet !== "Dispari") ||
  askBet === ""
) {
  alert("Attenzione, inserire pari o dispari");
  askBet = prompt("Scommetti pari o dispari");
}

console.log(askBet);

//richiesta all'utente utente di un numero da 1 a 5
var askNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

//ciclo while per far si che l'utente metta numero del range definito

while (askNumber <= 0 || askNumber > 5 || isNaN(askNumber)) {
  alert("metti il numero giusto da 1 a 5");
  var askNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
}

console.log("Numero utente: ", askNumber);

//funzione che genera un numero random (con intervallo desiderato) per il computer
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//numero random pc da 1 a 5
var rndmNmbrPc = randomNumber(1, 5);
console.log("Numero Pc: ", rndmNmbrPc);

//somma dei numeri utente e computer
var sommaNumeri = askNumber + rndmNmbrPc;

//funzione che stabilisce se pari o dispari della somma numeri
function evenOrOdd(numbers) {
  if (numbers % 2 === 0) {
    return "Pari";
  } else {
    return "Dispari";
  }
}

var result = evenOrOdd(sommaNumeri);
console.log(result);

//OUTPUT
var numeroUtente = document.getElementById("numero-utente");
var numeroPc = document.getElementById("numero-pc");
var vincitore = document.getElementById("vincitore");

//dichiarazione vincitore
if (result === askBet) {
  console.log("Hai vinto tu caro utente");
  vincitore.innerHTML = "Hai vinto tu caro utente";
} else {
  console.log("Ha vinto il computer!!");
  vincitore.innerHTML = "Hai perso!! Vittoria del PC";
}

numeroUtente.innerHTML = "Numero Utente: " + askNumber;
numeroPc.innerHTML = "Numero Pc: " + rndmNmbrPc;
