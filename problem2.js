//Problem 2
// Prompting the user to enter a four digit code, and asking them to enter their code again.

var code= parseInt(prompt("Enter a 4 digit code."));
var code2= parseInt(prompt("Enter your 4 digit code again."));

if (code === code2)
  console.log("Code is set.");
else
  console.log("ERROR, Code is set. ");

