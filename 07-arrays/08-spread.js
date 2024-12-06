let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1, 3, 4, ...arr2];
//Con esta sintaxis puedo agregar lo que quiera a la derecha
//[...arr1, 1, 2, 'a']
let arr4 = [...arr3];
arr3.pop();
console.log(arr3);
console.log(arr4);
