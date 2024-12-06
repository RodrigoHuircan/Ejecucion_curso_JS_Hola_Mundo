let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2); //No modifica los arreglos, devuelve uno nuevo

console.log(arr1, arr2, combinados);

let divididos = combinados.slice(1, 3);
let divididos2 = combinados.slice(1);
let copia = combinados.slice(); //Para copiar
//Primer argumento = donde parto
//Segundo argumento = donde termino (no incluye el número que se explica)
//También se puede colocar solo 1 argumento
console.log(divididos);
console.log(divididos2);
console.log(copia);
