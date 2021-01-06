// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Variabili
var num = [];
var somma = 0;

// ciclo while : finché la condizione risulta vera.
while (somma < 50){
  var numeroUtente = parseInt(prompt('Inserisci un numero: '));
  num.push(numeroUtente);
  somma = somma + numeroUtente;

  if (somma >= 50 ) {
    alert('Somma maggiore a 50');
  }
}

console.log(num);
console.log(somma);
