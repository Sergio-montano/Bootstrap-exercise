// AJAX & APIs

// AJAX (AJAJ Asynchronous JavaScript And JSON)
// Asynchronous JavaScript And XML
// AJAX is used to communicate with servers

// APIs
// Application Programming Interface
// A Web API is an interface which can be accessed using HTTP Protocol (A URL or Endpoint) to access specific data

// JSON
// JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.

// Example of changing JSON into JS
// String of JSON
const jokeJSON = `{"id":323,"type":"general","setup":"Why can't you hear a pterodactyl go to the bathroom?","punchline":"The p is silent."}`;
console.log(jokeJSON);
console.log(`===================`);
// JSON.parse changes format from JSON to JS
const jokeJS = JSON.parse(jokeJSON);
console.log(jokeJS);
console.log(jokeJS.setup);
// console.log(jokeJS["setup"]);
console.log(jokeJS.punchline);






