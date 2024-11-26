/**
 * Crear un algorirmo que devuelva cantidad
 * de números positivos de un array
 */

//Mi solución
let array = [2, 5, 7, 15, -5, -100, 55];

const cuantosPositivos = (arr) => {
  let positivos = 0;
  for (numero of arr) {
    if (numero > 0) {
      positivos = positivos + 1;
    }
  }

  return positivos;
};

let resultado = cuantosPositivos(array);
console.log(resultado);

//Profesor
