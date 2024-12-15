class Restaurants {
  static cantidad = 12;
  constructor(name) {
    this.name = name;
  }

  getTimetable() {
    console.log("horario restaurante");
  }

  static getRestaurant(id) {
    return new Restaurants("BBQ");
  }

  //static hace referencia a un método que es parte de la clase,
  //No de la instancia del objeto
}

const r = Restaurants.getRestaurant(12);

//Los métodos de la clase Array son static
Array.call();
