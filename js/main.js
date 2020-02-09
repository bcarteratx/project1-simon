/*----- constants -----*/
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const message = document.querySelector('#message');
const round = document.querySelector('#round');
const startButton = document.querySelector('#start');
const strictButton = document.querySelector("#strict");
//sound files

/*----- app's state (variables) -----*/
let compPattern = [];
let playerPattern = [];
let compTurn;
let compFlash;
let totalRounds = 20;
let strict = false;
let playerRound;
let win;
let wrongMove;
let intervalTime;
/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector('.game').addEventListener('click', handlePattern);
document.getElementById('start').addEventListener('click', startGame);
document.getElementById('strict').addEventListener('click', handleStrict);


/*----- functions -----*/
function handleStrict() {
    (strictButton.checked == true) ? strict = true : strict = false; 
  }

function handlePattern(evt) {
    //when color is clicked input respective value into playerorder array.
    let lightValue = parseInt(evt.target.textContent);
    playerPattern.push(lightValue);
    console.log(playerPattern);
}

function getPattern() {
    compPattern = Array.from({length: 1}, () => Math.floor(Math.random() * 4) +1);
}

function matchPattern() {
    Math.abs(playerPattern);
    Math.abs(compPattern);
    if (playerPattern === compPattern) {
        playerRound += 1;
    } else {
        //startPattern();
    }
}

function startGame() {
    round.textContent = 1;
    win = false;
    wrongMove = false;
    getPattern();
    compTurn = true;
    //all lights flash to indicate game start
    intervalTime = setInterval(compTurn, 500);
    lightsOn();
    lightsOff();
    //playPattern() {light up elements by compPatern}
    
    //check for 
}

function startRound() {

}



function lightsOff() {
    red.classList.replace('on', 'off');
    blue.classList.replace('on', 'off');
    yellow.classList.replace('on', 'off');
    green.classList.replace('on', 'off');
}

function lightsOn() {
    red.classList.replace('off', 'on');
    blue.classList.replace('off', 'on');
    yellow.classList.replace('off', 'on');
    green.classList.replace('off', 'on');
}