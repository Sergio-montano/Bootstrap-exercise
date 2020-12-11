// FUNCTIONS EXERCISE

// 1
function spookyGhost() {
  console.log(`Boo!!!`);
}
/*
OR
Arrow Function
spookyGhost = () => {
  console.log(`Boo!!!`);
}
OR
Function Expression
const spookyGhost = function(){
  console.log(`Boo!!!`);
}
*/
spookyGhost();

// 2
function candy(goal) {
  console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
}
// OR
/*
function candy(goal){
  console.log(goal);
  console.log(goal);
  console.log(goal);
  console.log(goal);
}
*/

candy(`Get Candy`);

// 3
function werewolf(a, b) {
  if (a === "Full" && b === "Moon") {
    console.log("ARH-WOOO!");
  }
}
werewolf("Full", "Moon");

// 4
function halloween() {
  return `October 31st`;
}
console.log(halloween());

// 5
function isEnoughCandy(pieces) {
  if (pieces >= 31) {
    return true;
  } else {
    return false;
  }
  // Or you can use a ternary
  // return (pieces >= 31 ? true : false);
}
console.log(isEnoughCandy(31));

// 6
function candyCounter(num) {
  let total = 0;
  for (n of num) {
    total = total + n;
  }
  // Or you can use a For Loop
  // for (i = 0; i < num.length; i++){
  //   total = total + num[i];
  // }
  return total;
}
console.log(candyCounter([2, 3, 4, 5]));
console.log(candyCounter([2, 3, 4, 5, 6, 6]));

// 7
const hauntedMansion = function(){
  console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

// 8
const ghostbusters = () => ("Who You Gonna Call?")
// OR
// ghostbusters = () => "Who You Gonna Call?";
console.log(ghostbusters());

// 9
// No

// 10
// Yes

// 11a
const costumes = [`Ghost`, `Hobo`, `Superman`];

// 11b
const upperCostumes = costumes.map(function (parameter){
   return parameter.toUpperCase();
});
// OR
/*
const upperCostumes = costumes.map(costumes => costumes.toUpperCase());
*/
// OR
/*
function func1 (parameter){
  return parameter.toUpperCase();
}
const upperCostumes = costumes.map(func1);
*/
console.log(upperCostumes);

// BONUS
// 12a
const halloweenSongs1 = ["Monster Mash", "Thriller"];

// 12b
const halloweenSongs2 = ["I Put A Spell On You", "This Is Halloween", "Ghostbusters"];

// 12c
function halloweenJukeBox(songs){
  const randomIndex = Math.floor(Math.random() * songs.length);
  const randomSong = songs[randomIndex];
  console.log(randomSong);
}
// OR
/*
function halloweenJukeBox(songs){
  console.log(songs[Math.floor(Math.random() * songs.length)]);
}
*/

// 12d
halloweenJukeBox(halloweenSongs1);
halloweenJukeBox(halloweenSongs2);


// 13
function caps(string){
  let str = "";
  for (i = 0; i < string.length; i++){
    if (i % 2 === 0) {
      str += string.charAt(i).toUpperCase();
      // str += string[i].toUpperCase();
    } else {
      str += string.charAt(i);
      // str += string[i];
    }
  }
  return str;
}

// OR
/*
function caps(string){
  let str = "";
  for (i = 0; i < string.length; i++){
    str += (i % 2 === 0 ? string.charAt(i).toUpperCase() : string.charAt(i));
  }
  return str;
}
*/

console.log(caps(`abcdef`));
