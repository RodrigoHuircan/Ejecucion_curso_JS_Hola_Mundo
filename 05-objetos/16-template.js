const nombre = "Nicolas";
const apellido = "Schurmann";
const nombreCompleto = nombre + " " + apellido;
const miFuncion = () => {
  return "Poto";
};

const plantilla = `Hola ${nombreCompleto} ${miFuncion()}
Bienvenidos a "Ultimate JavaScript" :)
Cariños Nico.`;

console.log(plantilla);

function plantillaFuncion(nombreCompleto) {
  return `Hola ${nombreCompleto}
Bienvenidos a "Ultimate JavaScript" :)
Cariños Nico.`;
}

console.log(plantillaFuncion("Rodrigo Huircan"));
