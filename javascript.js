var compChoice = getComputerChoice ();
var humanChoice = getHumanChoice ();
console.log(compChoice);
console.log(humanChoice);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function getComputerChoice () {
    const rndInt = randomIntFromInterval(1, 3);
    console.log(rndInt);

    if (rndInt === 1) {
        compChoice = "Rock";
    }
        else {
            if (rndInt === 2) {
            compChoice = "Paper";
            }
        else {
            compChoice = "Scissors";
            }
        }
    return compChoice
}

function getHumanChoice () {
    let humanChoice = prompt("Please enter Rock, Paper or Scissors");
    return humanChoice;
}