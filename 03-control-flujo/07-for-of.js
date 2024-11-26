//For of es para iterar elementos de un array

let animales = ["Chanchito feliz", "Dragón", "Perrito"];
for (let animal of animales) {
  console.log(animal);
}

animales.push("Gatito");
console.log(animales);

//Ejemplo con while

let i = 0;
while (i < animales.length) {
  console.log(animales[i]);
  i++;
}
