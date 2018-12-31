let container = document.querySelector('#container');
container.setAttribute('style', 'text-align: center');

let playerScore = 0;
let computerScore = 0;
let resultMsg = '';
let round = 1;


let playDiv = document.querySelector('.play');

// Creation of computer input
function computerPlay() {
    let inputValue = Math.random();
    
    if (inputValue < (1/3)) {
        return 'rock';
    } else if (inputValue > (2/3)) {
        return 'paper';
    } else { 
        return 'scissors';
    }
}

// Logic for round execution
function playRound(playerSelection, computerSelection) {
    // In case of tie.
    if (playerSelection === computerSelection) {
        resultMsg = 'Tie!';
        return 'tie';
    }
    // If player chooses rock
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultMsg = 'Win! Rock beats scissors.';
        return 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultMsg = 'Loss! Rock loses to paper.';
        return 'loss';
    }
    // If player chooses paper
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultMsg = 'Win! Paper beats rock.';
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultMsg = 'Loss! Paper loses to scissors.';
        return 'loss';
    }
    // If player chooses scissors
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultMsg = 'Win! Scissors beat paper.';
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultMsg = 'Loss! Scissors loses to rock.';
        return 'loss';
    }
}
// Execution based on user input
let playRoundResult;
let rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    if (playerScore > 4 || computerScore > 4) {    
    } else {
        playRoundResult = playRound('rock', computerPlay());
        displayRound();
        gameScore();
        displayResult();
    }
});
let paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    if (playerScore > 4 || computerScore > 4) {
    } else {   
        playRoundResult = playRound('paper', computerPlay());
        displayRound();
        gameScore();
        displayResult();
    }
});
let scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    if (playerScore > 4 || computerScore > 4) {
    } else {
        playRoundResult = playRound('scissors', computerPlay());
        displayRound();
        gameScore();
        displayResult();
    }
});

// Display of round result
function displayRound() {
    let roundResult = document.createElement('h3')
    roundResult.textContent = resultMsg;
    playDiv.appendChild(roundResult);
    round++;
}

// Adding and displaying game score
let score = document.createElement('h2');
score.textContent = 'Score: 0 - 0';
playDiv.appendChild(score);
function gameScore() {
    if (playRoundResult === 'win') {
        playerScore++;
        score.textContent = 'Score: ' + playerScore + ' - ' + computerScore;       
    } else if (playRoundResult === 'loss') {
        computerScore++;
        score.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    } else if (playRoundResult === 'tie') {
        score.textContent = 'Score: ' + playerScore + ' - ' + computerScore;
    } else {}
}

// End result messages
let endResultDiv = document.querySelector('.end-results');
let endResult = document.createElement('h1');
function displayResult() {
    if (playerScore === 5) {
        endResult.textContent = 'PLAYER WINS WITH A FINAL SCORE OF ' + playerScore + ' - ' + computerScore;
    } else if (computerScore === 5) {
        endResult.textContent = 'OPPONENT WINS WITH A FINAL SCORE OF ' + playerScore + ' - ' + computerScore;
    } 
    endResultDiv.appendChild(endResult);
}