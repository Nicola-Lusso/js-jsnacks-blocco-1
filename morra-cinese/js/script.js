//Morra cinese. Vince chi totalizza per primo 4 punti.

//Variabili
var utente, computer;
var countUtente = 0;
var countComputer = 0;

//ciclo for per stabilire che si giocheranno 3 partite.
for (var i = 0; i < 3; i++) {

  computer = generaNumeroRandom(0, 2);

  if (computer == 0){
    computer = 'carta';
  } else if (computer == 1) {
    computer = 'forbici';
  } else {
    computer = 'sasso';
  }

  console.log('Il computer ha scelto '+ computer);

  //L'utente deve scegliere tra : carta, forbici o sasso.
  utente = prompt('Scegli --> carta---forbici---sasso : ')

  if ((utente == 'forbici' && computer == 'carta') || (utente == 'carta' && computer == 'sasso') || (utente == 'sasso' && computer == 'forbici') ) {
    console.log('Il giocatore ha scelto ' + utente);
    console.log('Hai vinto!');
    // se l'utente vince il suo punteggio aumenterà di 1.
    countUtente++;
  } else if (utente == computer) {
    console.log('L\'utente ha scelto ' + utente);
    //Pareggio
    console.log('Parità!');
  } else {
    console.log('Il giocatore ha scelto ' + utente);
    console.log('Ha vinto il computer!');
    // se il computer vince il suo punteggio aumenterà di 1.
    countComputer++;
  }
}


document.getElementById('utente').innerHTML = 'L\' utente ha totalizzato : ' + countUtente + ' punti.';
document.getElementById('computer').innerHTML = 'Il computer ha totalizzato : ' + countComputer+ ' punti.';

// Funzioni
function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
