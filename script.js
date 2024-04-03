//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(e) {
  const buttons = document.querySelectorAll('.sound-button');

  buttons.forEach(button => {
    button.addEventListener('soundstart', function(event) {
      const soundFile = e.target.getAttribute('data-sound');
      playSound(soundFile);
    });
  });

  function playSound(soundFile) {
    const audio = document.getElementById('audio');
    audio.src = `sounds/${soundFile}`;
    audio.play();
  }
});