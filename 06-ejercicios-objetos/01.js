//Mi solución
//(Resultó la misma que la del profesor)
function Usuario(name) {
  this.name = name;
  this.id = Math.random();
}

let user = new Usuario("Felipe");
let user2 = new Usuario("Chanchito");
console.log(user, user2);
