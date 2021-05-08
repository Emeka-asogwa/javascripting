// If else statement

let season = 'summer';

if (season === 'spring') {

  console.log('It\'s spring! The trees are budding!');
}  else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');

} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}


// If statement inside and If else statement


var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
var suspect = "Mr. Parkes";


/* IMPLEMENTATION LOGIC*/
var weapon = "";  // Initial value

// A boolean variable `solved` will tell us the status of mystery
// true --> solved and false --> unsolved
var solved = false;


/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true;
}

else if (room === 'gallery' && suspect==="Ms. Van Cleve") {
    weapon = 'trophy';
    solved = true;
}
else if (room === 'billiards room' && suspect==="Mrs. Sparr") {
    weapon = 'pool stick';
    solved = true;
} 
else if (room === 'dining room' && suspect==="Mr. Parkes") {
    weapon = 'knife'; 
    solved = true;
}   

// Runs only when `solved` is true
if (solved) {
    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}









