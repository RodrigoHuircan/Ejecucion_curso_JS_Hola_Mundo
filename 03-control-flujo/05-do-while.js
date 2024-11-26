let i = 0;
// while (i < 10) {
//   if (i % 2 === 0) {
//     console.log("Número par", i);
//   }
//   i++;
// }

do {
  //Siempre se ejecuta la porción de código al menos una vez
  if (i % 2 === 0) {
    console.log("Número par", i);
  }
  i++;
} while (i < 10);
