function Entidad(entidad) {
  this.id = Math.random().toString("20");
  this.entidad = this.entidad;
}

function User() {
  Entidad.call(this, "user");
  this.attrs = {
    name: "Chanchito feliz",
    email: "chanchito@holamundo.io",
  };
}

const u = new User();
console.log(u);
