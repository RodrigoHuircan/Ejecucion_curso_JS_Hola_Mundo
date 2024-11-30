//Sin usar ... ni Object.assign

//Mi solución
let obj1 = { id: 1, name: "chanchito" };
function crearCopia(obj) {
  let copia = {};
  for (let props in obj) {
    copia[props] = obj[props];
  }
  return copia;
}

let obj2 = crearCopia(obj1);
console.log({ obj1, obj2 });
