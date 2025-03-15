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
    humanChoice = prompt("Please pick a number between 0 - 2. (0 is rock, 1 is paper, 2 is scissors)");
    
    if (humanChoice === 0) {
        humanChoice = "rock";
    } else if (humanChoice === 1) {
        humanChoice = "paper";
    } else if (humanChoice === 2) {
        humanChoice = "scissors";
    }
    return humanChoice;
}

let computerChoice;
let humanChoice;

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
console.log("Your choice is " + humanChoice);
