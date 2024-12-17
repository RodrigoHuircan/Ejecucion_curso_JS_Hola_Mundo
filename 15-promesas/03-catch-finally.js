let promesa1 = new Promise((res, rej) => {
  rej(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((valor2) => {
    return valor2;
  })
  .catch((e) => console.log(e, "Valor de la promesa rechazada")) //Solo se ejecuta si una promesa es rechazada
  .finally(() => console.log("Estamos en finally")); //Se ejecuta siempre y nunca recibe argumentos
