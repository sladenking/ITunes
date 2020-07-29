export const videoPlayerInit = () => {

const videoPlayer = document.querySelector('.video-player'),
  videoButtonPlay = document.querySelector('.video-button__play'),
  videoButtonStop = document.querySelector('.video-button__stop'),
  videoTimePassed = document.querySelector('.video-time__passed'),
  videoProgress = document.querySelector('.video-progress'),
  videoTimeTotal = document.querySelector('.video-time__total');

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.add('fa-play');
      videoButtonPlay.classList.remove('fa-pause');
    } else {
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    }
  };

  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
    toggleIcon();
  };

  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  };

  const addZero = num => num < 10 ? '0' + num : num;

  videoPlayer.addEventListener('click', togglePlay);
  videoButtonPlay.addEventListener('click', togglePlay);

  videoPlayer.addEventListener('play', toggleIcon);
  videoPlayer.addEventListener('pause', toggleIcon);

  videoButtonStop.addEventListener('click', stopPlay);

  videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime,
      duration = videoPlayer.duration;

    videoProgress.value = (currentTime / duration) * 100;

    let minutePassed = Math.floor(currentTime / 60),
      secondPassed = Math.floor(currentTime % 60),
      minuteTotal = Math.floor(duration / 60),
      secondTotal = Math.floor(duration % 60);

    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondPassed)}`;
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondTotal)}`;
  });

  videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration,
      value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
  })

};