// Problem 4
// Create a function that returns 5 more than the integer sent to it.
// Assume the user only enters integers.
// Create a different function that adds " is awesome" to any strings sent to it.

var faveNum = parseInt(prompt("What is your favorite number?"))

function wholenumbers(faveNum){
    return faveNum + 5
}
  console.log(wholenumbers(faveNum));

var yourName = prompt("What is your name?");

function wholename(yourName) {
    return yourName + " is awesome!"
}

console.log(wholename(yourName));