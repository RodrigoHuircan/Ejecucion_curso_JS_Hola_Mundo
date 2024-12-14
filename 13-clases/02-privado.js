// function User(a) {
//   let name = a;
//   this.getName = function () {
//     return namel;
//   };
// }

class User {
  #name; //Se declara la variable privada

  constructor(name) {
    this.#name = name;
  }

  #logger() {
    console.log("logueando");
  }

  getName() {
    this.#logger();
    return this.#name;
  }
}

const u = new User("Chanchito feliz");
console.log(u.getName());

//Con las funciones constructoras los atributos son privados por defecto
//Esto quiere decir que necesito un método para poder acceder a un atributo
