// VARIABILI
var primaParola, secondaParola;

primaParola = prompt('Inserisci la prima parola');
secondaParola = prompt('Inserisci la seconda parola');



if (primaParola.length < secondaParola.length) {
  document.getElementById('parola').innerHTML = 'La parola più lunga è : ' + primaParola + '   ' + '/  ' + 'la più corta è : ' + secondaParola;

}
  else if (primaParola.length > secondaParola.length) {
  document.getElementById('parola').innerHTML = 'La parola più lunga è : ' + secondaParola + '   ' + '/  ' + 'la più corta è : ' + primaParola;

}
  else {
  document.getElementById('parola').innerHTML = 'Le parole hanno la stessa lunghezza' + '--->' +'  ' + primaParola + ' = ' +secondaParola;
}
