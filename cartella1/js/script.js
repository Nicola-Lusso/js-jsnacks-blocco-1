// CICLO FOR
var somma = 0;
var num;

for ( var i = 0; i <5; i++){
  num = parseInt(prompt('Inserisci numero: '));
  somma += num;
}

document.getElementById('somma').innerHTML = somma;



//CICLO WHILE

var i= 0;
while (i < 5) {
  num =  parseInt(prompt('Inserisci numero: '));
  somma += num;
  i++;
}

document.getElementById('somma').innerHTML = somma;
