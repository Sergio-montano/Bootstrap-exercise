// NESTING WITH DATA STRUCTURES

// Array Nesting
const students = [
  [["Ben", "Sergio"], "Travis"], 
  ["Grey", "MaLeah"],
  ["Todd", "Chandler"]
];

console.log(students[0][0][0]); // Displays Ben's name
console.log(students[1][1]); // Displays MaLeah's name

// Object Nesting
const fellowship = {
  theTrio: { legolas: "Elf", gimli: "Dwarf", aragorn: "Human" },
  rohan: { kingTheodan: "King", eomer: "Rider" }
};

console.log(fellowship["rohan"]["eomer"]); // Displays Rider
console.log(fellowship.rohan.eomer); // Displays Rider

// Mix of Array and Object Nesting
const marvelHeroes = {
  withPowers: ["Hulk", "Thor", "Spider-man", "Captain America"],
  withOutPowers: ["Hawkeye", "Black Widow", "Iron Man"]
};

console.log(marvelHeroes.withPowers[2]); // Displays Spider-man
console.log(marvelHeroes.withOutPowers[0]); // Displays Hawkeye



