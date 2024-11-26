// let a = 1;
// let b = a;

// b++;

// confirmacion = a === b;
// console.log(a, b);

// console.log(confirmacion);

// let a = {};
// let b = a;

// b.prop = 1;
// console.log(a, b);

//Esto sucede por la referencia

let a = {
  prop: 1,
};
function suma(n) {
  n.prop++;
}

suma(a);
suma(a);
suma(a);
console.log(a);

/**
 * Datos primitivos: Se copian
 * Datos referencia: Se referencian
 * => Arrays
 * => Objetos
 * => Funciones
 */
