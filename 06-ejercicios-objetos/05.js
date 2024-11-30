//Mi solución

let objeto = {
  id: 1,
  name: false,
  login: function () {
    console.log("login");
  },
  logout: function () {
    console.log("logout");
  },
};

let propiedad = "name";

function tieneProp(obj, propiedad) {
  let buleano = false;
  for (let prop in obj) {
    if (prop == propiedad) {
      buleano = true;
    }
  }

  return buleano;
}

console.log(tieneProp(objeto, propiedad));

//Solución profesor

function tienePropProfe(obj, propiedad) {
  let props = Object.keys(obj);

  for (let prop of props) {
    if (propiedad == prop) {
      return true;
    }
  }

  return false;
}
