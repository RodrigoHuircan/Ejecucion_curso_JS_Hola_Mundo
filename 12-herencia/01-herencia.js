function User() {
  this.name = "Hola Mundo";
}

function Producto() {
  this.name = "Producto";
}

function Entidad() {}
Entidad.prototype.save = function () {
  console.log("guardando", this.name);
};
Entidad.prototype.validate = function () {
  console.log("validando", this.name);
};

//Primera forma de generar herencia
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User; //Para que el constructor no quede como entidad

// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Producto.prototype, Entidad.prototype);

const user = new User();
console.log(user);
