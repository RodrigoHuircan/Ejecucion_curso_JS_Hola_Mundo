let punto = {
  x: 10,
  y: 15,
};

let clonePunto = Object.assign(punto, { z: 20, x: 1 });
let referencia = Object.assign({}, punto, { z: 20, x: 1 });
console.log(punto, clonePunto);

console.log("Referencia", referencia);

//Mientras mas a la derecha las propiedad de assign ganan

let copiaPunto = Object.assign({}, punto);
console.log("Copia con assign", copiaPunto, punto);

//Spread operator
let copia3 = { ...punto };

//Los 3 puntos hacen referencia a la creación del objeto literal
console.log("Copia 3", copia3);

let copia4 = {};
for (let llave in punto) {
  copia4[llave] = punto[llave];
}

console.log("Copia 4", copia4);
