//This hace referencia a un objeto

const user = {
  name: "Nicolas",
  login() {
    console.log(this);
  },
};

user.logout = function logout() {
  //Se pone nombre para que no sea función anónima
  console.log(this);
};
user.login();

//This hace referencia al objeto window, global

function log() {
  console.log(this);
}

log();

//Si se usa new hace referencia al objeto que será creado

/** Que sucede cuando se usa NEW
 *
 * 1. Se crea un objeto literal
 * 2. Se vincula este objeto a this
 * 3. Se vincula el prototipo
 * 4. Si no retorna nada, retorna this
 */
function Log(mensaje) {
  this.mensaje = mensaje;
  console.log(this);
}

const l = new Log("Hola mundo");
