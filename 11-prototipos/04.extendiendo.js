Object.prototype.isEqual = function (obj) {
  // ...
};

let x = {};
x.isEqual({ a: 1 });

/**Como consejo
 *
 * No extender prototipos de funciones constructoras que YA tiene JS
 * (OBJECT, ARRAY, NUMBER, BOOLEAN)
 * Esto puede asegurar la compatibilidad con librerías externas
 */
