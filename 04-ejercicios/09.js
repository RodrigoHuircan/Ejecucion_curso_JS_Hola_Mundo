/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 */

//Mi solución
let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "Felipe" }],
  [3, { name: "Chanchito" }],
];

const toCollection = (arr) => {
  let coleccion = [];

  for (let index in pairs) {
    let id = pairs[index][0];
    let nombre = pairs[index][1].name;

    coleccion.push({
      id: id,
      nombre: nombre,
    });
  }

  return coleccion;
};

let resultado = toCollection(pairs);
console.log(resultado);

//Solución profesor

function toCollectionProfe(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }

  return collection;
}

let resultadoProfe = toCollectionProfe(pairs);
console.log(resultadoProfe);
