//Mi solución

function paraAbsoluto(arr) {
  const arrayAbsoluto = arr.map((element) => Math.abs(element));

  return arrayAbsoluto;
}

const ns = [-2, 3, 5, -15];
const absolutos = paraAbsoluto(ns);

console.log(absolutos);

//Solución profe

function paraAbsolutoProfe(arr) {
  return arr.map((n) => Math.abs(n));
}
