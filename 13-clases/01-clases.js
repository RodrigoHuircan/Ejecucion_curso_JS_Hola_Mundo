// function User(name) {
//   this.name = name;
//   this.instancia = function () {};
// }

// User.prototype.login = function () {
//   console.log("Hola mundo!");
// };

//Para hacer lo mismo de arriba con la palabra reservada class

class User {
  constructor(name) {
    this.name = name;
    this.instancia = function () {};
  } //Fuera de los paréntesis es para agregar los métodos al prototipo de usuarios

  activo = true;

  logout = () => {
    console.log("logout");
  };

  //!!!! Si no utilizo la sintaxis de login, js pasará la función a la instancia del objeto, no al prototipo

  login() {
    console.log("Hola mundo");
  }
}

const u = new User("Chanchito Feliz");

console.log(u.name);

//Es necesario usar la palabra reservada de new para la palabra CLASS
//Azúcar sintáctica. Class es lo mismo que las funciones constructoras

/**
 * La única diferencia es que para acceder a un 'Nuevo usuario' con class,
 * se debe haber declarado con anterioridad la creación de la clase en si.
 * Esto no sucede con las funciones constructoras
 */
console.log(u);
