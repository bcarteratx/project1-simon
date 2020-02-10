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
let compPattern = [1, 3, 2, 4];
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
    compFlash = 1;
    //all lights flash to indicate game start
    intervalTime = setInterval(compTurn, 500);
    lightsOn();
    lightsOff();
    //playPattern() {light up elements by compPatern}
    console.log(compPattern);
    //check for 
}
compTurn = true;
function startRound() {
    if (compTurn) {
        lightsOff();
        //make function to replace greenFlash that will find correct flash color
        compPattern.forEach(delayFlash(greenFlash,1000));
    }
}



// delay Flash Function will play the array with delay
const delayFlash = (fn, delay) => {
    return (x, i) => {
        setTimeout(() => {
            fn(x);
        }, i * delay);
    }
};
//setup to loop through array and display to #message
const output = document.querySelector("#message");
const display = s => message.innerText = s;
compPattern.forEach(delayFlash(display, 1000));
//compPattern.forEach(i => console.log(i));

// function step1(cb) {
//     compPattern[0];
//     setTimeout(function() {
//         redFlash();
//         cb()
//     }, 1000);
//   }
// function step2(cb) {
//     compPattern[1];
//     setTimeout(function() {
//       greenFlash();
//       cb()
//     }, 1000);
//   }  
// function step3(cb) {
//     compPattern[2];
//     setTimeout(function() {
//       blueFlash();
//       cb()
//     }, 1000);
//   }
//   function step4(cb) {
//     compPattern[3];
//     setTimeout(function() {
//       blueFlash();
//       cb()
//     }, 1000);
//   }
//   // solution (nested callback functions!)
//   step1(function() {
//     step2(function() {
//       step3(function() {
//         step4(function() {})
//       });
//     });
//   });
// function runPattern(i) {
//     if (compPattern[i]) {
//         console.log(compPattern[i]);
//         setTimeout(function(){runPattern(i+1);}, 1000);
//     }
// }
// runPattern();

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