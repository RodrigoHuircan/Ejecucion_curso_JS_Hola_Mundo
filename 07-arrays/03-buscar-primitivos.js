const letras = ["a", "b", 1, "c", "d", 1];
console.log(letras.indexOf("c")); //índice del elemnto siempre que encuentre dentro del array
console.log(letras.indexOf(1));
//Si hay dos elementos iguales siempre muestra el primero que encuentra
console.log(letras.lastIndexOf(1));
//Inicia la búsqueda desde el final

console.log(letras.indexOf(1) !== -1); //Lo mismo que includes viejo
console.log(letras.includes(1));

//Para los arreglos el tipo de dato es importante
// 1 !== '1'

/**Todos reciben un segundo argumento,
 * el índice desde donde quiero partir
 * mi búsqueda
 */
