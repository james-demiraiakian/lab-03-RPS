export function getRandomThrow() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]
}

export function didUserWin(player, computer) {

// possible outcomes: 'win', 'lose', 'draw'

// if the userThrow === computerThrow return 'draw'
// if the user throws rock && computer throws scissors, return 'win'
// else if the user throws paper && computer throws rock, return 'win'
// else if the user throws scissors && computer throws paper, return 'win'
// else return 'lose'

    if (player === computer) {
        return 'draw';
    } else
    if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else 
    if (player === 'paper' && computer === 'rock') {
        return 'win';
    } else 
    if (player === 'scissors' && computer === 'paper') {
        return 'win';
    } else {
        return 'draw';
    }
        


}