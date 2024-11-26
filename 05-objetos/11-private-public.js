function Usuario() {
  let id = 1;
  this.name = "Nicolas";
  let log = function () {
    console.log("Loggin...");
  };
  this.guardar = function () {
    console.log("Guardando");
  };
}

//Mediante la creación de una variable es que el método se vuelve privado
const usuario = new Usuario();

usuario.guardar();
