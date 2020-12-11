// CLASSES
// Similar to Constructor Functions, Classes work as a blueprint/template for creating multiple objects of the same type/kind. However, they allow us to Create Prototypes/Methods inside the class.

/*
Syntax

class ClassName {
  constructor(parameters){
    this.parameterName = parameterName;
  }
  methodName(){
    CODE TO BE RUN GOES HERE
  }
}
*/

// Examples
class HC {
  constructor(name, home, holiday) {
    this.name = name;
    this.home = home;
    this.holiday = holiday;
    // Example of a set property value
    this.character = true;
  }
  // Prototype/Method 1
  hello(){
    return `Hello`;
  }
  // Prototype/Method 2
  bio(){
    return `Hello, I am ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!!!`;
  }
  // The STATIC keyword must be used when creating a static method. Static methods can be run without creating an object
  static staticMeth(){
    return `This is a static method`
  }
}

const santa = new HC(`Santa Claus`, `North Pole`, `Christmas`);
console.log(santa);
console.log(santa.bio());

const easterBunny = new HC(`Easter Bunny`, `Easter Island`, `Easter`);
console.log(easterBunny);
console.log(easterBunny.bio());

// Static method run without creating an object
console.log(HC.staticMeth());

