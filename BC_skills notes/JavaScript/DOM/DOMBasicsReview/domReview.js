// DOM Manipulation Review

// Changing innerText
const h1 = document.querySelector(`h1`);
h1.innerText = `Hi`;

// Changing innerHTML
const div = document.querySelector(`div`);
div.innerHTML = `<p>I am a p tag</p>`;

// Changing an attribute
const aTag = document.querySelector(`a`);
aTag.href = `https://www.espn.com/`;

// Adding a CSS class
h1.classList.add(`color`);

// Removing a CSS class
h1.classList.remove(`color`);

// Toggling a CSS class
h1.classList.toggle(`color`); // Toggles class on
h1.classList.toggle(`color`); // Toggles class off

// Creating an element
const h3 = document.createElement(`h3`);
h3.innerText = `I am an h3`;

const h4 = document.createElement(`h4`);
h4.innerText = `I am an h4`;

// Adding an element to a document/webpage
// Prepend/Append
div.prepend(h3);

// InsertAdjacentElement (beforebegin, afterbegin, beforeend, afterend)
h1.insertAdjacentElement(`beforebegin`, h4);

// Removing an Element
aTag.remove();

