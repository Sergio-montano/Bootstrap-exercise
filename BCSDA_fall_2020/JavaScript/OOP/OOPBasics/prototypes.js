// PROTOTYPES
// Prototypes allow for methods to be available to all instatiated/created objects. The difference is that with Prototypes the method is only stored once, but every instance or created object has access to it. (NOTE: Properties can also be used not just Methods)

/*
Syntax

ConstructorName.prototype.methodName = function (){
  CODE TO BE RUN GOES HERE
}
*/

// Examples
function HC(name, home, holiday){
  this.name = name;
  this.home = home;
  this.holiday = holiday;
}

// Prototype Example 1
HC.prototype.hello = function (){
  return `Hello`;
}

// Prototype Example 2
HC.prototype.bio = function () {
  return `Hello, I am ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!!!`;
}

const santa = new HC(`Santa Claus`, `North Pole`, `Christmas`);
console.log(santa);
console.log(santa.hello());
console.log(santa.bio());

const easterBunny = new HC(`Easter Bunny`, `Easter Island`, `Easter`);
console.log(easterBunny);
console.log(easterBunny.hello());
console.log(easterBunny.bio());
