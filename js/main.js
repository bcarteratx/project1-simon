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
let playerRound = 1;
let win;
let wrongMove;
let intervalTime;
/*----- cached element references -----*/

/*----- event listeners -----*/
red.addEventListener('click', clickedRed);
blue.addEventListener('click', clickedBlue);
yellow.addEventListener('click', clickedYellow);
green.addEventListener('click', clickedGreen);
startButton.addEventListener('click', startGame);
strictButton.addEventListener('click', handleStrict);


/*----- functions -----*/
function handleStrict() {
    (strictButton.checked == true) ? strict = true : strict = false; 
}
function clickedRed() {
    playerPattern.push(1);
    redFlash();
    matchPattern();
  }
function clickedBlue() {
    playerPattern.push(2);
    blueFlash();
    matchPattern();
  }
function clickedYellow() {
    playerPattern.push(3);
    yellowFlash();
    matchPattern();
  }
function clickedGreen() {
    playerPattern.push(4);
    greenFlash();
    matchPattern();
  }

function getPattern() {
    compPattern = Array.from({length: 4}, () => Math.floor(Math.random() * 4) +1);
}

function matchPattern() {
    if(compPattern.length!=playerPattern.length) {
        return "False";
    } else { 
    // comapring each element of array 
        for(var i=0;i<compPattern.length;i++) 
        if(compPattern[i]!=playerPattern[i]) {
        return false;
        // if strict = true => round = 1
        // if strict = false => restart round 
        } else {
            return true;
            
        }
    } 
} 

function advanceRound() {
    if (matchPattern)
    playerRound += 1;
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

function redFlash() {
    red.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 300);
}
function blueFlash() {
    blue.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 300);
}
function yellowFlash() {
    yellow.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 300);
}
function greenFlash() {
    green.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 300);
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