// HIGHER ORDER FUNCTIONS
// Passing a function into a function as a parameter/argument

// Example 1
function hello(){
  console.log(`Hello`);
}

function print(f){
  f(); // Need to include () so the function passed in as an argument will run/execute
  console.log(`We passed a funcion into a function!`);
}
print(hello);

console.log(`===============`);

// Example 2
function func1(p = function(){
  console.log(`Set a default function at the parameter value`);
}){
  p();
}
func1(); // Runs function with default function as the argument
func1(hello); // Runs function with the hello function as the argument
