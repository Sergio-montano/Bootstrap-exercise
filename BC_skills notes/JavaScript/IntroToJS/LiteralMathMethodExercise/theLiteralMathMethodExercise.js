// The Literal Math Method Exercise

// 1
let warmHugs = "Hi, I’m Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2
let beenImpaled = "Oh, look at that. I’ve been impaled."
console.log(beenImpaled.slice(-18));
console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(18, 36));

// 3
let dotDotDot = "...";
let skullBones = `I don’t have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// let randomNumber = Math.random();
// randomNumber *= 3;
// randomNumber = Math.ceil(randomNumber);
// console.log(randomNumber);

// 6
console.log("Let It Go! ".toUpperCase().repeat(2));

// 7
let turtleButts = "Bright side? Turtles can breathe through their butts";
console.log(turtleButts.replace(/ /g, "_"));

// 8
console.log(Math.sqrt(2));
console.log(Math.SQRT2);

// 9
let newRandomNumber = Math.floor(Math.random() * 17) + 7;
// newRandomNumber *= 17;
// newRandomNumber = Math.floor(newRandomNumber);
// newRandomNumber += 7;
console.log(newRandomNumber);
