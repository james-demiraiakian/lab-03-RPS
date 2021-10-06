import { getRandomThrow, didUserWin } from './get-random-throw.js';


const play = document.getElementById('play');
const reset = document.getElementById('reset');
const result = document.getElementById('result');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const resets = document.getElementById('resets');
const error = document.getElementById('error');

let winCount = 0;
let lossCount = 0;
let drawCount = 0;
let resetCount = 0;

console.log(getRandomThrow());
//console.log(playerChoice);

play.addEventListener('click', () => {
    const player = document.querySelector('input[type=radio]:checked');

    if (!player) {
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');

    const playerChoice = player.value;
    const computerChoice = getRandomThrow();

    if (didUserWin(playerChoice, computerChoice) === 'win') {
        wins++;
        
    }

});