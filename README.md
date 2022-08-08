
# Rock Paper Scissors Lizard Spock
Link to the deployed site: [https://wonka-source.github.io/rps/](https://wonka-source.github.io/rps/)


**External user’s goal:**

-   The site’s users want to play an online game of chance, with a limited number of rounds till a game over is reached.
- The site's users want to play against the computer.

**Site owner's goal:**

-   The site’s goal is to entertaining game with a limited number of rounds till a game over is reached.

## The game

Rock Paper Scissors Lizard Spock is a game of chance that adds more possibilities to the classic Rock Paper Scissors game 

![enter image description here](https://i.imgur.com/4atgETm.jpeg)
### The Introduction page
When the page is first loaded you are greeted with a message "Choose a game mode to play against the computer" With a choice of 3 game modes above "Best 2 out of 3, Best 3 out of 5 and 4 out of 7."
![enter image description here](https://i.imgur.com/wlweFJw.jpeg)



..and a footer at the bottom with the rules 


This table illustrates all the possible outcomes :


![enter image description here](https://i.imgur.com/L8lqFxX.jpeg)



### Round area



After picking the game mode the starts and the user is then prompt to pick a move to play the game.

![enter image description here](https://i.imgur.com/tA5FaCD.jpeg)



Once an option is selected the users and the computers choices are shown: 

![enter image description here](https://i.imgur.com/udWpsqM.jpeg)The user is informed of the result and the scores are incremented accordingly. The user is prompt to make another selection until it is game over.




### Game over
![enter image description here](https://i.imgur.com/h9MzPZt.jpeg)



 the user reaches the end of the game the is informed who the winner is and prompt to hit reset to play again:
![enter image description here](https://i.imgur.com/wlweFJw.jpeg)



### User stories

-   As a user, I want to be guided threw the application 
  - As a user, I want to be able to easily navigate throughout the site.
  - As a user, I want to be able to restart the game.
   - As a user, I want to keep track of the score 
- As a user, I want to be able to select different game modes
- As a user, I want to be able to reach a game over after a number of goes

## Features
### Heading and Logo
![enter image description here](https://i.imgur.com/6P0QDFQ.jpeg)
### Game Mode

Best 2 out of 3, 
Best 3 out of 5 
Best 4 out of 7
### "The best of" game type
"to say that the winner of a series of games, sets, etc. will be the one that wins the majority of the odd number (3, 5, 7,) maximum to be played.

![enter image description here](https://i.imgur.com/BBLVu8i.jpeg)
### Prompt messages
![enter image description here](https://i.imgur.com/n2aBB2u.jpeg)
### Rules
![enter image description here](https://i.imgur.com/YFSAa1u.jpeg)

### Move Options
Rock Paper Scissors Lizard Spock
![enter image description here](https://i.imgur.com/G7SzdI5.jpeg)
### Score Board's
Player and Computer Score board
![enter image description here](https://i.imgur.com/rXbcLI5.jpeg)
### Reset Button
Reset button, to revert the game to the original state
![enter image description here](https://i.imgur.com/OS0qRFR.jpeg)

### Round Area
This is were the player (red) and the computers (green) moves are shown.
![enter image description here](https://i.imgur.com/JeFGtdH.jpeg)
### The ability to achieve a "Game Over"
![enter image description here](https://i.imgur.com/svEQcFq.jpeg) 

### Features Left to Implement

-   A results pop up keeping track of all matches and scores played in a single session

## Design
 ### Logo
 The logo was generated using this sites logo templates:
 [https://hatchful.shopify.com/](https://hatchful.shopify.com/onboarding/customize-logo)

![enter image description here](https://i.imgur.com/BT1wq1c.jpeg)
The icons came from font awesome
https://fontawesome.com/


![enter image description here](https://i.imgur.com/G7SzdI5.jpeg)![enter image description here](https://i.imgur.com/JeFGtdH.jpeg)


## Technologies Used

-   HTML5
-   CSS3
-   JavaScript

## Testing

### Browser testing

- Safari----Pass
- Firefox----Pass
- Edge----Pass
- Chrome ----Pass
- Brave----Pass
- Opera ----Pass
### Responsivness

-   Chrome developer tool was used to emulate  the responsiveness of different environments such as  
-iPhone SE
iPhone XR
iPhone 12 Pro
Pixel 5
Samsung Galaxy
Samsung Galaxy SZO ultra
iPad Air
iPad Mini
Surface Pro 7
Surface Duo
Galaxy Fold
Samsung Galaxy ASI 171
Nest Hub
Nest Hub Max

### Validator Testing

The W3C Markup Validator was used to validate the html. 
Passed with no errors

 and W3C CSS Validator were used to validate the html pages of the app

-  W3C Markup Validator
- ![enter image description here](https://i.imgur.com/OkD7udX.jpeg)
    
-   W3C CSS Validator 
W3C CSS Validator were used to validate the style.css page.
Passed with no issues 
-![enter image description here](https://i.imgur.com/l2gNe5T.jpeg)
    



-   JSHint 
- JsHint was used to validate script..js 
- Passed with no issues.

![enter image description here](https://i.imgur.com/dQE6uCM.jpeg)

I have confirmed that the colours and fonts chosen are easy to read and accessible by running it through lighthouse in Chrome developer tools.

-   Lighthouse test

![enter image description here](https://i.imgur.com/mIHTRfR.jpeg)

### Functionality tests

1.



**Test Label**  Pick a game mode to play against the computer

**Test Action** Page load the webpage

**Expected Outcome** The user is presented with a promt to choose a game mode and also see the rules on how to play the game


**Test Outcome** PASS

2.

**Test Label** Click on game modes to run mode 

**Test Action** User clicks on any one of the 3 game mode buttons

**Expected Outcome** The Game mode selections disapear and user is presented with move options to pick, and the game must last the selected rounds. The game will end when one wins the majority of the odd number (3, 5, 7,).


**Test Outcome** All 3 game types PASS, after extensive testing

3.

**Test Label** Button hover game mode

 **Test Action** The user hovers the mouse over the game mode selections

**Expected Outcome** The colors will invert


**Test Outcome** All 3 game types PASS, after extensive testing


4.

**Test Label** Move option hover effect

**Test Action** The user hovers the mouse over the move options selections

**Expected Outcome** The colors will invert

**Test Outcome** All 5 move options PASS, after extensive testing
Rock, Paper, Scissors Lizard and Spock


5.

**Test Label** Move selection 

**Test Action** The user selects a move 

**Expected Outcome** The selected move will appear in the round area 


**Test Outcome** All 5 moves display correctly 
 
6.

**Test Label** Computer random move 

**Test Action** The user selects a move 

**Expected Outcome** The computers random move will appear in the round area 


**Test Outcome** All 5 moves display in random intervals

7.

**Test Label** Score increments for the correct winner 

**Test Action** The user clicks on a move 

**Expected Outcome** After the user chooses a move a winner is determined and the winners score increments 

**Test Outcome** PASS, This was extensively tested and found no issues

8.

**Test Label** Reset button 

**Test Action** The user clicks the reset button

**Expected Outcome** The game reverts to its original state

**Test Outcome** PASS


## Deployment

-   The site was deployed to GitHub pages.
-To deploy GitHub, navigate to the repository.
-click **Settings**.
-then click **Pages**.
-select **Deploy from a branch**.
-then select **Main**
-and hit **Save**
-And in a few seconds the page refreshes and a link to the deployed site is  generated.




## Credits
Code institute 
https://www.w3schools.com

