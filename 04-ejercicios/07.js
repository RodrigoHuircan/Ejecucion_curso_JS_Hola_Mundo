/***
 * Crear algoritmo que devuelvva
 * el precio del producto mas impuesto
 */

//Mi solución

const precioCompleto = (precio, impuesto) => {
  total = precio + precio * impuesto;
  truncado = parseFloat(total.toFixed(4));
  return truncado;
};

let resultado = precioCompleto(19.9, 0.15);
console.log("$", resultado);
