const ahora = new Date(); //Se crea con la fecha actual
console.log(ahora);

const fecha = new Date("December 11 1986 14:15 GMT-0300");
//Mes Dia Año es el formato usa

console.log(fecha);

const fecha2 = new Date(1986, 11, 25, 14, 15);
const fecha3 = new Date(1986, 11, 25, 14 + 15, 15);
console.log(fecha2);
console.log(fecha3);

console.log("datestring", fecha3.toDateString());
console.log("ISOstring", fecha3.toISOString());
console.log("timestring", fecha3.toTimeString());
//Idealmente usar el formatoo ISOstring

fecha3.setFullYear(1978);
console.log(fecha3);
