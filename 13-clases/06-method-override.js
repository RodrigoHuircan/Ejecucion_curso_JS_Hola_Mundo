class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  save() {
    console.log("Guardando en entidad...");
  }
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }

  save() {
    super.save();
    console.log("Guardando en Usuario"); //Override
  }
}

let u = new User("Pato");
console.log(u);
