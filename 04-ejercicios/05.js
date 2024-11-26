/**
 * Crear algoritmo que devuelva el número menos y
 * mayor de un array
 */

//Mi solución

let array = [2, 5, 7, 15, -5, -100, 55];

const getMenorMayor = (arr) => {
  let menor = arr[0];
  let mayor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
    }
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }

  arregloNuevo = [menor, mayor];
  return arregloNuevo;
};

let numeros = getMenorMayor(array);
console.log(numeros);

//Profesor

function getMenorMayorProfesor(arr) {
  let menor = arr[0];
  let mayor = arr[0];
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }

  return [menor, mayor];
}

let numerosProfesor = getMenorMayorProfesor(array);
console.log(numerosProfesor);
