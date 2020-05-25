'use strict';

document.querySelector('.form').onsubmit = function() {
  const amount = this.querySelector('.form__input').value;
  const winner = Math.ceil(Math.random()*amount);

  document.querySelector('.number-win').innerHTML = winner;

  return false;
};
