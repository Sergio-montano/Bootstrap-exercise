// CONDITIONAL STATEMENTS

// If
// Code inside brackets will run if the value is true
// NOTE: Remember to use parantheses () around value
if (true) { // Value is true so code runs
  console.log("Yay it was true!");
}

if (false) { // Value is false so code does NOT run
  console.log("This will not run");
}

if (2 > 0){ // true
  console.log("Yes 2 is greater than 0");
}

// If and Else
// Else runs if previous value(s) were NOT true
let num = 4;

if (num < 5){
  console.log("Your number is less than 5");
} else {
  console.log("Your number is more than 5");
}

// If, Else If, and Else
// Else If runs if previous value(s) were NOT true
let favHalloweenMovie = "Hocus Pocus";
favHalloweenMovie = "Ghostbusters";
favHalloweenMovie = "Troll 2";

if (favHalloweenMovie === "Hocus Pocus"){
  console.log("Hey! That's Austin and Gina's favorite!");
} else if (favHalloweenMovie === "Ghostbusters"){
  console.log("Hey! That's Matt's favorite!");
} else {
  console.log("NOT Austin, Gina, or Matt's favorite");
}

// Nesting
let num2 = 2;

if (num2 < 5){
  console.log("Your number is less than 5");
  if(num2 === 3){
    console.log("Your number is 3!");
  }
} else {
  console.log("Your number is more than 5");
}

