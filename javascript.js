let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    let humanChoice = prompt("Enter your choice (rock, paper, scissors):");
    humanChoice = humanChoice.toLowerCase(); 

    // Validate the human choice
    while (humanChoice === null || 
           (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors")) {
      console.log("Invalid choice. Please enter rock, paper, or scissors.");
      humanChoice = prompt("Enter your choice (rock, paper, scissors):");
      humanChoice = humanChoice.toLowerCase(); // Convert again in case of new input
    }

    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Round: ${round}, Current score: You ${humanScore}, Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a draw!");
  }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
function getComputerChoice () {
    const rndInt = randomIntFromInterval(1, 3);
    console.log(rndInt);

    if (rndInt === 1) {
        computerChoice = "rock";
    }
        else {
            if (rndInt === 2) {
            computerChoice = "paper";
            }
        else {
            computerChoice = "scissors";
            }
        }
    return computerChoice
}

playGame ();
