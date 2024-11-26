//Break = Salir del loop
//Continue = Saltar iteración

let i = 0;
while (i < 6) {
  i++;
  if (i === 2) {
    //Si se cumple no ejecuta lo de abajo (No muestra 2)
    continue;
  }
  if (i === 4) {
    console.log("Aqui se quiebra la ejecución");
    console.log(i);
    break;
  }
  console.log(i);
}
