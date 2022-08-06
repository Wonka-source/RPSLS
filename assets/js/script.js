
const options = document.querySelectorAll("btn--options");

const gamemodeUi = document.getElementById("game-mode");

const optionsWrapper = document.getElementById("options-wrapper");

const displayInstructions = document.getElementById("display-instructions");

const scoreArea = document.getElementById("score-area")
// gameMode = 0 (no game mode selected) 
//1 = Best 2 out of 3
//2 = Best 3 out of 5
//3 = Best 4 out of 7
let gameMode = 0







function startGame (gameModeChoice){
    //hide game-mode ui
    gamemodeUi.style.display="none";
    //show the player's options
    optionsWrapper.style.display="block";

    scoreArea.style.display="flex"
    
    displayInstructions.innerText = "Chose a move";

}

function playGame(){

}



function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return 'rock';
    } else if( random === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}
    





function getWinner(){

}

function showMoves(){

}



function restartGame () {
    
}