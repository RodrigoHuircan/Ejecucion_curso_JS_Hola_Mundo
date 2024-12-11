const usuario = {
  nombre: "Nicolás",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach((ciudadania) => {
      //Dentro de una función hace referencia al objeto de window
      //Esto es solo si se usa la palabra FUNCTION, para evitar esto se puede usar una fat arrow
      console.log(this.nombre, ciudadania);
    });
  },
};

usuario.mostrarCiudadanias();
