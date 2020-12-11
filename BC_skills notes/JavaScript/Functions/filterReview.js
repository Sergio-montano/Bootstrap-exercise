// FILTER ARRAY METHOD
// The filter method creates/returns an array with all array elements that pass a test (provided as a function). (NOTE: It does not change the array the method is being used on)

// Example 1
helloGoodbye = [`Hello`, `Goodbye`];
// Returns (A.K.A. Adds to the new array being created) only the array items that are equal to the "Hello" string
helloGoodbye = helloGoodbye.filter(item => item === `Hello`);
// Or
/*
helloGoodbye = helloGoodbye.filter(function (item){
  return item === `Hello`;
});
*/
// Displays the new array created/returned from the filter method
console.log(helloGoodbye);

// Example 2
let booleans = [true, false, true];
// Returns only the array items that are booleans value of true
booleans = booleans.filter(item => item);
// Displays the new array created/returned from the filter method
console.log(booleans);

// Example 3
const nums = [2, 3, 14, 99];
// Returns only the array items that are even numbers
const evenNums = nums.filter(item => item % 2 === 0);
// Displays the new array created/returned from the filter method
console.log(evenNums);

// Example 4
const nestedArrays = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
  [1, 2, 3, 4, 5]
];
// Returns only the array items that are arrays with more than 3 items
const longArrays = nestedArrays.filter(item => item.length > 3);
console.log(longArrays);
