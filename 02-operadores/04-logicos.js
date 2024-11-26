//AND, OR, NOT
//AND = &&

console.log(true && true);
/**Si lo que esta a la izquierda es true y lo de la derecha también es true
 * la expresión general es true
 */
console.log(true && false);

let mayor = false;
let suscrito = true;

console.log(mayor && suscrito, "operador and");

//OR = ||
console.log(mayor || suscrito, "operador or");
/**True si es que al menos 1 de los 2 es verdadero */

//NOT = !
console.log(!mayor, "operador not");

let catalogoInfantil = !mayor;
