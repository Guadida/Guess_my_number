'use strict';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

let score = 20;
displayScore(score);
let correctNumber = Math.trunc(Math.random() * 100) + 1;
document.querySelector('.number').textContent = '?';
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    displayMessage('No Number!');
  } else if (guessNumber === correctNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(correctNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== correctNumber) {
    if (score > 1) {
      displayMessage(guessNumber > correctNumber ? 'too high!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('You Lost!');
    }
  } /*
  
  else if (guessNumber < correctNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You Lost!';
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  displayNumber(correctNumber);
  displayMessage('Start guessing...');

  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

console.log(score);
console.log(correctNumber);
