//Mi solución resultó ser la misma, me costo un kilo si

const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

function groupBy(arr, prop) {
  return arr.reduce((acumulador, valorActual) => {
    let propiedad = valorActual[prop];
    acumulador[propiedad] = acumulador[propiedad] ? acumulador[propiedad] : [];
    acumulador[propiedad].push(valorActual);
    return acumulador;
  }, {});
}

const grouped = groupBy(usuarios, "plan");
console.log({ grouped });
