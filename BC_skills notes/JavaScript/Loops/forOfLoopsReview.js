// FOR OF LOOPS REVIEW
// Loops that iterates through the values at each index of an array or string

/*
Syntax

for (indexName of iteriableValue){
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const nightmareBefore = `This is halloween`;

for (letter of nightmareBefore){
  // Runs this console log for the value at each index of the nightmareBefore string. The value of each index is plugged into the index called letter for every time through the loop
  console.log(letter);
}

console.log(`=============`);

// Example 2
const badTreats = [
  `Raisins`,
  `Toothbrush`,
  `Floss`,
  `Apple`,
  `Penny`,
  `Pencil`,
  `No Response`
];

for (item of badTreats){
  console.log(item); // Displays the string/value at each index of the badCandy array each time through the loop
}

console.log(`=============`);

// Example 3
// A string or array value can be used in a for loop instead of using a variable
for (character of `Oct. 31st`){
  console.log(character);
}

console.log(`============`);

// Example 4
const nesting = [
  [
    `Index 0 in the 1st 2nd level array`,
    `Index 1 in the 1st 2nd level array`
  ],
  [
    `Index 0 in the 2nd 2nd level array`,
    `Index 1 in the 2nd 2nd level array`
  ]
];

for (array of nesting){
  for (string of array){
    console.log(string);
  }
  // console.log(array);
}







