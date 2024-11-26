// bit: 0 o 1
// Byte: 8bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6

console.log(1 | 3); //00000011
console.log(1 | 4); //00000101
console.log(3 | 5);

console.log(1 & 3);
console.log(1 & 4);
console.log(3 & 5);
