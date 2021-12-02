const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}