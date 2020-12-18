var array = [];
var inputNum;

for (var i = 0; i < 6; i++) {
  inputNum = parseInt(prompt('inserisci un numero: '));
  if (inputNum % 2 != 0) {
    array.push(inputNum);
  }
}

// console.log(array);

document.getElementById('array').innerHTML = array;
