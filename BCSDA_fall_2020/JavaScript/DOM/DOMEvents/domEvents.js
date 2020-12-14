// DOM EVENTS
// DOM Events are actions that occur as response to user inputs/actions

// Event Property
/*
Syntax

selectedElement.eventProperty = function functionName(){
  CODE TO BE RUN GOES HERE;
}
*/

// Example 1
const btn1 = document.querySelector('#one');
// Alert displays when button is clicked
btn1.onclick = () => alert("You clicked button one!"); // Arrow function

// Example 2
const btn2 = document.querySelector('#two');
// Background class is added to the button when it is DOUBLE clicked
btn2.ondblclick = () => {
  btn2.classList.add('background');
}


// Add Event Listener
/*
Syntax

selectedElement.addEventListener('event', function)
*/

// Example 1
const btn3 = document.querySelector('#three');
// text-color class is added to the button when it is clicked
btn3.addEventListener('click', function () {
  btn3.classList.add('text-color');
});

// Example 2
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
// Background and text-color classes are toggled on/off for the p element when the mousedown event occurs on the h1
h1.addEventListener('mousedown', () => {
  p.classList.toggle('background');
  p.classList.toggle('text-color');
});

// Example 3 (addEventListener allows for multiple events on a single element)
// Background and text-color classes are toggled on/off for the h1 element when the mouseleave event occurs on the h1
h1.addEventListener('mouseleave', () => {
  h1.classList.toggle('background');
  h1.classList.toggle('text-color');
});


// FORMS

// Example 1
const userForm = document.querySelector('form');
// Alert displays when user clicks on the submit button (AKA Submits the form)
userForm.addEventListener('submit', function(){
  alert('Your form has been submitted!');
});

// Example 2
userForm.addEventListener('submit', function(p){
  // preventDefault stops the form from submitting
  p.preventDefault();

  // Returns the value entered for each input
  const username = userForm.elements.username.value;
  const email = userForm.elements.email.value;

  const div = document.querySelector('div');
  const newUser = document.createElement('p');
  newUser.innerText = `${username}, ${email}`;
  div.append(newUser);
});













