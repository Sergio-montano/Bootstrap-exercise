// ARROW FUNCTIONS REVIEW

// Example 1
func1 = () => {
  console.log(`This is an arrow function`);
}
func1(); // Displays the "This is an arrow function" string

// Example 2
func2 = () => ( // Parentheses "()" can be used in arrow function to return a result with using the RETURN keyword
  123
)
const oneTwoThree = func2(); // Returns the number value of 123
console.log(oneTwoThree);

// Example 3
func3 = () => `Hello` + ` ` + `there!`; // Returns the value of what is after the arrow "=>"
const hello = func3(); // Returns the string value of "Hello there!"
console.log(hello);

// Example 4
func4 = num => { // Parentheses "()" are not needed when creating an arrow function with a single parameter
  console.log(num * num);
}
func4(5); // Displays the number 25 (AKA 5 squared)

// Example 5
func5 = (num1, num2) => { // Arrow functions can accept multiple parameters. Parentheses "()" must used when there there are multiple parameters.
  console.log(num1 + num2);
}
func5(30, 1); // Displays the number 31
