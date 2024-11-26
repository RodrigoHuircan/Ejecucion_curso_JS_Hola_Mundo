/**
 * Crear algoritmo que tome un array de objetos
 * y devuelva un array de pares
 */

//Mi solución
let array = [
  {
    id: 1,
    name: "Nicolás",
  },
  {
    id: 2,
    name: "Felipe",
  },
  {
    id: 3,
    name: "Chanchito",
  },
];

const toPairs = (arr) => {
  pares = [];
  identificador = 1;

  for (let persona of arr) {
    pares.push({
      id: identificador,
      persona: persona,
    });
    identificador++;
  }

  return pares;
};

let resultado = toPairs(array);
console.log(resultado);

//Solución profesor

function toPairsProfesor(arr) {
  let pairs = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }

  return pairs;
}

let resultadoProfesor = toPairsProfesor(array);
console.log(resultadoProfesor);
