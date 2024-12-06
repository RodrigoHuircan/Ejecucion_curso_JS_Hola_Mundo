const numeros = [1, 2, 3, 4];

//Reduce para reducir el contenido del array

const suma = numeros.reduce((acc, el) => {
  return acc + el;
}, 0);
//Recibe (Acumulador, elemento iterado)
//El 0 de la derecha es el valor inicial del acumulador

console.log(suma);

const anidado = [[1, 2], 3, [4, 5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);

console.log(plano);

const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];

const indexado = usuarios.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

console.log(indexado);
