console.log(resta); //Hoisting -> Izar o levantar

//Declaración de funciones: Function declaration

//Función nombrada => Named function
function suma() {
  console.log("sumando...");
}

//Función anónima => Anonymous function
//Se utilizan cuando se pueden usar de manera instantánea
[].map(function () {
  console.log("función anónima");
});

// function (){
//     console.log('función anónima')
// };
//Forma natural, pero chrome exige declaración

//Expresión de funciones => function expresion
let resta = function () {
  //Anonymoys function expression
  console.log("restando");
};

const multiplica = function multi() {
  console.log("multiplica"); //Funcion nombrada
};

//La fat arrow function SIEMPRE va a ser anónima
const divida = () => {
  console.log("dividiendo");
};
