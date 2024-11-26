//for in es para iterar propiedades de un objeto

let user = {
  id: 1,
  name: "Juan Perez",
  age: 25,
};

for (let prop in user) {
  console.log(prop, " = ", user[prop]);
}

//Siempre es mejor usar for of
let animales = ["Chanchito feliz", "Dragón", "Perrito"];
for (let indice in animales) {
  console.log(indice, animales[indice]);
}
