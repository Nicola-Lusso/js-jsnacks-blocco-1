// VARIABILI
var computer, giocatore, numUtente, numIndovino;

var difficoltà = prompt('Scegli la difficoltà prima di iniziare la partita: 1--2--3  (facile,medio,avanzato)');

// switch per inserire le 3 difficoltà.
switch (difficoltà) {

// 1 facile da 1 a 30
case "1":
computer = generaNumeroRandom(1, 30);
console.log('Il numero del computer è: ',computer);
numIndovino = false;
numUtente = [];

for (var i = 0; i < 4 && numIndovino == false; i++) {
  giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 30, hai 4 tentativi!'));
  numUtente.push(giocatore);
  if (giocatore > computer) {
    alert('Erratto! Il numero da indovinare è più basso.');
  } else if (giocatore < computer) {
    alert('Erratto! Il numero da indovinare è più alto.');
  } else {
    alert('WIN!!! Hai indovinato il numero!');
    numIndovino = true;
  }
}

console.log('I numeri inseriti dall\'utente sono: ', numUtente);

 break;

// 2 medio da 1 a 60
case "2":
computer = generaNumeroRandom(1, 60);
console.log('Il numero del computer è: ',computer);
numIndovino = false;
numUtente = [];

for (var i = 0; i < 4 && numIndovino == false; i++) {
  giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 60, hai a disposizione 4 tentativi.'));
  numUtente.push(giocatore);
  if (giocatore > computer) {
    alert('Erratto! Il numero da indovinare è più basso.');
  } else if (giocatore < computer) {
    alert('Erratto! Il numero da indovinare è più alto.');
  } else {
    alert('WIN!!! Hai indovinato il numero!');
    numIndovino = true;
  }
}

console.log('I numeri inseriti dall\'utente sono: ', numUtente);

 break;

// 3 avanzato da 1 a 100
case "3":
computer = generaNumeroRandom(1, 100);
console.log('Il numero del computer è: ',computer);
numIndovino = false;
numUtente = [];

for (var i = 0; i < 4 && numIndovino == false; i++) {
  giocatore = parseInt(prompt('Inserisci un numero compreso tra 1 e 100, hai a disposizione 4 tentativi.'));
  numUtente.push(giocatore);
  if (giocatore > computer) {
    alert('Erratto! Il numero da indovinare è più basso.');
  } else if (giocatore < computer) {
    alert('Erratto! Il numero da indovinare è più alto.');
  } else {
    alert('WIN!!! Hai indovinato il numero!');
    numIndovino = true;
  }
}

console.log('I numeri inseriti dall\'utente sono: ', numUtente);

 break;
}

// Funzioni
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
