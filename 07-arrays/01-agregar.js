const letras = ["a", "b"];

//Métodos para modificar

letras.push("c", "d"); //Agregar elementos al final de un array
console.log("push", letras);

letras.unshift("y", "z"); //Agregar elementos al comienzo
console.log("unshift", letras);

letras.splice(3, 0, 1, 2);
/**La izquierda indica el índice (2)
 * 0 es la cantidad de elementos a eliminar
 * Todo a la derecha son elementos que se agregan en el arreglo
 */

console.log("splice", letras);
