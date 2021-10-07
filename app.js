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

play.addEventListener('click', () => {
    const player = document.querySelector('input[type=radio]:checked');

    if (!player) {
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');

    const playerChoice = player.value;
    const computerChoice = getRandomThrow();

    if (didUserWin(playerChoice, computerChoice) === 'win') {
        winCount++;
        result.textContent = 'You Won!';
    } else
    if (didUserWin(playerChoice, computerChoice) === 'lose') {
        lossCount++;
        result.textContent = 'You Lost!';  
    } else
    if (didUserWin(playerChoice, computerChoice) === 'draw') {
        drawCount++;
        result.textContent = 'You Tied!';
    }
    wins.textContent = `You have ${winCount} wins!`;
    losses.textContent = `You have ${lossCount} losses!`;
    draws.textContent = `You have ${drawCount} draws!`;
});

reset.addEventListener('click', () => {
    winCount = 0;
    lossCount = 0;
    drawCount = 0;
    wins.textContent = 'You have 0 wins!';
    losses.textContent = 'You have 0 losses!';
    draws.textContent = 'You have 0 draws!';
    resetCount++;
    resets.textContent = `You have reset ${resetCount} times...`;
    resets.classList.remove('hidden');
});
