// FOR EACH & MAP (Array methods that require a function to be passed as an argument)

// FOR EACH
// Calls/Runs a function once for each item in an array

const employees = [
  `Michael`,
  `Dwight`,
  `Jim`,
  `Pam`,
  `Stanley`,
  `Bob Vance`,
  `Meredith`
];

// Example 1
function names(n){
  console.log(n);
}
employees.forEach(names); // Runs the names function on each item in the employees array (NOTE: Function must have a parameter to plug the value of each array item into)

console.log(`=============`);

// Example 2
employees.forEach(function(n){
  console.log(n.toUpperCase());
});
// Runs the anonymous function on each item in the employees array (NOTE: You can create a function instead of passing in a pre declared/created function)

console.log(`=====================`);

// MAP
// Creates a new array with the returned values from calling/running a function for every array item. (NOTE: Map does not change the value of the array that Map is being used on)

const fullNames = [
  {first: `Michael`, last: `Scott`},
  {first: `Dwight`, last: `Schrute`},
  {first: `Jim`, last: `Halpert`},
  {first: `Pam`, last: `Beesly`}
];

// Example 1
function fal(office){
  return `${office.first} ${office.last}`;
}

const firstAndLast = fullNames.map(fal); // Creates a new array and we set that new array to the firstAndLast variable
console.log(firstAndLast);

console.log(`==============`);

// Example 2
// Using an anonymous arrow function
const officeInitials = fullNames.map((init) => `${init.first[0]} ${init.last[0]}`);
console.log(officeInitials);

