// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../get-random-throw.js';

const test = QUnit.test;


test('rock vs paper', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('rock vs scissors', (expect) => {
    const expected = 'win';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('rock vs rock', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('rock', 'rock');
    expect.equal(actual, expected);
});

test('paper vs rock', (expect) => {
    const expected = 'win';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('paper vs paper', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('paper', 'paper');
    expect.equal(actual, expected);
});

test('paper vs scissors', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});

test('scissors vs rock', (expect) => {
    const expected = 'lose';
    const actual = didUserWin('scissors', 'rock');
    expect.equal(actual, expected);
});

test('scissors vs paper', (expect) => {
    const expected = 'win';
    const actual = didUserWin('scissors', 'paper');
    expect.equal(actual, expected);
});

test('scissors vs scissors', (expect) => {
    const expected = 'draw';
    const actual = didUserWin('scissors', 'scissors');
    expect.equal(actual, expected);
});
