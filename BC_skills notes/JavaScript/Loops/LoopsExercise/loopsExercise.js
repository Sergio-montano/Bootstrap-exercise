// LOOPS EXERCISE

// 1
for (i = 1; i <= 7; i++){
  console.log(i);
}
// Or
/*
for (i = 0; i < 8; i++){
  console.log(i);
}
*/

console.log(`******************`);

// 2
for(i = 6; i <= 26; i += 4){
  console.log(i);
}

// 3a
const wizards = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley"
];

// 3b
for (name of wizards){
  console.log(name);
}

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies <= 8){
  console.log(harryPotterMovies);
  harryPotterMovies++;
}
// Or
/*
while (true){
  console.log(harryPotterMovies);
  harryPotterMovies++;
  if (harryPotterMovies <= 8){
    break;
  }
}
*/

// BONUS
// 5a
const hogwartsHouses = [
  "Gryffindor",
  "Hufflepuff",
  "Ravenclaw",
  "Slytherin"
];

// 5b
for (houses of hogwartsHouses){
  for (letters of houses){
    console.log(letters);
  }
}

// 6a
const quote = [
  "Yer",
  "A",
  "Wizard",
  "Harry"
];

// 6b
let message = "";
for (word of quote){
  message = message + `${word} `;
}
console.log(message);

