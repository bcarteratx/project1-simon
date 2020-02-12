/*----- variables -----*/
let compPattern = [];
let playerPattern = [];
let playerRound = 0;
let compTurn;
let playerTurn;
let totalRounds = 5;
let strict = false;
let winGame = false;
let wrongMove = false;
let intervalTime;
let flashes = 1;

/*----- cached element references -----*/
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const message = document.querySelector('#message');
const round = document.querySelector('#round');
const startButton = document.querySelector('#start');
const strictButton = document.querySelector("#strict");

/*---- sound files ----*/
const redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

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
function resetGame() {
    playerPattern = [];
    compPattern = [];
    playerRound = 0;
    flashes = 0;
    compTurn = true
}

function startGame() {
    if (playerRound < 1) {
        flashLights(800);
    }
    // if (playerTurn) {
    //     return
    // }
    playerPattern = [];
    compTurn = true;
    playerRound += 1;
    flashes = 0;
    document.querySelector('#message').innerHTML = 'Watch the pattern';
    getRandom();
    setTimeout(() => computerTurn(), 1000);
    render();
}

function computerTurn(){
    console.log(compPattern);
    //light up elements by compPattern
    compTurn = true;
    setTimeout(() => runCompPattern(), 1000);
    //players turn to match pattern
    playerTurn = true;
    matchPattern();
}

function matchPattern() {
    if(compPattern.length!=playerPattern.length) {
        //wrongMove = true;
        // document.querySelector('#message').innerHTML = 'Wrong! Watch and try again'
        // runCompPattern();
    } else { 
        // comapring each element of array 
        for(let i=0;i<compPattern.length;i++) 
        if(compPattern[i]!=playerPattern[i]) {
            //wrongMove = true;
            playerPattern = [];
            document.querySelector('#message').innerHTML = 'Wrong! Watch and try again'
            multiFlash();
            setTimeout(() => flashes = 0, 1000);
            setTimeout(() => runCompPattern(), 1500);
        } else {
            //window.setTimeout(flashLights(), 400);
            document.querySelector('#message').innerHTML = `Correct! Start Round: ${playerRound + 1}`;
        }
        if (playerRound === totalRounds && wrongMove === false) {
            winGame = true;
            document.querySelector('#message').innerHTML = `You completed all ${playerRound} rounds!`;
            flashLights();
            playerRound = 0;
            compPattern = [];
        }
    } 
} 

function getRandom() {
    compPattern.push(Math.floor(Math.random()*4)+ 1);
}
function runCompPattern() {
    if (compTurn) { 
        delayFlash(compPattern);
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
    setTimeout(() => lightsOff(), 400);
    redSound.play();
}

function blueFlash() {
    blue.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 400);
    blueSound.play();
}

function yellowFlash() {
    yellow.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 400);
    yellowSound.play();
}

function greenFlash() {
    green.classList.replace('off', 'on');
    setTimeout(() => lightsOff(), 400);
    greenSound.play();
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

function flashLights(duration) {
    lightsOn();
    setTimeout(() => lightsOff(), duration);
}

function multiFlash() {
    if (flashes < 3) {
        flashes++
        window.setTimeout(multiFlash, 200);
    }
    flashLights()
}

function gameOver() {
    document.querySelector('message').innerHTML = `<h1>Game Over! <br>You reached level ${playerRound} <br>Try Again?</h1>`;
    userArray =[];
    gameArray =[];
    count = 0;
    playerTurn = false;
}

function render() {
    round.textContent = `Round ${playerRound}`;
}

