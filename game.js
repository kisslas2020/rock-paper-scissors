const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function playerPlay() {
    let playerSelection = prompt("Enter a choice (rock, paper or scissors): ");
    playerSelection = capitalizeWord(playerSelection);
    if (!options.includes(playerSelection)) {
        playerSelection = computerPlay();
        console.log("Invalid choice! The Computer chose for You: " + playerSelection);
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw! Both chose the " + playerSelection;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function capitalizeWord(word) {
    if (word === null) {
        return null;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(b => b.addEventListener('click', () => {
    let playerSelection = b.textContent;
    let computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
}));

const body = document.querySelector('body');
const result = document.createElement('div');
body.appendChild(result);





function game(numberOfRounds) {
    let scoreOfPlayer = 0;
    let scoreOfComputer = 0;
    for (let i = 0; i < numberOfRounds; i++) {
        let scoreText = playRound(playerPlay(), computerPlay());
        console.log(scoreText);
        if (scoreText.includes("win")) {
            scoreOfPlayer++;
        } else if (scoreText.includes("lose")){
            scoreOfComputer++;
        }
    }
    let result = scoreOfPlayer > scoreOfComputer ? "The winner is You!"
        : scoreOfPlayer < scoreOfComputer ? "The winner is the Computer!"
            : "It's a draw.";
    console.log(`The result is: ${scoreOfPlayer} - ${scoreOfComputer}. ${result}`);
}