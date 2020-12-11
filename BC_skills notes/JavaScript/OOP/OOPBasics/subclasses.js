// SUBCLASSES
// Subclasses are children of the parent class they are EXTENDED from. Subclasses are able to access the properties and methods from their parent class.

/*
Syntax

class ChildClassName extends ParentClassName {
  constructor(parameters){
    super(parameters);
    this.parameterName = parameterName;
  }
}
*/

// Examples
// Parent Class
class HC {
  constructor(name, home, holiday) {
    this.name = name;
    this.home = home;
    this.holiday = holiday;
    this.character = true;
  }
  hello(){
    return `Hello`;
  }
  bio(){
    return `Hello, I am ${this.name} and ${this.home} is where I live. Also, my holiday is ${this.holiday}!!!`;
  }
  static staticMeth(){
    return `This is a static method`
  }
}

// Subclass (A.K.A. Child class)
// NOTE: HCM stands for Holiday Character Movie
// The EXTENDS keyword is used to create a class as a child of a parent class
class HCM extends HC {
  constructor(name, home, holiday, movieTitle) {
    // The SUPER keyword is used to call functions on a parent object (A.K.A. Gets the properties/methods from the parent class)
    super(name, home, holiday);
    this.movieTitle = movieTitle;
  }
}

// Instatiate/Create a new Object
const santaMovie1 = new HCM(`Santa Claus`, `North Pole`, `Christmas`, `Santa Claus Is Comin' To Town`);

console.log(santaMovie1);
console.log(santaMovie1.character);
console.log(santaMovie1.movieTitle);
// Still able to access the prototype method
console.log(santaMovie1.bio());

// Static method run without creating an object using the subclass name
console.log(HCM.staticMeth());


console.log(HCM.meth1(`Chicken`, `Rice`, `Milk`, `The Movie`));
