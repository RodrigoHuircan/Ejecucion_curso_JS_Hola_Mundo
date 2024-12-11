//Mi solución
//(Resultó ser lo mismo del profe)
function suma(fn, ...rest) {
  let reducido = rest.reduce((acc, el) => acc + el, 0);
  fn(reducido);
}

suma(
  (resultado) => {
    console.log(resultado);
  },
  1,
  2,
  3,
  4
);
