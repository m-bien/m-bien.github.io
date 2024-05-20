const choices = ["rock", "paper", "scissors"];
const computerImage = document.getElementById("computer-result");

document.getElementById("rock").addEventListener("click", selectChoice);
document.getElementById("paper").addEventListener("click", selectChoice);
document.getElementById("scissors").addEventListener("click", selectChoice);
document.getElementById("player-choice").addEventListener("click", playRound);

// add border to selected choice
function selectChoice(e) {
    if (document.querySelector(".selected") !== null) {
        document.querySelector(".selected").classList.remove("selected");
    }
    e.target.classList.add("selected");
}

// --- start game ---
function playRound() {

    computerImage.classList.remove("tie");
    computerImage.classList.remove("win");
    computerImage.classList.remove("lose");

    // set 3 second delay and shuffle images
    setTimeout(determineWinner, 3000);
    shuffleInterval = setInterval(shuffleImages, 150)

    document.getElementById('result').textContent = 'Thinking...';
}

// --- compare choices ---
function determineWinner() {

    // stop shuffling
    clearInterval(shuffleInterval);

    // determine computer choice
    const computerResult = Math.floor(Math.random() * 3);
    document.getElementById("computer-result").src = "./assets/" + choices[computerResult] + ".png";

    const resultText = document.getElementById("result");
    const playerChoice = document.querySelector(".selected").id;

    // compare player and computer choices
    if (playerChoice === "rock") {
        if (computerResult === 0) {
            resultText.innerText = "Tie.";
        } else if (computerResult === 1) {
            resultText.innerText = "You lost.";
            document.getElementById("computer-result").classList.add("lose");
        } else {
            resultText.innerText = "You win!";
            document.getElementById("computer-result").classList.add("win");
        }
    } else if (playerChoice === "paper") {
        if (computerResult === 0) {
            resultText.innerText = "You win!";
            document.getElementById("computer-result").classList.add("win");
        } else if (computerResult === 1) {
            resultText.innerText = "Tie.";
        } else {
            resultText.innerText = "You lost.";
            document.getElementById("computer-result").classList.add("lose");
        }
    } else {
        if (computerResult === 0) {
            resultText.innerText = "You lost.";
            document.getElementById("computer-result").classList.add("lose");
        } else if (computerResult === 1) {
            resultText.innerText = "You win!";
            document.getElementById("computer-result").classList.add("win");
        } else {
            resultText.innerText = "Tie.";
        }
    }

    // add border to result
    if (computerResult === 0) {
        computerImage.classList.add("tie");
        computerImage.classList.remove("win");
        computerImage.classList.remove("lose");
    } else if (computerResult === 1) {
        computerImage.classList.add("lose");
        computerImage.classList.remove("win");
    } else {
        computerImage.classList.add("win");
        computerImage.classList.remove("lose");
    }
}

// --- shuffle images ---
let imageToShuffle = 0;

function shuffleImages() {
    document.getElementById("computer-result").src = "./assets/" + choices[imageToShuffle % 3] + ".png";
    imageToShuffle++;
}

// --- keep score (not working) ---
let playerScore = 0;
let computerScore = 0;

function keepScore(resultText) {
    if (resultText === 'win') {
        playerScore++;
    } else {
        computerScore++;
    } 
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

// rip it's not working! yay!


