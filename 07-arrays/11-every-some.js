let usuarios = [
  { id: 1, activo: true },
  { id: 2, activo: true },
  { id: 3, activo: true },
];

let todosActivos = usuarios.every((u) => {
  console.log("todos activos", u.id);
  return u.activo;
});
//Este método seguirá hasta que encuentre un false

algunoActivo = usuarios.some((u) => {
  console.log(u.id);
  return u.activo;
});

console.log(algunoActivo);
//Devuelve true hasta que encuentre al menoos un valor
