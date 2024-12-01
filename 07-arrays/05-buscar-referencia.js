const usuarios = [
  //La referencia de estos objetos no es la misma que la preguntada en index of
  { id: 1, name: "Chanchito" },
  { id: 2, name: "Feliz" },
];
//const resultado = usuarios.indexOf({ id: 1, name: "Chanchito" });
// const resultado = usuarios.find(function (usuario) {
//   return usuario.id === 1;
// });
const resultado = usuarios.find((usuario) => usuario.id === 2);
//Find siempre va a devolver el primer elemento que encuentre
//Predicate, funciones que reciben como argumento una función
//Devuelve true o false
console.log(resultado);

//Para devolver índice usar findIndex
const resultadoIndex = usuarios.findIndex((usuario) => usuario.id === 2);
console.log(resultadoIndex);
