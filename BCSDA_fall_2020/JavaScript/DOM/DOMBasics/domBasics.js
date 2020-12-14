// DOM (Document Object Model)
// The DOM is the Object-Oriented (A.K.A. JavaScript) respresentation of a webpage

// SELECTING

// By Id
/*
Syntax

document.getElementById('idName');
*/
// getElementById returns the element with the ID attribute of the specified value. (Returns a single element object)

// Example 1
const mainPhoto = document.getElementById('mainPhoto');

// Example 2
const history = document.getElementById('history');

// Example 3
const directory = document.getElementById('directory');

// By Tag (A.K.A. Element) Name
/*
Syntax

document.getElementsByTagName('tagName');
*/
// getElementsByTagName returns a collection of all elements with the specified tag name, as an HTMLCollection object.

// Example 1
const boldTags = document.getElementsByTagName('b');

// Example 2
// Still returns an HTMLCollection even though there is only one of this tag/element in the HTML file
const body = document.getElementsByTagName('body');

// Example 3
const h1 = document.getElementsByTagName('h1');


// By Class Name
/*
Syntax

document.getElementsByClassName('className');
*/
// getElementsByClassName returns a collection of all elements with the specified class name, also as an HTMLCollection object.

// Example 1
const pics = document.getElementsByClassName('pic');

// Example 2
const sectionHeading = document.getElementsByClassName('section-heading');

// Example 3
const directoryNums = document.getElementsByClassName('directory-number');


// Query Selector
/*
Syntax

document.querySelector('selector');
*/
// querySelector returns the first element that matches a specified CSS selector in the document.

// Example 1
// Returns only the first p element/tag in document (A.K.A. HTML file)
const p1 = document.querySelector('p');

// Example 2
// To select an ID with querySelector you must use "#" before the ID name
const queryDirectory = document.querySelector('#directory');

// Example 3
// To select a Class with querySelector you must use "." before the Class name (Returns only the first element/tag with the directory-text class in document)
const directoryText1 = document.querySelector('.directory-text');

// Example 4
// Other CSS selectors can used as well (Attribute, Decendant, Nth of type, etc.)
// Example of a Decendant selector (Returns the first h2 nested in a div in the document)
const nestedH2 = document.querySelector('div h2');

// Example 5
// Example of an Attribute selector (Returns the first img element with an alt attribute value of "Lincoln Memorial" in the document)
const lincolnImg = document.querySelector('img[alt="Lincoln Memorial"]');


// Query Selector All
/*
Syntax

document.querySelectorAll('selector');
*/
// querySelectorAll returns a collection of all the elements that match the specified CSS selector in the document, as a Node List.

// Example 1
// Returns every a element/tag in the document (A.K.A. HTML file)
const links = document.querySelectorAll('a');

// Example 2
const directoryTexts = document.querySelectorAll('.directory-text');

// Example 3
// Example of a multiple selectors selector (Returns all of the a tags/elements and span tags/elements in the document)
const linksAndSpans = document.querySelectorAll('a, span');


