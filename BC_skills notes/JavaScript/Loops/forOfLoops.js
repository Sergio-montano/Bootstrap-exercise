// FOR OF LOOP (Loop that iterates through a value)
/*
Syntax
for (index of iterableValue){
  CODE TO BE RUN GOES HERE
}
*/
// Strings and Arrays are values that can be iterated through, but not Objects

// Example 1
const h = `Halloween`;

for(letter of h){
  console.log(letter);
}

// Example 2
const badCandy = [
  `Black Licorice`,
  `Good & Plenty`,
  `Circus Peanuts`,
  `Necco Wafers`
];

for (item of badCandy){
  console.log(item);
}

// Example 3
const goodCandy = [
  [`Reeses`, `Kit-Kat`, `M&Ms`],
  [`Snickers`, `3 Musketeers`, `Twix`],
  [`Candy Corn`, `Gummy Bears`, `Sour Patch Kids`]
];

for (category of goodCandy){
  for (candy of category){
    console.log(candy);
  }
}


