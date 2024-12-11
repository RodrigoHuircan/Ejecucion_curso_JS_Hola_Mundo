//Mi solución
function ordenar(texto, fn) {
  arrayText = texto.split("");

  filtrado = arrayText.filter((letra) => letra !== " ");
  filtrado.sort();
  console.log(filtrado);
  fn(filtrado.join(""));
}

ordenar("hola mundo", console.log);

//Solución profesor

//Mucho menos engorroso, más efectivo
function ordenarProfe(texto, fn) {
  let resultado = texto
    .toLowerCase()
    .split("")
    .filter((letra) => letra !== " ")
    .sort()
    .join("");

  fn(resultado);
}
