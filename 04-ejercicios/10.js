/**
 * Crear array de longitud N, y que sus elementos sean
 * numeros de 1 hasta N.
 */

//Mi solución
let longitud = 7;

const crearArray = (long) => {
  array = [];
  for (let i = 0; array.length < long; i++) {
    array[i] = i + 1;
  }

  return array;
};

let resultado = crearArray(longitud);

console.log(resultado);

//Solución profe

function crearArrayProfe(n) {
  if (n <= 0) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  return arr;
}

let resultadoProfe = crearArrayProfe(longitud);
console.log(resultadoProfe);
