//Mi solución (Flaite)

function similares(obj1, obj2) {
  objeto1 = [];
  objeto2 = [];
  for (let llave in obj1) {
    //console.log(llave, obj1[llave]);
    objeto1[llave] = obj1[llave];
  }
  for (let llave in obj2) {
    //console.log(llave, obj2[llave]);
    objeto2[llave] = obj2[llave];
  }

  if (objeto1["id"] === objeto2["id"] && objeto1["name"] === objeto2["name"]) {
    return true;
  }
  return false;

  //return console.log(objeto1, objeto2);
}

let resultado = similares({ id: 1, name: "Nico" }, { id: 1, name: "Nico" });

console.log(resultado);

//Solución profe
function similaresProfe(obj1, obj2) {
  let distintos = false;

  for (let llave in obj1) {
    if (obj1[llave] !== obj2[llave]) {
      distintos = true;
    }
  }

  return !distintos;
}
