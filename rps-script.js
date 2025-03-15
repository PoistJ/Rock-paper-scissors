function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "paper";
    } else if (randomNumber === 2) {
        choice = "scissors";
    }

    return choice
}

function getHumanChoice() {
    inputChoice = prompt("Please pick rock, paper, or scissors");

    return inputChoice;
}

    function playRound (humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            decision = 0;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            decision = 0;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            decision = 0;
        } else if (humanChoice == computerChoice) {
            decision = 1;
        } else {
            decision = 2;
        }
    
        if (decision == 0) {
            console.log("You win - " + humanChoice + " beats " + computerChoice + "!");
        } else if (decision == 1) {
            console.log("It's a tie!");
        } else{
            console.log("You lose - " + computerChoice + " beats " + humanChoice + "!");
        }
    
        if (decision == 0) {
            humanScore++;
        } else if (decision == 1) {
            return;
        } else if (decision == 2) {
            computerScore++;
        }
    
        console.log("Your score is " + humanScore + ". The computer's score is " + computerScore + ".");
    }

let computerChoice;
let humanChoice;
let humanScore;
let computerScore;
let i

humanScore = 0;
computerScore = 0;


for (i =0;i < 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice().toLowerCase();

    console.log("Player choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    playRound(humanChoice,computerChoice);
}