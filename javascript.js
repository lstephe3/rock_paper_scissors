let humanScore = 0;
let compScore = 0;
var compChoice = getComputerChoice ();
var humanChoice = getHumanChoice ();
console.log(compChoice);
console.log(humanChoice);

compareChoices ();

console.log("Computer: ",compScore);
console.log("Humans: ", humanScore)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function getComputerChoice () {
    const rndInt = randomIntFromInterval(1, 3);
    console.log(rndInt);

    if (rndInt === 1) {
        compChoice = "rock";
    }
        else {
            if (rndInt === 2) {
            compChoice = "paper";
            }
        else {
            compChoice = "scissors";
            }
        }
    return compChoice
}

function getHumanChoice () {
    let response = prompt("Please enter Rock, Paper or Scissors");
    let humanChoice = response.toLowerCase();
    return humanChoice;
}

function compareChoices () {
    if ((humanChoice === "rock") || (humanChoice === "paper") || (humanChoice === "scissors")) compareValid()
     else { alert ("Invalid Choice - Try Again");
        }
}

function compareValid () {
    if (compChoice === humanChoice) {
        console.log("It's a draw!");
      } else if (compChoice === "rock" && humanChoice === "scissors") {
        compScore++;
      } else if (compChoice === "rock" && humanChoice === "paper") {
        humanScore++;
      } else if (compChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
      } else if (compChoice === "scissors" && humanChoice === "paper") {
        compScore++;
      } else if (compChoice === "paper" && humanChoice === "rock") {
        compScore++;
      } else if (compChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
      }
}
