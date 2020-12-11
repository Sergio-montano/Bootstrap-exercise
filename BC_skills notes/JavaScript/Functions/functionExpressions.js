// FUNCTION EXPRESSIONS
// Creating a function and storing it to a variable
/*
Syntax

variableType variableName = function(){
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const func1 = function(){
  console.log(`This is a Function Expression`);
}
func1();

// Example 2
const func2 = function func2(){
  console.log(`The variable name and function should be the same.`);
}
func2();

// Example 3
func3(); // CAN run a function declaration on a line that precedes where the function is created

function func3(){
  console.log(`Yay it executed!`);
}

func4(); // Can NOT run a function expression on a line that precedes where the function is created

const func4 = function(){
  console.log(`This will not run`);
}
