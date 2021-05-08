Function f(x,y){
    return 2*x+y;
}

console.log(Math.floor(Math.random()*100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

/* Declare variable */
var favouriteFood='pizza';
console.log(favouriteFood);

// Mathematical operator
let w = 4;
w += 1;

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp +=5;
powerLevel-=100;
multiplyMe *=11;
quarterMe /=4;

let myName ='Emeka';
let myCity='Waterloo';
console.log(`My name is ${myName}. My favourite city is ${myCity}.`);
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable=1;
console.log(typeof newVariable);

// if statement
let sale = true;
sale = false;
if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// truthy statement
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


// short circut
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.'):console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect? console.log('Correct!'):console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'?console.log('I love that!'):
  console.log("I don't love that!");
// If else statement

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}else if (season==='winter')
{console.log('It\'s winter! Everything is covered in snow.');

}else if (season==='fall'){
console.log('It\'s fall! Leaves are falling!');
}else if (season==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}else{
  console.log('Invalid season.');
}

// The switch keywords

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
  break;

  case 'second place':
    console.log('You get the silver medal!');

  break;

  case 'third place':
    console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;

}

// Functions
function getReminder(){
  console.log('Water the plants.');
}
function greetInSpanish(){
  console.log('Buenas Tardes.');
  }

function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.')
}

sayThanks();

//Inside a function//

const plantNeedsWater=function(day){
  if (day==='Wednesday'){
    return true;
  }else {
    return false
  }
};
console.log(plantNeedsWater('Tuesday'));

// Arrow function
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
// concise body arrow function

const plantNeedsWater = day => day === 'Wednesday' ? true : false;

// Good scoping//
const logVisibleLightWaves = () => {

  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region==='The Arctic'){
    let lightWaves='Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

//Accessing Element

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
//console.log(famousSayings[0]);
const listItem=famousSayings;
console.log(famousSayings[3]);

// .push() method in adding items to a list

const chores = ['wash dishes', 'do laundry', 'take out trash'];

console.log(chores.push('sweep the house','clean the house','cook dinner'));
console.log(chores);

// .pop() removes item from the back of the list
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

// .shift() removes element to the front/first of the list
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); // The removes element to the front/first of the list
console.log(groceryList);

// unshift adds element to the front/first of the list.
groceryList.unshift('popcorn');// This adds element to the front/first of the list.
//console.log(groceryList);

console.log(groceryList.slice(1,4)); // .Slice(first, last). This tells it values to pick.
//console.log(groceryList);
const pastaIndex= groceryList.indexOf('pasta');
console.log(pastaIndex);

// Array and function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);

// Loop function
for(let i =5; i<11; i++){
  console.log(i);
}

// Looping reverse
for (let counter = 3; counter >=0; counter--){
  console.log(counter);

//// Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i =0;i<vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Nested Loop
/* Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists *//
const bobsFollowers=['Mike','Jake','Peter', 'Josh'];
const tinasFollowers= ['Linda','Mike','Josh'];
const mutualFollowers=[];

for(let i=0;i<bobsFollowers.length; i++){
  for(let j=0; j<tinasFollowers.length;j++){
    if (bobsFollowers[i]===tinasFollowers[j]){

    mutualFollowers.push(bobsFollowers[i]);
  }

  }

};

console.log(mutualFollowers);


// While looping
const cards = ['diamond', 'spade', 'heart', 'club'];

// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


// We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0.

Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded
let cupsOfSugarNeeded=0;
let cupsAdded=0;
do{ cupsAdded++
  console.log(cupsAdded+ ' cup was added')

} while(cupsAdded < cupsOfSugarNeeded);

// Break keyword


const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Add a conditional to your loop’s block that compares 'Notorious B.I.G.' and the element at the current index of the rapperArray
for(let i=0; i<rapperArray.length;i++){
  console.log(rapperArray[i]);
  if (rapperArray[i]==='Notorious B.I.G.'){
break;
  }
}
console.log('And if you don\'t know, now you know.');



























