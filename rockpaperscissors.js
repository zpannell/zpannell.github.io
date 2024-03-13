let score = document.createElement('div');
let playerScore = 0;
let playerScoreText = document.getElementById('playerScoreText');
playerScoreText.innerText = playerScore;
let computerScore = 0;
let computerScoreText = document.getElementById('computerScoreText');
computerScoreText.innerText = computerScore;
let ties = 0;
let tiesText = document.getElementById('tiesText');
tiesText.innerText = ties;
let roundResultText = document.getElementById('result');
roundResultText.innerHTML = '';
let gameResultText = document.getElementById('gameResult');
gameResultText.innerHTML = '';

let getComputerChoice = array => array[Math.floor(Math.random() * array.length)];

let rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    getWeapon('Rock')
})
let paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    getWeapon('Paper')
})
let scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    getWeapon('Scissors')
})

const options = ['Rock', 'Paper', 'Scissors'];

function getWeapon(choice) {
    console.log(choice);
    let playerSelection = choice;
    let computerSelection = getComputerChoice(options);
    if (playerScore + computerScore + ties < 5) {
        roundResultText.innerHTML += "<p>" + playRound(playerSelection, computerSelection) + "</p>";
    }
    
    if (playerScore + computerScore + ties === 5) {
        if (playerScore > computerScore) {
            gameResultText.innerHTML = `You win! You beat the computer ${playerScore} to ${computerScore} with ${ties} tie(s).`;
        } else if (computerScore > playerScore) {
            gameResultText.innerHTML = `You lose! The computer beat you ${computerScore} to ${playerScore} with ${ties} tie(s).`;
        } else {
            gameResultText.innerHTML = `Tie! You both won ${playerScore} rounds each and had ${ties} tie(s).`;
        }
    }
    
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    tiesText.innerText = ties;

    score.innerHTML = "<p><b>" + gameResultText + "</b></p>";
}

function playRound(playerSelection, computerSelection) {
    let round = playerScore + computerScore + ties + 1;
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        return(`Round ${round}: Win. Rock beats Scissors.`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return(`Round ${round}: Loss. Paper beats Rock.`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return(`Round ${round}: Loss. Scissors beats Paper.`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return(`Round ${round}: Win. Paper beats Rock.`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return(`Round ${round}: Loss. Rock beats Scissors.`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++
        return(`Round ${round}: Win. Scissors beats Paper.`);
    } else {
        ties++;
        return(`Round ${round}: Tie. Both players selected ${computerSelection}`);
    }
}

let reset = document.getElementById('reset');
reset.addEventListener('click', function (){
    playerScore = 0;
    computerScore = 0;
    ties = 0;
    roundResultText.innerHTML = '';
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    tiesText.innerText = ties;
    gameResultText.innerHTML = '';
    document.querySelectorAll('.result').forEach(el => el.remove());
})