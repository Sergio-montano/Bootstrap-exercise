// ARROW FUNCTIONS
/*
functionName = () => {
  CODE TO BE RUN GOES HERE;
}

*/

// Example 1
adding = () => {
  console.log(1 + 1);
}
adding();

// Example 2
subtracting = () => console.log(1 - 1);
// Arrow functions can be written without brackets "{}"
subtracting();

// Example 3
multipying = (num1, num2) => console.log(num1 * num2);
// Arrow function with a multiple parameters
multipying(5, 10);

// Example 4
dividing = number => console.log(number / 2);
// Arrow function with a single parameter
dividing(8);

// Example 5
modulo = num => num % 2;
const result = modulo(5);
// Arrow function auto returns a value
console.log(result);

