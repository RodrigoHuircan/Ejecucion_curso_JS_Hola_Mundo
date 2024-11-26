function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");
  };
}

/**Información útil para extender objetos */
let punto = { z: 7 };
Punto.call(punto, 1, 2);
//Punto.apply(punto, [1, 2]); //Lo mismo que call pero se le pasan los argumentos como array

console.log(punto);

//NUNCA CREAR FUNCIONES CON FUNCTION
// const Point = new Function(
//   "x",
//   "y",
//   `  this.x = x;
//   this.y = y;
//   this.dibujar = function () {
//     console.log("Dibujando...");
//   };`
// );

// const p = new Point(1, 2);
// console.log(p);
