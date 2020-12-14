// PROMISES
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. (A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function)

// Example 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
first.append(p1);

function getUserInfo(email) {
  // A Promise takes one parameter which is a function with two parameters
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(email);
    }, 2000);
  });
}
// The ".then" is the equivalent to the callback function created using callbacks
getUserInfo(`matt@realemail.com`)
  .then(e => p1.innerText = e);
// Or
// getUserInfo(`matt@realemail.com`).then(e => p1.innerText = e);

// Example 2
const second = document.querySelector('#second');
const p2 = document.createElement('p');
second.append(p2);

function getRandomMovie(movie){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(movie);
    }, 3000);
  });
}
getRandomMovie(`Back To The Future`)
  .then(m => p2.innerText = m);

// Example 2.5
// Basic example of a promise
const p = new Promise((resolve, reject) => {
  resolve();
});
p.then(() => console.log(`This is a basic Promise`));

// Example 3
const third = document.querySelector('#third');
const p3 = document.createElement('p');
third.append(p3);
const p4 = document.createElement('p');
third.append(p4);

function getShowInfo(showTitle){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(showTitle);
    }, 4000);
  });
}

function getReleaseDate(title){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Jan 15, 2020`);
    }, 1000);
  });
}

getShowInfo('WandaVision')
  .then(t => {
    p3.innerText = t;
    return getReleaseDate(t);
  })
  .then(d => p4.innerText = d)


// Example 4
const fourth = document.querySelector('#fourth');
const p5 = document.createElement('p');
fourth.append(p5);

function response(data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Using the recieved variable to determine whether we received the data we are pretending we requested
      const received = false;
      if(received){
        resolve(`Recevied Data: ${data}`);
      } else {
        reject(`Failed. Did not recieve data.`)
      }
    }, 2000);
  });
}

response(`This is the data!`)
  // Code in ".then" runs when request is successful (AKA Resolved)
  .then(s => p5.innerText = s)
  // Code in ".catch" runs when request is NOT successful (AKA Rejected)
  .catch(f => p5.innerText = f)
