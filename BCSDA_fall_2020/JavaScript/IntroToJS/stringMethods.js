// STRING METHODS

// Basics Methods

// Trim
let variableTrim = "   Hello there!    ";
console.log(variableTrim.trim());
// variableTrim = variableTrim.trim();
console.log(variableTrim);

// Uppercase and Lowercase
let text = "This is text";
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// Methods with Arguments

// Index Of
let letters = "abc";
console.log(letters.indexOf("c"));
let name = "Justin Browning";
let nameIndex = name.indexOf("Browning");
console.log(nameIndex);

// Replace
let hi = "hello";
console.log(hi.replace("h", "b"));
console.log(hi.replace("hello", "bye"));

// Repeat
let school = "BCHS";
console.log(school.repeat(2));

// Slice
let timeToGo = "Let us go home!";
console.log(timeToGo.slice(0, 9));
console.log(timeToGo.slice(7));
console.log(timeToGo.slice(-5));
console.log(timeToGo.slice(-5, -1));
