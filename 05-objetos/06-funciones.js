function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("Nicolás");

console.log(user);
function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, "Chanchito");
console.log(user1);

function returned() {
  return function () {
    console.log("Hola Mundoo");
  };
}

let saludo = returned();
saludo();

/**
 * Las funciones son objetos de primera clase (Propiedad)
 * Se pueden asignar a otras variables
 * Pueden ser un argumento en una función
 * También se pueden retornar las funciones
 */
