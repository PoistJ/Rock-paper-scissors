function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber = 0) {
        choice = "rock";
    } else if (randomNumber = 1) {
        choice = "paper";
    } else if (randomNumber = 2) {
        choice = "scissors";
    }

    return choice
}