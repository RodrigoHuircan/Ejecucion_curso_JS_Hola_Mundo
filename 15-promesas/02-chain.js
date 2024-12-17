let promesa1 = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1.then((valor) => {
  console.log(valor);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      //Si la resolución de la promesa 1 es true, retorna la promesa 2
      return promesa2;
    }
  })
  .then((valor2) => {
    return valor2;
  });
