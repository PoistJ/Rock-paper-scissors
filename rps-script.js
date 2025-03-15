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
    inputNumber = prompt("Please pick a number between 0 - 2. (0 is rock, 1 is paper, 2 is scissors)");
    
    if (inputNumber == 0) {
        hChoice = "rock";
    } else if (inputNumber == 1) {
        hChoice = "paper";
    } else if (inputNumber == 2) {
        hChoice = "scissors";
    }
    return hChoice;
}

let computerChoice;
let humanChoice;

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
console.log("Your choice is " + humanChoice);
