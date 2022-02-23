let playerScore = 0;
let computerScore = 0;
let updatedPlayerScore;
let updatedComputerScore;
let refresh;
const rck = document.querySelector('#rock');
const ppr = document.querySelector('#paper');
const scrs = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');
const options = ["rock", "paper", "scissors"];
const playerAnswer = document.querySelector('#player');
const computerAnswer = document.querySelector('#computer');
const vs = document.querySelector('#vs');
const body = document.querySelector('body');
const results = document.querySelector('#results');
const reset = document.querySelector('#reset');


rck.addEventListener('click', () => {
    setupRound('rock');
    blinkColor(rck);
});

ppr.addEventListener('click', () => {
    setupRound('paper');
    blinkColor(ppr);
});

scrs.addEventListener('click', () => {
    setupRound('scissors');
    blinkColor(scrs);
});


  function blinkColor(btn) {
    if (playerScore < 5 && computerScore < 5) {
    btn.style.background = "#EFEFEF";
    if ("#EFEFEF" == btn.style.background) {
      setTimeout(() => {btn.style.background = "#CAEBF2"}, 100);
    } else if (btn.style.background = "#CAEBF2") {
      setTimeout(() => {btn.style.background = "#EFEFEF"}, 100);
    }
  }
}


function setupRound(playerChoice) {

    if (playerScore === 5 || computerScore === 5 ) {
        return;
    }
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    playRound(playerChoice, computerChoice);
}

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper') ) {
        playerScore += 1;
    }
    else if ((playerChoice === 'rock' && computerChoice === 'paper') || 
                (playerChoice === 'paper' && computerChoice === 'scissors') ||
                 (playerChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore += 1;
    }

    playerAnswer.textContent = playerChoice;
    vs.textContent = 'vs';
    computerAnswer.textContent = computerChoice;
    results.textContent =`You: ${playerScore}. Computer: ${computerScore}.`;
    
    if (playerScore === 5) {
    setTimeout(() => {alert("You win!")}, 100);
    }
    if (computerScore === 5) {
        setTimeout(() => {alert("You lose!")}, 100);
    }
    
}

reset.addEventListener('click', function() {
    window.location.reload();
    })