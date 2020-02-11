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
let compTurn;
let compFlash;
let totalRounds = 20;
let strict = false;
let win;
let wrongMove;
let intervalTime;

/*----- cached element references -----*/
let compPattern = [];
let playerPattern = [];
let playerRound = 1;

/*----- event listeners -----*/
red.addEventListener('click', clickedRed);
blue.addEventListener('click', clickedBlue);
yellow.addEventListener('click', clickedYellow);
green.addEventListener('click', clickedGreen);
startButton.addEventListener('click', startGame);
strictButton.addEventListener('click', handleStrict);


/*----- eventHandlers -----*/
function handleStrict() {
    (strictButton.checked == true) ? strict = true : strict = false; 
}
function clickedRed() {
    playerPattern.push(1);
    redFlash();
    matchPattern();
    console.log(playerPattern);
}
function clickedBlue() {
    playerPattern.push(2);
    blueFlash();
    matchPattern();
    console.log(playerPattern);
}
function clickedYellow() {
    playerPattern.push(3);
    yellowFlash();
    matchPattern();
    console.log(playerPattern);
}
function clickedGreen() {
    playerPattern.push(4);
    greenFlash();
    matchPattern();
    console.log(playerPattern);
}

/*----- functions -----*/
function startGame() {
    render();
    playerRound = 1;
    win = false;
    wrongMove = false;
    playerPattern = [];
    getRandom();
    compTurn = true;
    compFlash = 1;
    //all lights flash to indicate game start
    //intervalTime = setInterval(compTurn, 500);
    //flashLights();
    //playPattern() {light up elements by compPatern}
    console.log(compPattern);
    compTurn = true;
    runCompPattern();
    //players turn to match pattern
    //wait then run matchPattern();
    
}

function nextRound() {
    compPattern.push(Math.floor(Math.random() * 4) +1);
    playerPattern = [];
    runCompPattern();
    console.log(compPattern);
    //runCompPattern();
}

function runCompPattern() {
    if (compTurn) { 
        delayFlash(compPattern);
    }
}
function getRandom() {
    compPattern = Array.from({length: 1}, () => Math.floor(Math.random() * 4) +1);
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
            playerRound += 1; 
            render();
            return true;
        }
    } 
} 
// delayFlash Function to run through the array with delay
async function delayFlash(array){
    for(let i=0; i<array.length; i++){
        await window.setTimeout(flashColor, 1000 *i, array[i])
    }
}
// figures out which color to flash for an index in the computer's pattern
function flashColor(i) {
    if (i === 1) redFlash();
    if (i === 2) blueFlash();
    if (i === 3) yellowFlash();
    if (i === 4) greenFlash();
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
function flashLights() {
    lightsOn();
    setTimeout(() => lightsOff(), 800);
}
function render() {
    round.textContent = playerRound;
}