// FUNCTION BASICS
// Functions are created lines of code that we can use throughout a JavaScript file (AKA Resuable Procedures)

/*
DECK OF CARDS FUNCTION EXAMPLE

const deckOfCards = [
  `2 of Hearts`,
  `3 of Hearts`,
  `4 of Hearts`,
  `5 of Hearts`,
  `6 of Hearts`,
  `7 of Hearts`,
  `8 of Hearts`,
  `9 of Hearts`,
  `10 of Hearts`,
  `Jack of Hearts`,
  `Queen of Hearts`,
  `King of Hearts`,
  `Ace of Hearts`,
  `2 of Clubs`,
  `3 of Clubs`,
  `4 of Clubs`,
  `5 of Clubs`,
  `6 of Clubs`,
  `7 of Clubs`,
  `8 of Clubs`,
  `9 of Clubs`,
  `10 of Clubs`,
  `Jack of Clubs`,
  `Queen of Clubs`,
  `King of Clubs`,
  `Ace of Clubs`,
  `2 of Diamonds`,
  `3 of Diamonds`,
  `4 of Diamonds`,
  `5 of Diamonds`,
  `6 of Diamonds`,
  `7 of Diamonds`,
  `8 of Diamonds`,
  `9 of Diamonds`,
  `10 of Diamonds`,
  `Jack of Diamonds`,
  `Queen of Diamonds`,
  `King of Diamonds`,
  `Ace of Diamonds`,
  `2 of Spades`,
  `3 of Spades`,
  `4 of Spades`,
  `5 of Spades`,
  `6 of Spades`,
  `7 of Spades`,
  `8 of Spades`,
  `9 of Spades`,
  `10 of Spades`,
  `Jack of Spades`,
  `Queen of Spades`,
  `King of Spades`,
  `Ace of Spades`
];

const card1 = deckOfCards[Math.floor(Math.random() * deckOfCards.length)];

function randomCard(){
  return deckOfCards[Math.floor(Math.random() * deckOfCards.length)];
}

const card2 = randomCard();
const card3 = randomCard();
const card4 = randomCard();
const card5 = randomCard();

console.log(card1);
console.log(card2);
console.log(card3);
console.log(card4);
console.log(card5);
*/

/*
Syntax

function functionName(){
  CODE TO BE RUN GOES HERE;
}

To run a function...
functionName();
*/

// Example 1
// Creates/saves the "scream" function
function scream(){
  console.log(`Do you like scary movies?`);
}
// Runs/executes the "scream" function
scream();

console.log(`=========================`);

// Example 2
// A function can have multiple lines of code inside of it
function hocusPocus(){
  console.log(`Oh look, another glorious morning,`);
  console.log(`Make me sick!`);
}
// A function can be run/executed multiple times
hocusPocus();
hocusPocus();

console.log(`=========================`);

// FUNCTIONS WITH PARAMETERS/ARGUMENTS
// Parameters are the names created when the function is declared/created
// Arguments are the values entered/passed in when running/executing the function
/*
Syntax

function functionName(parameter){
  CODE TO BE RUN GOES HERE;
}

To run a function with a parameter...
functionName(argument);
*/

// Example 1
// "villain" is the Parameter
function horrorMovieVillain(villain){
  console.log(`${villain} is the scariest horror movie villain.`);
}
// "Pennywise" is the argument
horrorMovieVillain(`Pennywise`);
horrorMovieVillain(`Freddy Krueger`);
horrorMovieVillain(`Chucky`);
horrorMovieVillain(`Casper`);

console.log(`=========================`);

// Example 2
function beetlejuice(name){
  console.log(`${name}, ${name}, ${name}!`);
}
// Parameter can be used multiple times throughout a function
beetlejuice(`Beetlejuice`);

// Example 3
function theShining(word){
  const message = word.reverse();
  console.log(message);
}
// Parameters can accept all type of values (String, Number, Array, etc.)
theShining(["R", "E", "D", "R", "U", "M"]);

console.log(`=========================`);

// Example 4
function villainWeapon(villain, weapon){
  console.log(`${villain}'s weapon of choice is a ${weapon}`);
}
// A function can have multiple parameters/arguments
villainWeapon(`Jason`, `Machete`);
villainWeapon(`Norman Bates`, `Knife`);
villainWeapon(`Casper`, `False sense of security`);

console.log(`=========================`);

// Example 5
function sawMovies(numMovies, preferredNumMovies){
  console.log(`They have made ${numMovies} Saw movies. That is ${numMovies - preferredNumMovies} too many. They should have just made ${preferredNumMovies}.`);
}
// Parameters/arguments can be numbers.
sawMovies(9, 3);

console.log(`=========================`);

// Example 6
function horrorMovieQuote(quote = `Heeere's Johnny`){
  console.log(quote);
}
// You can set a default argument for a parameter

// Runs/executes function with default argument for the parameter
let shinning = horrorMovieQuote();
// Runs/executes function with a new created arugment
horrorMovieQuote(`Was that the boogeyman?`);
horrorMovieQuote(`They're here!`);

console.log(`=========================`);


// RETURN KEYWORD
// The Return keyword stop the execution of a function and returns a value if a value is present
/*
function functionName(){
  return value;
}
*/
// Using a console log in a function displays the value in the terminal/console, but we are not able to capture or set that value to something. However, we can do that with the "return" keyword.

// Example 1
function sixthSense(){
  return `I See Dead People`;
}
// Function returns a value that we can set to a variable
let cole = sixthSense();
console.log(cole);

console.log(`=========================`);

// Example 2
function macbeth(){
  console.log(`Double, Double, Toil and Trouble`);
  return;
  console.log(`Fire Burn, and Cauldron Bubble.`);
}
// The 2nd console log does not run because it is on a line after the return keyword in the function
macbeth();

console.log(`=========================`);

// Example 3
function aQuietPlace(sound){
  if (sound === ""){
    return `You are safe`;
  }
  return `THEY HEAR YOU!!!`;
}
// Functions can contain multiple return keywords
const safe = aQuietPlace("");
console.log(safe);
const notSafe = aQuietPlace("Random noise");
console.log(notSafe);

console.log(`=========================`);

// FUNCTION NESTING
/*
Syntax

function functionNameOne(){
  CODE TO BE RUN GOES HERE (If necessary);
  function functionNameTwo(){
    CODE TO BE RUN GOES HERE;
  }
  functionNameTwo();
  CODE TO BE RUN GOES HERE (If necessary);
}
functionNameOne()
*/

// Example 1
function americanPsycho(){
  function americanPsycho1(){
    console.log(`Do you like Huey Lewis and the news?`);
  }
  americanPsycho1();
}
// Inner function must be run/executed inside outer function when using function nesting
americanPsycho();


// I DO NOT BELIEVE CASPER IS THE SCARIEST HORROR MOVIE VILLAIN. SORRY FOR THE LIES. I HOPE YOU ALL WILL FORGIVE ME :(









