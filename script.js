const audio = new Audio();
let playing = null;

function PlayingAudio(sounds) {
  if (playing !== null) {
    stopSound();
  }

  audio.src = `sounds/${sounds}`;
  audio.play();
  playing = sounds;
}

function stopSounds() {
  audio.pause();
  audio.currentTime = 0;
  playing = null;
}