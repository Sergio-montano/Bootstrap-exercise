// OBJECTS (An Object is a data structure that can store multiple values. It stores data in Properties which are key value pairs.)
// Object Syntax
// { key: value }

const user = { firstName: "Sergio", lastName: "Montano"};

const userInfo = {
  username: "shamrockmatt",
  firstName: "Matthew",
  lastName: "Riley", 
  age: 33, 
  loggedIn: true
};

// ACCESSING VALUES IN AN OBJECT
// USING BRACES []
console.log(userInfo["username"]);
console.log(userInfo["age"]);

// USING DOT .
console.log(userInfo.loggedIn);
console.log(userInfo.lastName);

// MODIFYING/ADDING WITH AN OBJECT
const th = {
  firstName: "Tom",
  lastName: "Hanks",
  age: 64,
  amazingActor: true,
  favoriteMovie: "Saving Private Ryan"
};

// Modifying
th["favoriteMovie"] = "Toy Story";
console.log(th["favoriteMovie"]);
th.favoriteMovie = "Band of Brothers";
console.log(th.favoriteMovie);

// Adding
th["highestGrossingMovie"] = "Forrest Gump";
console.log(th);
th.highestGrossingAnimatedMovie = "Toy Story 3";
console.log(th);


