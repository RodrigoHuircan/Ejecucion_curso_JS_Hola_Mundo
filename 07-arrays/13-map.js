const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];

/**Esto genera una plantilla html, con usuarios mayores a 17 años
 * lista genera un nuevo array y los filtra por edad
 * html ajusta el formato para poder insertarlo
 */
const lista = usuarios
  .filter((u) => u.edad > 17)
  .map((u) => `<li>${u.nombre}</li>`);

const html = `<ol>${lista.join(" ")}</ol>`;
//Recibe (Elemento iterando, índice, array iterado)

console.log(lista);
console.log(html);

const mapped = usuarios.map((u) => {
  return {
    ...u,
    mayor: u.edad > 17,
  };
});

console.log(mapped);
