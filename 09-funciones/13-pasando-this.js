(function saludar(...rest) {
  console.log(this, rest);
}).bind({ propiedad: "hola mundo" })(3, 5);

// saludar.call({ propiedad: "hola mundo" }, 1, 5);
// saludar.apply({ propiedad: "hola mundo" }, [1, 5]);
// saludar.bind({ propiedad: "hola mundo" })(3, 5);

const usuario = {
  nombre: "Nicolás",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach(
      function (ciudadania) {
        //Dentro de una función hace referencia al objeto de window
        //Esto es solo si se usa la palabra FUNCTION, para evitar esto se puede usar una fat arrow
        console.log(this.nombre, ciudadania);
      }.bind(this)
    );
  },
};

const usuario2 = {
  nombre: "Nicolás",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    let self = this;
    this.ciudadanias.forEach(function (ciudadania) {
      console.log(self.nombre, ciudadania);
    });
  },
};

const usuario3 = {
  nombre: "Nicolás",
  ciudadanias: ["Chile", "Colombia", "New Zealand"],
  mostrarCiudadanias() {
    this.ciudadanias.forEach(function (ciudadania) {
      console.log(this.nombre, ciudadania);
    }, this);
  },
};

usuario.mostrarCiudadanias();
usuario2.mostrarCiudadanias();
usuario3.mostrarCiudadanias();
