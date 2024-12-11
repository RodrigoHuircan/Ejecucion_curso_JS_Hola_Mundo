function suma(a, b, ...rest) {
  console.log(rest);
}

//Nos entrega los argumentos 3 y 4 y los de la derecha
//Rest siempre debe ser el último parámetro en JS

suma(1, 2, 3, 4, 5, 6);

const suma2 = (a, b, ...rest) => {
  console.log(rest);
};

suma2(1, 2, 3, 4, 5, 6);

const logMsg = (desc, ...msgs) => {
  for (let msg of msgs) {
    console.log(desc, msg);
  }
};

//logMsg("Servidor", "Error1", "Petición aceptada", "socket activo");
let mensajes = ["Error1", "Petición aceptada", "socket activo"];
logMsg("Cliente móvil:", ...mensajes, "Otro error");
