//Mi solución
const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

function cuantosPremium(usrs) {
  let contador = 0;
  usrs.filter((u) => {
    if (u.plan !== "free") contador++;
  });
  return contador;
}

function cuantosMayores(usrs) {
  let contador = 0;
  usrs.filter((u) => {
    if (u.edad > 17) {
      contador++;
    }
  });
  return contador;
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));

//Solución profe
function cuantosPremiumProfe(usrs) {
  return usrs.reduce((acc, el) => {
    return el.plan !== "free" ? acc + 1 : acc;
  }, 0);
}

function cuantosMayoresProfe(usrs) {
  return usrs.reduce((acc, el) => {
    return el.edad > 17 ? acc + 1 : acc;
  }, 0);
}

console.log(cuantosPremiumProfe(usuarios));
console.log(cuantosMayoresProfe(usuarios));
