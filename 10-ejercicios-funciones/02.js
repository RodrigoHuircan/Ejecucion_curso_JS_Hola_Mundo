//Mi  solución

const obj = {
  nombre: "Nicolás",
};

function extender(usuario) {
  usuarioExtendido = {};
  (usuarioExtendido.nombre = usuario.nombre),
    (usuarioExtendido.login = () => {
      console.log("Iniciando sesión", usuario.nombre);
    });
  usuarioExtendido.logout = () => {
    console.log("Cerrando sesión", usuario.nombre);
  };

  return usuarioExtendido;
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
usuario.logout();

//Solución profesor
//Mi solución también estaba correcta según el curso

function extenderProfe(usuario) {
  const metodos = {
    login() {
      console.log("Iniciando sesión", this.nombre);
    },
    logout() {
      console.log("Cerrando sesión", this.nombre);
    },
  };
  return Object.assign(usuario, metodos);
}
