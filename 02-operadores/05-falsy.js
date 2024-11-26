//short-circuit

//Falso
//false
//0
//''
//null
//undefined
//NaN

let nombre = "Chanchito feliz";
let username = nombre || "Anónimo";

console.log(username);

function fn1() {
  console.log("Hola soy la función 1");
  return false;
}

function fn2() {
  console.log("Hola soy la función 2");
  return true;
}

let x = fn1() && fn2();
