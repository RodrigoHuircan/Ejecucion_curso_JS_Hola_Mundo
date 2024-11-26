function Usuario() {
  this.id = 1;
  this.recuperarClave = function () {
    //Método
    console.log("recuperando clave...");
  };
} //Upper Camel Case para constructores

let usuario = new Usuario();
console.log(usuario);

/**
 * Constructor lo que hace es
 * 1. Crea objeto literal del aire {}
 * 2. Se vincula el prototipo
 * 3. Se le asigna a this el {}
 * 4. Si no dice return, retorna This
 */
