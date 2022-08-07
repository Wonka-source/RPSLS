const gameModeUi = document.getElementById("game-mode");

const optionsWrapper = document.getElementById("options-wrapper");

const displayInstructions = document.getElementById("display-instructions");

const displayOutcome = document.getElementById("display-outcome");

const rules = document.getElementById("rules");

const scoreArea = document.getElementById("score-area");

const userScore = document.getElementById("user-score");

const aiScore = document.getElementById("ai-score");

const moves = document.getElementById("moves");

const userMove = document.getElementById("user-move");

const aiMove = document.getElementById("ai-move");


// gameMode = 0 (no game mode selected) 
let gameMode = 0

displayInstructions.innerText = "⭡ Choose a game mode ";



/** */
function startGame(gameModeChoice) {
    //hide game-mode ui
    gameModeUi.style.display = "none";
    //show the player's options
    optionsWrapper.style.display = "block";
    gameMode = gameModeChoice;
    scoreArea.style.display = "flex";
    displayOutcome.style.display = "block";
    displayInstructions.innerText = " Chose a move ";
    rules.style.display= "none"

}
/** 
 * The main game function, called when a player clicks one of the options paper scissors or rock
 */
function playGame(playerChoice) {
    let aiChoice = getComputerChoice();
    let userChoice = getPlayerChoice(playerChoice);
    showMoves(userChoice, aiChoice, getWinner(userChoice, aiChoice));
    if (isGameOver()) {

        if (userScore.innerText > aiScore.innerText) {
            displayInstructions.innerHTML = `<h3>⭡ <br> You Win! <br> Hit RESET to play again </h3>`
            optionsWrapper.style.display = "none";
            displayOutcome.style.display = "none";
        } else {
            displayInstructions.innerHTML = `<h3>⭡ <br>You Loose <br> Hit RESET to play again </h3>`
            optionsWrapper.style.display = "none";
            displayOutcome.style.display = "none";
        }
    }



}


function getPlayerChoice(playerChoice) {
    if (playerChoice === 0) {
        return 'rock';
    } else if (playerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }


}



function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}






function getWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return 'draw';
    } else if (userChoice === 'rock') {
        if (aiChoice === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (userChoice === 'paper') {
        if (aiChoice === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (userChoice === 'scissors') {
        if (aiChoice === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showMoves(userChoice, aiChoice, winner) {
    moves.style.display = "flex"
    userMove.innerHTML = `<i  class="fas fa-hand-${userChoice}"></i>`;
    aiMove.innerHTML = `<i  class="fas fa-hand-${aiChoice}"></i>`;
    if (winner === 'player') {
        userScore.innerText++;
        displayInstructions.innerText = "Nice";
        displayOutcome.innerText = "You Win";

    } else if (winner === 'computer') {
        aiScore.innerText++;
        displayInstructions.innerText = "Hard Luck";
        displayOutcome.innerText = "You Loose";
    } else {
        displayInstructions.innerText = "Try Again!";
        displayOutcome.innerText = "Its a Draw";
    }

}


//1 = Best 2 out of 3
//2 = Best 3 out of 5
//3 = Best 4 out of 7

function isGameOver() {

    if (userScore.innerText > gameMode || aiScore.innerText > gameMode) {
        return true;
    } else {
        return false;
    }
}





function resetButton() {
    gameMode = 0;
    userScore.innerText = 0;
    aiScore.innerText = 0;
    displayInstructions.innerText = "⭡ Choose a game mode ⭡";
    gameModeUi.style.display = "block";
    optionsWrapper.style.display = "none";
    moves.style.display = "none"
    rules.style.display= "block"

}