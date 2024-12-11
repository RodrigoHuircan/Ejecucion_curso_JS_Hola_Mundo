/**
 * {
 * url: ...
 * bucket: amazon s3
 * port: 80
 * }
 */

//Método antiguo
// function configurarAPI(url) {
//   const defaultURL = url || "htts://holamundo.io";
//   return `${defaultURL}`;
// }

const config = {
  url: "htts://holamundo.io",
};

function configurarAPI({ url } = { url: "Por defecto" }) {
  return `${url}`;
}
/**Desestructuración, estoy indicando con la sintaxis de objeto
 * que quiero obtener la propiedad url del objeto que se esta llamando
 */

// console.log(configurarAPI());
console.log(configurarAPI());

function configurarAPI2(url, bucket = 145, port = 80) {
  return `${url}/${bucket}:${port}`;
}
//Siempre se debe asignar un valor a la derecha a los valores predeterminados

console.log(configurarAPI2("holamundo.io", "145", 90));
console.log(configurarAPI2("holamundo.io", undefined, 90)); //No recomendado para bypassear
//Mejor pasar todos los valores por defecto
