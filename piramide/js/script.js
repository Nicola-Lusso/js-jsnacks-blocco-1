var array = [];
var ax = "*";
var vuoto = " ";
var num = 8;

for (var i = 0; i < num; i++) {
  vuoto += " ";
  array.push(vuoto);
}

for (var j = 7; j > 0; j--) {
  console.log(array[j] + ax);
  ax += "*" + "*";
}
