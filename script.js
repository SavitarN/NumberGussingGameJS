'use strict';

//its the same way of selecting class in css //
// document.querySelector('.message').textContent='anything i like';
// document.querySelector('.btn again').textContent='not again';
// document.querySelector('.number').textContent='10';

// if(a>1&&a<20){
//     document.querySelector('.message').textContent='yes dude youre right';
// }
//lets create a random number//
let generatedNumber = Math.trunc(Math.random() * 20) + 1;
let check = document.querySelector('.check');
let score = 20;
let highScore = 0;

let message = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//check mah click garda k hunu parxa yah define hunxa//
check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('please enter a number');
  } else if (guess !== generatedNumber) {
    if (score > 1) {
      message(
        guess > generatedNumber ? 'number is too high!!' : 'number is too low!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('you loose');
    }
  } else if (guess == generatedNumber) {
    message('Youre correct !!');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').textContent = generatedNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  }



});


document.querySelector('.again').addEventListener('click', function () {
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';



});
