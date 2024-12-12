function User() {
  this.name = "Hola Mundo";
}

User.prototype.login = function () {
  console.log("Iniciando sesión", this.name);
};

let user = new User();

for (let prop in user) console.log(prop);
/**For itera todas las propiedades dentro del prototipo
 * Pero no itera hasta el prototipo de object
 */

for (let prop in user) if (user.hasOwnProperty(prop)) console.log(prop);
//Para iterar solo las propiedades de la INSTANCIA, forma antigua
for (let prop in user) if (!user.hasOwnProperty(prop)) console.log(prop);
//Para iterar solo las propiedades del PROTOTIPO, forma antigua

console.log(Object.keys(user));
//Manera moderna
