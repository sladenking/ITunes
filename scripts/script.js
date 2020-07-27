import { radioPlayerInit } from './radioPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
  playerBlock = document.querySelectorAll('.player-block'),
  temp = document.querySelector('.temp');

const deactivatePlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item => item.classList.remove('active'));
  playerBlock.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach(( item, i ) => {
  item.addEventListener('click', () => {
    deactivatePlayer();
    item.classList.add('active');
    playerBlock[i].classList.add('active');
  });
});



radioPlayerInit();
musicPlayerInit();
videoPlayerInit();