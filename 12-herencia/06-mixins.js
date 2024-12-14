function mixing(Ctr, ...args) {
  Object.assign(Ctr.prototype, ...args);
}

let vuela = {
  vuela() {
    console.log("volando");
  },
};

let nada = {
  nada() {
    console.log("nadando");
  },
};

let banio = {
  //Sugerencia, no usar la letra ñ en código
  banio() {
    console.log("yendo al baño");
  },
};

let camina = {
  camina() {
    console.log("caminando");
  },
};

// vuela, nada, camina, va al baño
function Pato() {
  this.name = "Patito";
}

mixing(Pato, nada, vuela, camina, nada);

let pato = new Pato();

//camina, nada, va al baño
function Perro() {}
Object.assign(Perro.prototype, nada, banio, camina);

let dog = new Perro();

// nada, va al baño
function Pez() {}
Object.assign(Pez.prototype, nada, banio);

let p = new Pez();

// vuela pero no nada, camina ni va al baño
function Avion() {}

Object.assign(Avion.prototype, vuela);
console.log(Avion.prototype, new Avion());

/**Si quisiera refactorizar debería hacer lo mismo que hice en
 * Pato, para todos los objetos
 * El código se ve más limpio y es mas sencillo de leer
 */
