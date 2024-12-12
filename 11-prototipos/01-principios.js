let nombre = "Hola";
let apellido = "Mundo";

function getNombreCompleto(nombre, apellido) {
  return [nombre, apellido].join("");
}

let fullname = getNombreCompleto(nombre, apellido);

console.log(user.getNombreCompleto);

/**Principios de la programación orientada a objetos
 *
 * 1. Encapsulación (Métodos y propiedades)
 * 2. Abstracción => Esconder detalles
 * 3. Herencia
 * 4. Polimorfismo, mismos métodos con implementaciones distintas
 */

//Encapsulación
const user = {
  nombre: "Hola",
  apellido: "Mundo",
  getNombreCompleto() {
    return [this.nombre, this.apellido].join("");
  },
};

//Abstracción
const user2 = new User();
user.password = "Chanchito feliz";
user.save();
//Sin comentarios puedo entender lo que estoy haciendo

//Herencia
// User => id, name, guardar()
// Restaurante => id name guardar()
// Motociclista => id, name, guardar()

//Función costructora padre que cree los atributos

//Polymorfismo
function validaEntidad(entidad) {
  //...
  entidad.save();
  //Cada objeto debe tener su método save
}
