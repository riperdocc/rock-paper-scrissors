let humanScore = 0;
let humanChoice = "";
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = [];
    choices.push("rock", "paper", "scissors")

    let choice = choices[getRandomInt(3)];
    return choice
}

function printScores() {
    console.log(`your score: ${humanScore}`)
    console.log(`computer score: ${computerScore}`)
}

function playRound(humanChoice, computerChoice) {
    console.log('\n');

    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("Przegrywasz! Papier pokonuje kamień")
        ++computerScore
    }

    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("Wygrywasz! Kamień pokonuje nożyczki")
        ++humanScore
    }

    if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log("Remis")
    }

    if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("Wygrywasz! Papier pokonuje kamień")
        ++humanScore
    }

    if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("Przegrywasz! Nożyczki pokonują papier")
        ++computerScore
    }

    if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log("Remis!")
    }

    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("Przegrywasz! Kamień pokonuje nożyczki")
        ++computerScore
    }

    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("Wygrywasz! Nożyczki pokonują papier")
        ++humanScore
    }

    if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log("Remis!")
    }
    document.getElementById("user-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    printScores();

}

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    humanChoice = 'rock';
    console.log(humanChoice);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    humanChoice = 'paper';
    console.log(humanChoice);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    humanChoice = 'scissors';
    console.log(humanChoice);
});


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(humanChoice);
    })
})

function playGame(buttonClicked) {
    const humanSelection = buttonClicked
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)

    const humanWinner = document.querySelector("div.user-score");
    const computerWinner = document.querySelector("div.computer-score");
    
    if (humanScore == 5) {
        humanWinner.style.backgroundColor = "green";
        computerWinner.style.backgroundColor = "red";
        document.getElementById("user-score").textContent = 0;
        document.getElementById("computer-score").textContent = 0;
    } else if (computerScore == 5) {
        computerWinner.style.backgroundColor = "green";
        humanWinner.style.backgroundColor = "red";
        document.getElementById("user-score").textContent = 0;
        document.getElementById("computer-score").textContent = 0;
    }
}