// TEMPLATE LITERALS
// New way to concatenate strings

// Example of string concatenation
// Can use single quotes or double quotes as long as each string has matching pair
let name = 'Matthew' + " " + "Riley";
console.log(name);

// Example of a template literal
// Need to use backticks (``) instead of quotes ('' or "")
// Uses ${} instead of using plus sign (+) 
let fullName = `Matthew${" "}Riley`;
console.log(fullName);
let middleName = "John";
fullName = `Matthew ${middleName} Riley`
console.log(fullName);

let nameAndAge = `My name is Matthew and I am ${2020 - 1987} years old.`
let currentYear = 2020;
const birthYear = 1987;
nameAndAge = `My name is Matthew and I am ${currentYear - birthYear} years old.`
console.log(nameAndAge);