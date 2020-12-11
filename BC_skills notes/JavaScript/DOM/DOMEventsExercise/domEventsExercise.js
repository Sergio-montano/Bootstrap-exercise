// DOM EVENTS EXERCISE

// 1a
const button1 = document.getElementById('one');
// Or
/*
const button1 = document.querySelector('#one');
const button1 = document.querySelector('button');
*/

// 1b
button1.onclick = () => alert('You Clicked Button One');
// Or
/*
button1.onclick = function (){
  alert('You Clicked Button One');
}
*/

// 2a
const button2 = document.getElementById('two');
// Or
/*
const button2 = document.querySelector('#two');
*/

// 2b
button2.addEventListener('dblclick', () => {
  alert('You DOUBLE Clicked The Second Button!!!')
});
// Or
/*
button2.addEventListener('dblclick', function () {
  alert('You DOUBLE Clicked The Second Button!!!')
});
*/

// BONUS
// 3a
const form = document.querySelector('form');

// 3b
form.addEventListener('submit', () => {
  const username = form.elements.username.value;
  alert(username);
  // Or
  // alert(form.elements.username.value);
});
// Or
/*
form.addEventListener('submit', function () {
  const username = form.elements.username.value;
  alert(username);
});
*/

// 4a
const darkMode = document.getElementById('dm');
// Or
/*
const darkMode = document.querySelector('#dm');
*/

// 4b
const allElements = document.querySelectorAll('*');
console.log(allElements);
darkMode.addEventListener('click', () => {
  for (element of allElements){
    element.classList.toggle('dark-mode');
  }
});
// A For Loop could also be used




