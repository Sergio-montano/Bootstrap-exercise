// SCOPE
// Scope determines the accessibility (visibility) of variables
// Where we create a variable determines where it can used or called

// FUNCTION SCOPE (Each function has it's own scope)

// Example 1
const location = `Scranton`;
function dunderMifflin(){
  const regionalManager = `Michael Scott`;
  console.log(regionalManager); // Okay, because the console log is also inside the function where the regionalManager varaible was created (regionalManager varaible is scoped to the dunderMifflin function)
}
dunderMifflin();
console.log(location); // Okay, because the location variable is scoped to the entire JS file
// console.log(regionalManager); NOT Okay, because the regionalManager variable was created inside the dunderMifflin function so it is scoped to that function. Therefore we cannot access it outside the function.

console.log(`=================`);

// Example 2
let dwight = `Assistant Regional Manager`;
function michaelSays(){
  dwight = `Assistant to the Regional Manager`;
}
console.log(dwight); // Displays the initial value of the dwight variable
michaelSays();
console.log(dwight); // Displays the updated value of the dwight variable, because the function was run/executed. Also, it is able to access the new value because the variable was created outside of the function

console.log(`=================`);

// Example 3
let declare = "";
function bankruptcy(){
  let declare = `I DECLARE BANKRUPTCY!`; // COMMENT THIS OUT TO SHOW HOW THE VALUE FOR THE "declare" variable changes
  console.log(declare); // First, checks for a variable with the name of declare inside the function/scope, then outside of the function/scope if one inside cannot be found
}
bankruptcy();
console.log(declare); // Will only display the value of the declare variable oustide of the bankruptcy function. (This is because the variable in the function is creating a new different variable. NOT updating the value of the first one).

console.log(`=================`);

// BLOCK SCOPE
// Conditionals and Loops have block scope

// Condtionals Example
const seasons = 9;
if (seasons < 10){
  const episodes = 201;
}
console.log(seasons); // Okay, because the seasons variable is scoped to the entire JS file
// console.log(episodes); NOT okay, because the episodes variable is scoped to the conditional block

console.log(`=================`);

// Loops Example
for (i = 1; i <= 3; i++){
  const fireDrill = `What's the procedure everyone?`; // You can create variables in loop without getting an error
  console.log(fireDrill);
}
// console.log(fireDrill) NOT okay, because the fireDrill variable is scoped to the loop block

console.log(`=================`);

// LEXICAL SCOPE

// Example 1 (Function Nesting)

function question(){
  const fearLoved = `Would I rather be feared or loved?`;
  function answer(){
    const easyBoth = `Easy. Both. I want people to be afraid of how much they love me.`;
    console.log(fearLoved); // Okay, because the answer function is inside the scope of the question function which the fearLoved variable is created in
    console.log(easyBoth);
  }
  // console.log(easyBoth); NOT okay, because the easyBoth variable is scoped to the nested (AKA answer) function
  answer(); // Must run/execute the nesting function
}
question();







