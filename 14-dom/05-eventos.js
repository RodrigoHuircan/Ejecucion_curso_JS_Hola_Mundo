let form = document.createElement("form");
form.id = "mi-formulario";
let input = document.createElement("input");
input.setAttribute("type", "text");
let btn = document.createElement("button");
btn.innerText = "Enviar";
form.append(input);
form.append(btn);

document.body.append(form);

form.onmouseenter = (event) => {
  console.log("entra el mouse", event);
  input.style = "background-color: grey;";
};

form.onmouseleave = (event) => {
  console.log("sale el mouse", event);
  input.style = "background-color: white;";
};

input.onfocus = (e) => {
  console.log("input con focus");
};

input.onblur = (e) => {
  console.log("input perdió el focus");
};

input.onchange = (e) => {
  console.log("valor cambia", e.target.value);
};

// btn.onclick = (e) => {
//   e.preventDefault(); //Impide que la página se refresque de manera automática
//   console.log("boton clickeado");
// };

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("boton clickeado");
}); //Lo mismo que btn.onClick pero con add event
