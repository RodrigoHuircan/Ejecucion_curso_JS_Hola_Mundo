console.log(Math.PI, Math.abs(-15), Math.round(15.5), Math.round(15.4));
console.log(Math.floor(15.9));
console.log(Math.ceil(15.000001));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(9));
console.log(Math.random());

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandom(1, 10));
