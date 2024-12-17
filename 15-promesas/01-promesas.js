/**Las promesas reflejan el estado de una petición
 *
 * 1. Pendiente (Pending)
 * 2. Rechazada (Rejected)
 * 3. Terminada (Fullfilled)
 *
 *
 * Se usan para
 * -Consultas a la base de datos
 * -Peticiones a servidores
 * -Webworkers
 */

let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola mundo"), 10000);
});

promesa.then(
  (valor) => console.log(valor),
  (e) => console.log("Error", e)
);
