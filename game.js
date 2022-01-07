let scoreOfPlayer;
let scoreOfComputer;
const options = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll('button');
const buttonDiv = document.querySelector('#button-div');
const body = document.querySelector('body');
const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result-div');
const resultPara = document.createElement('p');
const newGameButton = document.createElement('button');
newGameButton.setAttribute('id', 'new-game');
newGameButton.textContent = 'Start New Game';

buttons.forEach(b => {
    b.addEventListener('click', game(), {once: true});
    b.addEventListener('click', () => {
        playRound(b.textContent);
    });
});

newGameButton.addEventListener('click', game);

function game() {
    scoreOfPlayer = 0;
    scoreOfComputer = 0;
    if (document.querySelector('#button-div') === null) {
        buttons.forEach(b => buttonDiv.appendChild(b));
        body.appendChild(buttonDiv);
    }
    if (document.querySelector('#result-div') !== null) {
        body.removeChild(resultDiv);
    }
    if (document.querySelector('#new-game') !== null) {
        body.removeChild(newGameButton);
    }
}

function playRound(selection) {
    console.log(selection);
    let playerSelection = selection;
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log("It's a draw! Both chose the " + playerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
        scoreOfPlayer++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        scoreOfComputer++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
    if (scoreOfPlayer === 5 || scoreOfComputer === 5) {
        announceWinner();
    }
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function announceWinner() {
    body.removeChild(buttonDiv);
    let winner = scoreOfPlayer > scoreOfComputer ? 'You' : 'The Computer';
    resultPara.textContent = `The score is ${scoreOfPlayer} - ${scoreOfComputer} \nThe winner is ${winner}`;
    resultDiv.appendChild(resultPara);
    body.appendChild(resultDiv);
    body.appendChild(newGameButton);
}