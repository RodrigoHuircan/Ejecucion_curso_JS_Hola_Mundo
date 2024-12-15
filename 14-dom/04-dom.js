let el = document.createElement("p");

el.innerText = "Elemento creado";

//Puede recibir texto y nodos
document.body.append(el);

el.remove(); //Quitar elemento

document.body.prepend(el); //Agregar al comienzo
//Sólo se puede agregar en una sola oportunidad

let div = document.createElement("div");
div.innerText = "Soy un texto";

el.replaceWith(div);

document.body.replaceChild(el, div);
//El primer argumento recibe con qué voy a reemplazar
//El segundo argumento es lo que es reemplazado

document.body.removeChild(el);
document.body.appendChild(el); //Sólo recibe nodos((etiquetas html))

document.body.insertBefore(div, el);

document.body.insertAdjacentElement("afterbegin", div);

document.body.insertAdjacentText();
document.body.insertAdjacentHTML();
