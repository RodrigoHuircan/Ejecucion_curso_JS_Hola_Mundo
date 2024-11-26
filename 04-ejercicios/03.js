/**
 * Indice validar que no sea menor a cero y que el elemento
 * exista en el array
 */

const getbyIdx = (arr, idx) => {
  if (idx < 0) {
    return "El índice no puede ser menor a 0";
  } else if (idx > arr.length) {
    return "El índice no puede exceder el largo del arreglo";
  } else {
    return arr[idx];
  }
};

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);

//(Mi solución)
