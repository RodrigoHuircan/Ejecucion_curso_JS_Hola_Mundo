let afuera = "estoy afuera";

function alcance() {
  console.log(afuera);
  afuera = "estoy dentro";
  //Si yo creo una función las variable pertenecen solo a esta función
  var vieja = "ya no usar";
  let variable = "Hola mundo";
  const constante = "Hola mundo constante";
  console.log(saludo);
  console.log(vieja);
  console.log(variable);
  console.log(constante);
  function saludo() {}
}

/**No se puede acceder a las variables creadas dentro de una
 * función fuera de la misma, pero si puedo acceder
 * a variables y funciones creadas fuera de la función dentro
 * de la función en si
 */

console.log(afuera);
alcance();
console.log(afuera);
