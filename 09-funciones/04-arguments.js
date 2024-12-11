function suma(a, b) {
  console.log(arguments);
  let total = 0;
  for (let valor of arguments) {
    total += valor;
  }
  return total;
}

console.log(suma(1, 2));
console.log(suma(1)); //Esto también es válido = NaN
console.log(suma(1, 2, 3, 4)); //Esto también es válido
//No hay referencia a los elementos 3 y 4

//Arguments es un OBJETO, si quiero acceder a los argumentos, debo crear variables

function suma2(a, b) {
  return Array.from(arguments).reduce((acc, el) => acc + el, 0);
}

console.log(suma2(1, 2, 3, 4));
