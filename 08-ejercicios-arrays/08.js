//Mi solución

const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

//Obtener los usuarios pago
//Ordenar de mayor a menor edad
//Crear una plantilla HTML
//Imprimirla en consola
/**
 * <ul>
 * <li>Felipe</li>
 * <li>Nico</li>
 * </ul>
 */

const filtrados = usuarios.filter((u) => u.plan !== "free");
console.log("Filtrados", filtrados);

const ordenados = filtrados.sort((a, b) => {
  if (a.edad < b.edad) return 1;
  if (a.edad > b.edad) return -1;
  return 0;
});

console.log("Ordenados", ordenados);

const lista = ordenados.map((u) => `<li>${u.nombre}</li>`);

console.log("Lista", lista);

const html = `
<ul>
    ${lista.join(` 
    `)}
</ul>
`;

console.log(html);
