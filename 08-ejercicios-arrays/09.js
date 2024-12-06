const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
];

const users = [
  { age: 22, name: "Michael", membership: "premium" },
  { age: 27, name: "Kevin", membership: "free" },
  { age: 29, name: "Happy Pig", membership: "free" },
];

//Unificar las estructuras de usuarios y users
//Fusionar los arrays
//Ordenar x edad
// Crear plantilla HTML
//<li> Nombre: name, Edad: age</li>
//Imprimir la lista en consola

let mapeados = users.map((u) => {
  return {
    edad: u.age,
    nombre: u.name,
    plan: u.membership,
  };
});

let combinados = usuarios.concat(mapeados);
console.log("Combinados", combinados);

const ordenados = combinados.sort((a, b) => {
  if (a.edad < b.edad) return 1;
  if (a.edad > b.edad) return -1;
  return 0;
});

console.log("Ordenados", ordenados);

const lista = ordenados.map(
  (u) => `<li> Nombre:${u.nombre} Edad:${u.edad} </li>`
);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`;

console.log(html);
