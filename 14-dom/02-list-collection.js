let collection = document.getElementsByTagName("p");
let list = document.querySelectorAll("p");
console.log(collection, list);

let item1 = collection.namedItem("chanchito");
//Búsqueda por name
let item2 = collection.item(3);
//Búsqueda por indice
let item3 = collection[3];
//HTML Collection no tiene métodos para iterar

//Iterar manual

for (let el of collection) {
  console.log(el);
}

Array.from(collection).forEach((x) => console.log(x));
[...collection].forEach((x) => console.log(x));

let item4 = list.item(3);
let item5 = list[3];
//Búsqueda por índice

list.forEach((x) => console.log(x)); //Iterar
let entries = list.entries();
let keys = list.keys();
let values = list.values();
