const p1 = Promise.resolve(3);
const p2 = 42; //Si pongo un primitivo dentro de una cadena de promesas, se va a considerar
// el valor primitivo también como una promesa
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "foo");
});

Promise.all([p1, p2, p3])
  .then((valores) => console.log("all", valores))
  .catch((e) => console.log("error en all", e)); //Espera a que se resuelva cada una de las promesas.
//Una vez que estén todas resueltas se ejecuta .then
//Si se rechaza al menos una ejecuta.catch

Promise.race([p1, p2, p3])
  .then((valor) => console.log("race", valor))
  .catch((e) => console.log("error en all", e)); //Espera a que se resuelva la primera promesa
//Si se rechaza la primera promesa cae al catch

Promise.any([p1, p2, p3])
  .then((valor) => console.log("any", valor))
  .catch((e) => console.log("error en any", e));
/**Any toma la primera promesa que se resolvió, independiente de si una promesa
 * anterior fue rechazada
 */

Promise.allSettled([p1, p2, p3])
  .then((valores) => console.log({ valores }))
  .catch((e) => console.log({ e }));
/**Independiente de si las promesas son resueltas o rechazadas
 * allSettled envuelve los resultados de las promesas en un objeto con la propiedad status
 */
