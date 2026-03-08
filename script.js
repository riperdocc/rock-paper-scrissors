let humanScore = 0;
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

function getHumanChoice() {
    const choices = [];
    choices.push("rock", "paper", "scissors")

    const getChoice = Number(window.prompt("Rock : 0, Paper : 1, Scissors: 2", ""));
    let choice = choices[getChoice];

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
    printScores();

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }
    
    if (humanScore > computerScore) {
        console.log('\n')
        console.log("Gratulacje wygrałeś!")
    } else {
        console.log('\n')
        console.log("Komputer wygrał!")
    }
}

playGame()