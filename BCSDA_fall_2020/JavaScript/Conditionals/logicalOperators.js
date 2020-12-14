// LOGICAL OPERATORS

// AND (&&)
// The AND logical operator checks if ALL values are true
// ALL values need to be true for the ending result to be true when using AND
let and1 = true && false; // false
console.log(and1);

let and2 = 5 < 6 && 10 >= 10; // true
console.log(and2);

let and3 = "Inconceivable!".length === 14 && 10 === "10"; // false
console.log(and3);

let and4 = 2 > -10 && "Hi" === "Hi" && 2 != "2"; // false
console.log(and4);

// OR (||)
// Shift + \ (Backslash) to create a pipe character
// The OR logical operator checks if at least ONE value is true
// Only ONE value needs to be true for the ending result to be true when using OR
let or1 = true || false; // true
console.log(or1);

let or2 = 1 > 2 || "Jam" === "Jelly"; // false
console.log(or2);

let or3 = "Two" == 2 || "One".length === 1 || false === false; // true
console.log(or3);

let or4 = "Four".length === 4 || "Hot Dog" === "Sandwich"; // true
console.log(or4);

// Order of operators (AND then OR)
let order = "Mirror" === "Mirror" || "On" === "The" && "Wall" === "."; // true
// order = true || false && false;
// order = true || false;
console.log(order);

// NOT (!)
// ! is called a Bang in JavaScript
// The NOT logical operator converts the value from true to false and vice versa
let not1 = !true; // false
console.log(not1);

let not2 = !("Chuck Norris".length >= "John Wick".length); // false
not2 = !not2; // true
console.log(not2);

// AND, OR, NOT
let andOrNot = !(1 < 3 || 6 === 4 && 2 > 2); // false
// andOrNot = !(true || false && false);
// andOrNot = !(true || false);
// andOrNot = !(true);
// andOrNot = false;
console.log(andOrNot);
