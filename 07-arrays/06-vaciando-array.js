//Existen 4 formas

let arr = [1, 2];
let arr2 = arr;
arr = [];
console.log(arr, arr2);
//Esta no es la manera más recomendada, la asignacion en arr2 se mantiene

let arr3 = [1, 2];
arr3.length = 0;
console.log(arr3);
//Común

let arr4 = [1, 2];
arr4.splice(0, arr4.length);
console.log(arr4);
//Buena, no ideal

let arr5 = [1, 2];
while (arr5.length > 0) {
  arr.pop();
}
//Lenta y muchos recursos, no usar
