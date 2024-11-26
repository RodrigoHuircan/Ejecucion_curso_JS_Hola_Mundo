const user = {
  id: 1,
};
//user = 1 no se puede hacer, pero si agregar o quitar propiedades
user.name = "Nicolas";
user.guardar = function () {
  console.log("Guardando", user.name);
};

user.guardar();

//Cuando usamos const no nos deja cambiar el valor de la variable

delete user.name;
delete user.guardar;

console.log(user);

const user1 = Object.freeze({ id: 1 }); // No se puede modificar el objeto
const user2 = Object.seal({ id: 1 });
//Seal permite cambiar valores de las propiedades
user1.name = "Nico";
user1.id = 2;
console.log(user1);
