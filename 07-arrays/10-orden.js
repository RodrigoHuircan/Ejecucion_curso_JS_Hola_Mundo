let numeros = [15, 10, -3];

numeros.sort();
numeros.reverse();
console.log(numeros);

let letras = ["z", "a", "d"];
letras.sort();
console.log(letras);

let conMayusculas = ["Z", "a ", "d"];
conMayusculas.sort((a, b) => {
  /**Si quieres
   * a antes b => -1
   * b antes a => 1
   * si son iguales => 0
   */
  let alower = a.toLowerCase();
  let blower = b.toLowerCase();
  if (alower < blower) {
    return -1;
  }
  if (alower > blower) {
    return 1;
  }
  return 0;
});
console.log(conMayusculas);
//La z mayúscula va a seguir quedando al principio
//Esto se debe a la nomenclatura ASCII (Z < a)

let usuarios = [
  { edad: 25, nombre: "Felipe" },
  { edad: 2, nombre: "Nicolas" },
  { edad: 15, nombre: "Chanchito" },
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1; //Esto se puede hacer solo con if's de una línea
  if (b.edad < a.edad) return 1;
  return 0;
});

console.log(usuarios);
