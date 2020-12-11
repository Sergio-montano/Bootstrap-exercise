// MAIN ARRAYS METHODS
const tmnt = ["Michaelangelo", "Leonardo", "Donatello", "Raphael"];
// console.log(tmnt);

// Push (Adds an item to the end of an array)
tmnt.push("Master Splinter");
// console.log(tmnt);

// Pop (Returns the value of the item at the end of an array. Also, Pop removes the item at the end of an array)
const splinter = tmnt.pop();
console.log(tmnt);
console.log(splinter);

// Shift (Returns the value of the item at the beginning of an array (A.K.A. Item at index of Zero). Also, Shift moves all items in the array one space to the left).
const michaelangelo = tmnt.shift();
console.log(tmnt);
console.log(michaelangelo);

// Unshift (Adds a new item to the beginning of an array (A.K.A. At the index of Zero). Also, Unshift shifts all items in the array to the right)
tmnt.unshift("Casey Jones");
console.log(tmnt);

// Const CAN be used when updating an array via array methods, but you cannot create a brand new array value for an array with const variable
// tmnt = ["Shredder", "Pizza"]; <-- This will not work

