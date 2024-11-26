function crearUsuario(name, email) {
  //Factory function camel case, comienzan con crear/create
  return {
    id: 1,
    email, //Si la propiedad se llama igual que el parámetro recibido se pueden omitir los :
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave");
    }, // Función anónima
  };
}

let user1 = crearUsuario("Nicolás", "nico@holamundo.io");
let user2 = crearUsuario("Felipe", "felipe@holamundo.io");

console.log(user1, user2);
