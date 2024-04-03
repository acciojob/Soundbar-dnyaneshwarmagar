//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.sound-button');

  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      const soundFile = this.getAttribute('data-sound');
      playSound(soundFile);
    });
  });

  function playSound(soundFile) {
    const audio = document.getElementById('audio');
    audio.src = `sounds/${soundFile}`;
    audio.play();
  }
});