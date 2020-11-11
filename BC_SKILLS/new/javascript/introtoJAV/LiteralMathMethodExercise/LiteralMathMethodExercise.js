

let warmHug = " Hi, I’m Olaf and I like warm hugs ";

console.log(warmHug.toUpperCase());
warmHug= warmHug.replace("like","love");
console.log(warmHug);

let beenImpaled = "Oh, look at that. I’ve been impaled."
console.log(beenImpaled.slice(-18));
console.log(beenImpaled.slice(18));
console.log(beenImpaled.slice(18, 22));

let dotDotDot = ". . .";
let skullBones = `I don't have a skull${dotDotDot} or bones`
console.log(skullBones);

console.log(math.PI);

let randomNumber = Math.random();
randomNumber *= 3; 
randomNumber = Math.floor(randomNumber);
randomNumber ++;
console.log(randomNumber); 