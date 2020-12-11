// WHILE LOOPS
/*
Syntax
while (Condition){
  CODE TO BE RUN GOES HERE;
}
*/
// A While Loop continues looping as long as the Condition remains true

// Example 1: Counts from 1 to 3
let number = 1;
while (number <= 3){
  console.log(number);
  number++;
}

// Example 2: Waits for user to enter 14
const favNum = 14;
let userInput = prompt(`Enter the number ${favNum}`);
while (userInput != 14){
  userInput = prompt(`Enter the number ${favNum}`);
}
alert(`You entered ${favNum}`);

// Break Statement in Loops
// The break statement breaks/stops the loops and moves on
const strongestAvenger = "Hulk";
let userInput1 = prompt("Who is the Strongest Avenger?");
while (true){
  if (userInput1 === strongestAvenger){
    break;
  } else {
    userInput1 = prompt("Who is the Strongest Avenger?");
  }
}
alert("Correct. HULK SMASH!!!");




