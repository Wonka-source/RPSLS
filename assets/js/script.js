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

//1 = Best 2 out of 3
//2 = Best 3 out of 5
//3 = Best 4 out of 7
// gameMode = 0 (no game mode selected) 
let gameMode = 0;

displayInstructions.innerHTML = `⭡ Choose a game mode to<br> play against the Computer`;



/** 
 * starts the game by recording the game mode choice onclick
 * hides the game mode selection 
 * and showing the ui for score keeping, instructions, outcome and player move options
*/
function startGame(gameModeChoice) {
    //hide game-mode ui
    gameModeUi.style.display = "none";
    //show the player's options
    optionsWrapper.style.display = "block";
    gameMode = gameModeChoice;
    scoreArea.style.display = "flex";
    displayOutcome.style.display = "block";
    displayInstructions.innerText = "Pick a move";
    rules.style.display = "none";

}
/** 
 * The main game function, called when a player 
 * clicks one of the options paper scissors or rock
 * runs through a round of the game by
 * generating and recording the ai choice
 * recording the player choice
 * finding who won or if there was a draw
 * showing the results
 * and checking if the game is over
 *  hiding the player move options if it is * 
 */
function playGame(playerChoice) {
    let aiChoice = getComputerChoice();
    let userChoice = getPlayerChoice(playerChoice);
    showMoves(userChoice, aiChoice, getWinner(userChoice, aiChoice));
    if (isGameOver()) {

        if (userScore.innerText > aiScore.innerText) {
            displayInstructions.innerHTML = `<h3><span style='color:rgb(208, 214, 117);'>⭡ Game Over</span><br>Player Wins <br> Hit RESET to play again </h3>`;
            optionsWrapper.style.display = "none";            
        } else {
            displayInstructions.innerHTML = `<h3><span style='color:rgb(208, 214, 117);'>⭡ Game Over</span> <br> Comp Wins<br> Hit RESET to play again </h3>`;
            optionsWrapper.style.display = "none";            
        }
    }



}
/**returns the players choice as a string
 * 0 = rock, 1 = paper, 2 = scissors, 3 = lizard, 4 = spock
 */

function getPlayerChoice(playerChoice) {
    if (playerChoice === 0) {
        return 'rock';
    } else if (playerChoice === 1) {
        return 'paper';
    } else if (playerChoice === 2) {
        return 'scissors';
    } else if (playerChoice === 3) {
        return 'lizard';
    } else {
        return 'spock';
    }

}

/** generates a random number between 0 and 4 and returns a string containing the ai choice
 * 0 = rock, 1 = paper, 2 = scissors, 3 = lizard, 4 = spock
*/

function getComputerChoice() {
    let random = Math.floor(Math.random() * 5);
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else if (random === 2) {
        return 'scissors';
    } else if (random === 3) {
        return 'lizard';
    } else {
        return 'spock';
    }

}

/**
 * returns a string containing who won (player or computer) or the word draw for a draw
 */


function getWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return 'draw';
    } else if (userChoice === 'rock') {
        if (aiChoice === 'paper' || aiChoice === 'spock') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (userChoice === 'paper') {
        if (aiChoice === 'scissors' || aiChoice == 'lizard') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (userChoice === 'scissors') {
        if (aiChoice === 'rock' || aiChoice === 'spock') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (userChoice === 'lizard') {
        if (aiChoice === 'rock' || aiChoice == 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (userChoice === 'spock') {
        if (aiChoice === 'lizard' || aiChoice === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}



// takes 3 variables the user choice string, ai choice string and winner string
// sets the moves ui to visable
// and then displays the user and ai choices in the moves ui by changeing the font awesome class of a 'i' tag and
// styling and colouring a 'p' tag under it and setting its contents to the choice name using the choice strings
// then it checks for the winner and ups their score by incrementing the element containing the score
// while also showing who won in the instructions message and displaying a color coded '+1' depending on who won
// if there was no winner the player is asked to try again and told it is a draw
function showMoves(userChoice, aiChoice, winner) {
    moves.style.display = "flex";
    userMove.innerHTML = `<i  class="fas fa-hand-${userChoice}"></i><br><p style="text-transform:uppercase; font-size:30%; margin-top:20px;">${userChoice}</p>`;
    aiMove.innerHTML = `<i  class="fas fa-hand-${aiChoice}"></i><br><p style="text-transform:uppercase; font-size:30%; margin-top:20px; color:rgb(77, 187, 119);">${aiChoice}</p>`;
    if (winner === 'player') {
        userScore.innerText++;
        displayInstructions.innerHTML = `<span style='color:#ff6b81;'> Player wins </span>&nbsp;Go again!`;
        displayOutcome.innerHTML = `<span style='color:#ff6b81;'>+1</span><br>Player`;

    } else if (winner === 'computer') {
        aiScore.innerText++;
        displayInstructions.innerHTML = `<span style='color:rgb(77, 187, 119);'>Comp-Wins</span>&nbsp;Try again!`;
        displayOutcome.innerHTML = `<span style='color:rgb(77, 187, 119);'>+1</span><br>Comp`;
    } else {
        displayInstructions.innerText = "Choose again";
        displayOutcome.innerHTML = "It's<br>a Draw";
    }

}


// returns true if the game is over, false if not
// if will return true if one of the scores larger than the value of gameMode
//gameMode = 1   =    Best 2 out of 3
//gameMode = 2   =    Best 3 out of 5
//gameMode = 3   =    Best 4 out of 7

function isGameOver() {

    if (userScore.innerText > gameMode || aiScore.innerText > gameMode) {
        return true;
    } else {
        return false;
    }
}


//resets the game by returning it to its original state
//setting the game mode, user score and ai score back to 0
// changeing the instructions
// showing the game mode ui and rules
// hiding the moves ui and score area
function resetButton() {
    gameMode = 0;
    userScore.innerText = 0;
    aiScore.innerText = 0;
    displayInstructions.innerText = "⭡ Choose a game mode ";
    gameModeUi.style.display = "block";
    optionsWrapper.style.display = "none";
    moves.style.display = "none";
    rules.style.display = "block";
    scoreArea.style.display = "none";

}