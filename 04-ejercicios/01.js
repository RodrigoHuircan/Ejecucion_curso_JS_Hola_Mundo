function cualEsMayor(a, b) {
  //   if (a > b) return a; --> Mi solución
  //   else return b;
  return a > b ? a : b; //Versión con operador ternario
}

let mayor = cualEsMayor(10, 5);
console.log(mayor);
