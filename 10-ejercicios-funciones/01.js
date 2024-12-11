/**Mi solución, usando las funciones de flecha para hacer
 * más legible el código
 */

const obj = {
  nombre: "Nicolás",
};

function Extender() {
  (this.login = () => {
    console.log("Logueando usuario", this.nombre);
  }),
    (this.logout = () => {
      console.log("Cerrando sesión", this.nombre);
    });
}

Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();

//Solución profe

function ExtenderProfe() {
  (this.login = () => {
    console.log("Iniciando sesión", this.nombre);
  }),
    (this.logout = () => {
      console.log("Cerrando sesión", this.nombre);
    });
}
