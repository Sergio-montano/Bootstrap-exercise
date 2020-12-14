// CONSTRUCTOR FUNCTIONS
// Constructor Functions work as a blueprint/template for creating multiple objects of the same type/kind

/*
Syntax

function ConstructorName(parameters){
  this.parameterName = parameterName;
}
*/

// Examples
// NOTE: HC stands for Holiday Character
function HC(name, home, holiday){
  // Properties
  this.name = name;
  this.home = home;
  this.holiday = holiday;
  // Methods
  this.hello = function (){
    return `Hello`;
  },
  this.bio = function () {
    return `Hello, I am ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!!!`;
  }
}

// Instatiate/Create a new Object
const santa = new HC(`Santa Claus`, `North Pole`, `Christmas`);

console.log(santa);
console.log(santa.name);
console.log(santa.bio());

const easterBunny = new HC(`Easter Bunny`, `Easter Island`, `Easter`);

console.log(easterBunny);
console.log(easterBunny.home);
console.log(easterBunny.bio());
