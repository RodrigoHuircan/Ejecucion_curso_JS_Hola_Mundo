const saludo = "Hola Mundo!";
/**
 * Los literales ofrecen comportamiento de objeto sin necesidad
 * de devolver un objeto. Es decir que transforma el String
 * a objeto y despues este lo retorna como string nuevamente
 */

const despedida = new String("Chao mundo :(");
console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("asda")); //Devuelve -1 si no encuentra el texto que esta buscando
console.log(saludo.includes("Mundo"));
console.log(saludo.replace("Mundo", "Nicolas"), saludo); //El primer argumento es lo que se va a reemplazar
//El segundo argumento en lo que reemplazará al argumento de la izquierda
//Es necesario guardarlo en una nueva variable
let nuevoSaludo = saludo.replace("Mundo", "Nicolás");
console.log(nuevoSaludo);
console.log(saludo.toLowerCase(saludo));
console.log(saludo.toUpperCase(saludo));
console.log(saludo.substring(5, 11));
console.log(saludo.substr(2, 2)); //Deprecado, no usar

const espacios = "   Hola  Mundo!    ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());
