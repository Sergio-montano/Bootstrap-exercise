// PARSE INT
// parseInt tries to convert a value into a number value. If the conversion is not possbile, then it will return NaN as the value/result. (NOTE: NaN has a default boolean value of false.)

// Example 1
const parse1 = parseInt("31"); // parseInt converts the string value of "31" to the number value of 31
console.log(parse1); // Displays the number 31
console.log("31"); // Displays the string "31"

// Example 2
const parse2 = parseInt("Thirty-one"); // parseInt cannot convert a string of letters into a number value. Therefore the value of NaN is returned
console.log(parse2); // Display NaN (Not A Number)

// Example 3
// NaN has a default boolean value of false.
if(NaN){
  console.log(`This will not run`);
}





