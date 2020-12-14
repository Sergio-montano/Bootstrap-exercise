// LOGICAL OPERATORS REVIEW

// AND (&&)
// Returns result/value of true when ALL conditions are true. If at least one condition is false, then it returns result/value of false.

// Example 1
const and1 = true && true; // true
console.log(and1);

// Example 2
const and2 = true && false; // false
console.log(and2);

// Example 3
const and3 = false && true && true; // false
console.log(and3);

// Example 4
const and4 = 7 < 8 && 1 == "1"; // true
console.log(and4);

// Example 5
const and5 = ("Hello".length === 5) && (2 >= 1.89) && ("Hi".length == "2"); // true
console.log(and5);

// OR (||)
// Returns result/value of false when ALL conditions are false. If at least one condition is true, then it returns result/value of true.

// Example 1
const or1 = true || false; // true
console.log(or1);

// Example 2
const or2 = false || false; // false
console.log(or2);

// Example 3
const or3 = 1 < 4 || "Tomato" === "Fruit"; // true
console.log(or3);

// Example 4
const or4 = (1 === 2) || (10 < 9.67431) || ("Chicken".length === "Matthew".length); // true
console.log(or4);


// NOT (!)
// The NOT logical operator converts a true value to false and vice versa

// Example 1
const not1 = !true; // false
console.log(not1);

// Example 2
const not2 = !(1 > 0); // false
console.log(not2);

// AND, OR, NOT
// Order of operations (AND before OR)
let andOrNot = ("And".length == "3") || !(1 < 2) && ("Spider".length === (3 + 3));
andOrNot = (3 == "3") || !(true) && (6 === 6);
andOrNot = true || false && true;
andOrNot = true || false;
andOrNot = true;
console.log(andOrNot);









