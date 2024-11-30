//Mi solución
let objeto = {
  id: 1,
  name: "chanchito",
  login: function () {
    console.log("login");
  },
  logout: function () {
    console.log("logout");
  },
};

console.log(typeof objeto["login"]);

function cualesMetodos(obj) {
  for (let props in obj) {
    if (typeof obj[props] == "function") {
      console.log(props);
    }
  }
}

cualesMetodos(objeto);
