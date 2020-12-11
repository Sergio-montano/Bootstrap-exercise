// MAIN ARRAY METHODS REVIEW
// PUSH, POP, SHIFT, UNSHIFT

const characters = [`Harry`, `Hermione`];
console.log(characters);

// Push (Adds an item to the end of an array)
characters.push(`Ron`);
console.log(characters);

// Pop (Removes the item at the end of an array. Also, returns the value of the removed item)
const ron = characters.pop();
console.log(characters);
console.log(ron);

// Shift (Removes the item at the beginning of an array and shifts the left over items to the left. Also, returns the value of the removed item)
const harry = characters.shift();
console.log(characters);
console.log(harry);

// Unshift (Adds an item to the beginning of an array and shifts the items in the array to the right)
characters.unshift(`Hagrid`);
console.log(characters);

