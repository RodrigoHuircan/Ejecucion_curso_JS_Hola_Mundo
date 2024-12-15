//Document es el objeto para acceder al dom

let htmlElement = document.getElementById("cuerpo");
//Esto devuelve un HTML element

let elementosRed = document.getElementsByClassName("red");
//HTML collection se parece a un array pero NO lo es

let elementosChanchito = document.getElementsByName("chanchito");
//Nodelist, parecida a HTML collection, pero son distintas

let parrafos = document.getElementsByTagName("p");
//HTML Collection, siempre se sincroniza con los cambios del dom

let el = document.querySelector("#cuerpo");
//Con .cuerpo puede ser por clase de css, solo devuelve un elemto

let els = document.querySelectorAll("p");
//Sin simbología es una etiqueta de html

//Los últimos 2 métodos son lentos, los métodos de arriba son más rápidos y eficientes

let plive = document.getElementsByTagName("p");
let pstatic = document.querySelectorAll("p");

console.log(plive, pstatic);

let nuevoP = document.createElement("p");
document.body.append(nuevoP);

console.log(plive, pstatic); //HTML Collection es responsivo
//Con query selector hay que hacer la query de nuevo
