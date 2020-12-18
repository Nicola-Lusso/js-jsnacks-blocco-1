var nomeUtente = prompt('Inserisci il tuo congome');
var nomeMaiuscolo = nomeUtente.charAt(0).toUpperCase() + nomeUtente.slice(1);
var listaNomi = [ 'Pippo', 'Pluto', 'Jon', 'Cip', 'Ciop', 'Pedro', 'Zlatan'];
var check = false;



for (var i = 0; i < listaNomi.length; i++ ) {
  if (listaNomi[i] == nomeMaiuscolo){
    check = true;
  }

}

if (check == true) {
  document.getElementById('invito').innerHTML = 'Puoi partecipare';
}
else  {
  document.getElementById('invito').innerHTML = 'Non puoi partecipare';
}
