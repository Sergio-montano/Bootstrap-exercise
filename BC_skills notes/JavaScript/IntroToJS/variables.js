// VARIABLES (For storing values/data)
// LET is type of variable
// STUDENTS is the name of the variable
// 15 is the value being given/set to the variable
let students = 15;
// students = 17;
// students = students + 2;
// students += 2;
// students = students - 2;
// students -= 3;
// students++;
students--;
// students = "All of them";
// students = false;
console.log(students);


// Variables names should be written in camelCase
let studentsInClassroom = 7;
console.log(studentsInClassroom);

let studentsNotInClassroom = students - studentsInClassroom;
console.log(studentsNotInClassroom);

// OTHER TYPES OF VARIABLES
// Const (Used for values that do not change)
const desksInClassroom = 12;
// Cannot update the value of a const variable
// desksInClassroom = 11;
console.log(desksInClassroom);

// Var (The OG Variable)
var theRealOG = 1995;

// STRING VARIABLES
const firstName = "Matthew";
const lastName = "Riley";
const fullName = firstName + " " + lastName;
console.log("Matthew" + " " + "Riley");
console.log(firstName + " " + lastName);
console.log(fullName);
console.log(fullName.length);
console.log(fullName[6]);