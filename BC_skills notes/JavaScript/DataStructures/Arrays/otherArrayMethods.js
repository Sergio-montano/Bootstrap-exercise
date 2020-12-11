// OTHER ARRAY METHODS
// Concat (Concatenates two arrays into one array.)
const theHobbit = ["An Unexpected Journey", "The Desoloation of Smaug", "The Battle of the Five Armies"];
const lotr = ["The Fellowship of the Ring", "The Two Towers", "Return of the King"];
const allLOTR = theHobbit.concat(lotr);
console.log(allLOTR);

// IndexOf (Returns the array index/item position of the value entered)
// Example of indexOf on a string
console.log("Sauron".indexOf("S"));
// Example of indexOf on an array
console.log(allLOTR.indexOf("The Two Towers"));

// Includes (Determines if an array includes a specific value. Returns a boolean value (true or false))
console.log(allLOTR.includes("The Two Towers")); // true
console.log(allLOTR.includes("Sauron")); // false

// Reverse (Reverses the order of the array. Sets new order as new value for the array.)
allLOTR.reverse();
console.log(allLOTR);

// Slice (Returns a specified section of a string or array. First number determines starting index. Second number determines stopping point. Stops before second number/index.)
// Example of Slice on a string
console.log("Gandalf".slice(0, 4));
// Example of Slice on an array
console.log(allLOTR.slice(3, 6));
// If a second number is not included, then slice will return the item at the starting index as well as all items that follow.
console.log(allLOTR.slice(3));

// Splice (Removes, replaces, or adds items to an array.)
// First position determines the starting index. Second position determines the how many array items to remove. Third position determines the values being set for that position(s)
// Syntax for Splice
// variableArrayName.splice(startingIndex, numberOfIndexesToRemove, addedItemValues)

const hobbits = ["Frodo", "Sam", "Merry", "Pippin"];

// Removing with Splice
hobbits.splice(2, 2);
console.log(hobbits);

// Replacing with Splice
hobbits.splice(1, 1, "Smeagol", "Bilbo");
console.log(hobbits);

// Adding with Splice
hobbits.splice(3, 0, "Deagol"); // "Deagol" is added to the end
hobbits.splice(0, 0, "Deagol"); // "Deagol" is added to the beginning
console.log(hobbits);








