// MATH OBJECT (Properties and Methods for numbers)

// Properties
console.log(Math.PI);

// Methods
// Round method
let roundedNumber = Math.round(14.8);
console.log(roundedNumber);

// Floor method (Removes the numbers after the decimal on a number)
let flooredNumber = Math.floor(14.8);
console.log(flooredNumber);

// Random method (Returns a number from 0 up to less than 1)
let randomNumber = Math.random();
randomNumber *= 5;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// Ceil Method (Always rounds up)
let ceilNumber = Math.ceil(1.2);
console.log(ceilNumber);
let zeroCeilNumber = Math.ceil(0);
console.log(zeroCeilNumber);

let newRandomNumber = Math.random();
newRandomNumber *= 5;
newRandomNumber = Math.ceil(newRandomNumber);
console.log(newRandomNumber);
