// FOR LOOPS
/*
Syntax...
for (1st Statement; 2nd Statement; 3rd Statement){
  CODE TO BE RUN GOES HERE;
}
*/
// 1st Statement only runs at the very beginning.
// Loop will continue as long as the 2nd Statement remains true.
// Code in for loop will run (1st loop)
// 3rd Statement will run after each loop and then check to see if the 2nd Statement is still true before looping again.

// Example 1: Displays "There's no place like home" 3 times
for (i = 1; i <= 3; i++){
  console.log("There's no place like home");
}
/*
let i = 1;
i++;
2
i++;
3
i++;
4
*/

// INFINITE LOOP
/*
for (i = 1; i > 0; i++){
  console.log("Hello");
}
*/

// Example 2: Counts from 1 to 5
for (i = 1; i < 6; i++){
  console.log(i);
}

// Example 3: Count down from 5 to 0
for (i = 5; i >= 0; i--){
  console.log(i);
}

// Example 4: Counts from 0 to 10 by 2 (Even numbers)
for (i = 0; i <= 10; i += 2){
  console.log(i);
}

// Example 5: Counts from 1 to 25
for (i = 1; i <= 25; i++){
  console.log(i);
}

// Example 6: Loops through an array
const topics = ["Terminal", "HTML", "CSS", "SASS", "Bootstrap"];
for (i = 0; i < topics.length; i++){
  console.log(`${i + 1}. ${topics[i]}`);
}

// Example 7: Nesting with For Loops
for (i = 1; i <= 2; i++){
  console.log("Outer Loop");
  for (x = 1; x <= 3; x++){
    console.log("Nested Loop");
  }
}

