let scoreOfPlayer;
let scoreOfComputer;
const options = ["Rock", "Paper", "Scissors"];
const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
const buttonDiv = document.querySelector('#button-div');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result-div');
buttonDiv.appendChild(resultDiv);
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
    if (document.querySelectorAll('.selection') === null) {
        buttons.forEach(btn => buttonDiv.appendChild(btn));
    }
    if (document.querySelector('#new-game') !== null) {
        buttonDiv.removeChild(newGameButton);
    }
    let results = document.querySelectorAll('#result-div p');
    results.forEach(r => resultDiv.removeChild(r));
}

function playRound(selection) {
    let playerSelection = selection;
    let computerSelection = computerPlay();
    let winnerOfRound;
    if (playerSelection === computerSelection) {
        winnerOfRound = 'draw';
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
        winnerOfRound = 'player';
    } else {
        winnerOfRound = 'computer';
    }
    if (scoreOfPlayer === 5 || scoreOfComputer === 5) {
        announceWinner();
    }
    printScore(winnerOfRound);
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function printScore(winnerOfRound) {
    document.createElement('p');
}



function announceWinner() {
    buttons.forEach(button => buttonDiv.removeChild(button));
    let winner = scoreOfPlayer > scoreOfComputer ? 'You' : 'The Computer';
    resultPara.textContent = `The score is ${scoreOfPlayer} - ${scoreOfComputer} \nThe winner is ${winner}`;
    resultDiv.appendChild(resultPara);
    buttonDiv.appendChild(resultDiv);
    buttonDiv.appendChild(newGameButton);
}