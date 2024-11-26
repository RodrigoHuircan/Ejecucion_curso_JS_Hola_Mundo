const punto = {
  x: 10,
  y: 15,
  dibujar() {
    console.log("dibujando");
  },
};

//delete punto.dibujar;

if ("dibujar" in punto) {
  punto.dibujar();
}

//console.log(Object.keys(punto));

for (let llave of Object.keys(punto)) {
  console.log(llave, punto[llave]);
}

for (let entry of Object.entries(punto)) {
  console.log(entry);
} //Métodos de clase

//Entry => Nombre prop + más valor

for (let llave in punto) {
  console.log(llave, punto[llave]);
} //For in es relativamente nuevo, a pesar de eso es preferible usarlo
