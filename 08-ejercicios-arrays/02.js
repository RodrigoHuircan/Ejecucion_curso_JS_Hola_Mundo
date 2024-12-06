const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

//Mi solución
function dividePorTipo(arr) {
  numeros = [];
  strings = [];
  objetos = [];

  arrayContenedor = {};

  arr.filter((elemento) => {
    if (typeof elemento == "number") {
      numeros.push(elemento);
    } else if (typeof elemento == "string") {
      strings.push(elemento);
    } else if (typeof elemento == "object") {
      objetos.push(elemento);
    }
  });

  arrayContenedor = { numeros, strings, objetos };
  return arrayContenedor;
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);

//Solución Profesor

function dividePorTipoProfesor(arr) {
  return {
    numeros: arr.filter((n) => typeof n === "number"),
    strings: arr.filter((n) => typeof n === "string"),
    objetos: arr.filter((n) => typeof n === "object"),
  };
}

//No estuve tan lejos...
