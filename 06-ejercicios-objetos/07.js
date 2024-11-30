let objeto = { name: "Nicolas" };

//Primera idea de función
function agregarId(obj) {
  for (let prop in obj) {
    if (prop == "id") {
      return obj;
    } else {
      obj.id = Math.random();
    }
  }
}

//Segunda idea
function agregarId2(obj) {
  let props = Object.keys(obj);

  for (let prop of props) {
    if (prop == props[prop]) {
      return obj;
    } else {
      obj.id = Math.random();
    }
  }
}

agregarId(objeto);
console.log(objeto);

agregarId2(objeto);
console.log(objeto);

//Solución profe

function agregarIdProfe(obj) {
  if (typeof obj === "object") {
    obj.id = Math.random();
  }

  return obj;
}
