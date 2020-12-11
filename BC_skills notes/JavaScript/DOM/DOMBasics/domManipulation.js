// DOM Manipulation

// innerText (The innerText property sets or returns the text content)

// Example 1
// Returns the text value of the h1
const h1 = document.querySelector('h1');
const h1innerText = h1.innerText;

// Example 2
// Sets a new text value for the h1
h1.innerText = `The White House`;

// Example 3
// Returns the text value inside of the first p tag/element in the document
const p = document.querySelector('p');
const pInnerText = p.innerText;


// innerHTML (The innerHTML property sets or returns the HTML content of/for an element(s))

// Example 1
// Returns the HTML inside of the first p tag/element in the document
const pHTML = p.innerHTML;

// Example 2
// Sets a new HTML value for the p tag/element
p.innerHTML = `<h4>Washington DC is where the president lives</h4>`;

// Example 3
const links = document.querySelectorAll('a');
// Sets the value of the innerHTML for the first link to the linkHTML1 variable
const linkHTML1 = links[0].innerHTML;

// Example 4
// Displays the HTML of each item in the "links" NodeList (AKA Collection) in the console of the webpage
for (html of links){
  console.log(html.innerHTML);
}


// Attributes
// Attribute properties set or return the values for the specific attribute

// Example 1
// Returns the href/url value for the first a tag (AKA link) in the document
const firstLink = document.querySelector('a');
const firstLinkHref = firstLink.href;

// Example 2
// Sets a new href/url value for the first a tag (AKA link) in the document
firstLink.href = 'https://en.wikipedia.org/wiki/White_House';

// Example 3
// Returns the src value for the image with the id of mainPhoto
const mainPhoto = document.querySelector('#mainPhoto');
const mainPhotoSrc = mainPhoto.src;

// Example 4
mainPhoto.src = 'https://images.unsplash.com/photo-1467251589161-f9c68fa14c59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80';


// Class List
// The Class List property returns the class name(s) of an element. Also, Class List can be used to add, remove, and toggle CSS classes on an element.

const h2 = document.querySelector('h2');

// Example 1
// Displays the classes set to the h2 element in the browser/Chrome console
console.log(h2.classList);

// Example 2
// Adds the class of "text-color" to the h2 element
h2.classList.add(`text-color`);
console.log(h2.classList);

// Example 3
// Removes the class of "text-color" from the h2 element
h2.classList.remove(`text-color`);

// Example 4
// Adds the classes of "text-color" and "border" to the h2 element
h2.classList.add(`text-color`, `border`);

// Example 5
// Toggles the "border" class off
h2.classList.toggle(`border`);

// Toggles the "border" class on
h2.classList.toggle(`border`);


// Creating Elements
// New elements can be creating with JavaScript

// Example 1
// Creates a new h1 element and set the innerText value
const newH1 = document.createElement(`h1`);
newH1.innerText = `The White House was built in 1792`;

// Example 2
const newUL = document.createElement(`ul`);
newUL.innerHTML = `
<li>The Washington Monument</li>
<li>The Lincoln Memorial</li>
<li>The Capital Building</li>
`;


// Append and Prepend
// Append appends/adds an element as the last child of a parent element

// Example 1
// Adds the new h1 to the end inside of the first p tag/element
const p1 = document.querySelector('p');
p1.append(newH1);

// Example 2
// Append can also be used to only add text
p1.append(`On October 13th`);

// Example 3
const body = document.querySelector('body');
body.append(newUL);


// Prepend appends/adds an element as the first child of a parent element

// Example 1
// Adds the newH1 element to the start of the first p tag/element (NOTE: An element can only be used in the document/webpage one time)
p1.prepend(newH1);

// Example 2
// Adds the new h2 to the start of the div element
const newH2 = document.createElement('h2');
newH2.innerText = `Directory`;
const div = document.querySelector('div');
div.prepend(newH2);

// Insert Adjacent Element
/*
Syntax

targetElement.insertAdjacentElement('position', element)
*/

// Example 1 (beforebegin)
// Adds the new wM (h4) element before the firstPic (img) element
const firstPic = document.querySelector('.pic');
const wM = document.createElement('h4');
wM.innerText = "Washington Monument";
firstPic.insertAdjacentElement('beforebegin', wM);

// Example 2 (afterbegin)
// Adds the new span to the start of the h1 element (Same as prepend)
const span = document.createElement('span');
span.innerText = '*';
h1.insertAdjacentElement('afterbegin', span);

// Example 3 (beforeend)
// Adds the new input to the end inside of the h1 tag/element (Same as append)
const input = document.createElement('input');
input.type = 'color';
h1.insertAdjacentElement('beforeend', input);

// Example 4 (afterend)
// Adds the new span1 (span) element after the lincolnImg (img) element
const lincolnImg = document.querySelector('img:nth-of-type(3)')
const span1 = document.createElement('span');
span1.innerText = 'Lincoln Memorial';
lincolnImg.insertAdjacentElement('afterend', span1);


// Removing Elements
/*
Syntax

element.remove();
*/
// Removes element from the document

// Example 1
// Removes the div with the id of directory from the document
const directory = document.querySelector('#directory');
directory.remove();

// Example 2
// Removes the body element/tags from the document (Removes everything on the wepage)
body.remove();









