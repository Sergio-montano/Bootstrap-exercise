// SET TIMEOUT METHOD REVIEW
// The setTimeout method accepts two parameters (A function and a number). The number determines the amount of time (In milliseconds) to wait until the function is executed/run

// Example 1
function func1(){
  console.log(`This displays after 1 second`);
}
const mSeconds1 = 1000;

setTimeout(func1, mSeconds1);

// Example 2
let num = 1;

function func2(){
  console.log(num);
}

const mSeconds2 = 2000;

// The value of num is changed to 2 before the function is run
setTimeout(func2, mSeconds2);

num = 2;

// Example 3
setTimeout(() => {
  console.log(`This is the first function to run`);
}, 500);


// Example 4
setTimeout(() => {
  console.log(`This runs after 3 seconds`);
  setTimeout(() => {
    console.log(`This runs after 5 seconds`);
  }, 2000);
}, 3000);

