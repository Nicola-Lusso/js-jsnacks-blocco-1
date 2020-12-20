// VARIABILI
var primoNum, secondoNum


primoNum = parseInt(prompt('Inserire il primo numero'));
secondoNum = parseInt(prompt('Inserire il secondo numero'));

if (primoNum > secondoNum){
document.getElementById('num').innerHTML = 'Il primo numero è più grande del secondo numero' + ' ' + ' : ' + primoNum + ' > ' + secondoNum;
} else if (primoNum < secondoNum){
document.getElementById('num').innerHTML = 'Il secondo numero è più grande del primo numero' + ' ' + ' : '+ secondoNum  + ' > ' + primoNum;
} else {
document.getElementById('num').innerHTML = 'I numeri sono uguali' + ' '+ ' : ' + primoNum + ' = ' + secondoNum;
}
