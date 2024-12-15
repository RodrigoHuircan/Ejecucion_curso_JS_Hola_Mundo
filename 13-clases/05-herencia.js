class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }

  save() {}
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }
}

let u = new User("Pato");
console.log(u);
