function getProto(u) {
  return Object.getPrototypeOf(u);
}

function Entidad() {}

Entidad.prototype.save = function () {
  console.log("guardando desde entidad...");
};

function User() {}

User.prototype.save = function () {
  console.log("guardando desde user");
};
//Override en caso de que quiera que un constructor tenga un comportamiento distinto
//En un método en particula

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();

console.log(getProto(getProto(u)));
/**Esto se hace si deseo acceder al método que está después de la sobreescritura */
