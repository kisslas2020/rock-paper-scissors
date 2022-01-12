let scoreOfPlayer;
let scoreOfComputer;
const options = ["Rock", "Paper", "Scissors"];
let countRound;

const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.querySelector('body').appendChild(wrapper);

const buttonDiv = document.querySelector('#button-div');
wrapper.appendChild(buttonDiv);

const buttons = document.querySelectorAll('.selection');
buttons.forEach(btn => buttonDiv.removeChild(btn));

const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result-div');
wrapper.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
scoreDiv.setAttribute('id', 'score-div');

const para = document.createElement('p');
para.style.fontSize = '30px';
para.style.fontWeight = 'bold';
resultDiv.appendChild(scoreDiv);
resultDiv.insertBefore(para, scoreDiv);


const newGameButton = document.createElement('button');
newGameButton.setAttribute('id', 'new-game');
newGameButton.textContent = 'Start New Game';
buttonDiv.appendChild(newGameButton);

buttonDiv.addEventListener('click', game, {once: true});

buttons.forEach(b => {
    b.addEventListener('click', () => {
        playRound(b.textContent);
    });
});

newGameButton.addEventListener('click', game);

function game() {
    scoreOfPlayer = 0;
    scoreOfComputer = 0;
    countRound = 1;
    if (document.querySelectorAll('#button-div button').length < 3) {
        buttons.forEach(btn => buttonDiv.appendChild(btn));
    }
    if (document.querySelector('#new-game') !== null) {
        buttonDiv.removeChild(newGameButton);
    }
    resultDiv.removeChild(para);
    para.textContent = `The score is You: ${scoreOfPlayer} - The Computer: ${scoreOfComputer}.`
    resultDiv.appendChild(scoreDiv);
    resultDiv.insertBefore(para, scoreDiv);
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
        scoreOfPlayer++;
    } else {
        winnerOfRound = 'computer';
        scoreOfComputer++;
    }
    printScore(winnerOfRound, playerSelection, computerSelection);
    if (scoreOfPlayer === 5 || scoreOfComputer === 5) {
        announceWinner();
    }
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function printScore(winnerOfRound, playerSelection, computerSelection) {
    para.textContent = `The score is You: ${scoreOfPlayer} - The Computer: ${scoreOfComputer}.`
    let round = document.createElement('p');
    round.classList.add('round');
    round.style.padding = 0;
    round.style.margin = 0;
    if (winnerOfRound === 'player') {
        round.textContent = `${countRound++}. round: You win, ${playerSelection} beats ${computerSelection}`;
    } else if (winnerOfRound === 'computer') {
        round.textContent = `${countRound++}. round: You lose, ${playerSelection} was beaten by ${computerSelection}`;
    } else {
        round.textContent = `${countRound++}. round: It\`s a draw, you both chose ${playerSelection}`;
    }
    scoreDiv.appendChild(round);

}

function announceWinner() {
    buttons.forEach(button => buttonDiv.removeChild(button));
    resultDiv.removeChild(para);
    let scores = document.querySelectorAll('#score-div p');
    scores.forEach(s => scoreDiv.removeChild(s));
    resultDiv.removeChild(scoreDiv);
    let winner = scoreOfPlayer > scoreOfComputer ? 'You' : 'The Computer';
    para.textContent = `The score is ${scoreOfPlayer} - ${scoreOfComputer} \nThe winner is ${winner}`;
    resultDiv.appendChild(para);
    buttonDiv.appendChild(newGameButton);
}