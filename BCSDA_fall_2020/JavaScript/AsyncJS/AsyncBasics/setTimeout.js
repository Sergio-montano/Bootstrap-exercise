// SET TIMEOUT METHOD
// setTimeout runs/executes a function after a set number of milliseconds (1000 milliseconds equals 1 second)

/*
Syntax

setTimeout(function, milliseconds);
*/

// Example 1
// Function runs 2 seconds after the page loads
setTimeout(() => {
  const div1 = document.querySelector('#first');
  const p1 = document.createElement('p');
  p1.innerText = "Example 1 Element";
  div1.append(p1);
}, 2000);

// Example 2
// Function runs 1 second after the page loads
setTimeout(() => {
  const div2 = document.querySelector('#second');
  const p2 = document.createElement('p');
  p2.innerText = "Example 2 Element";
  div2.append(p2);
}, 1000);

// Example 3 (setTimeout Nesting)
setTimeout(() => {
  // Function runs 3 seconds after the page loads
  const div3 = document.querySelector('#third');
  const p3 = document.createElement('p');
  p3.innerText = "1st Example 3 Element";
  div3.append(p3);
  // Function runs 4 seconds after the page loads (1 second after the "1st Example 3 Element" function runs)
  setTimeout(() => {
    const p4 = document.createElement('p');
    p4.innerText = "2nd (Nested) Example 3 Element";
    div3.append(p4);
  }, 1000);
}, 3000);

