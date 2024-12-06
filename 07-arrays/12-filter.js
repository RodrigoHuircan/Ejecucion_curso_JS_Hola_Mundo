const usuarios = [
  { edad: 17, nombre: "Nico" },
  { edad: 13, nombre: "Chanchito" },
  { edad: 25, nombre: "Felipe" },
  { edad: 32, nombre: "Fernanda" },
];

const mayores = usuarios.filter((usuario) => usuario.edad > 17);
//Recibe los argumentos (Elemento iterado, indice, array)
//No existe el metodo reject en javascript

const menores = usuarios.filter((u) => u.edad < 18);

console.log(mayores);

for (let usuario of menores) {
  console.log("Nombre => ", usuario.nombre);
}
