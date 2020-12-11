// ASYNC AWAIT
// Async makes a function return a Promise
// Await makes a function wait for a Promise

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

async function example1(){
  const e = await getUserInfo(`matt@realemail.com`);
  p1.innerText = e;
}
example1();

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

async function example2(){
  const m = await getRandomMovie(`Back To The Future`);
  p2.innerText = m;
}
example2();


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

async function example3(){
  const t = await getShowInfo(`WandaVision`);
  p3.innerText = t;
  const d = await getReleaseDate(t);
  p4.innerText = d;
}
example3();


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

async function example4(){
  try {
    const s = await response(`This is the data!`);
    p5.innerText = s;
  } catch (err) {
    p5.innerText = err;
  }
}
example4();

