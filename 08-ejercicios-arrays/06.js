//TIENES QUE USAR REDUCE typeof

function dividePorTipo(arr) {
  return arr.reduce((acc, el) => {
    let llave = typeof el;
    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(el);
    return acc;
  }, {});
}

const miArray = ["Hola", 12, true, "Mundo", {}, { id: 15 }, ["lala"]];

let arr = dividePorTipo(miArray);
console.log(arr);

//Este no lo pude resolver solo
