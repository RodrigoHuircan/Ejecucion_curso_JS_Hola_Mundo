const letras = ["a", "b", "c", "d"];

const final = letras.pop(); //Eliminar último elemento de un array
//.pop tambien permite  agregar ese último elemento a una varible
console.log(final, letras);

const comienzo = letras.shift(); //Eliminar el primer elemento
console.log(comienzo, letras);

letras.splice(1, 1); //Entremedio
console.log(letras);
