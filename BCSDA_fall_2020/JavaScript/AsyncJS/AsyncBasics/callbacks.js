// CALLBACKS
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of action.

// Example 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
first.append(p1);
/*
function getUserInfo(email){
  setTimeout(() => {
    return email
  }, 2000);
}
const user1 = getUserInfo(`matt@realemail.com`);
p1.innerText = user1;
*/

function getUserInfo(email, callback){
  setTimeout(() => {
    callback(email);
  }, 2000);
}
getUserInfo(`matt@realemail.com`, e => {
  p1.innerText = e;
});

// Example 2
const second = document.querySelector('#second');
const p2 = document.createElement('p');
second.append(p2);

function getRandomMovie(movie, callback){
  setTimeout(() => {
    // console.log(movie);
    // return movie;
    callback(movie);
  }, 3000);
}
getRandomMovie(`Back To The Future`, m => {
  p2.innerText = m;
});

// Example 3
const third = document.querySelector('#third');
const p3 = document.createElement('p');
third.append(p3);
const p4 = document.createElement('p');
third.append(p4);

function getShowInfo(showTitle, callback){
  setTimeout(() => {
    callback(showTitle);
  }, 4000);
}

function getReleaseDate(title, callback){
  setTimeout(() => {
    callback(`Jan 15, 2020`);
  }, 1000);
}

getShowInfo('WandaVision', t => {
  console.log(t);
  p3.innerText = t;
  getReleaseDate(t, d => {
    console.log(d);
    p4.innerText = d;
  });
});

// Example 4
const fourth = document.querySelector('#fourth');
const p5 = document.createElement('p');
fourth.append(p5);

function response(param, onSuccess, onFailure){
  setTimeout(() => {
    // Using the recieved variable to determine whether we recieved the data we are pretending we requested
    let received = true;
    if(received){
      onSuccess(`Received data: ${param}`);
    } else {
      onFailure(`Failed. Did not recieve data.`)
    }
  }, 2000);
}

response('Hello', s => {
  console.log(s);
  p5.innerText = s;
}, f => {
  p5.innerText = f;
});










