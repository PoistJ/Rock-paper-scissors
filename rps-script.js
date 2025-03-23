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
        
        const results = document.querySelector(".results");

        if (decision == 0) {
            const winner = document.createElement("div");
            winner.textContent = ("You picked " + humanChoice + ", computer picked " + computerChoice + ". You win!");
            winner.style.color = "green";
            results.appendChild(winner);
        } else if (decision == 1) {
            const tie = document.createElement("div");
            tie.textContent = ("It's a tie!");
            results.appendChild(tie);
        } else {
            const loser = document.createElement("div");
            loser.textContent = ("You picked " + humanChoice + ", computer picked " + computerChoice + ". You lose.");
            loser.style.color = "red";
            results.appendChild(loser);
        }
    
        if (decision == 0) {
            humanScore++;
        } else if (decision == 1) {
            return;
        } else if (decision == 2) {
            computerScore++;
        }

        const playerPoints = document.querySelector(".playerScore");
        playerPoints.textContent = ("Player: " + humanScore);
        const computerPoints = document.querySelector (".computerScore");
        computerPoints.textContent = ("Computer: " + computerScore);
    }

let computerChoice;
let humanChoice;
let humanScore;
let computerScore;
let i

humanScore = 0;
computerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', () => {
    let computerChoice;
    let humanChoice;
    
    computerChoice = getComputerChoice();
    humanChoice = "rock";
    playRound(humanChoice,computerChoice);
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    humanChoice = "paper";
    playRound(humanChoice,computerChoice);
});

const scissorBtn = document.querySelector("#scissorBtn");
scissorBtn.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    humanChoice = "scissors";
    playRound(humanChoice,computerChoice);
});