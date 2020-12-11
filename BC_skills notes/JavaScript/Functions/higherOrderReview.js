// HIGHER ORDER FUNCTIONS REVIEW
// Passing a function into a function as a parameter/argument

// Example 1 (Passing a prexisting function as an argument)

// Function created to pass as an argument in the runFunc function
function func1(){
  console.log(`Hello I am a function!`);
}

function runfunc(f){
  f(); // "()" after the paramater will run the parameter as a function
}
runfunc(func1); // Do NOT include "()" after the function when passing as an argument. Doing this will run/execute the function before it is passed in.

// Example 2 (Setting a default function as a parameter)

function defaultFunc(d = function(){
  console.log(`This is a default function parameter`);
}){
  d();
}
defaultFunc(); // Runs/executes the defaultFunc with the default function as the argument
defaultFunc(func1) // Runs/executes the defaultFunc with the passed in function (AKA func1) as the argument

// Runs/executes the anonymous function created as the arugment
defaultFunc(() => console.log('This is an arrow function'));







