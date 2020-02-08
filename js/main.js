/*----- constants -----*/

/*----- app's state (variables) -----*/
let compOrder;
let playerOrder = [];
let totalRounds = 20;
let strict = false;
let playerRound;
let win;
/*----- cached element references -----*/

/*----- event listeners -----*/
document.querySelector('.game').addEventListener('click', handleOrder);
document.getElementById('reset').addEventListener('click', handleReset);
document.getElementById('strict').addEventListener('click', handleStrict);


/*----- functions -----*/
function getOrder() {
    compOrder = Array.from({length: 20}, () => Math.floor(Math.random() * 4) +1);
    console.log(compOrder);
}

function handleOrder() {
    console.log('lights working');
}
function handleReset() {
    console.log('reset working');
}
function handleStrict() {
    console.log('strict working');
}