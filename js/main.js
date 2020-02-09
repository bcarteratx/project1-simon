/*----- constants -----*/
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const round = document.querySelector('#message');
const startButton = document.querySelector('#start');
const strictButton = document.querySelector("#strict");
//sound files

/*----- app's state (variables) -----*/
let compPattern;
let playerPattern = [];
let compTurn;
let totalRounds = 20;
let strict = false;
let playerRound;
let win;
/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector('.game').addEventListener('click', handlePattern);
document.getElementById('start').addEventListener('click', startGame);
document.getElementById('strict').addEventListener('click', handleStrict);


/*----- functions -----*/
function getPattern() {
    compPattern = Array.from({length: 1}, () => Math.floor(Math.random() * 4) +1);
}

function startGame() {
    document.getElementById('message').textContent = "Round 1";
    //all lights flash to indicate game start

    getPattern();
    //playPattern() {light up elements by compPatern}
    
    //check for 
}

function matchPattern() {
    if (playerPattern === compPattern) {
        playerRound += 1;
    } else {
        startPattern();
    }
}

function handlePattern(evt) {
    //when color is clicked input respective value into playerorder array.
    let lightValue = parseInt(evt.target.textContent);
    playerPattern.push(lightValue);
    console.log(playerPattern);
}

function handleStrict() {
    (strictButton.checked == true) ? strict = true : strict = false; 
  }