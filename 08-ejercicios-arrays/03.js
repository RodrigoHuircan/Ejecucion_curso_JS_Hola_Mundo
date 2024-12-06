//Mi solución

const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

function getPaidUsers(usrs) {
  return usrs.filter((n) => n.plan == "premium" || n.plan == "gold");
}

console.log(getPaidUsers(usuarios));

//Solución profe

function getPaidUsers(usrs) {
  return usrs.filer((u) => u.plan !== "free");
}
