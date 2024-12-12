function User() {
  this.name = "hola Mundo";
  //Método de instancia
  this.logger = function () {
    console.log("loggeando...");
  };
}

User.prototype.login = function () {
  //Método de prototipo
  console.log("iniciando sesión", this.name);
  this.logger();
};
//Utilizar en caso de optimizar el código
//Se pueden definir en cualquier parte del código
const user1 = new User();
const user2 = new User();

//Se puede interceptar la cadena de prototipo
//Esto es nombrando un método de igual nombre en un
//prototipo de nivel más bajo
User.prototype.toString = function () {
  console.log("Usuario:", this.name);
};

console.log(user1.login());
/**Es posible llamar a funciones y propiedades
 * dentro del prototipo desde la función constructora
 * y viceversa
 */
