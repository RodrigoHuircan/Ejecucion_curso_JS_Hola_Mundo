function sumaTodo(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("El parámetro no es un array");
  }
  return arr.reduce((acc, el) => {
    if (typeof el !== "number" || Number.isNaN(el)) {
      throw new Error(`Elemento ${el} no es número`);
    }
    return acc + el;
  });
}

try {
  console.log(sumaTodo([1, 2, 3, 4]));
} catch (e) {
  console.log(e.message);
}

console.log("despues del try catch");
//Si no uso try catch la aplicación se cae

//Manejar excepciones siempre que sea posible
