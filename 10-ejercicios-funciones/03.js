//Mi solkución
function callback(fn, ...rest) {
  fn(...rest);
}

function log(...args) {
  console.log(args);
}

callback(log, 1, 2, 3, 4);

//Solución alternativa a hacer 2 functions
callback(
  (...args) => {
    console.log(args);
  },
  1,
  2,
  3,
  4
);

//**La solución del profe resultó ser la misma, me estaba complicando solo */
