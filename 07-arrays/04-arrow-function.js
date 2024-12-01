function hola() {
  return "Hola mundo";
}

const resultado = hola();

const holaMundo = (mensaje) =>
  //Las arroy function son anónimas
  "Hola mundo " + mensaje;

//No es necesario poner return y corchetes si
//es que nuestra funcion es de una sola línea
//Se pueden omitir los paréntesis si recibe un solo parámetro
let resultadoArrow = holaMundo;
console.log(resultadoArrow("chanchito feliz"));
