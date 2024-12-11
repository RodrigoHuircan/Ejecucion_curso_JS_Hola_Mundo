//Fat arrow functions no poseen la variable de arguments
//No tienen funcion super
//Tampoco contexto this
//Solo deben usarse para realizar cálculos
const suma = (a, b) => {
  return Array.from(arguments).reduce((acc, el) => acc + el);
};

console.log(suma(1, 2, 3, 4));
