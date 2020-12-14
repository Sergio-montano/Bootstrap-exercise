// DESTRUCTURING
// Destructuring unpacks/copies individual values/items from arrays, OR properites(Key Value pairs) from objects, and sets them to variables

// ARRAYS
/*
Syntax

variableType [variableNames] = array;
*/

// Example 1
const hello = [`Hello, nice to meet you.`, `Sup?`, `Bojour.`];
// const formalGreeting = hello[0];
// Copies the values from the hello array and sets them to the following variable names
const [formalGreeting, informalGreeting, frenchGreeting] = hello;
// Displays multiple values in one console log
console.log(formalGreeting, informalGreeting, frenchGreeting);
// Destructuring does NOT remove the values it just copies them
console.log(hello);

// Example 2
const cities = [`New York`, `Los Angeles`, `Chicago`, `Houston`];
// ... in destructuring uses the "Rest" operator. Sets the remaining values to a variable with the name specified
const [largestCity, secondLargest, ...otherCities] = cities;
console.log(largestCity);
console.log(secondLargest);
console.log(otherCities);

// OBJECTS
/*
Syntax

variableType {keyNames} = object;
*/

const beautyAndTheBeast = {
  candle: `Lumiere`,
  clock: `Cogsworth`
};
// Example 1
// const candle = beautyAndTheBeast.candle;
// In destructuring with objects the keys are used as the variable names
const {candle, clock} = beautyAndTheBeast;
console.log(candle);
console.log(clock);

// Example 2
// Creating new variable names for the values that are copied/destructured from the beautyAndTheBeast object
const {candle: candlabra, clock: woodenClock} = beautyAndTheBeast;
console.log(candlabra);
console.log(woodenClock);

// Example 3
const days = {
  first: `Sunday`,
  second: `Monday`,
  third: `Tuesday`
};
// ... in destructuring uses the "Rest" operator. Sets the remaining values to a variable with the name specified
const {second, ...otherDays} = days;
console.log(second);
console.log(otherDays);

