//Mi solución

const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

function obtenerMayor(arr) {
  let sorted = arr.sort((a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
  });
  return sorted[sorted.length - 1];
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);

//Solución Profe
//También debo probar con el método reduce

function obtenerMayorProfe(arr) {
  let mayor = arr[0];
  for (let usuario of arr) {
    if (mayor.edad < usuario.edad) {
      mayor = usuario;
    }
  }

  return mayor;
}

console.log(obtenerMayor(usuarios));

//Solución reduce

function obtenerMayorReduce(arr) {
  return arr.reduce((acc, el) => {
    return el.edad > acc.edad ? el : acc;
  }, arr[0]); //Estoy instanciando el acumulador como el primer elemento del array
}

//el.edad (Elemento iterado), acc.edad (Acumulador siendo objeto)

const mayorReduce = obtenerMayorReduce(usuarios);
console.log(mayorReduce);
