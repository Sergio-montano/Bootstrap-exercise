// OBJECT ORIENTED PROGRAMMING
// OOP is a style of programming that is centered about objects

// Example of NON OOP (Variables and Functions)
// Variables
const name = `Santa Claus`;
const home = `North Pole`;
const holiday = `Christmas`;
// Functions
hello = () => {
  return `Hello`;
}
bio = () => {
  return `Hello, I am ${name} and ${home} is where I live. Also, my holiday is ${holiday}!!!`;
}
console.log(name);
console.log(hello());
console.log(bio());

// Example of OOP (Properties and Methods)
const santa = {
  // Properties
  name: `Santa Claus`,
  home: `North Pole`,
  holiday: `Christmas`,
  // Methods (Can NOT use Arrow Functions for Methods)
  hello: function (){
    return `Hello`;
  },
  bio: function () {
    // The THIS keyword is used to refer to the object the following properties are in
    return `Hello, I am ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!!!`;
  }
}
console.log(santa);
console.log(santa.name);
console.log(santa.hello());
console.log(santa.bio());

// Example 2
const easterBunny = {
  name: `Easter Bunny`,
  home: `Easter Island`,
  holiday: `Easter`,
  hello: function (){
    return `Hello`;
  },
  bio: function () {
    return `Hello, I am ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!!!`;
  }
}
console.log(easterBunny.name);
console.log(easterBunny.hello());
console.log(easterBunny.bio());
