/**
 * Crear algoritmo que imprima números impares
 */

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("Impar", i);
  }
}

console.log("-------------------------------");
//Mi solución, el profesor uso un ciclo while

let b = 0;
while (b <= 10) {
  if (b % 2 !== 0) {
    console.log("Impar", b);
  }
  b++;
}
