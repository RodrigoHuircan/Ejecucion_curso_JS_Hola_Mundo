/**
 * Con apis siempre se trabajarán 4 acciones
 *
 * LISTAR GET/todos
 * CREAR POST/todos
 * ACTUALIZAR PUT/PATCH/todos/1
 * ELIMINAR DELETE/todos/1
 * (CRUD BASICAMENTE)
 */

const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url, {
  method: "POST", //PUT, PATCH, DELETE, GET(valor por defecto)
  body: JSON.stringify({ title: "Hola mundo" }),
  headers: {
    "Content-Type": "application/json",
    Authorization: "api key",
  },
  cache: "no-cache", //default, reolad, force-cache, only-if-cached
})
  .then((response) => {
    if (response.ok) {
      return response.json(); //Solo si la api permite consumir un JSON, sino .text
    }
    return Promise.reject(response.status);
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
