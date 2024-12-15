let el = document.createElement("p");

el.innerText = "Elemento creado";

document.body.append(el);

//el.innerText = "Nuevo elemento";
el.innerHTML = "<ul><li>Hola Mundo</li></ul>";
//Para insertar elementos html

el.style = "background-color: red; font-weight: bold;";
el.className = "parrafo";
el.id = "mi-parrafo";
//No sirve el.mipropiedad
el.mipropiedad = "mi propiedad";

el.setAttribute("mipropiedad", "mi propiedad");
el.getAttribute("mipropiedad");
el.hasAttribute("mipropiedad");
