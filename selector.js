'use strict';

//const htmlElement = document.querySelector;

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent =
  "It's Correct! Congratulations!";

document.querySelector('.score').textContent = 17;

document.querySelector('.number').textContent = 15;

console.log((document.querySelector('.guess').value = 19));

const newBackground = document.querySelector('.label-highscore');

const backColor = document.querySelector('body');

newBackground.addEventListener('Click', function () {
  backColor.classList.add('background');
});
