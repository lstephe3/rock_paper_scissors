let humanScore = 0;
let compScore = 0;
var compChoice = getComputerChoice ();
var humanChoice = getHumanChoice ();
console.log(compChoice);
console.log(humanChoice);

playRound ();

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

function playRound () {
    if ((humanChoice === "rock") || (humanChoice === "paper") || (humanChoice === "scissors")) compareValid()
     else { alert ("Invalid Choice - Try Again");
        }
}

function compareValid () {
    if (compChoice === humanChoice) {
        console.log("It's a draw!");
      } else if (compChoice === "rock" && humanChoice === "scissors") {
        compScore++;
        console.log("You loose! - Rock beats Scissors")
      } else if (compChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("You Win! - Paper beats Rock");
      } else if (compChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("You Win! - Rock beats Scissors");
      } else if (compChoice === "scissors" && humanChoice === "paper") {
        compScore++;
        console.log("You loose! - Scissors beat Paper");
      } else if (compChoice === "paper" && humanChoice === "rock") {
        compScore++;
        console.log("You loose! - Paper beats Rock");
      } else if (compChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("You Win! - Scissors beat Paper");
      }
}
